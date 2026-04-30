import React, { useState } from "react";
import axios from "axios";
import FlowingLines from "../components/FlowingLines";
import { MapPin, Mail, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { toast, Toaster } from "sonner";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      const payload = {
        name: form.name.trim(),
        email: form.email.trim(),
        organization: form.organization.trim() || null,
        phone: form.phone.trim() || null,
        subject: form.subject.trim(),
        message: form.message.trim(),
      };
      await axios.post(`${API}/contact`, payload);
      toast.success("Thank you. We'll be in touch shortly.");
      setDone(true);
      setForm({
        name: "",
        email: "",
        organization: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      const detail =
        err?.response?.data?.detail?.[0]?.msg ||
        err?.response?.data?.detail ||
        "Something went wrong. Please try again or email us directly.";
      toast.error(typeof detail === "string" ? detail : "Please check your inputs.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div data-testid="page-contact">
      <Toaster position="top-right" richColors />

      <section className="relative pt-32 pb-12 md:pt-40 md:pb-20 bg-white overflow-hidden">
        <FlowingLines position="top-right" size={520} opacity={0.1} />
        <div className="dpw-container relative">
          <div className="dpw-eyebrow mb-5">Contact Us</div>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] text-dpw-black max-w-5xl">
            Let&apos;s build something{" "}
            <em className="italic text-dpw-blue">consequential</em>.
          </h1>
          <p className="mt-8 text-[18px] leading-[1.7] text-dpw-dark-grey max-w-2xl">
            Talk to us about capital raises, PPPs, infrastructure advisory, or
            institutional partnerships. We respond to all enquiries within two
            business days.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32 bg-white">
        <div className="dpw-container grid md:grid-cols-12 gap-10">
          {/* Info column */}
          <div className="md:col-span-4 order-2 md:order-1">
            <div className="bg-dpw-black text-white p-10 relative overflow-hidden h-full">
              <FlowingLines position="bottom-right" size={280} color="#035FFE" opacity={0.18} />
              <div className="relative">
                <div className="dpw-eyebrow" style={{ color: "#7aa8ff" }}>
                  Reach us
                </div>
                <div className="mt-8 space-y-8">
                  <div className="flex items-start gap-4">
                    <MapPin size={18} className="text-dpw-blue mt-1" />
                    <div>
                      <div className="dpw-label text-white/60 mb-1.5">Office</div>
                      <div className="text-[15px]">Lagos, Nigeria</div>
                      <div className="text-[13px] text-white/70">
                        Pan-African coverage
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail size={18} className="text-dpw-blue mt-1" />
                    <div>
                      <div className="dpw-label text-white/60 mb-1.5">Email</div>
                      <a
                        href="mailto:advisory@datapoolwaters.com"
                        data-testid="contact-email-link"
                        className="text-[15px] hover:text-dpw-blue transition-colors"
                      >
                        advisory@datapoolwaters.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone size={18} className="text-dpw-blue mt-1" />
                    <div>
                      <div className="dpw-label text-white/60 mb-1.5">Phone</div>
                      <div className="text-[15px] space-y-1">
                        <div>+234 817 947 0589</div>
                        <div>+234 803 609 7664</div>
                        <div>+1 (646) 680 0923</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className="md:col-span-8 order-1 md:order-2">
            {done ? (
              <div
                className="p-12 bg-dpw-off-white text-center"
                data-testid="contact-success"
              >
                <CheckCircle2 size={44} className="text-dpw-blue mx-auto" />
                <h2 className="mt-6 font-serif text-3xl text-dpw-black">
                  Thank you.
                </h2>
                <p className="mt-3 text-dpw-dark-grey">
                  Your message is with our advisory team. We&apos;ll reach out
                  within two business days.
                </p>
                <button
                  onClick={() => setDone(false)}
                  data-testid="contact-send-another"
                  className="mt-8 inline-flex items-center gap-3 text-dpw-blue text-[13px] tracking-[0.18em] uppercase"
                >
                  Send another message <ArrowRight size={14} />
                </button>
              </div>
            ) : (
              <form
                onSubmit={submit}
                className="p-8 md:p-12 bg-dpw-off-white"
                data-testid="contact-form"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="c-name" className="text-[11px] tracking-[0.22em] uppercase text-dpw-dark-grey">
                      Full Name *
                    </Label>
                    <Input
                      id="c-name"
                      data-testid="contact-input-name"
                      required
                      minLength={2}
                      value={form.name}
                      onChange={update("name")}
                      className="mt-2 h-12 rounded-none border-x-0 border-t-0 border-b-2 border-dpw-light-grey bg-transparent focus-visible:ring-0 focus-visible:border-dpw-blue"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="c-email" className="text-[11px] tracking-[0.22em] uppercase text-dpw-dark-grey">
                      Email *
                    </Label>
                    <Input
                      id="c-email"
                      data-testid="contact-input-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={update("email")}
                      className="mt-2 h-12 rounded-none border-x-0 border-t-0 border-b-2 border-dpw-light-grey bg-transparent focus-visible:ring-0 focus-visible:border-dpw-blue"
                      placeholder="you@organization.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="c-org" className="text-[11px] tracking-[0.22em] uppercase text-dpw-dark-grey">
                      Organization
                    </Label>
                    <Input
                      id="c-org"
                      data-testid="contact-input-org"
                      value={form.organization}
                      onChange={update("organization")}
                      className="mt-2 h-12 rounded-none border-x-0 border-t-0 border-b-2 border-dpw-light-grey bg-transparent focus-visible:ring-0 focus-visible:border-dpw-blue"
                      placeholder="Company / Institution"
                    />
                  </div>
                  <div>
                    <Label htmlFor="c-phone" className="text-[11px] tracking-[0.22em] uppercase text-dpw-dark-grey">
                      Phone
                    </Label>
                    <Input
                      id="c-phone"
                      data-testid="contact-input-phone"
                      value={form.phone}
                      onChange={update("phone")}
                      className="mt-2 h-12 rounded-none border-x-0 border-t-0 border-b-2 border-dpw-light-grey bg-transparent focus-visible:ring-0 focus-visible:border-dpw-blue"
                      placeholder="+234 …"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <Label htmlFor="c-subject" className="text-[11px] tracking-[0.22em] uppercase text-dpw-dark-grey">
                    Subject *
                  </Label>
                  <Input
                    id="c-subject"
                    data-testid="contact-input-subject"
                    required
                    value={form.subject}
                    onChange={update("subject")}
                    className="mt-2 h-12 rounded-none border-x-0 border-t-0 border-b-2 border-dpw-light-grey bg-transparent focus-visible:ring-0 focus-visible:border-dpw-blue"
                    placeholder="What can we help with?"
                  />
                </div>

                <div className="mt-5">
                  <Label htmlFor="c-message" className="text-[11px] tracking-[0.22em] uppercase text-dpw-dark-grey">
                    Message *
                  </Label>
                  <Textarea
                    id="c-message"
                    data-testid="contact-input-message"
                    required
                    minLength={5}
                    value={form.message}
                    onChange={update("message")}
                    rows={6}
                    className="mt-2 rounded-none border-x-0 border-t-0 border-b-2 border-dpw-light-grey bg-transparent focus-visible:ring-0 focus-visible:border-dpw-blue resize-none"
                    placeholder="Tell us about the opportunity, timeline, and any specifics."
                  />
                </div>

                <div className="mt-10 flex items-center justify-between gap-6 flex-wrap">
                  <p className="text-[12px] text-dpw-dark-grey max-w-md">
                    By submitting, you agree to our{" "}
                    <a href="/policies/privacy" className="text-dpw-blue hover:underline">
                      Privacy Policy
                    </a>
                    . We&apos;ll only use your details to respond to this enquiry.
                  </p>
                  <button
                    type="submit"
                    disabled={submitting}
                    data-testid="contact-submit"
                    className="inline-flex items-center gap-3 bg-dpw-blue hover:bg-[#0147c8] disabled:opacity-60 text-white px-7 py-3.5 rounded-full text-[13px] tracking-[0.18em] uppercase transition-colors"
                  >
                    {submitting ? "Sending…" : "Send message"} <ArrowRight size={14} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
