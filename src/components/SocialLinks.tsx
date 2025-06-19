
import { Facebook, MessageSquare } from 'lucide-react'; // Using MessageSquare for WhatsApp
import { Button } from '@/components/ui/button';

// Replace with actual links
const WHATSAPP_LINK = "https://wa.me/59176111128";
const FACEBOOK_LINK = "https://www.facebook.com/avivamiento.lavozdelespiritusanto";

export default function SocialLinks() {
  return (
    <div className="flex items-center justify-center gap-4 my-6">
      <Button
        variant="outline"
        size="icon"
        asChild
        className="rounded-full border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-200 ease-in-out transform hover:scale-110"
        aria-label="Chatea en WhatsApp"
      >
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
          <MessageSquare className="w-6 h-6" />
        </a>
      </Button>
      <Button
        variant="outline"
        size="icon"
        asChild
        className="rounded-full border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-200 ease-in-out transform hover:scale-110"
        aria-label="Visita nuestra página de Facebook"
      >
        <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer">
          <Facebook className="w-6 h-6" />
        </a>
      </Button>
    </div>
  );
}
