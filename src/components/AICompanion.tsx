import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const responses = {
  greeting: "Hi! I'm REH, your guide to Rahul's portfolio. I can help you explore projects, skills, and more!",
  projects: "Check out Rahul's amazing projects including No Light Left, PetVerse, and AR/VR experiences!",
  skills: "Rahul specializes in Unity, AR/VR Development, Video Editing, and Game Design.",
  contact: "You can reach Rahul at rahulsaravanan44@gmail.com or call +91 9944819246",
  about: "Rahul is a passionate creator specializing in AR/VR development, video editing, and game design with Unity expertise.",
};

export default function AICompanion() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean }>>([
    { text: responses.greeting, isBot: true }
  ]);
  const navigate = useNavigate();

  const handleQuickAction = (action: string) => {
    switch (action) {
      case "projects":
        setMessages(prev => [...prev, { text: responses.projects, isBot: true }]);
        setTimeout(() => navigate("/projects"), 1000);
        break;
      case "skills":
        setMessages(prev => [...prev, { text: responses.skills, isBot: true }]);
        setTimeout(() => navigate("/skills"), 1000);
        break;
      case "contact":
        setMessages(prev => [...prev, { text: responses.contact, isBot: true }]);
        setTimeout(() => navigate("/contact"), 1000);
        break;
      case "about":
        setMessages(prev => [...prev, { text: responses.about, isBot: true }]);
        setTimeout(() => navigate("/about"), 1000);
        break;
    }
  };

  return (
    <>
      <motion.button
        className="fixed bottom-8 left-8 z-50 p-4 bg-primary rounded-full shadow-glow hover:scale-110 transition-transform"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-28 left-8 z-50 w-80"
          >
            <Card className="p-4 bg-card/95 backdrop-blur-xl border-primary/20">
              <div className="flex items-center gap-2 mb-4">
                <Bot className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">REH</h3>
              </div>

              <div className="space-y-3 max-h-64 overflow-y-auto mb-4">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-lg text-sm ${
                      msg.isBot ? "bg-primary/10 text-foreground" : "bg-secondary/10 text-foreground ml-4"
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <p className="text-xs text-muted-foreground mb-2">Quick Actions:</p>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuickAction("projects")}
                    className="text-xs"
                  >
                    View Projects
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuickAction("skills")}
                    className="text-xs"
                  >
                    See Skills
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuickAction("about")}
                    className="text-xs"
                  >
                    About Rahul
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuickAction("contact")}
                    className="text-xs"
                  >
                    Contact Info
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
