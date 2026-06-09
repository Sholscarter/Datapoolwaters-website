"""Render every public route of the Datapoolwaters Advisory website to a single PDF.

Usage: python3 /app/scripts/render_site_pdf.py
Output: /app/frontend/public/datapoolwaters-website.pdf
"""
import asyncio
from pathlib import Path
from playwright.async_api import async_playwright
from pypdf import PdfWriter, PdfReader

BASE = "https://mockup-2.preview.emergentagent.com"

# Order matters — this is the document's reading order.
ROUTES = [
    ("Home", "/"),
    ("Who We Are", "/who-we-are"),
    ("What We Do", "/what-we-do"),
    ("Business Concierge", "/business-concierge"),
    ("Success Stories — Index", "/success-stories"),
    ("Case Study — Arnergy Series A", "/success-stories/arnergy-series-a"),
    ("Case Study — AgroEknor Growth", "/success-stories/agroeknor-growth"),
    ("Case Study — AgroEknor Follow-On", "/success-stories/agroeknor-followon"),
    ("Case Study — Nigeria High-Speed Rail", "/success-stories/nigeria-high-speed-rail"),
    ("Case Study — Toll Central Clearing House", "/success-stories/toll-central-clearing-house"),
    ("Case Study — Citizenship & Business Services", "/success-stories/citizenship-business-services"),
    ("Case Study — Zungeru Hydro", "/success-stories/zungeru-hydro"),
    ("Case Study — Itisi Hydro", "/success-stories/itisi-hydro"),
    ("Case Study — Dasin Hausa Hydro", "/success-stories/dasin-hausa-hydro"),
    ("Case Study — SectorLead Waste-to-Energy", "/success-stories/sectorlead-waste-to-energy"),
    ("Case Study — NIMASA Ship-to-Ship", "/success-stories/nimasa-sts"),
    ("Case Study — Secure Offshore Area", "/success-stories/secure-offshore-area"),
    ("Case Study — MMIA Baggage Handling", "/success-stories/mmia-bhs"),
    ("Case Study — Kashimbila Airport", "/success-stories/kashimbila-airport"),
    ("Academy", "/academy"),
    ("Capital", "/capital"),
    ("Innovation", "/innovation"),
    ("Insights — Consulting Success Fees", "/insights/navigating-consulting-success-fees"),
    ("Governance & Compliance", "/governance"),
    ("Privacy Policy", "/policies/privacy"),
    ("Terms of Service", "/policies/terms"),
    ("Code of Ethics", "/policies/ethics"),
    ("Anti-Trafficking & Modern Slavery", "/policies/anti-trafficking"),
    ("Whistleblowing Policy", "/policies/whistleblowing"),
    ("Contact", "/contact"),
]

OUT_DIR = Path("/tmp/site_pdfs")
OUT_DIR.mkdir(parents=True, exist_ok=True)
FINAL = Path("/app/frontend/public/datapoolwaters-website.pdf")


async def render_one(page, label, path):
    url = BASE + path
    print(f"  → {label:<48} {url}")
    await page.goto(url, wait_until="networkidle", timeout=45000)
    # Hold for any deferred image loads / route animations.
    await page.wait_for_timeout(1800)
    # Disable position:fixed elements (sticky header) so they don't repeat on every PDF page.
    await page.add_style_tag(content="""
        header[data-testid="site-header"] { position: absolute !important; }
        .hero-grain, .hero-scanlines { display: none !important; }
    """)
    safe = label.replace("/", "-").replace(" ", "_")
    out = OUT_DIR / f"{safe}.pdf"
    await page.emulate_media(media="screen")
    await page.pdf(
        path=str(out),
        format="A4",
        print_background=True,
        margin={"top": "12mm", "bottom": "12mm", "left": "10mm", "right": "10mm"},
        prefer_css_page_size=False,
    )
    return out


async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        ctx = await browser.new_context(
            viewport={"width": 1280, "height": 1800},
            device_scale_factor=1.5,
        )
        page = await ctx.new_page()
        pdf_files = []
        for label, path in ROUTES:
            try:
                pdf_files.append(await render_one(page, label, path))
            except Exception as e:
                print(f"     ✖ Failed {label}: {e}")
        await browser.close()

    print(f"\nMerging {len(pdf_files)} PDFs → {FINAL}")
    writer = PdfWriter()
    for f in pdf_files:
        reader = PdfReader(str(f))
        for pg in reader.pages:
            writer.add_page(pg)
    FINAL.parent.mkdir(parents=True, exist_ok=True)
    with open(FINAL, "wb") as fh:
        writer.write(fh)
    print(f"✓ Done. {FINAL} — {FINAL.stat().st_size / 1024 / 1024:.1f} MB")


if __name__ == "__main__":
    asyncio.run(main())
