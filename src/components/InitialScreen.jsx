import { motion } from 'framer-motion';

const InitialScreen = () => {
  // Variantes para animar el texto
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="container flex justify-center m-auto md:mt-0 md:p-36 content-center items-center w-1/2 p-2">
      <article className="flex justify-center flex-col mb-20">
        {/* Animación de entrada del saludo */}
        <motion.span
          className="text-lg"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          ¡Hola! soy
        </motion.span>

        {/* Animación del nombre */}
        <motion.div
          className="text-extrabold text-start mt-1"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ delay: 0.3 }} // Añadir un pequeño delay
        >
          <p className="text-7xl">Elian Cueva Coronel</p>
        </motion.div>

        {/* Animación del subtítulo */}
        <motion.div
          className="text-xl text-opacity-45"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ delay: 0.5 }} // Delay para la secuencia
        >
          <span>Desarrollador Frontend jr.</span>
        </motion.div>
      </article>

    </section>
  );
}

export default InitialScreen;
