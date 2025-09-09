import { Bell, Menu } from 'lucide-react';
import ThemeToggle from '../../theme/ThemeToggle.jsx';
import { Button } from '../ui/Button.jsx';
import { Input } from '../ui/Input.jsx';

export default function TopNav({ onMenuClick }) {
  return (
    <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur dark:bg-gray-900/80">
      <div className="flex h-16 items-center gap-4 px-4">
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={onMenuClick}
          aria-label="Open navigation"
        >
          <Menu className="h-5 w-5" />
        </Button>
        <a href="#" className="font-semibold">
          ScientistShield
        </a>
        <div className="flex flex-1 items-center justify-end gap-2">
          <div className="hidden w-full max-w-xs md:block">
            <Input type="search" placeholder="Search..." aria-label="Search" />
          </div>
          <Button variant="ghost" size="sm" aria-label="Notifications">
            <Bell className="h-5 w-5" />
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
