import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, MessageCircle, CheckCircle2 } from "lucide-react";
import { Eyebrow, GoldButton, Heading, Section } from "./primitives";

const COURSES = [
  "IELTS Academic",
  "IELTS General",
  "Computer Delivered IELTS",
  "PTE",
  "Spoken English",
  "Computer Courses",
  "International Online Courses",
];

const DETAILS = [
  { icon: Phone, label: "Phone", value: "[PHONE NUMBER]" },
  { icon: MessageCircle, label: "WhatsApp", value: "[WHATSAPP NUMBER]" },
  { icon: Mail, label: "Email", value: "[EMAIL ADDRESS]" },
  { icon: MapPin, label: "Address", value: "[FULL ADDRESS]" },
];

const fieldClass =
  "w-full border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-gold";
const labelClass = "eyebrow mb-2 block text-muted-foreground";

export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <Section id="contact" tone="light">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <Eyebrow>Get in Touch</Eyebrow>
          <Heading>Talk to us about your goal.</Heading>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Send an enquiry and the team will get back with course details, batch timings and
            the next steps.
          </p>

          <dl className="mt-10 space-y-6">
            {DETAILS.map((d) => (
              <div key={d.label} className="flex gap-4">
                <d.icon className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden />
                <div className="min-w-0">
                  <dt className="eyebrow text-muted-foreground">{d.label}</dt>
                  <dd className="mt-1 font-medium break-words text-navy">{d.value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <div className="border border-border bg-background p-7 sm:p-10">
          {sent ? (
            <div className="flex min-h-[24rem] flex-col items-center justify-center text-center">
              <CheckCircle2 className="size-12 text-gold" aria-hidden />
              <h3 className="mt-6 font-[family-name:var(--font-display)] text-2xl font-semibold text-navy">
                Thank you — your enquiry is noted.
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Our team will contact you using your preferred method. For anything urgent, reach
                us on WhatsApp at [WHATSAPP NUMBER].
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-8 text-[0.7rem] font-semibold tracking-[0.18em] text-navy uppercase underline underline-offset-4 hover:text-gold"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate={false}>
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-navy">
                Enquiry Form
              </h3>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="name">
                    Full Name
                  </label>
                  <input id="name" name="name" required className={fieldClass} placeholder="Your name" />
                </div>
                <div>
                  <label className={labelClass} htmlFor="phone">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className={fieldClass}
                    placeholder="Your phone number"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClass} htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={fieldClass}
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="course">
                    Course of Interest
                  </label>
                  <select id="course" name="course" required className={fieldClass} defaultValue="">
                    <option value="" disabled>
                      Select a course
                    </option>
                    {COURSES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass} htmlFor="method">
                    Preferred Contact
                  </label>
                  <select id="method" name="method" className={fieldClass} defaultValue="Phone Call">
                    <option>Phone Call</option>
                    <option>WhatsApp</option>
                    <option>Email</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClass} htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={fieldClass}
                    placeholder="Tell us about your goal or target"
                  />
                </div>
              </div>

              <GoldButton type="submit" className="mt-8 w-full">
                Submit Enquiry
              </GoldButton>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}
