import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';
type Accent = 'orange' | 'rosa';

const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
  accent: Accent;
  toggleAccent: () => void;
}>({
  theme: 'dark',
  toggleTheme: () => {},
  accent: 'orange',
  toggleAccent: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem('ascenda-theme') as Theme) || 'dark';
  });

  const [accent, setAccent] = useState<Accent>(() => {
    return (localStorage.getItem('ascenda-accent') as Accent) || 'orange';
  });

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('ascenda-theme', theme);
  }, [theme]);

  useEffect(() => {
    if (accent === 'rosa') {
      document.documentElement.setAttribute('data-accent', 'rosa');
    } else {
      document.documentElement.removeAttribute('data-accent');
    }
    localStorage.setItem('ascenda-accent', accent);
  }, [accent]);

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));
  const toggleAccent = () => setAccent(a => (a === 'orange' ? 'rosa' : 'orange'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, accent, toggleAccent }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
