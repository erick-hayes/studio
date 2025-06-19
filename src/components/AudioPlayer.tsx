
"use client";

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

// Placeholder audio - replace with actual stream URL
const AUDIO_SRC = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"; // Example MP3

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5); // Default volume 50%
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => console.error("Error playing audio:", error));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };
  
  const handleSeek = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0];
      setCurrentTime(value[0]);
    }
  };

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0]);
    if (audioRef.current) {
      audioRef.current.volume = value[0];
      setIsMuted(value[0] === 0);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if(audioRef.current){
        audioRef.current.muted = !isMuted;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };


  return (
    <Card className="w-full max-w-md mx-auto shadow-xl rounded-xl overflow-hidden">
      <CardHeader className="text-center bg-muted/50 p-6">
        <CardTitle className="font-headline text-2xl">Radio en Vivo</CardTitle>
        <CardDescription className="text-sm">Reproduciendo Ahora: WaveCast Mix</CardDescription>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <audio
          ref={audioRef}
          src={AUDIO_SRC}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => setIsPlaying(false)}
          // Note: Autoplay is often blocked by browsers. User interaction is required.
        />
        
        <div className="flex items-center justify-center">
          <Button
            onClick={togglePlayPause}
            variant="ghost"
            size="icon"
            className="w-16 h-16 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-accent transition-all duration-200 ease-in-out transform hover:scale-110"
            aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
          >
            {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
          </Button>
        </div>

        <div className="space-y-2">
          <Slider
            defaultValue={[0]}
            value={[currentTime]}
            max={duration || 100} // Provide a fallback if duration is 0
            step={1}
            onValueChange={handleSeek}
            aria-label="Buscar"
            className="[&>span:first-child]:h-2 [&>span:first-child>span]:bg-accent [&>span:last-child]:bg-accent"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button onClick={toggleMute} variant="ghost" size="icon" aria-label={isMuted ? "Reactivar Sonido" : "Silenciar"}>
            {isMuted || volume === 0 ? <VolumeX className="w-5 h-5 text-muted-foreground" /> : <Volume2 className="w-5 h-5 text-muted-foreground" />}
          </Button>
          <Slider
            defaultValue={[0.5]}
            value={[isMuted ? 0 : volume]}
            max={1}
            step={0.01}
            onValueChange={handleVolumeChange}
            aria-label="Volumen"
            className="w-full [&>span:first-child]:h-2 [&>span:first-child>span]:bg-accent [&>span:last-child]:bg-accent"
          />
        </div>
      </CardContent>
    </Card>
  );
}
