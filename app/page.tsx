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
import AnimatedTimeline from "@/components/animated-timeline";
import AnimatedOnScroll from "@/components/animated-on-scroll";
import { VerticalTimeline } from "@/components/vertical-timeline";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const timelineEvents = [
  {
    id: "1",
    title: "Registra entradas",
    number: "01",
    description:
      "Controla el ingreso de vehículos registrando placa, hora y categoría. Toda la información queda guardada para una gestión ágil y organizada.",
    video: "/videos/Entradas.webm",
  },
  {
    id: "2",
    title: "Controla salidas",
    number: "02",
    description:
      "Registra cada salida de manera sencilla y precisa, asegurando cobros exactos de forma automática y ofreciendo una experiencia segura y confiable al cliente.",
    video: "/videos/Salidas.webm",
  },
  {
    id: "3",
    title: "Gestiona categorías",
    number: "03",
    description:
      "Configura tipos de vehículos con tarifas personalizadas. Adapta el sistema a autos, motos u otros, aplicando precios diferenciados al instante.",
    video: "/videos/Categorias.webm",
  },
  {
    id: "4",
    title: "Crea y gestiona usuarios",
    number: "04",
    description:
      "Asigna roles y permisos a cada usuario para garantizar seguridad. Mantén control sobre quién accede al sistema y organiza mejor tu operación.",
    video: "/videos/Usuarios.webm",
  },
  {
    id: "5",
    title: "Revisa reportes detallados",
    number: "05",
    description:
      "Genera reportes en tiempo real de ingresos, salidas y recaudación. Obtén una visión clara del negocio y toma decisiones basadas en datos.",
    video: "/videos/Reportes.webm",
  },
  {
    id: "6",
    title: "Genera graficos estadísticos",
    number: "06",
    description:
      "Visualiza el rendimiento de tu negocio con gráficos claros. Analiza tendencias y patrones para optimizar operaciones y maximizar ganancias.",
    video: "/videos/Estadisticas.webm",
  },
  {
    id: "7",
    title: "Cierra caja fácilmente",
    number: "07",
    description:
      "Al finalizar el turno, selecciona un rango de horas y obtén un resumen de ingresos totales e individuales, llevando las cuentas de forma simple y precisa.",
    video: "/videos/CierredeCaja.webm",
  },
  {
    id: "8",
    title: "Ajusta el sistema",
    description:
      "Configura datos de la empresa, activa o desactiva el monto inicial, gestiona turnos de tarifas y define los tipos de pago según tus necesidades.",
    video: "/videos/Ajustes.webm",
    number: "08",
  },
];

export default function ZoneParkLanding() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const heroModules = [
    {
      image: "/zonepark1.png",
    },
    { image: "/zonepark2.png" },
    { image: "/zonepark3.png" },
  ];

  const screenshots = [
    {
      name: "Inicio de Sesión",
      image: "/interfaz (1).png",
    },
    {
      name: "Dashboard Principal",
      image: "/interfaz (2).png",
    },
    {
      name: "Registro de Vehículos",
      image: "/interfaz (3).png",
    },
    {
      name: "Salida de Vehículos",
      image: "/interfaz (4).png",
    },
    { name: "Gestión de Categorías", image: "/interfaz (5).png" },
    {
      name: "Gestión de Usuarios",
      image: "/interfaz (6).png",
    },
    {
      name: "Reportes Detallados",
      image: "/interfaz (7).png",
    },
    {
      name: "Gráficos Estadísticos",
      image: "/interfaz (8).png",
    },
    {
      name: "Ajustes y Configuración",
      image: "/interfaz (9).png",
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
              <div className="rounded-lg flex items-center justify-center">
                <p className="text-primary text-2xl font-extrabold">Zone</p>
                <p className="text-2xl font-extrabold">Park |&nbsp;</p>
                <p className="text-2xl font-extrabold"> NBDevs</p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#inicio"
                className="text-primary hover:text-primary transition-colors font-medium"
              >
                Inicio
              </a>
              <a
                href="#caracteristicas"
                className="text-primary hover:text-primary transition-colors font-medium"
              >
                Características
              </a>
              <a
                href="#capturas"
                className="text-primary hover:text-primary transition-colors font-medium"
              >
                Interfaz
              </a>
              <a
                href="#video"
                className="text-primary hover:text-primary transition-colors font-medium"
              >
                Vista
              </a>
              <a
                href="#precios"
                className="text-primary hover:text-primary transition-colors font-medium"
              >
                Precios
              </a>
              <a
                href="#faq"
                className="text-primary hover:text-primary transition-colors font-medium"
              >
                FAQ
              </a>
              <a
                href="#contacto"
                className="text-primary hover:text-primary transition-colors font-medium"
              >
                Contacto
              </a>
            </div>

            <button
              className="md:hidden w-16 h-16 flex items-center justify-center bg-transparent border-none focus:outline-none active:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-8 h-8" />
            </button>

            {mobileMenuOpen && (
              <div
                className="fixed top-0 left-0 w-screen h-0 bg-[#252c99] flex flex-col items-center justify-center space-y-8 z-[9999] text-white text-2xl
               overflow-hidden animate-slide-down"
              >
                <button
                  className="absolute top-6 right-6 text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="w-8 h-8" />
                </button>

                {[
                  { href: "#inicio", label: "Inicio" },
                  { href: "#caracteristicas", label: "Características" },
                  { href: "#capturas", label: "Interfaz" },
                  { href: "#video", label: "Vista" },
                  { href: "#precios", label: "Precios" },
                  { href: "#faq", label: "FAQ" },
                  { href: "#contacto", label: "Contacto" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section id="inicio" className="pt-24 pb-16 bg-primary overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedOnScroll>
              <div className="text-white space-y-6 animate-in fade-in slide-in-from-left duration-1000 mb-0">
                <h1 className="text-3xl md:text-5xl leading-normal md:leading-tight lg:text-6xl md:font-medium font-semibold text-balance -mt-4 mb-0 text-center md:mt-6 md:text-left">
                  Control total de tu estacionamiento, sin complicaciones.
                </h1>
                <p className="md:text-lg text-base mt-4 text-white/90 font-medium md:font-normal text-center md:text-left">
                  ZonePark: gestión simple y segura
                </p>
                <div className="flex justify-center md:justify-start">
                  <Button
                    size="lg"
                    className="w-[80vw] md:w-auto tracking-widest bg-white text-primary hover:bg-white/90 text-base font-semibold px-8 py- hover:scale-105 transition-all duration-300"
                    onClick={() =>
                      window.open(
                        "https://api.whatsapp.com/send/?phone=51902374133&text=%F0%9F%91%8B+%C2%A1Hola!+Quisiera+obtener+m%C3%A1s+informaci%C3%B3n+sobre+ZonePark+por+favor.&type=phone_number&app_absent=0",
                        "_blank"
                      )
                    }
                  >
                    Solicita un demo
                    <ArrowRight className="-ml-1" strokeWidth={4} />
                  </Button>
                </div>
              </div>
            </AnimatedOnScroll>
            {/* ANIMACION */}

            <AnimatedOnScroll>
              <div className="animate-in fade-in slide-in-from-right duration-1000 md:pt-[4%] md:mt-0 -mt-8">
                <AnimatedTimeline />
              </div>
            </AnimatedOnScroll>
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedOnScroll>
            <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom duration-1000">
              <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">
                Beneficios principales
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                ZonePark te ofrece todo lo que necesitas para gestionar tu
                estacionamiento de manera eficiente
              </p>
            </div>
          </AnimatedOnScroll>

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
              <AnimatedOnScroll key={index}>
                <div
                  key={index}
                  className="text-center space-y-4 animate-in fade-in slide-in-from-bottom duration-1000 hover:scale-105 transition-transform"
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
              </AnimatedOnScroll>
            ))}
          </div>
        </div>
      </section>
      {/* Features Section */}
      <AnimatedOnScroll className="fade-in slide-in-from-bottom">
        <section id="caracteristicas" className="py-16 bg-chart-4">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom duration-1000">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Características completas
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Todos los módulos que necesitas para una gestión profesional
              </p>
            </div>

            <VerticalTimeline events={timelineEvents} />
          </div>
        </section>
      </AnimatedOnScroll>
      {/* Video Section */}
      <AnimatedOnScroll>
        <section id="video" className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom duration-1000">
              <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">
                Mira cómo ZonePark transforma la gestión de tu estacionamiento
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Una demostración rápida de lo simple y eficiente que puede ser
                administrar entradas, salidas y reportes.
              </p>
            </div>

            <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
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
      </AnimatedOnScroll>
      {/* Visual Section */}
      <AnimatedOnScroll>
        <section id="capturas" className="py-16 bg-chart-4">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Interfaz moderna y profesional
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Diseñado para ser intuitivo y eficiente en el día a día
              </p>
            </div>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000 }}
              loop
              className="max-w-5xl mx-auto"
            >
              {screenshots.map((s, i) => (
                <SwiperSlide key={i}>
                  <div
                    className="flex flex-col items-center cursor-pointer"
                    onClick={() => setSelectedImage(s.image)}
                  >
                    <div className="rounded-lg md:rounded-2xl overflow-hidden">
                      <img
                        src={s.image}
                        alt={s.name}
                        className="object-contain"
                      />
                    </div>
                    <div
                      className="bg-[#252c99] text-white px-4 py-2 rounded-lg text-center mt-2"
                      style={{ width: "fit-content", maxWidth: "100%" }}
                    >
                      <span className="font-semibold text-sm">{s.name}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Modal para ampliar imagen */}
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
              onClick={() => setSelectedImage(null)}
            >
              <img
                src={selectedImage}
                alt="Preview"
                className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl"
              />
            </div>
          )}

          {/* Estilos personalizados de Swiper */}
          <style jsx global>{`
            .swiper-button-prev {
              color: rgba(128, 128, 128, 0.2); !important;
              top: 50% !important;
              left: 0rem !important;
              transform: translateY(-50%) !important;
            }
            .swiper-button-next {
              color: rgba(128, 128, 128, 0.2); !important;
              top: 50% !important;
              right: -0rem !important; /* distancia desde el borde derecho */
              transform: translateY(-50%) !important;
            }
            .swiper-pagination-bullet {
              background: #252c99 !important;
              opacity: 0.4;
            }
            .swiper-pagination-bullet-active {
              opacity: 1;
            }
            .swiper-pagination {
              position: absolute !important;
              top: 535px !important; /* súbelo a la parte superior */
              bottom: auto !important;
              left: 0;
              right: 0;
              text-align: center;
            }
          `}</style>
        </section>
      </AnimatedOnScroll>
      {/* Customization Section */}
      <AnimatedOnScroll>
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom duration-1000">
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
              <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom duration-1000">
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

              <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom duration-1000 delay-100">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Car className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">
                  Cualquier Tamaño
                </h3>
                <p className="text-muted-foreground">
                  Desde lotes pequeños hasta complejos comerciales de gran
                  escala
                </p>
              </div>

              <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
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
      </AnimatedOnScroll>
      {/* Pricing Section */}
      <AnimatedOnScroll>
        <section id="precios" className="py-16 bg-chart-4">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom duration-1000">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Planes de precios
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Elige el plan que mejor se adapte a las necesidades de tu
                estacionamiento
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto ">
              <Card className="relative animate-in fade-in slide-in-from-right duration-1000 hover:scale-105 transition-transform flex flex-col items-center text-center">
                <CardHeader className="flex flex-col items-center text-center space-y-2">
                  <Badge className="w-fit bg-primary">Mensual</Badge>

                  <CardTitle className="text-2xl font-semibold whitespace-nowrap">
                    Plan mensual
                  </CardTitle>
                  <p className="text-base !text-[#5E5E5E] w-80 mb-4 mt-2">
                    Accede con un pago reducido cada mes. Ideal para quienes
                    buscan flexibilidad sin compromisos largos.
                  </p>
                  <div className="text-3xl font-bold text-primary whitespace-nowrap">
                    S/. 99
                    <p className="text-sm">por mes</p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4 flex flex-col items-center text-center">
                  <p className="text-sm !text-[#5E5E5E]">Este plan incluye</p>
                  <ul className="space-y-2">
                    <li className="flex items-center font-medium justify-center">
                      <CheckCircle className="w-5 h-5 text-primary mr-2" />
                      Acceso completo al sistema
                    </li>
                    <li className="flex items-center font-medium justify-center">
                      <CheckCircle className="w-5 h-5 text-primary mr-2" />
                      Soporte técnico incluido
                    </li>
                    <li className="flex items-center font-medium justify-center">
                      <CheckCircle className="w-5 h-5 text-primary mr-2" />
                      Actualizaciones automáticas
                    </li>
                    <li className="flex items-center font-medium justify-center">
                      <CheckCircle className="w-5 h-5 text-primary mr-2" />
                      Todas las funcionalidades
                    </li>
                  </ul>
                  <p className="text-xs text-muted-foreground italic">
                    *Facturación electrónica opcional
                  </p>
                  <p className="text-xs text-muted-foreground italic -mt-4">
                    con costo adicional
                  </p>
                  <Button
                    size="lg"
                    className="w-[80vw] md:w-full tracking-widest bg-primary text-white hover:bg-primary/90 text-base font-semibold px-8 py-6"
                    onClick={() =>
                      window.open(
                        "https://api.whatsapp.com/send/?phone=51902374133&text=👋+Hola,+quisiera+obtener+más+información+sobre+el+plan+mensual+de+ZonePark+y+solicitar+un+demo.+Gracias.&type=phone_number&app_absent=0",
                        "_blank"
                      )
                    }
                  >
                    Solicita un demo
                    <ArrowRight className="-ml-1" strokeWidth={4} />
                  </Button>
                </CardContent>
              </Card>

              <Card className="relative border-primary border-2 animate-in fade-in slide-in-from-right duration-1000 hover:scale-105 transition-transform flex flex-col items-center text-center">
                <CardHeader className="flex flex-col items-center text-center space-y-2">
                  <Badge className="w-fit bg-primary">Recomendado</Badge>

                  <CardTitle className="text-2xl font-bold whitespace-nowrap">
                    Pago Único
                  </CardTitle>
                  <p className="text-base !text-[#5E5E5E] w-85 mb-4 mt-2">
                    Obtén acceso de por vida con un solo pago. Ideal para
                    quienes desean estabilidad y ahorro a largo plazo.
                  </p>
                  <div className="text-3xl font-bold text-primary whitespace-nowrap">
                    S/. 999
                  </div>
                </CardHeader>

                <CardContent className="space-y-4 flex flex-col items-center text-center">
                  <p className="text-sm !text-[#5E5E5E]">Este plan incluye</p>
                  <ul className="space-y-2">
                    <li className="flex items-center font-medium justify-center">
                      <CheckCircle className="w-5 h-5 text-primary mr-2" />
                      Licencia permanente
                    </li>
                    <li className="flex items-center font-medium justify-center">
                      <CheckCircle className="w-5 h-5 text-primary mr-2" />
                      Sin pagos recurrentes
                    </li>
                    <li className="flex items-center font-medium justify-center">
                      <CheckCircle className="w-5 h-5 text-primary mr-2" />
                      Soporte por 1 año incluido
                    </li>
                    <li className="flex items-center font-medium justify-center">
                      <CheckCircle className="w-5 h-5 text-primary mr-2" />
                      Todas las funcionalidades
                    </li>
                  </ul>
                  <p className="text-xs text-muted-foreground italic">
                    *Facturación electrónica opcional
                  </p>
                  <p className="text-xs text-muted-foreground italic -mt-4">
                    con costo adicional
                  </p>
                  <Button
                    size="lg"
                    className="w-[80vw] md:w-full tracking-widest bg-primary text-white hover:bg-primary/90 text-base font-semibold px-8 py-6"
                    onClick={() =>
                      window.open(
                        "https://api.whatsapp.com/send/?phone=51902374133&text=👋+Hola,+quisiera+obtener+más+información+sobre+el+plan+de+pago+único+de+ZonePark+y+solicitar+un+demo.+Gracias.&type=phone_number&app_absent=0",
                        "_blank"
                      )
                    }
                  >
                    Solicita un demo
                    <ArrowRight className="-ml-1" strokeWidth={4} />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </AnimatedOnScroll>
      {/* FAQ Section */}
      <AnimatedOnScroll>
        <section id="faq" className="py-16 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom duration-1000">
              <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">
                Preguntas frecuentes
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Resolvemos las dudas más comunes sobre ZonePark
              </p>
            </div>

            <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
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
                    Absolutamente. ZonePark permite exportar todos los reportes
                    en Excel, con posibilidad de implementar la exportación en
                    cualquier otra extensión que necesite. Puedes generar
                    reportes diarios, semanales, mensuales o personalizados
                    según el período que necesites.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </AnimatedOnScroll>
      {/* Final CTA */}
      <AnimatedOnScroll>
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-in fade-in slide-in-from-bottom duration-1000">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">
              Optimiza la gestión de tu estacionamiento hoy mismo
            </h2>
            <p className="text-xl text-primary font-medium mb-8 max-w-2xl mx-auto text-pretty">
              Descubre cómo ZonePark, la nueva forma de gestionar
              estacionamientos, puede facilitar tu día a día.
            </p>
            <Button
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 text-lg px-12 py-6 hover:scale-105 transition-all duration-300"
              onClick={() =>
                window.open(
                  "https://api.whatsapp.com/send/?phone=51902374133&text=%F0%9F%91%8B+%C2%A1Hola!+Quisiera+obtener+m%C3%A1s+informaci%C3%B3n+sobre+ZonePark+por+favor.&type=phone_number&app_absent=0",
                  "_blank"
                )
              }
            >
              Solicita un demo
              <ArrowRight className="-ml-1" strokeWidth={4} />
            </Button>
          </div>
        </section>
      </AnimatedOnScroll>
      {/* Footer */}
      <footer id="contacto" className="py-12 bg-primary">
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
              <p className="text-white">
                La solución profesional para la gestión de estacionamientos
              </p>
              <div className="rounded-lg flex mt-6">
                <a
                  href="https://w.app/nbdevs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/logonbdevsblanco.svg"
                    alt="Logo"
                    className="w-44 h-auto cursor-pointer"
                  />
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Contacto</h3>
              <div className="space-y-2 text-white">
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
                  className="text-white hover:text-white transition-colors"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="text-white hover:text-white transition-colors"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="text-white hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/70">
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
