
import React from 'react';
import PropTypes from 'prop-types';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

function TestimonialCard({ name, testimonial, rating = 5, avatar }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="bg-card rounded-2xl p-8 border border-border shadow-lg"
    >
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center overflow-hidden">
          {avatar ? (
            <img src={avatar} alt={name} className="w-full h-full object-cover" />
          ) : (
            <span className="text-2xl font-bold text-primary">{name.charAt(0)}</span>
          )}
        </div>
        <div>
          <h4 className="text-lg font-semibold text-foreground">{name}</h4>
          <div className="flex items-center space-x-1 mt-1">
            {Array.from({ length: rating }).map((_, i) => (
              <motion.div
                key={`star-${name}-${i}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
              >
                <Star size={16} className="fill-primary text-primary" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <p className="text-foreground/80 leading-relaxed italic">"{testimonial}"</p>
    </motion.div>
  );
}

TestimonialCard.propTypes = {
  name: PropTypes.string.isRequired,
  testimonial: PropTypes.string.isRequired,
  rating: PropTypes.number,
  avatar: PropTypes.string,
};

export default TestimonialCard;
