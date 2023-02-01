import React from 'react';
import PropTypes from 'prop-types';

function ProjectCard({ name, img, description, url, category, tolls, git }) {
    return (
        <div>
            <div>
                <h3>{ name }</h3>
            </div>
            <div>
                {/* <img src={ img } alt={ x } /> */}
                <p>{ img }</p>
            </div>
            <div>
                <p>{ description }</p>
            </div>
            <div>
                <p>{ url }</p>
            </div>
            <div>
                <p>{ category }</p>
            </div>
            <div>
                <p>{ tolls }</p>
            </div>
            <div>
                <p>{ tolls }</p>
            </div>
            <div>
                <p>{ git }</p>
            </div>
        </div>
    );
}

ProjectCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    git: PropTypes.string.isRequired,
    tolls: PropTypes.array.isRequired,
    
};

export default ProjectCard;

