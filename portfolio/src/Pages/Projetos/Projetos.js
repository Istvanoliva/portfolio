import React from 'react';

import Header from '../../Components/Header/Header';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import Projects from '../../Projects/Projects';

function Projetos() {
    return (
        <div>
            <Header />
            <h1>Projetos !</h1>
            <form>
                <label htmlFor="search">
                Buscar projetos: 
                    <input
                        type="text"
                        id="search"
                        name="search"
                        placeholder="Nome, linguagem, categoria, etc..."
                        // onChange={ handleChange }
                        // value={ name }
                    />
                </label>
                <label htmlFor="search-category">
                Categoria: 
                    <select
                        name="category"
                        id="category"
                        // value={ category }
                        // onChange={ handleChange }
                    >   
                        <option value='todas'>Todas</option>
                        <option value='front-end'>Front-end</option>
                        <option value='back-end'>Back-end</option>
                    </select>
                </label>
            </form>
            <div>
                {
                    Projects.map((proj) => (
                        <ProjectCard
                            key={ proj.name }
                            name={ proj.name }
                            img={ proj.img }
                            description={ proj.description }
                            url={ proj.url }
                            category={ proj.category }
                            tolls={ proj.tolls }
                            git={ proj.git }
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default Projetos;
