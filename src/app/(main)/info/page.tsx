
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, DownloadCloud, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function InfoPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-headline font-bold text-center text-primary">Acerca de WaveCast</h1>
      
      <Card className="shadow-lg rounded-lg overflow-hidden">
        <Image 
          src="https://placehold.co/800x300.png" 
          alt="Antena de estación de radio" 
          width={800} 
          height={300} 
          className="w-full h-48 object-cover"
          data-ai-hint="radio tower"
        />
        <CardHeader>
          <CardTitle className="font-headline text-xl text-primary">Nuestra Historia</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-foreground leading-relaxed">
            WaveCast es tu destino principal para melodías seleccionadas, programas de entrevistas atractivos y las últimas noticias de la comunidad. 
            Nacido de la pasión por la música y la conexión, nos esforzamos por ser la banda sonora de tu día, todos los días.
            Nuestra misión es ofrecer una transmisión de alta calidad que entretenga, informe e inspire a nuestros oyentes.
          </p>
          <p className="text-foreground leading-relaxed">
            Creemos en el poder de la radio para unir a las personas. Ya sea que sintonices durante tu viaje matutino, 
            mientras trabajas o te relajas en casa, WaveCast ofrece una amplia gama de programas para todos los gustos.
            ¡Únete a nuestra creciente familia de oyentes y experimenta la magia de la radio!
          </p>
        </CardContent>
      </Card>

      <Card className="shadow-lg rounded-lg">
        <CardHeader>
          <CardTitle className="font-headline text-xl text-primary">Instala Nuestra App</CardTitle>
          <CardDescription>Obtén acceso rápido a WaveCast instalando nuestra app en tu dispositivo.</CardDescription>
        </CardHeader>
        <CardContent>
          <Link href="/pwa-install-guide" passHref>
            <Button variant="outline" className="w-full justify-between text-accent hover:bg-accent hover:text-accent-foreground">
              Guía de Instalación
              <ChevronRight className="w-5 h-5" />
            </Button>
          </Link>
        </CardContent>
      </Card>

      <Card className="shadow-lg rounded-lg">
        <CardHeader>
          <CardTitle className="font-headline text-xl text-primary">Contáctanos</CardTitle>
          <CardDescription>Ponte en contacto con el equipo de WaveCast.</CardDescription>
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
