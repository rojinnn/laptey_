import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Message sent!",
      description: "Thank you for your message! We will get back to you soon.",
    });
  };

  return (
    <div className="container px-4 py-12 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">Contact Us</h1>
        <span className="block w-20 h-1 bg-primary mx-auto mb-6" />
        <p className="text-primary font-bold text-lg uppercase tracking-wide">
          Together, we can make a difference.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Get in Touch</h2>
          <div className="space-y-4 text-muted-foreground">
            <a href="tel:+358445357554" className="flex items-center gap-3 hover:text-primary transition-colors">
              <Phone className="h-5 w-5 text-primary" />
              +358 44 535 7554
            </a>
            <a href="tel:+358451566199" className="flex items-center gap-3 hover:text-primary transition-colors">
              <Phone className="h-5 w-5 text-primary" />
              +358 45 156 6199
            </a>
            <a href="tel:+358445359448" className="flex items-center gap-3 hover:text-primary transition-colors">
              <Phone className="h-5 w-5 text-primary" />
              +358 44 535 9448
            </a>
            <a href="mailto:info@laptebota.fi" className="flex items-center gap-3 hover:text-primary transition-colors">
              <Mail className="h-5 w-5 text-primary" />
              info@laptebota.fi
            </a>
            <a
              href="https://www.instagram.com/lapteybota"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-primary transition-colors"
            >
              <Instagram className="h-5 w-5 text-primary" />
              @lapteybota
            </a>
          </div>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center justify-center text-center p-8 bg-card rounded-xl border">
            <p className="text-lg font-medium mb-2">Thank you for your message!</p>
            <p className="text-muted-foreground">We will get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required placeholder="Your name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required placeholder="you@example.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" required rows={5} placeholder="How can we help?" />
            </div>
            <Button type="submit" className="w-full rounded-full uppercase tracking-wide font-bold">
              Send Message
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
