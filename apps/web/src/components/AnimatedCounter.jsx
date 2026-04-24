
import React from 'react';
import PropTypes from 'prop-types';
import { useCounterAnimation } from '@/hooks/useCounterAnimation';

function AnimatedCounter({ end, prefix = '', suffix = '', duration = 2000 }) {
  const { elementRef, count } = useCounterAnimation(end, duration);

  return (
    <span ref={elementRef} className="text-4xl md:text-5xl font-bold text-primary">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

AnimatedCounter.propTypes = {
  end: PropTypes.number.isRequired,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  duration: PropTypes.number,
};

export default AnimatedCounter;
