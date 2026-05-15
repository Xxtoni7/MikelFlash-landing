import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowRight,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    ChevronUp,
    MapPin,
    X,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import PortfolioCard from '@/components/PortfolioCard.jsx';

const INITIAL_VISIBLE_PROJECTS = 3;

function PortfolioSection({ portfolioItems, scrollToContact }) {
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showAll, setShowAll] = useState(false);

    const visibleProjects = showAll
        ? portfolioItems
        : portfolioItems.slice(0, INITIAL_VISIBLE_PROJECTS);

    useEffect(() => {
        setCurrentImageIndex(0);
    }, [selectedProject]);

    const openProject = (project) => {
        setSelectedProject(project);
    };

    const closeProject = () => {
        setSelectedProject(null);
    };

    const nextImage = () => {
        if (!selectedProject) return;

        setCurrentImageIndex((prev) =>
            prev === selectedProject.images.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        if (!selectedProject) return;

        setCurrentImageIndex((prev) =>
            prev === 0 ? selectedProject.images.length - 1 : prev - 1
        );
    };

    return (
        <section
            id="trabajos"
            className="relative overflow-hidden py-24 bg-[radial-gradient(circle_at_20%_10%,rgba(255,215,0,0.12),transparent_28%),linear-gradient(to_bottom,#111111,#1c1a12,#111111)]"
        >
            <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:70px_70px]" />

            <div className="absolute left-[-160px] top-24 h-[420px] w-[420px] rounded-full bg-primary/20 blur-[150px]" />
            <div className="absolute right-[-180px] bottom-20 h-[480px] w-[480px] rounded-full bg-primary/15 blur-[160px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 34 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="mx-auto mb-16 max-w-4xl text-center"
                >
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                        Resultados reales, terminaciones que se notan
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-lg text-foreground/70 leading-relaxed">
                        Una selección de trabajos realizados en pintura, refacciones, impermeabilización,
                        mantenimiento y remodelaciones.
                    </p>

                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 120 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.25 }}
                        className="mx-auto mt-8 h-[3px] rounded-full bg-primary"
                    />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visibleProjects.map((project, index) => (
                        <PortfolioCard
                            key={project.id}
                            project={project}
                            onOpen={openProject}
                            delay={index * 0.06}
                        />
                    ))}
                </div>

                {portfolioItems.length > INITIAL_VISIBLE_PROJECTS && (
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mt-12 flex justify-center"
                    >
                        <Button
                            onClick={() => {
                                if (showAll) {
                                    document.querySelector('#trabajos')?.scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'start',
                                    });
                                }

                                setShowAll((prev) => !prev);
                            }}
                            className="group bg-primary text-background hover:bg-primary/90 px-8 py-6 rounded-xl font-semibold shadow-lg shadow-primary/20"
                        >
                            {showAll ? 'Ver menos trabajos' : 'Ver más trabajos'}
                            {showAll ? (
                                <ChevronUp size={18} className="ml-2 transition-transform group-hover:-translate-y-1" />
                            ) : (
                                <ChevronDown size={18} className="ml-2 transition-transform group-hover:translate-y-1" />
                            )}
                        </Button>
                    </motion.div>
                )}
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-3 py-4 backdrop-blur-md sm:px-4 sm:py-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeProject}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.96, y: 24 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.96, y: 24 }}
                            transition={{ duration: 0.25 }}
                            onClick={(event) => event.stopPropagation()}
                            className="relative h-[78vh] w-full max-w-6xl overflow-hidden rounded-[1.5rem] border border-primary/20 bg-card shadow-2xl shadow-black/50 sm:h-[82vh] sm:rounded-[2rem] lg:h-auto lg:max-h-[92vh]"
                        >
                            <button
                                onClick={closeProject}
                                className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition hover:bg-primary hover:text-background sm:right-4 sm:top-4 sm:h-11 sm:w-11"
                                aria-label="Cerrar proyecto"
                            >
                                <X size={22} />
                            </button>

                            <div className="grid h-full grid-rows-[40%_60%] lg:grid-rows-none lg:grid-cols-[1.15fr_0.85fr]">
                                <div className="relative overflow-hidden bg-black lg:min-h-[620px]">
                                    <AnimatePresence mode="wait">
                                        <motion.img
                                            key={selectedProject.images[currentImageIndex]}
                                            src={selectedProject.images[currentImageIndex]}
                                            alt={selectedProject.title}
                                            initial={{ opacity: 0, scale: 1.04 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.35 }}
                                            className="h-full w-full object-cover"
                                        />
                                    </AnimatePresence>

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

                                    {selectedProject.images.length > 1 && (
                                        <>
                                            <button
                                                onClick={prevImage}
                                                className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-md transition hover:bg-primary hover:text-background sm:left-4 sm:h-12 sm:w-12"
                                                aria-label="Imagen anterior"
                                            >
                                                <ChevronLeft size={22} />
                                            </button>

                                            <button
                                                onClick={nextImage}
                                                className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-md transition hover:bg-primary hover:text-background sm:right-4 sm:h-12 sm:w-12"
                                                aria-label="Imagen siguiente"
                                            >
                                                <ChevronRight size={22} />
                                            </button>
                                        </>
                                    )}

                                    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 sm:bottom-5">
                                        {selectedProject.images.map((image, index) => (
                                            <button
                                                key={`${selectedProject.id}-${image}`}
                                                onClick={() => setCurrentImageIndex(index)}
                                                className={`h-2 rounded-full transition-all duration-300 ${
                                                    index === currentImageIndex
                                                        ? 'w-8 bg-primary'
                                                        : 'w-2 bg-white/50'
                                                }`}
                                                aria-label={`Ver imagen ${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div className="relative flex min-h-0 flex-col p-5 sm:p-7 md:p-10">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(255,215,0,0.14),transparent_38%)]" />

                                    <div className="relative z-10 flex h-full min-h-0 flex-col">
                                        <span className="inline-flex w-fit rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                                            {selectedProject.category}
                                        </span>

                                        <h3 className="mt-4 text-2xl font-bold text-foreground leading-tight md:mt-6 md:text-4xl">
                                            {selectedProject.title}
                                        </h3>

                                        <p className="mt-4 line-clamp-4 text-base leading-relaxed text-foreground/75 md:mt-5 md:line-clamp-none md:text-lg">
                                            {selectedProject.description}
                                        </p>

                                        <div className="mt-5 grid grid-cols-2 gap-3 md:mt-8 md:gap-4">
                                            <div className="rounded-2xl border border-border bg-background/40 p-3 md:p-4">
                                                <p className="text-xs text-foreground/50 md:text-sm">Ubicación</p>
                                                <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-foreground md:text-base">
                                                    <MapPin size={16} className="text-primary" />
                                                    {selectedProject.location}
                                                </div>
                                            </div>

                                            <div className="rounded-2xl border border-border bg-background/40 p-3 md:p-4">
                                                <p className="text-xs text-foreground/50 md:text-sm">Año</p>
                                                <p className="mt-2 text-sm font-semibold text-foreground md:text-base">
                                                    {selectedProject.year}
                                                </p>
                                            </div>
                                        </div>

                                        <Button
                                            onClick={() => {
                                                closeProject();
                                                scrollToContact();
                                            }}
                                            className="group mt-auto w-full bg-primary text-background hover:bg-primary/90 px-6 py-5 rounded-xl font-semibold md:mt-10 md:px-7 md:py-6"
                                        >
                                            Solicitar un trabajo similar
                                            <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

PortfolioSection.propTypes = {
    portfolioItems: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            category: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired,
            year: PropTypes.string.isRequired,
            images: PropTypes.arrayOf(PropTypes.string).isRequired,
        })
    ).isRequired,
    scrollToContact: PropTypes.func.isRequired,
};

export default PortfolioSection;