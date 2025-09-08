import { cn } from './utils';

const links = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/cms', label: 'CMS' },
  { href: '/tryit', label: 'Editor' },
  { href: '/visualizer', label: 'Visualizer' },
  { href: '/auth', label: 'Auth' },
];

export default function Sidebar() {
  return (
    <nav className="space-y-2">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className={cn('block rounded-md p-2 text-sm hocus:bg-muted/10')}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
