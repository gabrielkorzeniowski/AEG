// ===== CONFIG =====
const EXPIRY_DATE = new Date("2025-05-01T00:00:00").getTime(); 
// const EXPIRY_DATE = new Date("2026-05-01T00:00:00").getTime();

const SESSION_KEY = "aeg_session_expiry";

// ===== CHECK ACCESS =====
function checkAccess() {
  const now = Date.now();

  // przed datą -> pełny dostęp
  if (now < EXPIRY_DATE) return;

  const sessionExpiry = localStorage.getItem(SESSION_KEY);

  if (!sessionExpiry || now > Number(sessionExpiry)) {
    localStorage.removeItem(SESSION_KEY);

    // zapobiega pętli przekierowań na login.html
    if (!window.location.pathname.includes("login.html")) {
      window.location.href = "login.html";
    }
  }
}

// ===== SET SESSION =====
function setSession() {
  // 10h
  const expiry = Date.now() + (60 * 1000); 
  // 2h - const expiry = Date.now() + (2 * 60 * 60 * 1000);

  localStorage.setItem(SESSION_KEY, expiry.toString());
}

// ===== HASH FUNCTION (SHA-256) =====
async function sha256(text) {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);

  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

// ===== PASSWORD CHECK =====
// WSTAW TUTAJ HASH HASŁA
const PASSWORD_HASH = "60a5d3e4100fe8afa5ee0103739a45711d50d7f3ba7280d8a95b51f5d04aa4b8";

async function verifyPassword(input) {
  const hash = await sha256(input);
  return hash === PASSWORD_HASH;
}

// ===== AUTO CHECK =====
checkAccess();