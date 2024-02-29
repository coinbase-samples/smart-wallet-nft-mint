import { generateMetadata } from '../src/utils/generateMetadata';
import MintPage from './mint';

export const metadata = generateMetadata({
  title: 'Smart Wallet Early Adopters',
  description:
    'Build Onchain Applications with Smart Wallet to utilize passkeys providing the best consumer onboarding experience in a few minutes.',
  images: 'themes.png',
  pathname: '',
});

/**
 * Server component, which imports the Home component (client component that has 'use client' in it)
 * https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts
 * https://nextjs.org/docs/pages/building-your-application/upgrading/app-router-migration#step-4-migrating-pages
 * https://nextjs.org/docs/app/building-your-application/rendering/client-components
 */
export default function Page() {
  return <MintPage />;
}
