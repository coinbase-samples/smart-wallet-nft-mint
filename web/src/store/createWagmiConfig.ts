import { createConfig, http } from 'wagmi';
import { base, baseSepolia, localhost } from 'wagmi/chains';
import { getChainsForEnvironment } from './supportedChains';
import { coinbaseWallet } from 'wagmi/connectors';

const appName = 'Smart Wallet Early Adopters';

export function createWagmiConfig(projectId: string) {
  const chains = getChainsForEnvironment();

  return createConfig({
    ssr: true,
    chains,
    transports: {
      [baseSepolia.id]: http(),
      [base.id]: http(),
      [localhost.id]: http(),
    },
    connectors: [
      coinbaseWallet({
        appName,
        appLogoUrl: 'https://smart-wallet-nft-mint.vercel.app/DappImage.png',
        connectionPreference: 'embedded',
      })
    ],
  });
}
