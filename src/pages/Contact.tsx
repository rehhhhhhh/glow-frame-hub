import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import siteData from "@/data/site.json";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    // Here you would typically send the form data to a backend
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-glow">Get In Touch</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Let's collaborate on your next project
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-8 hover-lift card-glow">
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="bg-background/50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="bg-background/50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project..."
                      rows={6}
                      className="bg-background/50"
                    />
                  </div>

                  <Button type="submit" className="w-full gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <Card className="p-6 hover-lift card-glow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href={`mailto:${siteData.contact.email}`}
                      className="text-primary hover:underline"
                    >
                      {siteData.contact.email}
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover-lift card-glow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-secondary/20 rounded-lg">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a
                      href={`tel:${siteData.contact.phone}`}
                      className="text-secondary hover:underline"
                    >
                      {siteData.contact.phone}
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover-lift card-glow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-accent/20 rounded-lg">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground">Chennai, India</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover-lift card-glow bg-gradient-to-br from-primary/10 to-secondary/10">
                <h3 className="font-semibold mb-4">Let's Connect</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Whether you have a project in mind, want to collaborate, or just want to say hi, 
                  I'd love to hear from you!
                </p>
                <div className="flex gap-2">
                  {Object.entries(siteData.social).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-card rounded-lg hover:bg-primary/20 transition-colors"
                    >
                      <span className="sr-only">{platform}</span>
                      <span className="text-xs capitalize">{platform[0]}</span>
                    </a>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
