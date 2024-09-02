import imagePathElian from "../assets/images/Elian.webp"


const AboutMe = () => {
  return (
    <section className="container flex gap-x-6 mt-10 justify-center items-center place-content-center w-full m-auto">
      <article className="w-1/3">
        <h1 className="text-2xl font-extrabold text-primary mb-2">Sobre Mí</h1>
        <p className="text-sm">
        Tengo 23 años y actualmente estudio la Licenciatura en Informática. Disfruto trabajar en equipo tengo un gran interés en el desarrollo de software. He completado diversos cursos de programación y estoy entusiasmado por aplicar mis conocimientos y habilidades en proyectos de desarrollo. Busco un empleo en el que pueda seguir capacitándome y así iniciar en el mundo laboral del desarrollo. Mi objetivo es integrarme en un equipo dinámico y contribuir al éxito de los proyectos con mi dedicación y pasión por la tecnología.
        </p>
      </article>
      <div className="border-2 rounded-full shadow-lg shadow-primary ">
          <img src={imagePathElian} className="rounded-full w-36 text-center"/>
        </div>
    </section>
  )
}

export default AboutMe
