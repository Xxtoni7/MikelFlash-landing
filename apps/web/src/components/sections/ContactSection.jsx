import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

import ContactForm from '@/components/ContactForm.jsx';

function ContactSection({ selectedService }) {
    return (
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
                    <h2
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight"
                        style={{ letterSpacing: '-0.02em' }}
                    >
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
                        <ContactForm selectedService={selectedService} />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-semibold text-foreground mb-6">
                                Información de Contacto
                            </h3>

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
                                        <p className="text-lg font-semibold text-foreground">
                                            +54 11 1234-5678
                                        </p>
                                        <p className="text-sm text-primary mt-1">
                                            Haz clic para chatear
                                        </p>
                                    </div>
                                </a>

                                <div className="flex items-start space-x-4 p-4 bg-card rounded-xl border border-border">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Phone size={24} className="text-primary" />
                                    </div>

                                    <div>
                                        <p className="text-sm text-foreground/70 mb-1">Teléfono</p>
                                        <p className="text-lg font-semibold text-foreground">
                                            +54 11 1234-5678
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 p-4 bg-card rounded-xl border border-border">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Mail size={24} className="text-primary" />
                                    </div>

                                    <div>
                                        <p className="text-sm text-foreground/70 mb-1">Email</p>
                                        <p className="text-lg font-semibold text-foreground">
                                            info@mikelflash.com
                                        </p>
                                    </div>
                                    </div>

                                <div className="flex items-start space-x-4 p-4 bg-card rounded-xl border border-border">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <MapPin size={24} className="text-primary" />
                                    </div>

                                    <div>
                                        <p className="text-sm text-foreground/70 mb-1">Ubicación</p>
                                        <p className="text-lg font-semibold text-foreground">
                                            Buenos Aires, Argentina
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 p-4 bg-card rounded-xl border border-border">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Clock size={24} className="text-primary" />
                                    </div>

                                    <div>
                                        <p className="text-sm text-foreground/70 mb-1">Horario</p>
                                        <p className="text-lg font-semibold text-foreground">
                                            Lun - Vie: 8:00 - 18:00
                                        </p>
                                        <p className="text-foreground/70">
                                            Sáb: 9:00 - 13:00
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

ContactSection.propTypes = {
    selectedService: PropTypes.string,
};

export default ContactSection;