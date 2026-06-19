import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';

function PortfolioCard({ project, onOpen, delay = 0, isMobileActive = false }) {
    const mainImage = project.coverImage || project.images[0];

    return (
        <motion.button
            type="button"
            onClick={() => onOpen(project)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.32, delay, ease: 'easeOut' }}
            whileHover={{ y: -8 }}
            className={`group relative h-[300px] w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-card text-left shadow-2xl shadow-black/30 transition-colors duration-300 hover:border-primary/60 hover:shadow-primary/10 sm:h-[340px] lg:h-[360px] lg:rounded-[2rem] ${
                isMobileActive
                    ? 'border-primary/35 shadow-primary/5 md:border-white/10 md:shadow-black/30'
                    : ''
            }`}
        >
            <img
                src={mainImage}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 md:group-hover:scale-110 ${
                    isMobileActive ? 'md:brightness-100' : ''
                }`}
                style={{
                    objectPosition: project.coverPosition || 'center center',
                }}
            />

            <div
                className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/10 transition-opacity duration-300 ${
                    isMobileActive ? 'opacity-95 md:opacity-100' : 'opacity-100'
                }`}
            />
            <div
                className={`absolute inset-0 transition-opacity duration-500 md:group-hover:opacity-30 bg-[radial-gradient(circle_at_70%_20%,rgba(255,215,0,0.24),transparent_42%)] ${
                    isMobileActive ? 'opacity-10 md:opacity-0' : 'opacity-0'
                }`}
            />

            <div
                className={`absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors duration-300 md:backdrop-blur-md md:group-hover:bg-primary md:group-hover:text-background sm:right-5 sm:top-5 sm:h-12 sm:w-12 ${
                    isMobileActive ? 'bg-primary/65 text-background md:bg-white/10 md:text-white' : ''
                }`}
            >
                <ArrowUpRight size={21} />
            </div>

            <div className="relative z-10 flex h-full flex-col justify-end p-5 sm:p-6">
                <h3 className="text-xl font-bold leading-tight text-white sm:text-2xl">
                    {project.title}
                </h3>

                <div className="mt-5 flex items-center gap-3 text-sm text-white/75">
                    <MapPin size={16} className="text-primary" />
                    <span>{project.location}</span>
                    <span className="h-1 w-1 rounded-full bg-white/40" />
                    <span>{project.year}</span>
                </div>
            </div>
        </motion.button>
    );
}

PortfolioCard.propTypes = {
    project: PropTypes.shape({
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        coverImage: PropTypes.string,
        coverPosition: PropTypes.string,
        category: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired,
    }).isRequired,
    onOpen: PropTypes.func.isRequired,
    delay: PropTypes.number,
    isMobileActive: PropTypes.bool,
};

export default memo(PortfolioCard);
