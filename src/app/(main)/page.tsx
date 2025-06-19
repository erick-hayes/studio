
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
          <CardTitle className="font-headline text-xl">¡Avivamiento La voz del Espíritu Santo!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
             Tu fuente de inspiración diaria, ofreciendo una programación edificante con música que toca el alma,
             mensajes de fe que fortalecen el espíritu y reflexiones que guían tu camino.
             Conéctate con Dios y nuestra comunidad a través de alabanzas, enseñanzas bíblicas y programas 
             que promueven los valores cristianos. ¡Un oasis de paz y esperanza en el dial!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
