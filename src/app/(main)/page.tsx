import AudioPlayer from '@/components/AudioPlayer';
import SocialLinks from '@/components/SocialLinks';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <AudioPlayer />
      <SocialLinks />
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="font-headline text-xl">Welcome to WaveCast!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Tune in to your favorite station. Use the player above to start listening.
            Check out our schedule and station info using the tabs below.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
