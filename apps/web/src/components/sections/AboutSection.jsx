import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCounter from '@/components/AnimatedCounter.jsx';

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.16,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 24,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
};

function AboutSection() {
    return (
        <section id="nosotros" className="py-24 bg-gradient-to-b from-background to-card/30 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.1),transparent_50%)]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                    <motion.div variants={containerVariants}>
                        <motion.h2
                            variants={itemVariants}
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight"
                            style={{ letterSpacing: '-0.02em' }}
                        >
                            Más de 5 años transformando espacios
                        </motion.h2>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg text-foreground/80 leading-relaxed mb-8"
                        >
                            Somos una empresa especializada en refacciones y mantenimiento general, con más de 5 años de experiencia en el sector. Trabajamos con compromiso, prolijidad y responsabilidad para brindar soluciones de calidad, cumpliendo los plazos acordados y superando las expectativas de nuestros clientes.
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="grid grid-cols-3 gap-3 sm:gap-8"
                        >
                            <div className="text-center">
                                <AnimatedCounter end={5} suffix="+" />
                                <p className="mt-2 text-xs text-foreground/70 sm:hidden">Años de experiencia</p>
                                <p className="mt-2 hidden text-foreground/70 sm:block">Años de experiencia</p>
                            </div>

                            <div className="text-center">
                                <AnimatedCounter end={100} suffix="+" />
                                <p className="mt-2 text-xs text-foreground/70 sm:hidden">Trabajos completados</p>
                                <p className="mt-2 hidden text-foreground/70 sm:block">Trabajos completados</p>
                            </div>

                            <div className="text-center">
                                <AnimatedCounter end={100} suffix="+" />
                                <p className="mt-2 text-xs text-foreground/70 sm:hidden">Clientes satisfechos</p>
                                <p className="mt-2 hidden text-foreground/70 sm:block">Clientes satisfechos</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/5 rounded-3xl blur-2xl" />

                        <img
                            src="/logo/MikelFLashLogo.png"
                            alt="Equipo de trabajo"
                            className="relative rounded-2xl shadow-2xl w-full h-auto"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default AboutSection;
