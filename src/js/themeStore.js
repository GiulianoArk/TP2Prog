// themeStore.js
import { create } from 'zustand';

const useThemeStore = create((set) => ({
  theme: 'light', // 'light' o 'dark'
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === 'light' ? 'dark' : 'light',
    })),
}));

export default useThemeStore;
