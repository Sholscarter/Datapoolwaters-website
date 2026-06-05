from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="Datapoolwaters Advisory API")
api_router = APIRouter(prefix="/api")


# ───────────────────────── Models ─────────────────────────
class ContactSubmissionCreate(BaseModel):
    model_config = ConfigDict(extra="ignore")
    name: str = Field(..., min_length=2, max_length=120)
    email: EmailStr
    organization: Optional[str] = Field(None, max_length=160)
    phone: Optional[str] = Field(None, max_length=40)
    subject: str = Field(..., min_length=2, max_length=160)
    message: str = Field(..., min_length=5, max_length=5000)


class ContactSubmission(ContactSubmissionCreate):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class NewsletterSubscribeCreate(BaseModel):
    model_config = ConfigDict(extra="ignore")
    email: EmailStr
    source: Optional[str] = Field(default="business-concierge", max_length=80)


class NewsletterSubscribe(NewsletterSubscribeCreate):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class PurchaseIntentCreate(BaseModel):
    model_config = ConfigDict(extra="ignore")
    product: str = Field(..., min_length=2, max_length=160)
    name: str = Field(..., min_length=2, max_length=120)
    email: EmailStr
    phone: Optional[str] = Field(None, max_length=40)
    notes: Optional[str] = Field(None, max_length=2000)


class PurchaseIntent(PurchaseIntentCreate):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


# ───────────────────────── Routes ─────────────────────────
@api_router.get("/health")
async def health():
    return {"status": "ok", "service": "datapoolwaters-advisory"}


@api_router.get("/")
async def root():
    return {"message": "Datapoolwaters Advisory API"}


@api_router.post("/contact", response_model=ContactSubmission, status_code=201)
async def create_contact(input: ContactSubmissionCreate):
    submission = ContactSubmission(**input.model_dump())
    doc = submission.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.contact_submissions.insert_one(doc)
    return submission


@api_router.get("/contact", response_model=List[ContactSubmission])
async def list_contacts(limit: int = 100):
    items = await db.contact_submissions.find({}, {"_id": 0}).sort("created_at", -1).to_list(limit)
    for it in items:
        if isinstance(it.get('created_at'), str):
            it['created_at'] = datetime.fromisoformat(it['created_at'])
    return items


@api_router.post("/newsletter/subscribe", response_model=NewsletterSubscribe, status_code=201)
async def newsletter_subscribe(input: NewsletterSubscribeCreate):
    existing = await db.newsletter_subs.find_one({"email": input.email}, {"_id": 0})
    if existing:
        if isinstance(existing.get('created_at'), str):
            existing['created_at'] = datetime.fromisoformat(existing['created_at'])
        return NewsletterSubscribe(**existing)
    sub = NewsletterSubscribe(**input.model_dump())
    doc = sub.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.newsletter_subs.insert_one(doc)
    return sub


@api_router.post("/purchase-intent", response_model=PurchaseIntent, status_code=201)
async def purchase_intent(input: PurchaseIntentCreate):
    intent = PurchaseIntent(**input.model_dump())
    doc = intent.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.purchase_intents.insert_one(doc)
    return intent


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO,
                    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
