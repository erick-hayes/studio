
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Smartphone, ArrowDownCircle, Share, PlusSquare } from 'lucide-react';
import Image from 'next/image';

export default function PwaInstallGuidePage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-headline font-bold text-center text-primary">Instalar App WaveCast</h1>
      <p className="text-center text-muted-foreground">
        Sigue estos sencillos pasos para instalar WaveCast en tu dispositivo y tener acceso rápido.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="shadow-lg rounded-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Image src="https://placehold.co/40x40.png?text=Android" width={40} height={40} alt="Logo Android" data-ai-hint="android logo" className="rounded-sm"/>
              <CardTitle className="font-headline text-xl text-primary">Dispositivos Android</CardTitle>
            </div>
            <CardDescription>Instalación en Chrome para Android.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ol className="list-decimal list-inside space-y-2 text-foreground">
              <li>Abre WaveCast en tu navegador Chrome.</li>
              <li>Toca el botón <ArrowDownCircle className="inline-block w-5 h-5 mx-1 text-accent" /> "Instalar" que puede aparecer en la parte inferior de tu pantalla, o toca los tres puntos (Menú) en la esquina superior derecha.</li>
              <li>Selecciona <PlusSquare className="inline-block w-5 h-5 mx-1 text-accent" /> "Instalar aplicación" o "Añadir a pantalla de inicio".</li>
              <li>Sigue las instrucciones en pantalla para confirmar.</li>
              <li>El icono de la aplicación WaveCast aparecerá en tu pantalla de inicio.</li>
            </ol>
            <Image 
              src="https://placehold.co/600x400.png" 
              alt="Prompt Instalación PWA Android" 
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
              <Image src="https://placehold.co/40x40.png?text=iOS" width={40} height={40} alt="Logo iOS" data-ai-hint="apple logo" className="rounded-sm"/>
              <CardTitle className="font-headline text-xl text-primary">Dispositivos iOS (iPhone/iPad)</CardTitle>
            </div>
            <CardDescription>Instalación en Safari para iOS.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ol className="list-decimal list-inside space-y-2 text-foreground">
              <li>Abre WaveCast en tu navegador Safari.</li>
              <li>Toca el icono "Compartir" <Share className="inline-block w-5 h-5 mx-1 text-accent" /> (un cuadrado con una flecha hacia arriba) en la parte inferior de la pantalla.</li>
              <li>Desplázate hacia abajo y toca <PlusSquare className="inline-block w-5 h-5 mx-1 text-accent" /> "Añadir a pantalla de inicio".</li>
              <li>Confirma el nombre del icono de la aplicación y toca "Añadir".</li>
              <li>El icono de la aplicación WaveCast aparecerá en tu pantalla de inicio.</li>
            </ol>
            <Image 
              src="https://placehold.co/600x400.png" 
              alt="Añadir PWA iOS a Pantalla de Inicio" 
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
