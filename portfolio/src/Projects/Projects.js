import blog from '../images/projectsImages/blog.png';
import carShop from '../images/projectsImages/car-shop.png';
import car from '../images/projectsImages/car.png';
import card from '../images/projectsImages/card.png';
import cloud from '../images/projectsImages/cloud.png';
import db from '../images/projectsImages/db.png';
import docker from '../images/projectsImages/docker.png';
import dragon from '../images/projectsImages/dragon-1.png';
import food from '../images/projectsImages/food.png';
import ituns from '../images/projectsImages/ituns.png';
import python from '../images/projectsImages/python.png';
import starwars from '../images/projectsImages/starwars.png';
import RPG from '../images/projectsImages/RPG.png';
import soccer from '../images/projectsImages/soccer.png';
import store from '../images/projectsImages/store.png';
import store2 from '../images/projectsImages/store2.png';
import talker from '../images/projectsImages/talker.png';
import test from '../images/projectsImages/test.png';
import trivia from '../images/projectsImages/trivia.png';
import wallet from '../images/projectsImages/wallet.png';



export const Projects = [
    {
        name: 'Recepies App',
        img: food,
        description: 'App de receitas, descubra, aprenda, faça e favorite suas receitas preferidas. Projeto em grupo desenvolvido em React Hooks e metodologias ágeis.',
        url: 'em breve',
        category: 'Front-end',
        tolls: ['React', 'Javascript'],
        git: 'https://github.com/istvanoliva/recipes-app',
    },
    {
        name: 'Wallet',
        img: wallet,
        description: 'Carteira digital para administrar suas finanças com suas respectivas moedas. Projeto desenvolvido em componentes de classe React e Redux',
        url: 'em breve',
        category: 'Front-end',
        tolls: ['React', 'Javascript', 'Redux'],
        git: 'https://github.com/istvanoliva/trybewallet',
    },
    {
        name: 'Trunfo',
        img: card,
        description: 'Jogo Super Trunfo, você pode criar suas cartas em um CRUD desenvolvido em componentes de classe React.',
        url: 'em breve',
        category: 'Front-end',
        tolls: ['React', 'Javascript'],
        git: 'https://github.com/istvanoliva/tryunfo',
    },
    {
        name: 'Trybetunes',
        img: ituns,
        description: 'App de música, crie seu perfil para buscar, ouvir, e criar sua lista de músicas favoritas. Projeto desenvolvido em componentes de classe React.',
        url: 'em breve',
        category: 'Front-end',
        tolls: ['React', 'Javascript'],
        git: 'https://github.com/istvanoliva/trybetunes',
    },
    {
        name: 'Frontend Online Store',
        img: carShop,
        description: 'App de compras (API do Mercado Livre). Desenvolvido em grupo ultilizando metodologias ágeis. Projeto desenvolvido em componentes de classe React.',
        url: '',
        category: 'Front-end',
        tolls: ['React', 'Javascript'],
        git: 'https://github.com/istvanoliva/online-store-frontend',
    },
    {
        name: 'React testing library',
        img: test,
        description: 'Testes de integração em React',
        url: '',
        category: 'Front-end',
        tolls: ['React', 'Javascript', 'RTL'],
        git: 'https://github.com/istvanoliva/react-testing-RTL',
    },
    {
        name: 'Trivia',
        img: trivia,
        description: 'Jogo "Quem quer ser um milionário" desenvolvido em grupo ultilizando metodologias ágeis. Projeto desenvolvido em componentes de classe React e Redux.',
        url: '',
        category: 'Front-end',
        tolls: ['React', 'Javascript', 'Redux'],
        git: 'https://github.com/istvanoliva/trivia-game',
    },
    {
        name: 'Star wars',
        img: starwars,
        description: 'Consumindo a API do StarWars e ultilizando componentes funcionais do React e Hooks, esse projeto lista todos os planetas do filme através de múltiplos filtros.',
        url: '',
        category: 'Front-end',
        tolls: ['React', 'Javascript'],
        git: 'https://github.com/istvanoliva/starwars-planets-search',
    },
    {
        name: 'Docker To Do List',
        img: docker,
        description: 'Projeto feito com objetivo de aprender e entender os comandos do Docker.',
        url: '',
        category: 'Back-end',
        tolls: ['Docker'],
        git: 'https://github.com/istvanoliva/docker-todo-list',
    },
    {
        name: 'MySQL All For One',
        img: db,
        description: 'Projeto feito com objetivo de aprender e entender os comandos básicos do MySQL.',
        url: '',
        category: 'Back-end',
        tolls: ['MySQL'],
        git: 'https://github.com/istvanoliva/mysql-all-for-one',
    },
    {
        name: 'MySQL One For All',
        img: db,
        description: 'Projeto feito com objetivo de aprender e entender os comandos do MySQL (filtragem de dados, manipulação de tabelas). ',
        url: '',
        category: 'Back-end',
        tolls: ['MySQL'],
        git: 'https://github.com/istvanoliva/mysql-one-for-all',
    },
    {
        name: 'Talker Manager',
        img: talker,
        description: 'API para cadastro (CRUD) de palestrantes desenvolvido em Node.js.',
        url: '',
        category: 'Back-end',
        tolls: ['Node.js', 'Express.js', 'Javascript', 'Docker' , 'MySQL'],
        git: 'https://github.com/istvanoliva/talker-manager',
    },
    {
        name: 'Store Manager',
        img: store,
        description: 'A API é um sistema de gerenciamento de vendas no formato dropshipping em que será possível criar, visualizar, deletar e atualizar produtos e vendas. (CRUD)',
        url: '',
        category: 'Back-end',
        tolls: ['Node.js', 'Express.js', 'Javascript', 'Docker' , 'MySQL'],
        git: 'https://github.com/istvanoliva/store-manager',
    },
    {
        name: 'Blogs API',
        img: blog,
        description: 'API e um banco de dados para a produção de conteúdo para um blog. Desenvolvido com ORM Sequelize e MySQL.',
        url: '',
        category: 'Back-end',
        tolls: ['Node.js', 'Express.js', 'Javascript', 'Docker' , 'MySQL', 'Sequelize'],
        git: 'https://github.com/istvanoliva/blogs-api',
    },
    {
        name: 'Heroku - Backend',
        img: cloud,
        description: 'Meu primeiro Deploy.',
        url: '',
        category: 'Back-end',
        tolls: ['Heroku', 'Javascript', 'Node.js'],
        git: 'https://github.com/istvanoliva/heroku-deploy-back-end-app',
    },
    {
        name: 'Heroku - Frontend',
        img: cloud,
        description: 'Meu primeiro Deploy.',
        url: '',
        category: 'Back-end',
        tolls: ['Heroku', 'Javascript', 'Node.js'],
        git: 'https://github.com/istvanoliva/heroku-deploy-front-end-app',
    },
    {
        name: 'Trybesmith',
        img: RPG,
        description: 'Uma loja de itens medievais, no formato de uma API, utilizando Typescript.',
        url: '',
        category: 'Back-end',
        tolls: ['Node.js', 'Typescript', 'Express.js', 'MySQL'],
        git: 'https://github.com/istvanoliva/trybesmith',
    },
    {
        name: 'Trybers and Dragons',
        img: dragon,
        description: 'Projeto com o objetivo de entender os princípios da arquitetura SOLID e POO em uma estrutura de jogos de interpretação de papéis, mais conhecidos como jogos RPG ',
        url: '',
        category: 'Back-end',
        tolls: ['Node.js', 'Typescript', 'Express.js'],
        git: 'https://github.com/istvanoliva/trybe-and-dragons',
    },
    {
        name: 'Trybe Futebol Club',
        img: soccer,
        description: 'O TFC é um site informativo sobre partidas e classificações de futebol!',
        url: '',
        category: 'Back-end',
        tolls: ['Node.js', 'Express.js', 'Typescript', 'Docker' , 'MySQL', 'Sequelize', 'React'],
        git: 'https://github.com/istvanoliva/TFC',
    },
    {
        name: 'Commerce - Mongo queires',
        img: store2,
        description: 'Projeto feito com objetivo de aprender e entender os comandos básicos do MongoDb.',
        url: '',
        category: 'Back-end',
        tolls: ['Node.js', 'Javascript', 'MongoDb'],
        git: 'https://github.com/istvanoliva/mongoDB-queries',
    },
    {
        name: 'Car Shop',
        img: car,
        description: 'API desenvolvida para gerenciar uma concessionária de veículos, utilizando o banco de dados MongoDB e ODM. (POO)',
        url: '',
        category: 'Back-end',
        tolls: ['Node.js', 'Typescript', 'Express.js', 'MongoDb', 'Mongoose'],
        git: 'https://github.com/istvanoliva/car-shop',
    },
    {
        name: 'Jobs insights',
        img: python,
        description: 'Ciência da Computação: Análises a partir de um conjunto de dados sobre empregos.',
        url: '',
        category: 'Back-end',
        tolls: ['Python'],
        git: 'https://github.com/Istvanoliva/jobs-insights',
    },
    {
        name: 'Inventory report',
        img: python,
        description: 'Ciência da Computação: Gerador de relatórios que recebe como entrada arquivos com dados de um estoque e gera, como saída, um relatório acerca destes dados. (POO)',
        url: '',
        category: 'Back-end',
        tolls: ['Python'],
        git: 'https://github.com/Istvanoliva/inventory-report',
    },
    {
        name: 'Tech News',
        img: python,
        description: 'Ciência da Computação: Projeto que tem como principal objetivo fazer consultas em notícias sobre tecnologia (Raspagem de dados).',
        url: '',
        category: 'Back-end',
        tolls: ['Python'],
        git: 'https://github.com/Istvanoliva/tech-news',
    },
    {
        name: 'Algorithms',
        img: python,
        description: 'Ciência da Computação: Projeto com objetivo de resolver problemas/Otimizar algoritmos sob pressão.',
        url: '',
        category: 'Back-end',
        tolls: ['Python'],
        git: 'https://github.com/Istvanoliva/algorithms',
    },
    {
        name: 'Trybe is not Google',
        img: python,
        description: 'Ciência da Computação: Programa que simula um algoritmo de indexação de documentos similar ao do Google. Seu programa é ser capaz de identificar ocorrências de termos em arquivos TXT.',
        url: '',
        category: 'Back-end',
        tolls: ['Python'],
        git: 'https://github.com/Istvanoliva/ting',
    },
    {
        name: 'Restaurant Orders',
        img: python,
        description: 'Ciência da Computação: Sistema que gera relatórios sobre os pedidos e as pessoas clientes que frequentam a lanchonete',
        url: '',
        category: 'Back-end',
        tolls: ['Python'],
        git: 'https://github.com/Istvanoliva/restaurant-orders-py',
    },
    
];

export const stacks = [
    { value: 'Javascript', label: 'Javascript' },
    { value: 'React', label: 'React' },
    { value: 'Node.js', label: 'Node.js' },
    { value: 'Python', label: 'Python' },
    { value: 'Typescript', label: 'Typescript' },
    { value: 'Docker', label: 'Docker' },
    { value: 'MySQL', label: 'MySQL' },
    { value: 'MongoDb', label: 'MongoDb' },
    { value: 'Sequelize', label: 'Sequelize' },
    { value: 'Mongoose', label: 'Mongoose' },
    { value: 'Jest', label: 'Jest' },
    { value: 'RTL', label: 'RTL' },
    { value: 'Express.js', label: 'Express.js' },
    { value: 'Heroku', label: 'Heroku' }
];

export const categories = [
    { value: 'Todas', label: 'Todas' },
    { value: 'Back-end', label: 'Back-end' },
    { value: 'Front-end', label: 'Front-end' }
];

