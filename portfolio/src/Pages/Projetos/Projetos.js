import React, { useState } from 'react';
import Select from 'react-select';

import Header from '../../Components/Header/Header';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import { Projects, stacks, categories } from '../../Projects/Projects';

function Projetos() {
    const [ projects, setProjects ] = useState(Projects);
    const [ searchName, setSearchName ] = useState('');
    const [ category, setCategory ] = useState('Todas');
    const [ options, setOptions ] = useState([]);

    const optionsFilter = () => {
        setProjects(Projects);
        if (!options.length) return;
        
        const stacks = options.map((item) => item.value);
        const arrays = [];

        stacks.forEach((stack) => {
            const filters = projects.filter((proj) => proj.tolls.some((proj) => proj.includes(stack)));
            arrays.push(...filters);
        });

        const result = [...new Set(arrays.flat())];
        setProjects(result);
    };

    const clear = () => {
        setProjects(Projects);
        setOptions([]);
        setSearchName('');
        setCategory('Todas');
    };

    return (
        <div>
            <Header />
            <h1>Projetos</h1>    
            <label htmlFor="search">
                Buscar projetos: 
                <input
                    type="text"
                    id="search"
                    name="search"
                    placeholder="Buscar por nome"
                    onChange={ ({target}) => setSearchName(target.value) }
                    value={ searchName }
                />
            </label>

            <Select
                placeholder={ category }
                options={ categories }
                name="category"
                defaultValue={ category }
                isClearable={ true }
                isSearchable={ true }
                isMulti={ false }
                value={ category }
                onChange={ (target) => setCategory(target.value) }
            />

            <Select
                options={ stacks }
                name="stacks"
                isClearable={ true }
                isSearchable={ true }
                isMulti={ true }
                value={ options }
                onChange={ (target) => (setOptions(target), setProjects(Projects)) }
            />

            <button onClick={ () => optionsFilter() }>Filtrar</button>
            <button onClick={ () => clear() }>Limpar</button>

            <div>
                {
                    !projects.length ?
                        <span>Nenhum projeto encontrado</span> : projects
                            .filter((item) => {
                                if ( category === 'Todas' ) return Projects;
                                return item.category === category;
                            })
                            .filter((proj) => 
                                proj.name.toLocaleLowerCase().startsWith(searchName.toLocaleLowerCase())
                            )
                            .map((proj) => (
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
