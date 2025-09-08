import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      type="button"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-md border border-border bg-surface text-text hocus:bg-muted/10"
    >
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  );
}
