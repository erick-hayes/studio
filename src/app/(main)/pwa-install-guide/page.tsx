
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Smartphone, ArrowDownCircle, Share, PlusSquare } from 'lucide-react';
import Image from 'next/image';

export default function PwaInstallGuidePage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-headline font-bold text-center text-primary">Install WaveCast App</h1>
      <p className="text-center text-muted-foreground">
        Follow these simple steps to install WaveCast on your device for quick access.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="shadow-lg rounded-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Image src="https://placehold.co/40x40.png?text=Android" width={40} height={40} alt="Android Logo" data-ai-hint="android logo" className="rounded-sm"/>
              <CardTitle className="font-headline text-xl text-primary">Android Devices</CardTitle>
            </div>
            <CardDescription>Installing on Chrome for Android.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ol className="list-decimal list-inside space-y-2 text-foreground">
              <li>Open WaveCast in your Chrome browser.</li>
              <li>Tap the <ArrowDownCircle className="inline-block w-5 h-5 mx-1 text-accent" /> "Install" button that may appear at the bottom of your screen, or tap the three dots (Menu) in the top-right corner.</li>
              <li>Select <PlusSquare className="inline-block w-5 h-5 mx-1 text-accent" /> "Install app" or "Add to Home screen."</li>
              <li>Follow the on-screen prompts to confirm.</li>
              <li>The WaveCast app icon will appear on your home screen.</li>
            </ol>
            <Image 
              src="https://placehold.co/600x400.png" 
              alt="Android PWA Install Prompt" 
              width={600} 
              height={400} 
              className="w-full rounded-md border mt-2"
              data-ai-hint="android pwa install"
            />
          </CardContent>
        </Card>

        <Card className="shadow-lg rounded-lg">
          <CardHeader>
             <div className="flex items-center gap-3">
              <Image src="https://placehold.co/40x40.png?text=iOS" width={40} height={40} alt="iOS Logo" data-ai-hint="apple logo" className="rounded-sm"/>
              <CardTitle className="font-headline text-xl text-primary">iOS Devices (iPhone/iPad)</CardTitle>
            </div>
            <CardDescription>Installing on Safari for iOS.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ol className="list-decimal list-inside space-y-2 text-foreground">
              <li>Open WaveCast in your Safari browser.</li>
              <li>Tap the "Share" icon <Share className="inline-block w-5 h-5 mx-1 text-accent" /> (a square with an arrow pointing up) at the bottom of the screen.</li>
              <li>Scroll down and tap <PlusSquare className="inline-block w-5 h-5 mx-1 text-accent" /> "Add to Home Screen."</li>
              <li>Confirm the name for the app icon and tap "Add."</li>
              <li>The WaveCast app icon will appear on your home screen.</li>
            </ol>
            <Image 
              src="https://placehold.co/600x400.png" 
              alt="iOS PWA Add to Home Screen" 
              width={600} 
              height={400} 
              className="w-full rounded-md border mt-2"
              data-ai-hint="ios pwa install"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
