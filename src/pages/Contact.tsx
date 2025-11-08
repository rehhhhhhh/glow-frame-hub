import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import siteData from "@/data/site.json";
import ParticleBackground from "@/components/ParticleBackground";
import OwnedFooter from "@/components/OwnedFooter";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="relative min-h-screen overflow-hidden pt-24">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-70 pointer-events-none transition-opacity duration-500"
        src="/LUFFYBACK.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{ filter: 'grayscale(1)', background: 'black' }}
      />
      <ParticleBackground lightVersion />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-glow">Get In Touch</h1>
          <p className="text-xl mb-12 font-semibold text-[#FFD700] dark:text-[#FFD700] text-foreground/90 dark:text-foreground/90">Let's collaborate on your next project</p>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <Card className="p-8 border-2 border-[#FFD700] rounded-xl bg-[#ffd70013] dark:bg-[#1a1a17] shadow-xl">
                <h2 className="card-title text-2xl mb-6 uppercase font-extrabold">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your name" className="bg-background/50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="your.email@example.com" className="bg-background/50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell me about your project..." rows={6} className="bg-background/50" />
                  </div>
                  <Button type="submit" className="w-full gap-2 bg-[#FFD700] dark:bg-[#FFD700] text-[#15140d] dark:text-[#15140d] hover:bg-[#FFC107] dark:hover:bg-[#FFC107] font-semibold"><Send className="w-4 h-4" />Send Message</Button>
                </form>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="space-y-6">
              <Card className="p-6 border-2 border-[#FFD700] rounded-xl bg-[#ffd70013] dark:bg-[#1a1a17] shadow-xl">
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-3 bg-primary/20 rounded-lg"><Mail className="w-6 h-6 text-primary" /></div>
                  <div>
                    <h3 className="font-extrabold mb-1 uppercase">Email</h3>
                    <a href={`mailto:${siteData.contact.email}`} className="text-primary hover:underline">{siteData.contact.email}</a>
                  </div>
                </div>
              </Card>
              <Card className="p-6 border-2 border-[#FFD700] rounded-xl bg-[#ffd70013] dark:bg-[#1a1a17] shadow-xl">
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-3 bg-secondary/20 rounded-lg"><Phone className="w-6 h-6 text-secondary" /></div>
                  <div>
                    <h3 className="font-extrabold mb-1 uppercase">Phone</h3>
                    <a href={`tel:${siteData.contact.phone}`} className="text-secondary hover:underline">{siteData.contact.phone}</a>
                  </div>
                </div>
              </Card>
              <Card className="p-6 border-2 border-[#FFD700] rounded-xl bg-[#ffd70013] dark:bg-[#1a1a17] shadow-xl">
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-3 bg-accent/20 rounded-lg"><MapPin className="w-6 h-6 text-accent" /></div>
                  <div>
                    <h3 className="font-extrabold mb-1 uppercase">Location</h3>
                    <p className="text-muted-foreground">Chennai, India</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <OwnedFooter />
    </div>
  );
}
