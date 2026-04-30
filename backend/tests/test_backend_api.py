"""Backend API tests for Datapoolwaters Advisory.
Covers:
 - GET /api/health
 - POST /api/contact validation (email, message length) and happy path
 - GET /api/contact returns list excluding Mongo _id
"""
import os
import uuid
import requests
import pytest

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://mockup-2.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ───────────────── Health ─────────────────
class TestHealth:
    def test_health_ok(self, client):
        r = client.get(f"{API}/health", timeout=15)
        assert r.status_code == 200
        data = r.json()
        assert data.get("status") == "ok"


# ───────────────── Contact ─────────────────
class TestContact:
    unique_subject = f"TEST_{uuid.uuid4().hex[:8]}"

    def test_create_contact_valid(self, client):
        payload = {
            "name": "Test User",
            "email": "test_user@example.com",
            "organization": "TEST_Org",
            "phone": "+15551234567",
            "subject": self.unique_subject,
            "message": "Hello from pytest, this is a valid message.",
        }
        r = client.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code == 201, r.text
        data = r.json()
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["subject"] == payload["subject"]
        assert "id" in data and len(data["id"]) > 0
        assert "created_at" in data
        # Stash id for retrieval test
        TestContact.created_id = data["id"]

    def test_create_contact_invalid_email(self, client):
        payload = {
            "name": "Invalid Email",
            "email": "not-an-email",
            "subject": "TEST subject",
            "message": "Valid long enough message",
        }
        r = client.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code == 422

    def test_create_contact_short_message(self, client):
        payload = {
            "name": "Short Msg",
            "email": "short@example.com",
            "subject": "TEST subject",
            "message": "hi",  # < 5 chars
        }
        r = client.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code == 422

    def test_create_contact_short_name(self, client):
        payload = {
            "name": "A",
            "email": "a@example.com",
            "subject": "TEST subject",
            "message": "Long enough message",
        }
        r = client.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code == 422

    def test_list_contacts_excludes_mongo_id(self, client):
        r = client.get(f"{API}/contact", timeout=15)
        assert r.status_code == 200
        items = r.json()
        assert isinstance(items, list)
        assert len(items) >= 1
        # Ensure no _id key in any returned item
        for it in items:
            assert "_id" not in it, f"_id leaked in response item: {it}"
            assert "id" in it
            assert "email" in it
        # Ensure we can find the previously created item by subject
        subjects = [it.get("subject") for it in items]
        assert TestContact.unique_subject in subjects, (
            f"Previously created contact not found in list. Subjects: {subjects[:5]}"
        )
