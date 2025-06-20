"use client";

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

const AUDIO_SRC = "https://ic.mipam12.com/mipam12.acc";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
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
  
  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0]);
    if (audioRef.current) {
      audioRef.current.volume = value[0];
      if (value[0] === 0) {
        setIsMuted(true);
      } else if (isMuted) {
        setIsMuted(false);
      }
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if(audioRef.current){
        audioRef.current.muted = !isMuted;
    }
  };

  return (
    <div className="fixed bottom-16 left-0 right-0 z-50 h-20 bg-card border-t border-border shadow-lg">
      <audio
          ref={audioRef}
          src={AUDIO_SRC}
          onEnded={() => setIsPlaying(false)}
        />
      <div className="container mx-auto flex h-full items-center justify-between gap-4 px-4">
        <div className="flex items-center gap-4">
          <Button
            onClick={togglePlayPause}
            variant="ghost"
            size="icon"
            className="w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-accent"
            aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
          >
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
          </Button>
          <div>
            <p className="font-bold text-lg text-primary">En Vivo</p>
            <p className="text-sm text-muted-foreground">Avivamiento Radio</p>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-2 w-full max-w-xs">
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
      </div>
    </div>
  );
}
