import { faBootstrap, faCss3Alt, faGitAlt, faHtml5, faJs, faNodeJs, faPython, faReact, faSass } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";


export const SKILLS_FAVICON = [
    { name: 'React', icon: faReact },
    { name: 'Javascript', icon: faJs },
    { name: 'Python', icon: faPython },
    { name: 'Bootstrap', icon: faBootstrap },
    { name: 'HTML', icon: faHtml5 },
    { name: 'CSS', icon: faCss3Alt },
    { name: 'SQL', icon: faDatabase},
    { name: 'Nodejs', icon: faNodeJs},
    { name: 'Git', icon: faGitAlt},
    { name: 'Sass', icon: faSass},
  ];

  export const MY_PROJECTS = [
    {
      id: 1,
      title: 'My Service',
      description: 'My Service es una plataforma web desarrollada con React realizada en el proyecto de No Country.',
      link_github: "https://github.com/Ronin-21/My-Service",
      link_deploy: "https://my-service.vercel.app/",
      image: "../src/assets/images/proyectos/banner.png",
      technologies: [
        { id: 1, title: 'React' },
        { id: 2, title: 'Tailwind' },
        { id: 3, title: 'Redux Toolkits' },
        { id: 4, title: 'Framer Motion' },
      ]
    },
    {
      id: 2,
      title: 'E-Commerce "Jugueteria Cosmica"',
      description: 'E-commerce realizado como proyecto final del bootcamp Full Stack Engineer de Educacion IT',
      link_github: "https://github.com/ElianCue/proyecto-integrador",
      link_deploy: "https://proyecto-integrador-educacionit.glitch.me/",
      image: "../src/assets/images/proyectos/Captura de pantalla 2024-09-01 212834.jpg",
      technologies: [
        { id: 1, title: 'Javascript' },
        { id: 2, title: 'HTML5' },
        { id: 3, title: 'Sass' },
        { id: 4, title: 'Nodejs' },
        { id: 5, title: 'Express' },
        { id: 6, title: 'Handlebars' },
      ]
    },
    {
      id: 3,
      title: 'Password Generator',
      description: 'Generador de contraseñas hecha con react, en la cual se puso en practica conceptos basicos de React',
      link_github: "https://github.com/ElianCue/calculator-react",
      link_deploy: "https://6410e62a6b27e0348306beab--glittery-yeot-537d5f.netlify.app/",
      image: "../src/assets/images/proyectos/Captura de pantalla 2024-09-01 212908.jpg",
      technologies: [
        { id: 1, title: 'Javascript' },
        { id: 2, title: 'React' },
        { id: 3, title: 'HTML5' },
        { id: 4, title: 'CSS' },
      ]
    },
    {
      id: 4,
      title: 'Tic Tac Toe',
      description: 'Juego de Tic Tac Toe hecha con react, con el curso de Midudev, en el cual se emplean los diferentes hooks y el uso de componentes en React',
      link_github: "https://github.com/ElianCue",
      link_deploy: "/",
      image: "../src/assets/images/proyectos/Captura de pantalla 2024-09-01 213318.jpg",
      technologies: [
        { id: 1, title: 'React' },
        { id: 2, title: 'Javascript' }
      ]
    },
    {
      id: 4,
      title: 'Todo App TS',
      description: 'TODO APP hecha con react, con el curso de Midudev, en el cual se emplean los diferentes hooks y el uso de componentes en React',
      link_github: "https://github.com/ElianCue",
      link_deploy: "/",
      image: "../src/assets/images/proyectos/Captura de pantalla 2024-09-01 213318.jpg",
      technologies: [
        { id: 1, title: 'React' },
        { id: 2, title: 'Javascript' }
      ]
    },
  ];
  