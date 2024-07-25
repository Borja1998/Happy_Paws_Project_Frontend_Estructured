import React from 'react';
import Logo from '../../assets/img/whiteAPaws.png';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-r from-secondaryBlue to-secondaryGreen w-[100vw] h-[60vh] flex flex-col justify-center ">
      <div className='flex flex-row w-full h-full justify-around items-start text-white'>
        <div className='flex flex-col items-start relative top-6 right-64'>
          <h1 className='text-lg'>Apartados:</h1>
          <Link to={'/'} className='text-lg'>Home</Link>
          <Link to={'/'} className='text-lg'>Protectoras</Link>
          <Link to={'/'} className='text-lg'>Voluntariado</Link>
          <Link to={'/'} className='text-lg'>Inicio de sesión</Link>
          <Link to={'/'} className='text-lg'>Contacto</Link>
        </div>

        <div className='flex flex-col items-start relative top-6 right-84'>
          <h1 className='text-lg'>Happy Paws</h1>
          <Link to={'/'} className='text-lg'>Sobre Nosotros</Link>
          <Link to={'/'} className='text-lg'>Preguntas frecuentes</Link>
        </div>
      </div>

      <img src={Logo} alt="Logo" className='relative w-[5%] h-[90px] bottom-14 align-center justify-center' />
    </footer>
  );
};

export default Footer;
