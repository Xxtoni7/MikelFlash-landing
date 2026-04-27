import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import PortfolioCard from '@/components/PortfolioCard.jsx';

function PortfolioSection({ portfolioItems, scrollToContact }) {
    return (
        <section id="trabajos" className="py-24 bg-gradient-to-b from-background to-card/30 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                        Trabajos Realizados
                    </h2>

                    <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                        Conoce algunos de nuestros proyectos más destacados
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {portfolioItems.map((item, index) => (
                        <motion.div
                            key={item.id ?? item.title}
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
    );
}

PortfolioSection.propTypes = {
    portfolioItems: PropTypes.array.isRequired,
    scrollToContact: PropTypes.func.isRequired,
};

export default PortfolioSection;