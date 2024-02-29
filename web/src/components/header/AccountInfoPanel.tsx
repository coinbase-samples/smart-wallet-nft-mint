import { useCallback } from 'react';
import { Name } from '@coinbase/onchainkit';
import { ExitIcon } from '@radix-ui/react-icons';
import { useAccount, useDisconnect } from 'wagmi';
import { getSlicedAddress } from '../../utils/address';

export function AccountInfoPanel() {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const handleDisconnectWallet = useCallback(() => {
    disconnect();
    location.reload();
  }, [disconnect]);

  if (!address) return null;

  return (
    <>
      <div className="my-4 inline-flex items-center justify-start gap-2">
        <div className="inline-flex flex-col items-start justify-center gap-1">
          <div className="font-inter w-32 text-base font-medium text-white">
            <p>{getSlicedAddress(address)}</p>
          </div>
        </div>
      </div>
      <hr className="h-px self-stretch border-transparent bg-zinc-400 bg-opacity-20" />
      <button
        type="button"
        aria-label="Disconnect"
        className="my-4 inline-flex items-center justify-between self-stretch"
        onClick={handleDisconnectWallet}
      >
        <span className="font-inter w-32 text-left text-base font-medium text-white">Log out</span>
        <ExitIcon className="relative h-4 w-4" />
      </button>
    </>
  );
}
