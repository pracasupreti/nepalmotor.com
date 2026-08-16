import { handleVerifyOtp } from "@/lib/verify-otp";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(request: Request) {
  return handleVerifyOtp(request);
}
