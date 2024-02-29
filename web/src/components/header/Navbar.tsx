import { clsx } from 'clsx';
import NextLink from 'next/link';
import HeaderIcon from '../icons/HeaderIcon';
import AccountConnect from './AccountConnect';

export function NavbarLink({
  href,
  children,
  target,
}: {
  href: string;
  children: React.ReactNode;
  target?: string;
}) {
  return (
    <NextLink
      href={href}
      className="font-robotoMono flex min-w-8 gap-2 px-0 text-center text-base font-normal text-white no-underline"
      target={target}
    >
      {children}
    </NextLink>
  );
}

export function NavbarTitle() {
  return (
    <div className="flex h-8 items-center justify-start gap-4">
      <div className="mt-4 flex">
        <NextLink href="/" passHref className="relative m-auto mr-1 h-8 w-8">
          <HeaderIcon />
        </NextLink>
        <span>YOUR APP HERE</span>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <nav className={clsx('flex flex-1 flex-grow items-center justify-between px-8 lg:px-0')}>
      <NavbarTitle />
      <div>
        <AccountConnect />
      </div>
    </nav>
  );
}

export default Navbar;
