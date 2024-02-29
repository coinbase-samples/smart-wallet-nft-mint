'use client';

import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { NavbarLink } from '../header/Navbar';
import CBWIcon from '../icons/CBWIcon';

export default function Footer() {
  return (
    <footer className="flex flex-1 flex-col justify-end">
      <div className="flex min-h-12 flex-col justify-between gap-12 bg-boat-footer-dark-gray py-12 lg:flex-row lg:px-8">
        <div className=" mx-auto flex basis-1/2 flex-col justify-center gap-16 px-8 md:flex-row">
          <div className="container flex w-full flex-wrap justify-between gap-8 px-4 text-center text-base font-normal leading-7 lg:justify-center">
            <span>Made with ❤️</span>
            <NavbarLink
              href="http://docs.cloud.coinbase.com/wallet-sdk/docs/sw-setup/"
              target="_blank"
            >
              SDK Documents
            </NavbarLink>
            <NavbarLink
              href="https://github.com/coinbase-samples/smart-wallet-nft-mint"
              target="_blank"
            >
              <GitHubLogoIcon width="24" height="24" />
              <span>Demo</span>
            </NavbarLink>
            <NavbarLink href="https://github.com/coinbase/coinbase-wallet-sdk" target="_blank">
              <GitHubLogoIcon width="24" height="24" />
              Wallet SDK
            </NavbarLink>
          </div>
        </div>
        <div className=" mx-auto flex basis-1/2 flex-col px-8">
          <CBWIcon />
          <div style={{ color: '#8A919E' }} className="mt-4">
            This app is a simple demo of our new smart contract wallet. Try it out today, and share feedback on Farcaster{' '}
            <a className='text-blue-500' target="_blank" href="https://warpcast.com/~/channel/coinbasewallet">/coinbasewallet</a>. 
          </div>
        </div>
      </div>
    </footer>
  );
}
