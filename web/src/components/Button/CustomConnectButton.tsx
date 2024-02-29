import { useCallback, useEffect } from 'react';
import { useAccount, useChainId, useConnect, useSwitchChain } from 'wagmi';
import { baseSepolia } from 'viem/chains';
import Button from './Button';
import { reloadIfNeeded } from '../../utils/reloadIfNeeded';

export function CustomConnectButton({
  className,
  buttonContent,
  miamiStyle = false,
}: {
  className?: string;
  buttonContent?: string;
  miamiStyle?: boolean;
}) {
  const { connectAsync, connectors } = useConnect();
  const { switchChain } = useSwitchChain();
  const { address, chain } = useAccount();

  useEffect(() => {
    console.log('>> switching chain', chain?.id !== baseSepolia.id);
    console.log('>> address', address);
    if (address && chain?.id !== baseSepolia.id) {
      switchChain({ chainId: baseSepolia.id });
    }
  }, [address]);

  const handleConnect = useCallback(async () => {
    const connector = connectors.find((c) => c.type == 'coinbaseWallet');

    if (connector) {
      console.log('>> connecting', connector.type);
      try {
        await connectAsync({ connector });
      } finally {
        reloadIfNeeded();
      }
    }
  }, [connectAsync, connectors]);

  if (miamiStyle) {
    return (
      <div className="group lg:self-start relative w-fit transition-transform duration-300 active:scale-95">
        <button 
        onClick={handleConnect}
        className={`relative z-10 rounded-lg bg-gradient-to-br from-[#5DE2F8] via-[#FDCF2F] to-[#CB36FF] p-0.5 duration-300`}>
          <span className="block rounded-md bg-slate-950 px-6 py-2 font-semibold duration-300 group-hover:bg-slate-950/50 group-hover:text-slate-50 group-active:bg-slate-950/80">
            {buttonContent ?? 'Connect'}
            </span>
          </button>
      </div>
    )
  }

  return (
    <Button
      onClick={handleConnect}
      type="button"
      className={
        className ??
        'inline-flex h-10 flex-grow items-center justify-center gap-2 rounded-3xl bg-white px-4 py-2'
      }
      buttonContent={buttonContent ?? 'Connect'}
    />

    
  );
}
