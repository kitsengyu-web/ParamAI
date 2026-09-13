"use client";

import { forwardRef, ReactNode, useRef } from "react";
import {
  BookOpen,
  ClipboardCheck,
  FileText,
  Layers,
  Search,
  ShieldCheck,
} from "lucide-react";

import { AnimatedBeam } from "@/components/animated-beam";
import { cn } from "@/lib/utils";

const PramaanLogoIcon = () => (
  <svg
    viewBox="0 0 200 200"
    className="h-full w-full text-black fill-current"
  >
    <path d="M43.5 138.8L59.3 46.2C60.5 39 67.2 34 74.5 35.2L124.6 43.6C131.8 44.8 136.8 51.5 135.6 58.7L129.8 92.6C128.6 99.8 121.9 104.8 114.7 103.6L86.4 98.9L79.1 141.2C77.9 148.4 71.2 153.4 63.9 152.2L49.5 149.8C42.3 148.6 37.3 141.9 38.5 134.7L43.5 138.8Z" />
  </svg>
);

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 p-3 shadow-[0_0_20px_-12px_rgba(255,255,255,0.25)]",
        className,
      )}
    >
      {children}
    </div>
  );
});
Circle.displayName = "Circle";

export function IntegrationsBeam() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const topLeftRef = useRef<HTMLDivElement>(null);
  const midLeftRef = useRef<HTMLDivElement>(null);
  const bottomLeftRef = useRef<HTMLDivElement>(null);
  const topRightRef = useRef<HTMLDivElement>(null);
  const midRightRef = useRef<HTMLDivElement>(null);
  const bottomRightRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative flex h-[380px] w-full max-w-2xl mx-auto items-center justify-center overflow-hidden"
    >
      <div className="flex size-full max-w-lg mx-auto flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={topLeftRef}>
            <Search className="h-5 w-5 text-zinc-300" />
          </Circle>
          <Circle ref={topRightRef}>
            <FileText className="h-5 w-5 text-zinc-300" />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={midLeftRef}>
            <Layers className="h-5 w-5 text-zinc-300" />
          </Circle>
          <Circle ref={centerRef} className="h-14 w-14 border-none bg-white p-2.5">
            <PramaanLogoIcon />
          </Circle>
          <Circle ref={midRightRef}>
            <ShieldCheck className="h-5 w-5 text-zinc-300" />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={bottomLeftRef}>
            <ClipboardCheck className="h-5 w-5 text-zinc-300" />
          </Circle>
          <Circle ref={bottomRightRef}>
            <BookOpen className="h-5 w-5 text-zinc-300" />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={topLeftRef}
        toRef={centerRef}
        curvature={-60}
        endYOffset={-10}
      />
      <AnimatedBeam containerRef={containerRef} fromRef={midLeftRef} toRef={centerRef} />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={bottomLeftRef}
        toRef={centerRef}
        curvature={60}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={topRightRef}
        toRef={centerRef}
        curvature={-60}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam containerRef={containerRef} fromRef={midRightRef} toRef={centerRef} reverse />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={bottomRightRef}
        toRef={centerRef}
        curvature={60}
        endYOffset={10}
        reverse
      />
    </div>
  );
}
