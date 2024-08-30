import imagePathElian from "../assets/images/Elian.webp"


const AboutMe = () => {
  return (
  	<section className="w-full flex container mt-20 justify-center items-center place-content-center m-auto">
      <article className="w-full">
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, 
        odio sequi veniam error molestiae quod possimus consequatur delectus beatae odit quia perferendis assumenda accusamus minima soluta animi nemo cum itaque.
        Maxime a porro repellendus iusto voluptate saepe, voluptates cupiditate, 
        minus soluta dolorem cumque consequatur, nisi blanditiis corporis cum sunt officia quidem error hic. Distinctio at minima officiis porro veritatis enim.
        Odio deleniti minima dolorem sint doloremque, eaque veritatis suscipit 
        fugiat culpa illum quibusdam expedita dicta sequi impedit ab, ducimus ipsum perspiciatis quidem a enim? Aperiam cumque iure ab impedit dignissimos.
        </p>
      </article>
      <div className="">
          <img src={imagePathElian} className="rounded-full w-full text-center"/>
        </div>
    </section>
  )
}

export default AboutMe
