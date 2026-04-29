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
      description:
        'Renovamos interiores, frentes, medianeras y espacios comunes con terminaciones prolijas y materiales de calidad.',
      images: [
        'https://images.unsplash.com/photo-1562259949-e8e7689d7828',
        'https://images.unsplash.com/photo-1589939705384-5185137a7f0f',
        'https://images.unsplash.com/photo-1595814433015-e6f5ce69614e',
      ],
    },
    {
      icon: Building2,
      title: 'Trabajos en Altura',
      description:
        'Realizamos trabajos en frentes, contrafrentes y medianeras con equipamiento adecuado y personal capacitado.',
      images: [
        'https://images.unsplash.com/photo-1503387762-592deb58ef4e',
        'https://images.unsplash.com/photo-1590496793929-36417d3117de',
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd',
      ],
    },
    {
      icon: Droplets,
      title: 'Impermeabilización',
      description:
        'Soluciones para terrazas, techos y filtraciones, cuidando cada detalle para proteger tu propiedad.',
      images: [
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12',
        'https://images.unsplash.com/photo-1621905252507-b35492cc74b4',
        'https://images.unsplash.com/photo-1590959651373-a3db0f38a961',
      ],
    },
    {
      icon: Hammer,
      title: 'Refacciones de Pisos',
      description:
        'Instalación, reparación y renovación de pisos, zócalos y revestimientos con acabados prolijos.',
      images: [
        'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
      ],
    },
    {
      icon: Home,
      title: 'Remodelaciones',
      description:
        'Transformamos espacios completos para hogares, locales y oficinas con una ejecución ordenada y profesional.',
      images: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
        'https://images.unsplash.com/photo-1600607688969-a5bfcd646154',
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea',
      ],
    },
    {
      icon: Wrench,
      title: 'Mantenimiento Edilicio',
      description:
        'Mantenimiento preventivo y correctivo para edificios, propiedades, comercios y espacios comunes.',
      images: [
        'https://images.unsplash.com/photo-1503387762-592deb58ef4e',
        'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789',
        'https://images.unsplash.com/photo-1621905252507-b35492cc74b4',
      ],
    },
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