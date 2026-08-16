import { createHmac, timingSafeEqual } from "crypto";

/** Digits in the code — must match OTP_LENGTH in the mobile app's data/constants.ts. */
const OTP_LENGTH = 4;

/** Matches the "Code expires in 10 minutes" copy shown in the app's OTP modal. */
const STEP_MS = 10 * 60 * 1000;

function readEnv(key: string): string | undefined {
  const raw = process.env[key];
  if (typeof raw !== "string") return undefined;
  const value = raw.trim().replace(/^['"]|['"]$/g, "");
  return value || undefined;
}

export function getOtpSigningSecret(): string | undefined {
  return readEnv("OTP_SIGNING_SECRET");
}

/**
 * Codes are derived from phone + secret + a 10-minute time window instead of
 * being stored anywhere, so verification works without a database and is
 * unaffected by serverless cold starts or multiple instances.
 */
function deriveCode(secret: string, phone: string, window: number): string {
  const digest = createHmac("sha256", secret)
    .update(`${phone}:${window}`)
    .digest();
  const num = digest.readUInt32BE(0) % 10 ** OTP_LENGTH;
  return num.toString().padStart(OTP_LENGTH, "0");
}

export function generateOtp(secret: string, phone: string): string {
  const window = Math.floor(Date.now() / STEP_MS);
  return deriveCode(secret, phone, window);
}

function timingSafeEqualStrings(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  return timingSafeEqual(Buffer.from(a), Buffer.from(b));
}

/** Accepts the current and previous window so a code doesn't fail right at the 10-minute boundary. */
export function verifyOtp(secret: string, phone: string, code: string): boolean {
  const trimmed = code.trim();
  if (!new RegExp(`^\\d{${OTP_LENGTH}}$`).test(trimmed)) return false;

  const window = Math.floor(Date.now() / STEP_MS);
  for (const w of [window, window - 1]) {
    if (timingSafeEqualStrings(deriveCode(secret, phone, w), trimmed)) return true;
  }
  return false;
}
