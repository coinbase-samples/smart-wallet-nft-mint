import { ConnectButton } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import { AccountDropdown } from './AccountDropdown';
import { AccountInfoPanel } from './AccountInfoPanel';
import { baseSepolia } from 'viem/chains';
import { CustomConnectButton } from '../Button/CustomConnectButton';

/**
 * AccountConnect
 *  - Connects to the wallet
 *  - Disconnects from the wallet
 *  - Displays the wallet network
 */
function AccountConnect() {
  return (
    <ConnectButton.Custom>
      {({ account, chain, openChainModal, authenticationStatus, mounted }) => {
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === 'authenticated') &&
          chain?.id === baseSepolia.id;

        console.log({ connected, ready, account, chain, authenticationStatus, chainId: chain?.id });
        return (
          <div
            className="flex flex-grow"
            {...(!ready && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
                backgroundColor: '#B388F5',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return <CustomConnectButton miamiStyle />;
              }

              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button">
                    Wrong network
                  </button>
                );
              }

              return (
                <>
                  {/* <div className="flex flex-grow flex-col md:hidden">
                    <AccountInfoPanel />
                  </div> */}
                  <div className="inline-flex">
                    <AccountDropdown />
                  </div>
                </>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}

export default AccountConnect;
