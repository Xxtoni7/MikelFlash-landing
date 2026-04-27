import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCounter from '@/components/AnimatedCounter.jsx';

function AboutSection() {
    return (
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
                        <h2
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight"
                            style={{ letterSpacing: '-0.02em' }}
                        >
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
                            alt="Equipo de trabajo"
                            className="relative rounded-2xl shadow-2xl w-full h-auto"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
