import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { Eyebrow, Heading, Section } from "./primitives";

const CONTACT_DETAILS = [
  {
    icon: Phone,
    label: "Phone",
    value: "9814812106",
    href: "tel:9814812106",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "9814812106",
    href: "https://wa.me/9814812106",
  },
  {
    icon: Mail,
    label: "Email",
    value: "Touchwoodielts03@gmail.com",
    href: "mailto:Touchwoodielts03@gmail.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Railway Road, Near Punjab and Sindh Bank, Banga Rural, Banga, Punjab 144505",
    href: "https://maps.google.com/?q=Railway+Road+Banga+Punjab",
  },
];

const HOURS = [
  { day: "Monday - Friday", time: "9:00 AM - 5:00 PM" },
  { day: "Saturday", time: "9:00 AM - 1:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export function ContactInfo() {
  return (
    <Section id="contact" tone="light">
      <div className="max-w-2xl">
        <Eyebrow>Get in Touch</Eyebrow>
        <Heading>Contact Touchwood Institute</Heading>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          Reach out to us through any of these channels. We're here to help you with course details, batch timings, and guidance for your learning journey.
        </p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {/* Contact Details */}
        <div className="space-y-6">
          {CONTACT_DETAILS.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.label === "Address" ? "_blank" : undefined}
              rel={contact.label === "Address" ? "noopener noreferrer" : undefined}
              className="group flex gap-4 rounded-lg border border-border bg-background/50 p-6 transition-all hover:border-gold/40 hover:bg-background hover:shadow-md"
            >
              <contact.icon className="mt-1 size-6 shrink-0 text-gold" aria-hidden />
              <div className="min-w-0">
                <dt className="eyebrow text-muted-foreground">{contact.label}</dt>
                <dd className="mt-1 break-words font-medium text-navy group-hover:text-gold">
                  {contact.value}
                </dd>
              </div>
            </a>
          ))}
        </div>

        {/* Operating Hours */}
        <div className="space-y-6">
          <div className="rounded-lg border border-border bg-background/50 p-6">
            <div className="flex items-center gap-3">
              <Clock className="size-6 text-gold" aria-hidden />
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-navy">
                Operating Hours
              </h3>
            </div>
            <dl className="mt-6 space-y-4">
              {HOURS.map((hour) => (
                <div key={hour.day} className="flex justify-between gap-4">
                  <dt className="text-sm font-medium text-navy">{hour.day}</dt>
                  <dd className="text-sm text-muted-foreground">{hour.time}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Quick Info */}
          <div className="rounded-lg border border-gold/30 bg-gold/5 p-6">
            <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-navy">
              Why Choose Touchwood?
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="mt-1 size-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                Experienced trainers with proven track records
              </li>
              <li className="flex gap-3">
                <span className="mt-1 size-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                Small batch sizes for personalized attention
              </li>
              <li className="flex gap-3">
                <span className="mt-1 size-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                Comprehensive study materials and mock tests
              </li>
              <li className="flex gap-3">
                <span className="mt-1 size-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                Online and offline flexible learning options
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
