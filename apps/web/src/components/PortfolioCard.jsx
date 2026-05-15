import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';

function PortfolioCard({ project, onOpen, delay = 0 }) {
    const mainImage = project.images[0];

    return (
        <motion.button
            type="button"
            onClick={() => onOpen(project)}
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay }}
            whileHover={{ y: -8 }}
            className="group relative h-[300px] w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-card text-left shadow-2xl shadow-black/30 sm:h-[340px] lg:h-[360px] lg:rounded-[2rem]"
        >
            <img
                src={mainImage}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/10" />
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_70%_20%,rgba(255,215,0,0.24),transparent_42%)]" />

            <div className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-primary group-hover:text-background sm:right-5 sm:top-5 sm:h-12 sm:w-12">
                <ArrowUpRight size={21} />
            </div>

            <div className="relative z-10 flex h-full flex-col justify-end p-5 sm:p-6">
                <span className="mb-4 w-fit rounded-full border border-primary/30 bg-primary/15 px-4 py-2 text-sm font-semibold text-primary backdrop-blur-sm">
                    {project.category}
                </span>

                <h3 className="text-xl font-bold leading-tight text-white sm:text-2xl">
                    {project.title}
                </h3>

                <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-white/75 sm:text-base">
                    {project.description}
                </p>

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
        category: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired,
    }).isRequired,
    onOpen: PropTypes.func.isRequired,
    delay: PropTypes.number,
};

export default PortfolioCard;