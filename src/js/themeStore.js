import { create } from 'zustand';

const getInitialTheme = () => {
  const storedTheme = localStorage.getItem('theme');
  return storedTheme === 'dark' ? 'dark' : 'light';
};

const useThemeStore = create((set) => ({
  theme: getInitialTheme(),
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return { theme: newTheme };
    }),
}));

export default useThemeStore;
