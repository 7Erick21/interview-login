import './App.css';
import './input.css';
import LogoLogin from './assets/logo.png';
import Google from './assets/svgs/google.svg';
import Apple from './assets/svgs/apple.svg';
import Facebook from './assets/svgs/facebook.svg';
import { InputStyle } from './inputStyle';
import { useState } from 'react';

function App() {
  const [view, setView] = useState<boolean>(true);

  const handleFocues = () => {
    if (window.innerWidth <= 768) {
      setView(false);
    }
  };

  const handleBlur = () => {
    if (window.innerWidth <= 768) {
      setView(true);
    }
  };

  return (
    <div className='grid w-full overflow-x-hidden  md:grid-cols-[1fr_2fr] min-h-screen  bg-[#171B24]'>
      <div
        className='flex flex-col items-center'
        style={{
          gap: 'clamp(2.625rem, 1.7321rem + 4.4643vw, 4rem)',
          padding:
            'clamp(2.375rem, 1.2321rem + 5.7143vw, 5rem) clamp(1rem, 0.0357rem + 4.8214vw, 4.375rem) clamp(1rem, 0.8929rem + 0.5357vw, 1.375rem) clamp(1rem, 0.0357rem + 4.8214vw, 4.375rem)',
        }}
      >
        {view && (
          <div
            className='flex flex-col items-center gap-6 md:gap-3
        '
          >
            <img
              src={LogoLogin}
              className='w-1/3 aspect-[4/4] md:w-2/5 rounded-3xl'
            />
            <p className='text-logo'>
              El primer navegador IA de seducción de Latinoamérica
            </p>
          </div>
        )}

        <div className='flex flex-col w-full gap-10 items-center'>
          <div className='flex flex-col gap-8 items-center w-full'>
            <p className='h1'>Iniciar Sesión</p>
            <div className='flex flex-col gap-7 w-full'>
              <div className='flex flex-col gap-5 w-full'>
                <div className='flex flex-col gap-3 w-full'>
                  <InputStyle
                    label='Ingresar email'
                    placeholder='Ingresar'
                    onFocus={handleFocues}
                    onBlur={handleBlur}
                  />
                  <InputStyle
                    label='Ingresar clave '
                    placeholder='Ingresar'
                    onFocus={handleFocues}
                    onBlur={handleBlur}
                  />
                  <div className='flex items-center gap-3'>
                    <div className='container-check'>
                      <input className='checkboxaaa' type='checkbox' />
                    </div>
                    <p className='text-checkbox'>Recordar cuenta</p>
                  </div>
                </div>
                <div className='button'>Ingresar</div>
              </div>
              <p className='olvide'>Olvide mi contraseña</p>
            </div>
          </div>

          <div className='flex flex-col items-center gap-6 w-full'>
            <div className='flex items-center w-full'>
              <div className='flex-grow border-t border-muted'></div>
              <span className='mx-4 text-muted-foreground text-[#DADADA]'>
                O
              </span>
              <div className='flex-grow border-t border-muted'></div>
            </div>

            <div className='grid grid-cols-3 gap-[14px] w-full'>
              <div className='bg-[#2A2F3C] border-[#505C79] rounded-[20px] border-[1px] border-solid w-full flex justify-center items-center py-2 cursor-pointer hover:opacity-50'>
                <img src={Google} />
              </div>
              <div className='bg-[#2A2F3C] border-[#505C79] rounded-[20px] border-[1px] border-solid w-full flex justify-center items-center py-2 cursor-pointer hover:opacity-50'>
                <img src={Apple} />
              </div>
              <div className='bg-[#2A2F3C] border-[#505C79] rounded-[20px] border-[1px] border-solid w-full flex justify-center items-center py-2 cursor-pointer hover:opacity-50'>
                <img src={Facebook} />
              </div>
            </div>
          </div>
        </div>

        <div className='register'>
          ¿Aún no tienes cuenta? <span>Regístrate aquí</span>
        </div>
      </div>
      <div className='aaaaaa'></div>
      {/* <img src={ImageLogin} className='w-full object-scale-down logo' /> */}
    </div>
  );
}

export default App;
