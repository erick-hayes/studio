
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
          <CardTitle className="font-headline text-xl">¡Bienvenido a WaveCast!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Sintoniza tu estación favorita. Usa el reproductor de arriba para comenzar a escuchar.
            Consulta nuestra programación e información de la estación usando las pestañas de abajo.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
