import clsx from 'clsx';

export default function MintProcessingStep() {
  return (
    <div
      className={clsx(
        'flex flex-col items-center gap-3 rounded-lg border border-boat-color-palette-line',
        'mb-8 bg-boat-footer-dark-gray py-8 px-4 md:px-12',
      )}
      >
      <div className="spinner-container relative">
        <div className="spinner animate-spin border-4 border-white border-t-transparent rounded-full w-16 h-16"></div>
        <img src="/WalletLogo.png" className="spinner-image absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8" />
      </div>

      <h2 className="w-full text-center text-2xl font-semibold text-white">
        Confirm transaction  
      </h2>

      <div className="text-center text-md text-gray-400">
        Please confirm the transaction in your wallet
      </div>
    </div>
  );
}
