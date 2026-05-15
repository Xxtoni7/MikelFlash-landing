import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

function ServicesSection({ services }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const activeService = services[activeIndex];
    const ActiveIcon = activeService.icon;

    useEffect(() => {
        setCurrentImageIndex(0);
    }, [activeIndex]);

    const nextImage = () => {
        setCurrentImageIndex((prev) =>
            prev === activeService.images.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? activeService.images.length - 1 : prev - 1
        );
    };

    return (
        <section
            id="servicios"
            className="relative overflow-hidden py-24 bg-gradient-to-b from-card/30 via-background to-card/20"
        >
            <div className="absolute inset-0 opacity-10">
                <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary blur-[160px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 max-w-3xl"
                >
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                        Soluciones para renovar, reparar y mantener tu espacio
                    </h2>

                    <p className="mt-5 text-lg text-foreground/70 leading-relaxed">
                        Trabajos integrales para hogares, edificios, locales y espacios comerciales con terminaciones prolijas y atención personalizada.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-stretch">

                {/* DESKTOP */}
                    <div className="hidden lg:block space-y-3">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            const isActive = index === activeIndex;

                            return (
                                <button
                                    key={service.title}
                                    type="button"
                                    onMouseEnter={() => setActiveIndex(index)}
                                    onClick={() => setActiveIndex(index)}
                                    className={`group relative w-full overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300 ${
                                    isActive
                                        ? 'border-primary/70 bg-primary/10 shadow-lg shadow-primary/10'
                                        : 'border-border bg-card/50 hover:border-primary/40 hover:bg-card'
                                    }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div
                                            className={`flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${
                                                isActive
                                                    ? 'bg-primary text-background'
                                                    : 'bg-primary/10 text-primary group-hover:bg-primary/20'
                                            }`}
                                        >
                                            <Icon size={24} />
                                        </div>

                                        <div className="flex-1">
                                            <div className="flex items-center justify-between gap-3">
                                                <h3 className="text-lg font-semibold text-foreground">
                                                    {service.title}
                                                </h3>

                                                <span className="text-sm font-semibold text-primary/70">
                                                    {String(index + 1).padStart(2, '0')}
                                                </span>
                                            </div>

                                            <p className="mt-1 line-clamp-1 text-sm text-foreground/60">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>

                                    {isActive && (
                                        <motion.div
                                            layoutId="active-service-line"
                                            className="absolute bottom-0 left-0 h-[2px] w-full bg-primary"
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>

                {/* MOBILE */}
                    <div className="lg:hidden space-y-3">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            const isActive = index === activeIndex;

                            return (
                                <button
                                    key={service.title}
                                    onClick={() => setActiveIndex(index)}
                                    className={`group relative flex w-full items-center gap-4 overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300 ${
                                        isActive
                                            ? 'border-primary bg-primary/10 shadow-lg shadow-primary/10'
                                            : 'border-border bg-card/50'
                                    }`}
                                >
                                    <div
                                        className={`flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 ${
                                            isActive
                                                ? 'bg-primary text-background'
                                                : 'bg-primary/10 text-primary'
                                        }`}
                                    >
                                        <Icon size={22} />
                                    </div>

                                    <div className="flex-1 overflow-hidden">
                                        <div className="flex items-center justify-between gap-3">
                                            <h3
                                                className={`truncate text-sm font-semibold transition-colors duration-300 ${
                                                    isActive
                                                        ? 'text-foreground'
                                                        : 'text-foreground/80'
                                                }`}
                                            >
                                                {service.title}
                                            </h3>

                                            <span
                                                className={`text-xs font-semibold ${
                                                    isActive
                                                        ? 'text-primary'
                                                        : 'text-foreground/40'
                                                }`}
                                            >
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                        </div>
                                    </div>

                                    {isActive && (
                                        <motion.div
                                            layoutId="mobile-active-service"
                                            className="absolute bottom-0 left-0 h-[2px] w-full bg-primary"
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>

                {/* CARD GRANDE */}
                    <div className="relative min-h-[620px] overflow-hidden rounded-[2rem] border border-primary/20 bg-card/70 p-8 md:p-10 shadow-2xl shadow-black/20 lg:col-start-2">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,215,0,0.20),transparent_35%)]" />
                        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
                        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeService.title}
                                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -16, scale: 0.98 }}
                                transition={{ duration: 0.35 }}
                                className="relative z-10 flex h-full flex-col justify-between"
                            >
                                <div>
                                    <div className="mb-8 flex items-center justify-between">
                                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-background shadow-lg shadow-primary/30">
                                            <ActiveIcon size={34} />
                                        </div>

                                        <span className="text-7xl md:text-8xl font-bold text-primary/10">
                                            {String(activeIndex + 1).padStart(2, '0')}
                                        </span>
                                    </div>

                                    <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
                                        {activeService.title}
                                    </h3>

                                    <p className="text-lg text-foreground/75 leading-relaxed max-w-xl">
                                        {activeService.description}
                                    </p>

                                {/* GALERÍA */}
                                    <div className="mt-8 relative overflow-hidden rounded-2xl border border-primary/20 bg-background/30 shadow-xl shadow-black/20">
                                        <AnimatePresence mode="wait">
                                            <motion.img
                                                key={activeService.images[currentImageIndex]}
                                                src={activeService.images[currentImageIndex]}
                                                alt={activeService.title}
                                                initial={{ opacity: 0, scale: 1.05 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.35 }}
                                                className="h-64 w-full object-cover"
                                            />
                                        </AnimatePresence>

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                                        {/* BOTONES */}
                                        {activeService.images.length > 1 && (
                                            <>
                                                <button
                                                    onClick={prevImage}
                                                    className="absolute left-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-black/40 backdrop-blur-md text-white hover:bg-primary transition-all duration-300"
                                                >
                                                    <ChevronLeft size={20} />
                                                </button>

                                                <button
                                                    onClick={nextImage}
                                                    className="absolute right-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-black/40 backdrop-blur-md text-white hover:bg-primary transition-all duration-300"
                                                >
                                                    <ChevronRight size={20} />
                                                </button>
                                            </>
                                        )}

                                        {/* INDICADORES */}
                                        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                                            {activeService.images.map((image, index) => (
                                                <button
                                                    key={`${activeService.title}-${image}`}
                                                    onClick={() => setCurrentImageIndex(index)}
                                                    className={`h-2 rounded-full transition-all duration-300 ${
                                                        index === currentImageIndex
                                                            ? 'w-8 bg-primary'
                                                            : 'w-2 bg-white/50'
                                                    }`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-10 flex justify-center lg:justify-start">
                                    <Button className="group bg-primary text-background hover:bg-primary/90 px-7 py-6 rounded-xl font-semibold">
                                        Consultar este servicio
                                        <ArrowRight
                                            size={18}
                                            className="ml-2 transition-transform group-hover:translate-x-1"
                                        />
                                    </Button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}

ServicesSection.propTypes = {
    services: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            icon: PropTypes.elementType.isRequired,
            description: PropTypes.string.isRequired,
            images: PropTypes.arrayOf(PropTypes.string).isRequired,
        })
    ).isRequired,
};

export default ServicesSection;
