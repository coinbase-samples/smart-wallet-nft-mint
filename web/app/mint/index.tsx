'use client';

import dynamic from 'next/dynamic';
import Header from '../../src/components/header/Header';
import Footer from '../../src/components/footer/Footer';

// Because the mint page relies so heavily on client-side state, without disabling SSR
// for its internals we get annoying hydration errors. A future enhancement would be to
// read token metadata through a provider that is available server-side.
const MintContractDemo = dynamic(
  async () => import('../../src/pageComponents/mint/ContractDemo').then((mod) => mod),
  {
    ssr: false,
  },
);

/**
 * Use the page component to wrap the components
 * that you want to render on the page.
 */
export default function MintPage() {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <Header />
      <main className="container h-full">
        <MintContractDemo />
      </main>
      <Footer />
    </div>
  );
}
