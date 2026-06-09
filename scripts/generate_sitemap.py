"""Generate /app/frontend/public/sitemap.xml from the route registry.

Reads /app/frontend/src/data/seo.js and caseStudies/insights data files,
emits a standards-compliant sitemap.xml at the production domain.

Run on every content change: python3 /app/scripts/generate_sitemap.py
"""
import re
from datetime import date
from pathlib import Path

ROOT = Path("/app/frontend/src")
PUBLIC = Path("/app/frontend/public")
SITE_URL = "https://www.datapoolwaters.com"


def extract_slugs(filename, pattern):
    text = (ROOT / "data" / filename).read_text()
    return re.findall(pattern, text)


def main():
    # Static routes
    static_routes = [
        ("/", "weekly", "1.0"),
        ("/who-we-are", "monthly", "0.9"),
        ("/what-we-do", "monthly", "0.9"),
        ("/business-concierge", "weekly", "0.9"),
        ("/success-stories", "weekly", "0.9"),
        ("/academy", "monthly", "0.7"),
        ("/capital", "monthly", "0.7"),
        ("/innovation", "monthly", "0.7"),
        ("/contact", "monthly", "0.8"),
        ("/governance", "monthly", "0.6"),
        ("/policies/privacy", "yearly", "0.4"),
        ("/policies/terms", "yearly", "0.4"),
        ("/policies/ethics", "yearly", "0.4"),
        ("/policies/anti-trafficking", "yearly", "0.4"),
        ("/policies/whistleblowing", "yearly", "0.4"),
    ]

    # Dynamic — case studies
    case_slugs = extract_slugs("caseStudies.js", r"slug:\s*\"([^\"]+)\"")
    for s in case_slugs:
        static_routes.append((f"/success-stories/{s}", "monthly", "0.8"))

    # Dynamic — insights
    insight_slugs = extract_slugs("insights.js", r"slug:\s*\"([^\"]+)\"")
    for s in insight_slugs:
        static_routes.append((f"/insights/{s}", "monthly", "0.7"))

    today = date.today().isoformat()
    parts = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ]
    for loc, freq, prio in static_routes:
        parts += [
            "  <url>",
            f"    <loc>{SITE_URL}{loc}</loc>",
            f"    <lastmod>{today}</lastmod>",
            f"    <changefreq>{freq}</changefreq>",
            f"    <priority>{prio}</priority>",
            "  </url>",
        ]
    parts.append("</urlset>")

    out = PUBLIC / "sitemap.xml"
    out.write_text("\n".join(parts) + "\n")
    print(f"✓ Wrote {out} ({len(static_routes)} URLs)")


if __name__ == "__main__":
    main()
