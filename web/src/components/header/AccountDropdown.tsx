import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { clsx } from 'clsx';
import { useAccount } from 'wagmi';
import { AccountInfoPanel } from './AccountInfoPanel';
import { getSlicedAddress } from '../../utils/address';

const AddressDisplay = () => {
  const { address } = useAccount();

  return (
    <div className="flex items-center rounded-full bg-black px-3 py-2">
      <div className="text-neutral-200">{getSlicedAddress(address)}</div>
    </div>
  );
};

export function AccountDropdown() {
  const { address } = useAccount();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        {address && (
          <button className="relative rounded-full inline-flex  p-0.5 bg-gradient-to-br from-[#5DE2F8] via-[#FDCF2F] to-[#CB36FF]">
           <span className="relative transition-all ease-in duration-75">
            <AddressDisplay />
            </span>
          </button>
        )}
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={40}
          className={clsx(
            'h-42 inline-flex w-60 flex-col items-start justify-start',
            'rounded-lg bg-neutral-900 bg-opacity-90 px-6 py-2 shadow backdrop-blur-2xl',
            'DropdownMenuContent',
          )}
        >
          <AccountInfoPanel />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
