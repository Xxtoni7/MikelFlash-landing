import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

function PortfolioCard({ image, category, title }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6"
      >
        <span className="inline-block px-3 py-1 bg-primary text-background text-sm font-medium rounded-lg mb-2 w-fit">
          {category}
        </span>
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      </motion.div>
    </motion.div>
  );
}

PortfolioCard.propTypes = {
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default PortfolioCard;