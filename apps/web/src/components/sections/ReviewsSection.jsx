import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import TestimonialCard from '@/components/TestimonialCard.jsx';

function ReviewsSection({ testimonials, currentTestimonial, setCurrentTestimonial }) {
    const selectedTestimonial = testimonials[currentTestimonial];

    return (
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
                    <h2
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight"
                        style={{ letterSpacing: '-0.02em' }}
                    >
                        Reseñas de Clientes
                    </h2>

                    <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                        La satisfacción de nuestros clientes es nuestra mejor carta de presentación
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    <TestimonialCard
                        name={selectedTestimonial.name}
                        testimonial={selectedTestimonial.testimonial}
                        rating={selectedTestimonial.rating}
                    />

                    <div className="flex justify-center items-center space-x-2 mt-8">
                        {testimonials.map((testimonial, index) => (
                            <button
                                key={testimonial.id}
                                onClick={() => setCurrentTestimonial(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === currentTestimonial ? 'bg-primary w-8' : 'bg-muted hover:bg-primary/50'
                                }`}
                                aria-label={`Ver reseña ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

ReviewsSection.propTypes = {
    testimonials: PropTypes.array.isRequired,
    currentTestimonial: PropTypes.number.isRequired,
    setCurrentTestimonial: PropTypes.func.isRequired,
};

export default ReviewsSection;