
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, DownloadCloud, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function InfoPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-headline font-bold text-center text-primary">About WaveCast</h1>
      
      <Card className="shadow-lg rounded-lg overflow-hidden">
        <Image 
          src="https://placehold.co/800x300.png" 
          alt="Radio Station Mast" 
          width={800} 
          height={300} 
          className="w-full h-48 object-cover"
          data-ai-hint="radio tower"
        />
        <CardHeader>
          <CardTitle className="font-headline text-xl text-primary">Our Story</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-foreground leading-relaxed">
            WaveCast is your premier destination for handpicked tunes, engaging talk shows, and the latest community news. 
            Born from a passion for music and connection, we strive to be the soundtrack to your day, every day.
            Our mission is to deliver high-quality broadcasting that entertains, informs, and inspires our listeners.
          </p>
          <p className="text-foreground leading-relaxed">
            We believe in the power of radio to bring people together. Whether you're tuning in during your morning commute, 
            while working, or relaxing at home, WaveCast provides a diverse range of programs to suit every taste.
            Join our growing family of listeners and experience the magic of radio!
          </p>
        </CardContent>
      </Card>

      <Card className="shadow-lg rounded-lg">
        <CardHeader>
          <CardTitle className="font-headline text-xl text-primary">Install Our App</CardTitle>
          <CardDescription>Get quick access to WaveCast by installing our app on your device.</CardDescription>
        </CardHeader>
        <CardContent>
          <Link href="/pwa-install-guide" passHref>
            <Button variant="outline" className="w-full justify-between text-accent hover:bg-accent hover:text-accent-foreground">
              How to Install Guide
              <ChevronRight className="w-5 h-5" />
            </Button>
          </Link>
        </CardContent>
      </Card>

      <Card className="shadow-lg rounded-lg">
        <CardHeader>
          <CardTitle className="font-headline text-xl text-primary">Contact Us</CardTitle>
          <CardDescription>Get in touch with the WaveCast team.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-accent" />
            <a href="mailto:info@wavecast.fm" className="text-foreground hover:text-accent transition-colors">info@wavecast.fm</a>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-accent" />
            <span className="text-foreground">(555) 123-4567</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-accent" />
            <span className="text-foreground">123 Radio Wave, Frequency City, RC 98765</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
