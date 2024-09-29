import React, { useState, useEffect } from 'react';

function App() {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      return storedTheme;
    }

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }

    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html').classList.add('dark');
    } else {
      document.querySelector('html').classList.remove('dark');
    }
  }, [theme]);

  const handleChangeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };
  return (
    <main className='h-screen flex flex-col items-center justify-center p-4 font-[Poppins] bg-stone-100 text-stone-950 dark:bg-stone-900 dark:text-stone-50'>
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
