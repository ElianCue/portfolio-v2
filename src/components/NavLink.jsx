import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavLink = () => {
  return (
    <section className='container absolute'>
      <ul className='grid grid-rows-3 fixed gap-3 items-center place-content-center px-10 bottom-5 left-0'>
        <li>
          <a href='http://www.linkedin.com/in/elian-cueva-coronel' target='_blank' rel='noopener noreferrer' title='Go to LinkedIn'>
            <FontAwesomeIcon className='text-2xl mt-2 text-primary hover:cursor-pointer hover:-translate-y-1 hover:text-text-secondary' icon={faLinkedin}/>
          </a>
        </li>
        <li>
          <a href='https://github.com/ElianCue' target='_blank' rel='noopener noreferrer' title='Go to GitHub'>
            <FontAwesomeIcon className='text-2xl mt-2 text-primary hover:cursor-pointer hover:-translate-y-1 hover:text-text-secondary' icon={faGithub} />
          </a>
        </li>
        <li>
          <a href='/public/ElianCueva.CV.pdf' download title='Download CV'>
            <FontAwesomeIcon className='text-2xl mt-2 text-primary hover:cursor-pointer hover:-translate-y-1 hover:text-text-secondary' icon={faFile}/>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default NavLink;
