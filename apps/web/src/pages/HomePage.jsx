import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import {
  Paintbrush,
  Building2,
  Droplets,
  Hammer,
  Home,
  Wrench,
} from 'lucide-react';

import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import HeroSection from '@/components/sections/HeroSection.jsx';
import AboutSection from '@/components/sections/AboutSection.jsx';
import ServicesSection from '@/components/sections/ServicesSection.jsx';
import PortfolioSection from '@/components/sections/PortfolioSection.jsx';
import ReviewsSection from '@/components/sections/ReviewsSection.jsx';
import ContactSection from '@/components/sections/ContactSection.jsx';
import { useParallax } from '@/hooks/useParallax';


function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const parallaxOffset = useParallax(0.5);

  const services = [
    {
      icon: Paintbrush,
      title: 'Pintura Interior/Exterior',
      description: 'Renovamos tus espacios con acabados profesionales y pinturas de primera calidad.'
    },
    {
      icon: Building2,
      title: 'Trabajos en Altura',
      description: 'Especialistas en trabajos verticales con equipamiento certificado y personal capacitado.'
    },
    {
      icon: Droplets,
      title: 'Impermeabilización',
      description: 'Protegemos tu propiedad con sistemas de impermeabilización de última generación.'
    },
    {
      icon: Hammer,
      title: 'Refacciones de Pisos',
      description: 'Instalación y reparación de todo tipo de pisos con acabados impecables.'
    },
    {
      icon: Home,
      title: 'Remodelaciones',
      description: 'Transformamos espacios completos con diseño moderno y ejecución profesional.'
    },
    {
      icon: Wrench,
      title: 'Mantenimiento Edilicio',
      description: 'Mantenimiento preventivo y correctivo para edificios y propiedades.'
    }
  ];

  const portfolioItems = [
    {
      image: 'https://images.unsplash.com/photo-1605989287045-4bb5808fe1f4',
      category: 'Pintura',
      title: 'Renovación Completa de Fachada'
    },
    {
      image: 'https://images.unsplash.com/photo-1509942999-ddab40caad8f',
      category: 'Remodelación',
      title: 'Remodelación de Oficinas Modernas'
    },
    {
      image: 'https://images.unsplash.com/photo-1671681740312-1b59af2eb0e7',
      category: 'Impermeabilización',
      title: 'Sistema de Impermeabilización de Terraza'
    },
    {
      image: 'https://images.unsplash.com/photo-1595937146232-e4e496429fea',
      category: 'Pisos',
      title: 'Instalación de Pisos de Madera'
    },
    {
      image: 'https://images.unsplash.com/photo-1673300982703-be76f17b5c92',
      category: 'Altura',
      title: 'Trabajos en Altura - Edificio Corporativo'
    },
    {
      image: 'https://images.unsplash.com/photo-1571680009459-42cf3eb79e15',
      category: 'Mantenimiento',
      title: 'Mantenimiento Integral de Edificio'
    }
  ];

  const testimonials = [
    {
      name: 'María Fernández',
      testimonial: 'Excelente trabajo en la remodelación de mi departamento. Cumplieron con los tiempos y la calidad superó mis expectativas.',
      rating: 5
    },
    {
      name: 'Carlos Rodríguez',
      testimonial: 'Profesionales de primera. La impermeabilización de mi terraza quedó perfecta y no he tenido ninguna filtración.',
      rating: 5
    },
    {
      name: 'Ana Martínez',
      testimonial: 'Muy recomendables. Hicieron la pintura completa de mi casa y el resultado es impecable. Muy prolijos y responsables.',
      rating: 5
    },
    {
      name: 'Jorge López',
      testimonial: 'Contraté sus servicios para trabajos en altura en mi edificio. Excelente equipo, muy seguros y eficientes.',
      rating: 5
    },
    {
      name: 'Laura Gómez',
      testimonial: 'La remodelación de mi cocina quedó hermosa. Atentos a cada detalle y siempre dispuestos a escuchar mis ideas.',
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

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

      <ServicesSection services={services} />

      <PortfolioSection
        portfolioItems={portfolioItems}
        scrollToContact={scrollToContact}
      />

      <ReviewsSection
        testimonials={testimonials}
        currentTestimonial={currentTestimonial}
        setCurrentTestimonial={setCurrentTestimonial}
      />

      <ContactSection />

      <Footer />
    </>
  );
}

export default HomePage;