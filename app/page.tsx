"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Car,
  BarChart3,
  Users,
  Settings,
  FileText,
  LogOut,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function ZoneParkLanding() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const heroModules = [
    {
      image: "/zonepark1.png",
    },
    { image: "/zonepark2.png" },
    { image: "/zonepark3.png" },
  ];

  const screenshots = [
    {
      name: "Dashboard Principal",
      image: "/interfaz (1).png",
    },
    {
      name: "Registro de Vehículos",
      image: "/interfaz (8).png",
    },
    {
      name: "Salida de Vehículos",
      image: "/interfaz (7).png",
    },
    { name: "Gestión de Categorías", image: "/interfaz (6).png" },
    {
      name: "Gestión de Usuarios",
      image: "/Interfaz (5).png",
    },
    {
      name: "Reportes Detallados",
      image: "/Interfaz (4).png",
    },
    {
      name: "Ajustes y Configuración",
      image: "/Interfaz (3).png",
    },
    {
      name: "Inicio de Sesión",
      image: "/Interfaz (2).png",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroModules.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [heroModules.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentScreenshot((prev) => (prev + 1) % screenshots.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [screenshots.length]);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Navbar */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50 animate-in slide-in-from-top duration-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className=" rounded-lg flex items-center justify-center">
                <img
                  src="/dark-logo.svg"
                  alt="Logo"
                  className="w-auto h-auto"
                />
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#inicio"
                className="text-foreground hover:text-primary transition-colors"
              >
                Inicio
              </a>
              <a
                href="#caracteristicas"
                className="text-foreground hover:text-primary transition-colors"
              >
                Características
              </a>
              <a
                href="#capturas"
                className="text-foreground hover:text-primary transition-colors"
              >
                Interfaz
              </a>
              <a
                href="#video"
                className="text-foreground hover:text-primary transition-colors"
              >
                Vista
              </a>
              <a
                href="#precios"
                className="text-foreground hover:text-primary transition-colors"
              >
                Precios
              </a>
              <a
                href="#faq"
                className="text-foreground hover:text-primary transition-colors"
              >
                FAQ
              </a>
              <a
                href="#contacto"
                className="text-foreground hover:text-primary transition-colors"
              >
                Contacto
              </a>
            </div>

            <Button variant="outline" className="md:hidden bg-transparent">
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="inicio"
        className="pt-24 pb-16 bg-gradient-to-br from-primary via-primary to-secondary overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6 animate-in fade-in slide-in-from-left duration-700">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                La forma más fácil y profesional de gestionar tu estacionamiento
              </h1>
              <p className="text-xl text-white/90 text-pretty">
                Controla entradas, salidas y reportes de manera rápida y
                organizada con ZonePark.
              </p>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 hover:scale-105 transition-all duration-300"
                onClick={() => window.open("https://w.app/nbdevss", "_blank")}
              >
                Solicita un demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-300">
              <div
                className="relative overflow-hidden rounded-lg shadow-2xl"
                style={{ perspective: "1000px" }}
              >
                <div className="relative w-full h-80 md:h-96">
                  {heroModules.map((module, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-1000 ease-in-out transform-gpu ${
                        index === currentSlide
                          ? "opacity-100 scale-100 rotateY-0 z-10"
                          : index === (currentSlide + 1) % heroModules.length
                          ? "opacity-60 scale-90 translate-x-4 rotateY-15 z-5"
                          : index ===
                            (currentSlide - 1 + heroModules.length) %
                              heroModules.length
                          ? "opacity-60 scale-90 -translate-x-4 rotateY--15 z-5"
                          : "opacity-0 scale-75 rotateY-45 z-0"
                      }`}
                      style={{
                        transform: `
                          ${
                            index === currentSlide
                              ? "rotateY(0deg) scale(1)"
                              : index ===
                                (currentSlide + 1) % heroModules.length
                              ? "rotateY(15deg) scale(0.9) translateX(20px)"
                              : index ===
                                (currentSlide - 1 + heroModules.length) %
                                  heroModules.length
                              ? "rotateY(-15deg) scale(0.9) translateX(-20px)"
                              : "rotateY(45deg) scale(0.75)"
                          }
                        `,
                        transformStyle: "preserve-3d",
                      }}
                    >
                      <img
                        src={module.image || "/placeholder.svg"}
                        alt={`ZonePark ${module}`}
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center mt-4 space-x-2">
                {heroModules.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? "bg-white" : "bg-white/50"
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom duration-700">
            <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">
              Beneficios principales
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ZonePark te ofrece todo lo que necesitas para gestionar tu
              estacionamiento de manera eficiente
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Control total",
                description: "Gestiona entradas y salidas en tiempo real",
              },
              {
                icon: BarChart3,
                title: "Reportes automáticos",
                description: "Informes detallados y exportables",
              },
              {
                icon: Users,
                title: "Gestión de usuarios",
                description: "Administra categorías y permisos",
              },
              {
                icon: Settings,
                title: "Fácil de usar",
                description:
                  "Interfaz intuitiva para cualquier estacionamiento",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="text-center space-y-4 animate-in fade-in slide-in-from-bottom duration-700 hover:scale-105 transition-transform"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="caracteristicas" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom duration-700">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Características completas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Todos los módulos que necesitas para una gestión profesional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Car,
                title: "Registros",
                description:
                  "Control de entradas en tiempo real con registro automático de vehículos",
              },
              {
                icon: LogOut,
                title: "Salidas",
                description:
                  "Gestión eficiente de vehículos que abandonan el estacionamiento",
              },
              {
                icon: Settings,
                title: "Gestión",
                description:
                  "Administración completa de categorías, usuarios y permisos del sistema",
              },
              {
                icon: Users,
                title: "Usuarios",
                description:
                  "Creación y control de personal autorizado con diferentes niveles de acceso",
              },
              {
                icon: FileText,
                title: "Reportes",
                description:
                  "Generación de informes detallados y exportables en múltiples formatos",
              },
              {
                icon: Settings,
                title: "Ajustes",
                description:
                  "Personalización completa y configuración avanzada del sistema",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom duration-700">
            <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">
              Mira cómo ZonePark transforma la gestión de tu estacionamiento
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Una demostración rápida de lo simple y eficiente que puede ser
              administrar entradas, salidas y reportes.
            </p>
          </div>

          <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom duration-700 delay-300">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/nc3f98U4GEk"
                title="ZonePark Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">
              Video demostrativo del sistema ZonePark en funcionamiento
            </p>
          </div>
        </div>
      </section>

      {/* Visual Section */}
      <section id="capturas" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom duration-700">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Interfaz moderna y profesional
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Diseñado para ser intuitivo y eficiente en el día a día
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom duration-700 delay-300">
            <div
              className="relative overflow-hidden"
              style={{ perspective: "1200px" }}
            >
              <div className="flex items-center justify-center h-96 md:h-[28rem]">
                {screenshots.map((screenshot, index) => {
                  const offset = index - currentScreenshot;
                  const absOffset = Math.abs(offset);

                  return (
                    <div
                      key={index}
                      className={`absolute transition-all duration-700 ease-out cursor-pointer ${
                        absOffset <= 2 ? "opacity-100" : "opacity-0"
                      }`}
                      style={{
                        transform: `
                          translateX(${offset * 200}px) 
                          translateZ(${absOffset === 0 ? "0px" : "-200px"}) 
                          rotateY(${offset * 25}deg) 
                          scale(${absOffset === 0 ? "1" : "0.8"})
                        `,
                        transformStyle: "preserve-3d",
                        zIndex: absOffset === 0 ? 10 : 10 - absOffset,
                      }}
                      onClick={() =>
                        handleImageClick(screenshot.image || "/placeholder.svg")
                      }
                    >
                      <img
                        src={screenshot.image || "/placeholder.svg"}
                        alt={screenshot.name}
                        className="rounded-lg shadow-2xl w-[40rem] md:w-[48rem] h-[26rem] md:h-[30rem] object-contain mx-auto"
                      />
                      {absOffset === 0 && (
                        <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
                          <span className="font-semibold text-sm">
                            {screenshot.name}
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentScreenshot ? "bg-primary" : "bg-primary/30"
                  }`}
                  onClick={() => setCurrentScreenshot(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customization Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom duration-700">
            <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">
              Adaptable a cualquier estacionamiento
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-pretty">
              ZonePark se adapta a estacionamientos de cualquier tamaño, desde
              pequeños lotes privados hasta grandes complejos comerciales. El
              sistema es completamente configurable según tus necesidades, con
              la flexibilidad de incorporar ajustes{" "}
              <span className="font-semibold text-primary bg-primary/10 px-2 py-1 rounded-md">
                sin costo adicional
              </span>{" "}
              en adaptaciones simples. Para personalizaciones más avanzadas,
              contamos con soluciones a medida que garantizan la mejor
              experiencia de gestión.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom duration-700">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Settings className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground">
                Configuración Flexible
              </h3>
              <p className="text-muted-foreground">
                Ajustes simples incluidos{" "}
                <span className="font-semibold text-primary">
                  sin costo adicional
                </span>{" "}
                para adaptarse a tu operación
              </p>
            </div>

            <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom duration-700 delay-100">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Car className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground">
                Cualquier Tamaño
              </h3>
              <p className="text-muted-foreground">
                Desde lotes pequeños hasta complejos comerciales de gran escala
              </p>
            </div>

            <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom duration-700 delay-200">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground">
                Soluciones a Medida
              </h3>
              <p className="text-muted-foreground">
                Personalizaciones avanzadas disponibles para necesidades
                específicas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precios" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom duration-700">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Planes de precios
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Elige el plan que mejor se adapte a las necesidades de tu
              estacionamiento
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="relative animate-in fade-in slide-in-from-left duration-700 hover:scale-105 transition-transform">
              <CardHeader>
                <Badge className="w-fit mb-2">Mensual</Badge>
                <CardTitle className="text-2xl">Plan Mensual</CardTitle>
                <div className="text-3xl font-bold text-primary mb-2">
                  S/. 99/mes
                </div>
                <CardDescription>
                  Acceso completo con soporte incluido
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    Acceso completo al sistema
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    Soporte técnico incluido
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    Actualizaciones automáticas
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    Reportes ilimitados
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground italic">
                  *Facturación electrónica opcional con costo adicional
                </p>
                <Button
                  className="w-full hover:scale-105 transition-transform"
                  onClick={() => window.open("https://w.app/nbdevss", "_blank")}
                >
                  Solicita un demo
                </Button>
              </CardContent>
            </Card>

            <Card className="relative border-primary animate-in fade-in slide-in-from-right duration-700 hover:scale-105 transition-transform">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-primary">Recomendado</Badge>
                <CardTitle className="text-2xl">Pago Único</CardTitle>
                <div className="text-3xl font-bold text-primary mb-2">
                  S/. 999
                </div>
                <CardDescription>Licencia permanente</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    Licencia permanente
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    Sin pagos recurrentes
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    Soporte por 1 año incluido
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    Todas las funcionalidades
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground italic">
                  *Facturación electrónica opcional con costo adicional
                </p>
                <Button
                  className="w-full hover:scale-105 transition-transform"
                  onClick={() => window.open("https://w.app/nbdevss", "_blank")}
                >
                  Solicita un demo
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom duration-700">
            <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">
              Preguntas frecuentes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Resolvemos las dudas más comunes sobre ZonePark
            </p>
          </div>

          <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom duration-700 delay-300">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="item-1"
                className="hover:bg-background/50 transition-colors rounded-lg px-4"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  ¿ZonePark se adapta a cualquier tipo de estacionamiento?
                </AccordionTrigger>
                <AccordionContent>
                  Sí, ZonePark está diseñado para adaptarse a estacionamientos
                  de cualquier tamaño, desde pequeños lotes privados hasta
                  grandes complejos comerciales. El sistema es completamente
                  configurable según tus necesidades específicas.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="hover:bg-background/50 transition-colors rounded-lg px-4"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  ¿Cómo puedo acceder al sistema?
                </AccordionTrigger>
                <AccordionContent>
                  ZonePark es un sistema web que funciona desde cualquier
                  navegador. Solo necesitas tener una computadora o laptop. No
                  requiere instalación de software adicional.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="hover:bg-background/50 transition-colors rounded-lg px-4"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  ¿Qué incluye el soporte?
                </AccordionTrigger>
                <AccordionContent>
                  Nuestro soporte incluye asistencia técnica, capacitación
                  inicial, resolución de dudas, actualizaciones del sistema y
                  mantenimiento. El soporte está disponible por teléfono,
                  WhatsApp y correo electrónico.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="hover:bg-background/50 transition-colors rounded-lg px-4"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  ¿Puedo exportar mis reportes?
                </AccordionTrigger>
                <AccordionContent>
                  Absolutamente. ZonePark permite exportar todos los reportes en
                  Excel, con posibilidad de implementar la exportación en
                  cualquier otra extensión que necesite. Puedes generar reportes
                  diarios, semanales, mensuales o personalizados según el
                  período que necesites.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
            Optimiza la gestión de tu estacionamiento hoy mismo
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto text-pretty">
            Únete a los cientos de estacionamientos que ya confían en ZonePark
            para su gestión diaria
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 text-lg px-12 py-6 hover:scale-105 transition-all duration-300"
            onClick={() => window.open("https://w.app/nbdevss", "_blank")}
          >
            Solicita un demo
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="py-12 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className=" rounded-lg flex items-center justify-center">
                  <img
                    src="/light-logo.svg"
                    alt="Logo"
                    className="w-auto h-auto"
                  />
                </div>
              </div>
              <p className="text-white/80">
                La solución profesional para la gestión de estacionamientos
              </p>
              <div className="rounded-lg flex mt-6">
                <a
                  href="https://w.app/nbdevs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/logo.svg"
                    alt="Logo"
                    className="w-44 h-auto cursor-pointer"
                  />
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Contacto</h3>
              <div className="space-y-2 text-white/80">
                <p>📧 contacto@nbdevs.digital</p>
                <p>📱 953 440 106 - 970 327 095</p>
                <p>📍 Perú, Lima</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Síguenos</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61580152286123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/60">
              © 2025 ZonePark. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
      {/* Modal for enlarged images */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={closeModal}
        >
          <div className="relative max-w-7xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Captura ampliada"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}
