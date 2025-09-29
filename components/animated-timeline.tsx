"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const timelineItems = [
  { id: 1, text: "GESTIONA", side: "left" },
  { id: 2, text: "ENTRADAS", side: "right" },
  { id: 3, text: "SALIDAS", side: "left" },
  { id: 4, text: "REPORTES", side: "right" },
  { id: 5, text: "USUARIOS", side: "left" },
];

export default function AnimatedTimeline() {
  const [lineProgress, setLineProgress] = useState(0);
  const [passedPoints, setPassedPoints] = useState([0]); // GESTIONA siempre activo

  useEffect(() => {
    const totalDuration = 3000;
    const interval = 50; // Menos frecuencia para menos lag

    const timer = setInterval(() => {
      setLineProgress((prev) => {
        const increment = (100 * interval) / totalDuration;
        const newProgress = Math.min(prev + increment, 100);

        // Calcular qué puntos deben estar activos
        const newPassedPoints = [0]; // GESTIONA siempre activo
        for (let i = 1; i < timelineItems.length; i++) {
          const pointThreshold = (i / (timelineItems.length - 1)) * 100;
          if (newProgress >= pointThreshold) {
            newPassedPoints.push(i);
          }
        }

        setPassedPoints(newPassedPoints);

        // Reiniciar cuando llegue al 100%
        if (newProgress >= 100) {
          setTimeout(() => {
            setLineProgress(0);
            setPassedPoints([0]);
          }, 500);
          return 100;
        }

        return newProgress;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto p-4">
      {/* Contenedor principal */}
      <div className="relative w-full">
        {/* Línea central */}
        <div
          className="absolute left-1/2 w-1.5 bg-gray-200 transform -translate-x-1/2 z-0 rounded-full"
          style={{
            top: "28px",
            backgroundColor: "#BDBFE0",
            height: `${(timelineItems.length - 1) * 78}px`,
          }}
        >
          <div
            className="w-full bg-blue-600 transition-all duration-75 ease-linear rounded-full"
            style={{ height: `${lineProgress}%`, backgroundColor: "#fff" }}
          />
        </div>

        {/* Items del timeline */}
        <div className="space-y-3 md:space-y-4">
          {timelineItems.map((item, index) => {
            const isPassed = passedPoints.includes(index);

            return (
              <div
                key={item.id}
                className="relative"
                style={{
                  marginBottom: index < timelineItems.length - 1 ? "22px" : "0",
                }}
              >
                {/* Círculo alineado con el centro de cada card */}
                <div
                  className="absolute left-1/2 rounded-full transform -translate-x-1/2 z-20 transition-all duration-200"
                  style={{
                    backgroundColor: isPassed ? "#fff" : "#BDBFE0",
                    border: isPassed ? "3px solid #fff" : "3px solid #BDBFE0",
                    width: isPassed ? "20px" : "12px",
                    height: isPassed ? "20px" : "12px",
                    top: "18px", // Centro de la card (h-14/2 = 28px)
                  }}
                />

                {/* Container de la card */}
                <div
                  className={`w-full md:w-5/12 ${
                    item.side === "left"
                      ? "md:mr-auto md:pr-4 pl-4 md:pl-0"
                      : "md:ml-auto md:pl-4 pr-4 md:pr-0"
                  }`}
                >
                  <div
                    className={`flex items-center ${
                      item.side === "left" ? "flex-row-reverse" : "flex-row"
                    }`}
                  >
                    <div className="w-[110px] h-[56px] relative">
                      <Card
                        className="border-2 w-full h-full flex items-center justify-center transition-all duration-200"
                        style={{
                          borderColor: "#ffffff",
                          backgroundColor: "white",
                        }}
                      >
                        <CardContent className="p-1 flex items-center justify-center">
                          <h3
                            className="text-[14px] font-bold text-center"
                            style={{
                              color: isPassed ? "#252c99" : "#70768A",
                              margin: 0,
                            }}
                          >
                            {item.text}
                          </h3>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
