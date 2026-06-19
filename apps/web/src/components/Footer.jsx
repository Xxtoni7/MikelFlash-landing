import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  const quickLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Trabajos', href: '#trabajos' },
    { name: 'Contacto', href: '#contacto' }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);

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
    <footer className="bg-black text-foreground border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <a
                href="#hero"
                onClick={(e) => scrollToSection(e, '#hero')}
                className="flex items-center space-x-2"
              >
                <div className="w-12 h-10 rounded-xl overflow-hidden border border-primary/30 shadow-lg shadow-primary/20 bg-black/20 backdrop-blur-sm">
                  <img
                    src="/logo/MF.png"
                    alt="Mikel Flash"
                    className="w-full h-full object-cover"
                  />
                </div>

                <span className="text-xl font-bold text-foreground">
                  Mikel <span className="text-primary">Flash</span>
                </span>
              </a>
            </div>

            <p className="text-foreground/70 leading-relaxed">
              Transformamos espacios con excelencia y profesionalismo desde hace más de 10 años.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">
              Enlaces Rápidos
            </h3>

            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-foreground/70 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}

              <li>
                <a
                  href="/politica-de-privacidad"
                  className="text-foreground/70 hover:text-primary transition-colors duration-300"
                >
                  Política de Privacidad
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">
              Contacto
            </h3>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-foreground/70">
                <Phone size={18} className="text-primary" />
                <span>+54 11 3586-2514</span>
              </div>

              <div className="flex items-center space-x-3 text-foreground/70">
                <Mail size={18} className="text-primary" />
                <span className="break-all">
                  ort.ortega.refacciones@gmail.com
                </span>
              </div>

              <div className="flex items-center space-x-3 text-foreground/70">
                <MapPin size={18} className="text-primary" />
                <span>Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/40 pt-8 mt-12 text-center">
          <p className="text-foreground/60 text-sm">
            © 2026 Mikel Flash. Todos los derechos reservados.
          </p>

          <p className="text-foreground/50 text-sm mt-2">
            Creado por{' '}
            <a
              href="https://www.linkedin.com/in/toni-riveros316321/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors duration-300 font-medium"
            >
              Antonio Riveros
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;