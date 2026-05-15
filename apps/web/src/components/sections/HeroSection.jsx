import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

function HeroSection({ parallaxOffset, scrollToContact }) {
    return (
        <section id="hero" className="relative min-h-screen overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1629195352955-850830e4d6c9)',
                    transform: window.innerWidth >= 768
                        ? `translateY(${parallaxOffset}px)`
                        : 'translateY(0px)',
                }}
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background" />

            <motion.div
                className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
                animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />

            <motion.div
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
                animate={{ y: [0, -40, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="relative z-10 flex min-h-screen w-full items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mx-auto mb-6 max-w-5xl text-center text-4xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl"
                        style={{ letterSpacing: '-0.02em', textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
                    >
                        Refacciones Premium para <br />
                        <span className="text-primary">Hogares y Edificios</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mx-auto mb-12 max-w-3xl text-center text-xl leading-relaxed text-foreground/90 md:text-2xl"
                    >
                        Transformamos espacios con excelencia y profesionalismo
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex w-full justify-center"
                    >
                        <Button
                            onClick={scrollToContact}
                            className="bg-primary text-background hover:bg-primary/90 text-lg px-8 py-6 rounded-xl font-semibold transition-all duration-300 active:scale-[0.98] shadow-lg shadow-primary/30"
                        >
                            Solicitar Presupuesto
                        </Button>
                    </motion.div>
                </div>
            </div>

            <motion.div
                className="absolute bottom-12 left-0 right-0 z-10 flex justify-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
                <ChevronDown size={40} className="text-primary" />
            </motion.div>
        </section>
    );
}

HeroSection.propTypes = {
    parallaxOffset: PropTypes.number.isRequired,
    scrollToContact: PropTypes.func.isRequired,
};

export default HeroSection;