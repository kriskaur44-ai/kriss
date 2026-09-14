import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/[WHATSAPP_NUMBER]"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-5 bottom-5 z-50 inline-flex items-center gap-2.5 rounded-full bg-gold px-5 py-3.5 text-[0.65rem] font-semibold tracking-[0.16em] text-navy-deep uppercase shadow-[0_14px_36px_-12px_rgba(0,0,0,0.55)] transition-transform hover:scale-[1.03]"
    >
      <MessageCircle className="size-5" aria-hidden />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
      <span className="sr-only sm:hidden">Chat on WhatsApp</span>
    </a>
  );
}
