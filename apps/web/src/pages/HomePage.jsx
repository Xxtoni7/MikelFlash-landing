import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Paintbrush, Building2, Droplets, Hammer, Home, Wrench } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import HeroSection from '@/components/sections/HeroSection.jsx';
import AboutSection from '@/components/sections/AboutSection.jsx';
import ServicesSection from '@/components/sections/ServicesSection.jsx';
import PortfolioSection from '@/components/sections/PortfolioSection.jsx';
import ReviewsSection from '@/components/sections/ReviewsSection.jsx';
import ContactSection from '@/components/sections/ContactSection.jsx';
import { useParallax } from '@/hooks/useParallax';
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton.jsx';


function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [selectedService, setSelectedService] = useState('');
  const parallaxOffset = useParallax(0.5);

  const services = [
    {
      icon: Paintbrush,
      title: 'Pintura Interior/Exterior',
      description:
        'Renovamos interiores, frentes, medianeras y espacios comunes con terminaciones prolijas y materiales de calidad.',
      image: '/servicios/pintura.webp',
      imagePosition: 'center 48%',
    },
    {
      icon: Building2,
      title: 'Trabajos en Altura',
      description:
        'Realizamos trabajos en frentes, contrafrentes y medianeras con equipamiento adecuado y personal capacitado.',
      image: '/servicios/trabajo-altura.webp',
      imagePosition: 'center 45%',
    },
    {
      icon: Droplets,
      title: 'Impermeabilización',
      description:
        'Soluciones para terrazas, techos y filtraciones, cuidando cada detalle para proteger tu propiedad.',
      image: '/servicios/impermeabilizacion.webp',
      imageFit: 'cover',
      imagePosition: 'center 38%',
    },
    {
      icon: Hammer,
      title: 'Refacciones de Pisos',
      description:
        'Instalación, reparación y renovación de pisos, zócalos y revestimientos con acabados prolijos.',
      image: '/servicios/pisos.webp',
      imageFit: 'cover',
      imagePosition: 'center 58%',
    },
    {
      icon: Home,
      title: 'Remodelaciones',
      description:
        'Transformamos espacios completos para hogares, locales y oficinas con una ejecución ordenada y profesional.',
      image: '/servicios/remodelaciones.webp',
      imageMobileBackdrop: true,
      imageMobileScale: 1.45,
      imagePosition: 'center 48%',
    },
    {
      icon: Wrench,
      title: 'Mantenimiento Edilicio',
      description:
        'Mantenimiento preventivo y correctivo para edificios, propiedades, comercios y espacios comunes.',
      image: '/servicios/mantenimiento.webp',
      imageFit: 'contain',
      imageMobileBackdrop: true,
      imagePosition: 'center center',
    },
  ];
  
  const portfolioItems = [
    {
      id: 1,
      title: 'Renovación de fachada comercial',
      description:
        'Trabajo de pintura exterior en frente comercial, incluyendo preparación de superficie, reparación de sectores deteriorados y terminación final en color institucional.',
      location: 'Buenos Aires',
      year: '2026',
      featured: true,
      coverImage: '/trabajos/nuvola/finalizado.webp',
      coverPosition: 'center center',
      images: [
        '/trabajos/nuvola/finalizado.webp',
        '/trabajos/nuvola/proceso.webp',
        '/trabajos/nuvola/antes.webp',
      ],
    },
    {
      id: 2,
      title: 'Impermeabilización y pintura en altura',
      description:
        'Trabajo con silleta en pulmón interno de edificio, incluyendo reparación de sectores afectados, sellado, impermeabilización y pintura exterior.',
      location: 'Buenos Aires',
      year: '2025',
      featured: false,
      coverImage: '/trabajos/pulmon/completo1.webp',
      coverPosition: 'center 35%',
      images: [
        '/trabajos/pulmon/completo1.webp',
        '/trabajos/pulmon/antes2.webp',
        '/trabajos/pulmon/completo2.webp',
        '/trabajos/pulmon/antes1.webp',
        '/trabajos/pulmon/completo3.webp',
      ],
    },
    {
      id: 3,
      title: 'Mantenimiento y pintura de pulmón de edificio',
      description:
        'Trabajo de mantenimiento en pulmón interno, incluyendo reparación de paredes exteriores, preparación de superficies y aplicación de pintura final.',
      location: 'Buenos Aires',
      year: '2026',
      featured: false,
      coverImage: '/trabajos/edificio/finalizado1.webp',
      coverPosition: 'center center',
      images: [
        '/trabajos/edificio/finalizado1.webp',
        '/trabajos/edificio/antes1.webp',
        '/trabajos/edificio/finalizado3.webp',
        '/trabajos/edificio/antes2.webp',
        '/trabajos/edificio/finalizado2.webp',
      ],
    },
    {
      id: 4,
      title: 'Reparación de balcones y tratamiento de humedad',
      description:
        'Trabajo de reparación en balcones afectados por humedad, incluyendo tratamiento de superficie, sellado, mampostería y pintura exterior.',
      location: 'Buenos Aires',
      year: '2025',
      featured: false,
      coverImage: '/trabajos/balcon/finalizado1.webp',
      coverPosition: 'center 40%',
      images: [
        '/trabajos/balcon/finalizado1.webp',
        '/trabajos/balcon/antes1.webp',
        '/trabajos/balcon/finalizado2.webp',
        '/trabajos/balcon/antes2.webp',
      ],
    },
    {
      id: 5,
      title: 'Reparación y pulido de piso de parquet',
      description:
        'Trabajo de reparación de piso de parquet, incluyendo reposición de piezas, pulido general y aplicación de terminación protectora.',
      location: 'Buenos Aires',
      year: '2025',
      featured: false,
      coverImage: '/trabajos/piso/despues.webp',
      coverPosition: 'center 55%',
      images: [
        '/trabajos/piso/despues.webp',
        '/trabajos/piso/antes.webp',
        '/trabajos/piso/despues2.webp',
        '/trabajos/piso/proceso.webp',
      ],
    },
    {
      id: 6,
      title: 'Pintura exterior y mantenimiento en altura',
      description:
        'Trabajo con silleta en sectores altos de fachada, incluyendo preparación de superficie, mantenimiento exterior y aplicación de pintura.',
      location: 'Buenos Aires',
      year: '2025',
      featured: false,
      coverImage: '/trabajos/casa/despues.webp',
      coverPosition: 'center center',
      images: [
        '/trabajos/casa/despues.webp',
        '/trabajos/casa/antes.webp',
        '/trabajos/casa/proceso.webp',
        '/trabajos/casa/despues2.webp',
      ],
    },
  ];
  
  const testimonials = [
    {
      name: 'María Fernández',
      testimonial: 'Los contraté para pintar el departamento y quedó muy bien. Fueron prolijos, ordenados y cumplieron con lo que habíamos hablado.',
      rating: 5
    },
    {
      name: 'Carlos Rodríguez',
      testimonial: 'Tenía problemas de humedad en la terraza y desde que hicieron el trabajo no volvió a filtrar. Me explicaron todo y trabajaron muy prolijo.',
      rating: 5
    },
    {
      name: 'Ana Martínez',
      testimonial: 'Hicieron arreglos y pintura en casa. Me gustó que fueron claros con los tiempos y dejaron todo limpio al terminar.',
      rating: 5
    },
    {
      name: 'Jorge López',
      testimonial: 'Necesitábamos hacer trabajos en altura en el edificio y respondieron muy bien. Se los vio responsables y con experiencia.',
      rating: 5
    },
    {
      name: 'Laura Gómez',
      testimonial: 'Me ayudaron con una remodelación chica en la cocina y quedó mucho mejor de lo que esperaba. Muy buena predisposición.',
      rating: 5
    },
    {
      name: 'Sergio Ramírez',
      testimonial: 'Los llamé por unas reparaciones en pared y pintura exterior. Vinieron, revisaron bien el trabajo y cumplieron con el presupuesto.',
      rating: 5
    },
    {
      name: 'Patricia Suárez',
      testimonial: 'Muy buena atención desde el primer contacto. Fueron puntuales, prolijos y el resultado final quedó muy parejo.',
      rating: 5
    },
    {
      name: 'Martín Acosta',
      testimonial: 'Hicieron mantenimiento en el frente del local y quedó excelente. Trabajaron rápido, sin vueltas y con buena terminación.',
      rating: 5
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contacto');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleServiceContact = (serviceTitle) => {
    setSelectedService(serviceTitle);

    const element = document.querySelector('#contacto');

    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };
  
  return (
    <>
      <Helmet>
        <title>Refacciones Premium - Transformamos espacios con excelencia</title>
        <meta
          name="description"
          content="Servicios profesionales de refacciones, pintura, impermeabilización y remodelaciones en Buenos Aires."
        />
      </Helmet>

      <Header />

      <HeroSection
        parallaxOffset={parallaxOffset}
        scrollToContact={scrollToContact}
      />

      <AboutSection />

      <ServicesSection
        services={services}
        onServiceContact={handleServiceContact}
      />

      <PortfolioSection
        portfolioItems={portfolioItems}
        scrollToContact={scrollToContact}
      />

      <ReviewsSection
        testimonials={testimonials}
        currentTestimonial={currentTestimonial}
        setCurrentTestimonial={setCurrentTestimonial}
      />

      <ContactSection selectedService={selectedService} />

      <Footer />

      <WhatsAppFloatingButton />
    </>
  );
}

export default HomePage;
