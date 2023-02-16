import React from 'react';
import PropTypes from 'prop-types';

import './ProjectCard.css';

function ProjectCard({ name, img, description, url, category, tolls, git }) {
    return (
        <div className="project-card">
            <div className="title-div">
                <h3 className="title-card">{ name }</h3>
                <p>{ category }</p>
            </div>
            <div className="img-div">
                <img src={ img } className="img-card"/>
            </div>
            <div>
                <p>{ description }</p>
            </div>
            <div className="tools">
                { tolls.map((item) => <div key={ item } className="span">{ item }</div>) }
            </div>
            <div className="btn-projects">
                <a href={ git } target="_blank" rel="noreferrer">
                    <button>
                    Github
                    </button>
                </a>
                {
                    url.length ?
                        <a href={ url } target="_blank" rel="noreferrer">
                            <button onClick={ () => alert('Em construção ....') }>
                            Site
                            </button>
                        </a> : undefined
                }
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

