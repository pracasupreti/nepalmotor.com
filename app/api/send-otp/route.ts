import { handleSendOtp } from "@/lib/send-otp";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(request: Request) {
  return handleSendOtp(request);
}
