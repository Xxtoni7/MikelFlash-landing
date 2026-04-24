import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ChevronDown, Paintbrush, Building2, Droplets, Hammer, Home, Wrench, Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';
import TestimonialCard from '@/components/TestimonialCard.jsx';
import PortfolioCard from '@/components/PortfolioCard.jsx';
import AnimatedCounter from '@/components/AnimatedCounter.jsx';
import ContactForm from '@/components/ContactForm.jsx';
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
        <meta name="description" content="Servicios profesionales de refacciones, pintura, impermeabilización y remodelaciones en Buenos Aires. Más de 10 años de experiencia transformando espacios." />
      </Helmet>

      <Header />

      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1629195352955-850830e4d6c9)',
            transform: `translateY(${parallaxOffset}px)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background" />

        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
            style={{ letterSpacing: '-0.02em', textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
          >
            Refacciones Premium para <br />
            <span className="text-primary">Hogares y Edificios</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Transformamos espacios con excelencia y profesionalismo
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              onClick={scrollToContact}
              className="bg-primary text-background hover:bg-primary/90 text-lg px-8 py-6 rounded-xl font-semibold transition-all duration-300 active:scale-[0.98] shadow-lg shadow-primary/30"
            >
              Solicitar Presupuesto
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={40} className="text-primary" />
        </motion.div>
      </section>

      <section id="nosotros" className="py-24 bg-gradient-to-b from-background to-card/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.1),transparent_50%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                Más de una década transformando espacios
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                Somos una empresa especializada en refacciones y mantenimiento en general con más de 10 años de experiencia en el mercado. Nuestro compromiso es brindar servicios de la más alta calidad, cumpliendo con los plazos establecidos y superando las expectativas de nuestros clientes.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div className="text-center">
                  <AnimatedCounter end={10} suffix="+" />
                  <p className="text-foreground/70 mt-2">Años de experiencia</p>
                </div>
                <div className="text-center">
                  <AnimatedCounter end={500} suffix="+" />
                  <p className="text-foreground/70 mt-2">Trabajos completados</p>
                </div>
                <div className="text-center">
                  <AnimatedCounter end={1000} suffix="+" />
                  <p className="text-foreground/70 mt-2">Clientes satisfechos</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/5 rounded-3xl blur-2xl" />
              <img
                src="https://mx.habcdn.com/photos/project/hd/2-772164.jpg"
                alt="Equipo de Refacciones Premium trabajando"
                className="relative rounded-2xl shadow-2xl w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section id="servicios" className="py-24 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.15),transparent_70%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              Nuestros Servicios
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Ofrecemos soluciones integrales para todas tus necesidades de refacciones y mantenimiento
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="trabajos" className="py-24 bg-gradient-to-b from-background to-card/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              Trabajos Realizados
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Conoce algunos de nuestros proyectos más destacados
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-80"
              >
                <PortfolioCard
                  image={item.image}
                  category={item.category}
                  title={item.title}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <Button
              onClick={scrollToContact}
              className="bg-primary text-background hover:bg-primary/90 px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 active:scale-[0.98]"
            >
              Ver más trabajos
            </Button>
          </motion.div>
        </div>
      </section>

      <section id="testimonios" className="py-24 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_80%_20%,rgba(255,215,0,0.2),transparent_60%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              La satisfacción de nuestros clientes es nuestra mejor carta de presentación
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <TestimonialCard
              name={testimonials[currentTestimonial].name}
              testimonial={testimonials[currentTestimonial].testimonial}
              rating={testimonials[currentTestimonial].rating}
            />

            <div className="flex justify-center items-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-primary w-8' : 'bg-muted hover:bg-primary/50'
                  }`}
                  aria-label={`Ver testimonio ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="py-24 bg-gradient-to-b from-background to-card/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_80%,rgba(255,215,0,0.15),transparent_60%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              Contactanos
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Estamos listos para transformar tu espacio. Solicita tu presupuesto sin compromiso
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border"
            >
              <ContactForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">Información de Contacto</h3>
                
                <div className="space-y-6">
                  <a
                    href="https://wa.me/5491112345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start space-x-4 p-4 bg-primary/10 rounded-xl hover:bg-primary/20 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <MessageCircle size={24} className="text-background" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/70 mb-1">WhatsApp</p>
                      <p className="text-lg font-semibold text-foreground">+54 11 1234-5678</p>
                      <p className="text-sm text-primary mt-1">Haz clic para chatear</p>
                    </div>
                  </a>

                  <div className="flex items-start space-x-4 p-4 bg-card rounded-xl border border-border">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/70 mb-1">Teléfono</p>
                      <p className="text-lg font-semibold text-foreground">+54 11 1234-5678</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-card rounded-xl border border-border">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/70 mb-1">Email</p>
                      <p className="text-lg font-semibold text-foreground">info@mikelflash.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-card rounded-xl border border-border">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/70 mb-1">Ubicación</p>
                      <p className="text-lg font-semibold text-foreground">Buenos Aires, Argentina</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-card rounded-xl border border-border">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/70 mb-1">Horario</p>
                      <p className="text-lg font-semibold text-foreground">Lun - Vie: 8:00 - 18:00</p>
                      <p className="text-foreground/70">Sáb: 9:00 - 13:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default HomePage;