import { useCallback, useState } from 'react';
import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import AccountConnect from './AccountConnect';
import { NavbarTitle } from './Navbar';

export default function NavbarMobile() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenuOpen = useCallback(() => setMobileMenuOpen((open) => !open), []);

  if (isMobileMenuOpen) {
    return (
      <nav className="mx-2 flex flex-col gap-4 rounded-[25px] bg-black bg-opacity-50 p-2 backdrop-blur-2xl">
        <div className={['flex flex-1 flex-grow items-center justify-between'].join(' ')}>
          <div className="h-38 flex grow items-center justify-between gap-4">
            <NavbarTitle />
            <button
              type="button"
              aria-label="Menu"
              data-state="open"
              onClick={toggleMobileMenuOpen}
            >
              <Cross1Icon width="24" height="24" />
            </button>
          </div>
        </div>
        <div className="mx-2">
          <AccountConnect />
        </div>
      </nav>
    );
  }

  return (
    <nav className={['flex flex-1 flex-grow items-center justify-between', 'mx-4'].join(' ')}>
      <div className="flex h-8 grow items-center justify-between gap-4">
        <NavbarTitle />
        <button type="button" aria-label="Menu" data-state="closed" onClick={toggleMobileMenuOpen}>
          <HamburgerMenuIcon width="24" height="24" />
        </button>
      </div>
    </nav>
  );
}
