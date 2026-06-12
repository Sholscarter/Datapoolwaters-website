// Backend-availability helper.
// When the backend is unreachable (no env var, network failure, etc.) we
// gracefully fall back to opening the visitor's email client with a
// structured, pre-filled message so the form still "works".
//
// To force the frontend into mailto-only mode, leave REACT_APP_BACKEND_URL
// blank in the deployment env.

const BACKEND_URL = (process.env.REACT_APP_BACKEND_URL || "").trim();
export const FALLBACK_EMAIL = "advisory@datapoolwaters.com";
export const CONCIERGE_EMAIL = "concierge@datapoolwaters.com";

export function hasBackend() {
  return Boolean(BACKEND_URL);
}

export const API_BASE = BACKEND_URL ? `${BACKEND_URL}/api` : "";

/**
 * Open the user's mail client with a structured message body.
 *  to:      recipient
 *  subject: subject line
 *  fields:  { label: value } object — rendered as "Label: value" lines
 *  message: optional free-text body appended after the fields
 */
export function openMailto({ to, subject, fields = {}, message = "" }) {
  const lines = [];
  for (const [k, v] of Object.entries(fields)) {
    if (v != null && String(v).trim() !== "") lines.push(`${k}: ${v}`);
  }
  if (message) {
    lines.push("");
    lines.push(message);
  }
  lines.push("");
  lines.push("— Sent from datapoolwaters.com");
  const body = encodeURIComponent(lines.join("\n"));
  const subj = encodeURIComponent(subject);
  // Use window.location.href so the browser actually launches the handler.
  window.location.href = `mailto:${to}?subject=${subj}&body=${body}`;
}
