import { useContext } from 'react';
import { Context } from './context/GlobalState';

function App() {
  const { theme, handleChangeTheme } = useContext(Context);

  return (
    <main
      className={`h-screen flex flex-col items-center justify-center p-4 font-[Poppins] bg-stone-100 text-stone-950 dark:bg-stone-900 dark:text-stone-50 ${
        theme === 'dark' ? 'dark' : ''
      }`}
    >
      <h1>Control de gastos</h1>
      <button
        className='bg-primary-500 dark:bg-secondary-500'
        onClick={handleChangeTheme}
      >
        tema
      </button>
    </main>
  );
}

export default App;
