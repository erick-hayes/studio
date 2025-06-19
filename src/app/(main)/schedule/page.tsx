import type { Program } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Clock, UserCircle } from 'lucide-react';

const programs: Program[] = [
  { id: '1', time: '07:00 - 10:00', name: 'Morning Rise', host: 'DJ Sparky', description: 'Start your day with upbeat tunes and positive vibes.' },
  { id: '2', time: '10:00 - 13:00', name: 'Midday Beats', host: 'Annie Groove', description: 'The perfect soundtrack for your workday or break.' },
  { id: '3', time: '13:00 - 16:00', name: 'Afternoon Chill', host: 'Alex Waves', description: 'Relax and unwind with smooth melodies.' },
  { id: '4', time: '16:00 - 19:00', name: 'Drive Time Power', host: 'Rick Roadster', description: 'High-energy tracks to power your commute.' },
  { id: '5', time: '19:00 - 22:00', name: 'Evening Unwind', host: 'Luna Night', description: 'Soothing sounds for your evening.' },
  { id: '6', time: '22:00 - 01:00', name: 'Late Night Vibes', host: 'Cosmic Ray', description: 'Explore eclectic sounds and deep cuts.' },
];

export default function SchedulePage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-headline font-bold text-center text-primary">Program Schedule</h1>
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
                  Host: {program.host}
                </div>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
