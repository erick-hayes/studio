
import type { Program } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Clock, UserCircle, AlertTriangle } from 'lucide-react';

// IMPORTANT: Replace this with the actual public URL of your CSV file
const CSV_URL = "YOUR_PUBLIC_CSV_LINK_HERE"; 

async function fetchScheduleData(): Promise<Program[] | null> {
  if (CSV_URL === "YOUR_PUBLIC_CSV_LINK_HERE") {
    console.warn("CSV_URL is still the placeholder. Please update it in src/app/(main)/schedule/page.tsx");
    return null; // Or return a default/empty schedule
  }

  try {
    const response = await fetch(CSV_URL, { cache: 'no-store' }); // { cache: 'no-store' } to always fetch fresh data
    if (!response.ok) {
      console.error(`Error fetching CSV: ${response.status} ${response.statusText}`);
      return null;
    }
    const csvText = await response.text();
    const lines = csvText.trim().split('\\n');
    
    if (lines.length <= 1) { // Only header or empty
      return [];
    }

    // Skip header row (lines[0])
    const programs: Program[] = lines.slice(1).map(line => {
      const values = line.split(',');
      // Basic CSV parsing, assumes no commas within fields and specific column order
      return {
        id: values[0]?.trim() || '',
        time: values[1]?.trim() || '',
        name: values[2]?.trim() || '',
        host: values[3]?.trim() || undefined,
        description: values[4]?.trim() || undefined,
      };
    }).filter(p => p.id && p.name && p.time); // Basic validation

    return programs;
  } catch (error) {
    console.error("Failed to fetch or parse schedule data:", error);
    return null;
  }
}

export default async function SchedulePage() {
  const programs = await fetchScheduleData();

  if (CSV_URL === "YOUR_PUBLIC_CSV_LINK_HERE") {
    return (
      <div className="space-y-8">
        <h1 className="text-3xl font-headline font-bold text-center text-primary">Horario de Programación</h1>
        <Card className="shadow-lg rounded-lg border-destructive">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <AlertTriangle className="w-6 h-6" />
              Configuración Requerida
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground">
              Por favor, actualiza la URL del archivo CSV en el archivo <code>src/app/(main)/schedule/page.tsx</code>.
            </p>
            <p className="mt-2 text-muted-foreground text-sm">
              Debes reemplazar <code>"YOUR_PUBLIC_CSV_LINK_HERE"</code> con el enlace público a tu archivo CSV de Google Sheets.
            </p>
             <p className="mt-4 text-foreground">Las columnas esperadas en el CSV son: <code>id,time,name,host,description</code> (en ese orden).</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (!programs) {
    return (
      <div className="space-y-8">
        <h1 className="text-3xl font-headline font-bold text-center text-primary">Horario de Programación</h1>
        <Card className="shadow-lg rounded-lg border-destructive">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <AlertTriangle className="w-6 h-6" />
              Error al Cargar el Horario
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground">
              No se pudo cargar la programación. Por favor, inténtalo de nuevo más tarde o verifica la URL del CSV.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (programs.length === 0) {
    return (
      <div className="space-y-8">
        <h1 className="text-3xl font-headline font-bold text-center text-primary">Horario de Programación</h1>
        <Card className="shadow-lg rounded-lg">
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground">
              No hay programas en el horario actualmente.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-headline font-bold text-center text-primary">Horario de Programación</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((program) => (
          <Card key={program.id} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
            <CardHeader className="bg-muted/30">
              <CardTitle className="font-headline text-xl text-primary">{program.name}</CardTitle>
              <CardDescription className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-accent" />
                {program.time}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow pt-4">
              {program.description && <p className="text-sm text-foreground mb-2">{program.description}</p>}
            </CardContent>
            {program.host && (
              <CardFooter className="border-t pt-3 pb-3 bg-muted/20">
                 <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <UserCircle className="w-4 h-4 text-accent" />
                  Presentador: {program.host}
                </div>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
