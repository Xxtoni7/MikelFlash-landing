import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import ServiceCard from '@/components/ServiceCard.jsx';

function ServicesSection({ services }) {
    return (
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
                    <h2
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight"
                        style={{ letterSpacing: '-0.02em' }}
                    >
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
    );
}

ServicesSection.propTypes = {
    services: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            icon: PropTypes.node,
            description: PropTypes.string,
        })
    ).isRequired,
};

export default ServicesSection;
