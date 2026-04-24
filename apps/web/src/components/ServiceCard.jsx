
import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

function ServiceCard({ icon: Icon, title, description, delay = 0 }) {
  const { elementRef, style } = useScrollReveal(delay);

  return (
    <motion.div
      ref={elementRef}
      style={style}
      whileHover={{ scale: 1.05, y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 group"
    >
      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
        <Icon size={32} className="text-primary" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-foreground/70 leading-relaxed">{description}</p>
    </motion.div>
  );
}

ServiceCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  delay: PropTypes.number,
};

export default ServiceCard;
