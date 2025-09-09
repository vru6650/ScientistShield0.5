/* eslint-disable react/prop-types */
import ThemeToggle from './ThemeToggle';
import Footer from '../components/Footer';

export default function AppShell({ sidebar, children }) {
  return (
    <div className="flex min-h-screen flex-col bg-bg text-text">
      <a href="#main" className="skip-to-content">
        Skip to content
      </a>
      <header className="sticky top-0 z-40 border-b border-border bg-surface">
        <div className="container flex h-14 items-center justify-between">
          <span className="font-bold">ScientistShield</span>
          <nav className="flex items-center gap-4">
            <a href="/" className="hocus:underline">
              Home
            </a>
            <a href="/projects" className="hocus:underline">
              Projects
            </a>
            <ThemeToggle />
          </nav>
        </div>
      </header>
      <div className="container grid flex-1 gap-4 md:grid-cols-[200px_1fr]">
        {sidebar && (
          <aside className="hidden md:block" aria-label="Sidebar">
            {sidebar}
          </aside>
        )}
        <main id="main" className="py-4">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}
