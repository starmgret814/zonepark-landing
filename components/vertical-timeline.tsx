"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { SmartVideo } from "@/components/smart-video";

interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  video: string;
  number: string;
}

interface VerticalTimelineProps {
  events: TimelineEvent[];
}

export function VerticalTimeline({ events }: VerticalTimelineProps) {
  const [firstCardHeight, setFirstCardHeight] = useState<number>(0);
  const [visibleEvents, setVisibleEvents] = useState<Set<string>>(new Set());
  const [paintedSegments, setPaintedSegments] = useState<Set<number>>(
    new Set()
  );
  const eventRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const timelineRef = useRef<HTMLDivElement>(null);
  const [paintedCircles, setPaintedCircles] = useState<Set<number>>(new Set());

  const cardRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const videoRefs = useRef<Map<string, HTMLVideoElement>>(new Map());

  const setCardRef = (id: string) => (el: HTMLDivElement | null) => {
    if (el) cardRefs.current.set(id, el);
    else cardRefs.current.delete(id);
  };

  const setVideoRef = (id: string) => (el: HTMLVideoElement | null) => {
    if (el) videoRefs.current.set(id, el);
    else videoRefs.current.delete(id);
  };
  const [segmentHeights, setSegmentHeights] = useState<number[]>([]);

  useEffect(() => {
    if (cardRefs.current.size === 0 || videoRefs.current.size === 0) return;

    const cardHeights = events.map(
      (e) => cardRefs.current.get(e.id)?.offsetHeight ?? 0
    );
    const videoHeights = events.map(
      (e) => videoRefs.current.get(e.id)?.offsetHeight ?? 0
    );

    const heights: number[] = [];

    events.forEach((_, i) => {
      let accumulatedCardHeight = 0;
      for (let j = 1; j <= i; j++) accumulatedCardHeight += cardHeights[j];

      const spacing = 48 * i;
      const padding = 64 * i;
      const videoPart = videoHeights[0] * i; // o videoHeights[i] si quieres individual
      const total = spacing + padding + videoPart + accumulatedCardHeight;

      heights[i] = i === 0 ? 0 : total;
    });

    setSegmentHeights(heights);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const eventId = entry.target.getAttribute("data-event-id");
          if (!eventId || !entry.isIntersecting) return;

          const eventIndex = events.findIndex((e) => e.id === eventId);

          setVisibleEvents((prev) => new Set(prev).add(eventId));

          // Solo animamos si la línea todavía no está pintada hasta este índice
          if (!paintedSegments.has(eventIndex)) {
            // Primero pintamos la línea
            setPaintedSegments((prev) => new Set(prev).add(eventIndex));

            const duration = 700; // duración de la animación de la línea
            setTimeout(() => {
              // Luego de que la línea termina, pintamos el círculo
              setPaintedCircles((prev) => new Set(prev).add(eventIndex));
            }, duration);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-50px 0px" }
    );

    eventRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [events, paintedSegments]);

  const setEventRef = (eventId: string) => (element: HTMLDivElement | null) => {
    if (element) {
      eventRefs.current.set(eventId, element);
    } else {
      eventRefs.current.delete(eventId);
    }
  };

  return (
    <div ref={timelineRef} className="relative max-w-6xl mx-auto px-4 py-16">
      {/* Desktop timeline line - background */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 w-1.5 bg-gray-300 md:block hidden z-0"
        style={{
          top: "200px",
          height: "2490px",
        }}
      />

      {events.map((_, index) => {
        const isPainted = paintedSegments.has(index);
        const segmentHeight = `calc(355.7142px * ${index})`;
        const segmentTop = "200px";

        return (
          <div
            key={`desktop-segment-${index}`}
            className={cn(
              "absolute left-1/2 transform -translate-x-1/2 w-1.5 md:block hidden z-0",
              "transition-all duration-1200 ease-out",
              isPainted ? "bg-primary" : "bg-transparent h-0"
            )}
            style={{
              top: segmentTop,
              height: isPainted ? segmentHeight : "0px",
            }}
          />
        );
      })}

      {/* Mobile timeline line - background */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 w-1.5 bg-gray-300 md:hidden block z-0"
        style={{
          top: `calc(${firstCardHeight}px + 88px)`,
          height: `${segmentHeights[events.length - 1]}px`,
        }}
      />

      {events.map((_, index) => {
        const isPainted = paintedSegments.has(index);
        // const segmentHeight = "4010px";
        // const segmentHeight = `${polyHeight(index)}px`;

        // const segmentTop = "358.5px";

        return (
          <div
            key={`mobile-segment-${index}`}
            className={cn(
              "absolute left-1/2 transform -translate-x-1/2 w-1.5 md:hidden block z-0",
              "transition-all duration-1200 ease-out",
              isPainted ? "bg-primary" : "bg-transparent h-0"
            )}
            style={{
              top: `calc(${firstCardHeight}px + 88px)`,
              height: isPainted ? `${segmentHeights[index] || 0}px` : "0px",
            }}
          />
        );
      })}

      <div className="space-y-16 md:space-y-24">
        {events.map((event, index) => {
          const isVisible = visibleEvents.has(event.id);
          const isEven = index % 2 === 0;

          return (
            <div
              key={event.id}
              ref={setEventRef(event.id)}
              data-event-id={event.id}
              className={cn(
                "relative transition-all duration-700 ease-out",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-30 translate-y-8"
              )}
            >
              <div
                className={cn(
                  "absolute w-4 h-4 rounded-full border-2 transition-all duration-500 z-20",
                  "left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block",
                  "top-32",
                  paintedCircles.has(index)
                    ? "bg-primary border-primary shadow-lg scale-110"
                    : "bg-gray-400 border-gray-400"
                )}
              />

              {/* Desktop layout */}
              <div className="hidden md:grid md:grid-cols-2 md:gap-16 md:items-start">
                {isEven ? (
                  <>
                    {/* Card on left, Image on right */}
                    <div className="text-left pr-8 flex justify-end">
                      <Card
                        className={cn(
                          "transition-all duration-700 transform shadow-lg rounded-xl border-0 md:max-h-65 md:min-h-65  max-w-md z-10",
                          isVisible
                            ? "bg-card text-card-foreground shadow-xl translate-x-0"
                            : "bg-muted/50 text-muted-foreground translate-x-4 shadow-md"
                        )}
                      >
                        <CardContent className="p-6">
                          <div
                            className={cn(
                              "text-base font-bold mb-2 transition-colors duration-500 !text-[#252c99]",
                              isVisible
                                ? "text-blue-600"
                                : "text-muted-foreground"
                            )}
                          >
                            {event.number}
                          </div>
                          <h3 className="text-xl font-semibold mb-3 text-balance ">
                            {event.title}
                          </h3>
                          <p className="text-pretty leading-relaxed text-[#70768A]">
                            {event.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="pl-8">
                      <div
                        className={cn(
                          "relative overflow-hidden rounded-xl transition-all duration-700 transform shadow-xl z-10",
                          isVisible
                            ? "shadow-xl translate-x-0 grayscale-0"
                            : "shadow-md translate-x-4 grayscale"
                        )}
                      >
                        <SmartVideo
                          src={event.video}
                          className="w-full h-64 object-cover transition-transform duration-700 hover:scale-105 rounded-xl scale-101"
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Image on left, Card on right */}
                    <div className="pr-8">
                      <div
                        className={cn(
                          "relative overflow-hidden rounded-xl transition-all duration-700 transform shadow-xl z-10",
                          isVisible
                            ? "shadow-xl translate-x-0 grayscale-0"
                            : "shadow-md -translate-x-4 grayscale"
                        )}
                      >
                        <SmartVideo
                          src={event.video}
                          className="w-full h-64 object-cover transition-transform duration-700 hover:scale-105 rounded-xl scale-101"
                        />
                      </div>
                    </div>
                    <div className="text-left pl-8 flex justify-start">
                      <Card
                        className={cn(
                          "transition-all duration-700 transform shadow-lg rounded-xl border-0 md:max-h-65 md:min-h-65 max-w-md z-10",
                          isVisible
                            ? "bg-card text-card-foreground shadow-xl translate-x-0"
                            : "bg-muted/50 text-muted-foreground -translate-x-4 shadow-md"
                        )}
                      >
                        <CardContent className="p-6">
                          <div
                            className={cn(
                              "text-base font-bold mb-2 transition-colors duration-500 !text-[#252c99]",
                              isVisible
                                ? "text-blue-600"
                                : "text-muted-foreground"
                            )}
                          >
                            {event.number}
                          </div>
                          <h3 className="text-xl font-semibold mb-3 text-balance ">
                            {event.title}
                          </h3>
                          <p className="text-pretty leading-relaxed text-[#70768A]">
                            {event.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </>
                )}
              </div>

              <div className="md:hidden flex flex-col items-center max-w-sm mx-auto relative">
                {/* Card */}
                <Card
                  ref={(el) => {
                    setCardRef(event.id)(el);
                    if (el && index === 0) {
                      setFirstCardHeight(el.offsetHeight);
                    }
                  }}
                  className={cn(
                    "transition-all duration-700 transform shadow-lg rounded-xl border-0 w-full z-10",
                    isVisible
                      ? "bg-card text-card-foreground shadow-xl translate-y-0"
                      : "bg-muted/50 text-muted-foreground translate-y-4 shadow-md"
                  )}
                >
                  <CardContent className="p-4">
                    <div
                      className={cn(
                        "text-base font-bold mb-2 transition-colors duration-500 !text-[#252c99]",
                        isVisible ? "text-blue-600" : "text-muted-foreground"
                      )}
                    >
                      {event.number}
                    </div>
                    <h3 className="text-xl font-medium mb-2 text-balance ">
                      {event.title}
                    </h3>
                    <p className="text-base text-pretty leading-relaxed text-[#70768A]">
                      {event.description}
                    </p>
                  </CardContent>
                </Card>

                {/* Point separator - only one point for mobile */}
                <div className="h-12 w-full relative flex items-center justify-center">
                  <div
                    className={cn(
                      "w-4 h-4 rounded-full border-2 transition-all duration-500 z-20",
                      paintedCircles.has(index)
                        ? "bg-primary border-primary shadow-lg scale-110"
                        : "bg-gray-400 border-gray-400"
                    )}
                  />
                </div>

                {/* Video */}
                <div
                  className={cn(
                    "relative overflow-hidden rounded-xl transition-all duration-700 transform shadow-lg w-full z-10",
                    isVisible
                      ? "shadow-xl translate-y-0 grayscale-0"
                      : "shadow-md translate-y-4 grayscale"
                  )}
                >
                  <SmartVideo
                    ref={setVideoRef(event.id)}
                    src={event.video}
                    className="w-full h-full object-cover aspect-video rounded-xl"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
