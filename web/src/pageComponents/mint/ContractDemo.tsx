import { useMemo, useState } from 'react';
import { encodeFunctionData, formatEther } from 'viem';
import { useAccount, useEstimateGas } from 'wagmi';
import NextImage from '../../components/NextImage/NextImage';
import { EXPECTED_CHAIN } from '../../constants';
import { useSWAdopterContract } from '../../hooks/contracts';
import { useCollectionMetadata } from '../../hooks/useCollectionMetadata';
import NotConnected from './NotConnected';
import StartMintStep from './steps/StartMintStep';
import SwitchNetwork from './SwitchNetwork';

export enum MintSteps {
  START_MINT_STEP,
  MINT_PROCESSING_STEP,
  OUT_OF_GAS_STEP,
  MINT_COMPLETE_STEP,
}

export default function MintContractDemo() {
  const [mintStep, setMintStep] = useState<MintSteps>(MintSteps.START_MINT_STEP);

  const { chain, address } = useAccount();

  const contract = useSWAdopterContract();
  console.log('contract', contract);
  const onCorrectNetwork = chain?.id === EXPECTED_CHAIN.id;

  let {
    collectionName,
    description,
    imageAddress,
    isLoading: isLoadingCollectionMetadata,
  } = useCollectionMetadata(
    onCorrectNetwork,
    contract.status === 'ready' ? contract.address : undefined,
    contract.abi,
  );
  console.log('collectionName', collectionName, isLoadingCollectionMetadata);
  const mintContent = useMemo(() => {
    return (
      <StartMintStep
        setMintStep={setMintStep}
        mintStep={mintStep}
        collectionName={collectionName}
      />
    );
  }, [mintStep, collectionName]);

  /*
  if (contract.status === 'notConnected') {
    return <NotConnected />;
  }

  if (contract.status === 'onUnsupportedNetwork') {
    return <SwitchNetwork />;
  }
*/
  /*
  if (isLoadingCollectionMetadata || contract.status !== 'ready') {
    return (
      <div className="my-5 flex justify-center align-middle">
        <span className="text-xl">
          <SpinnerIcon className="h-20 w-20 animate-spin" />
        </span>
      </div>
    );
  }
*/

  collectionName = 'Smart Wallet Early Adopter';
  imageAddress = '/smart_wallet.gif';

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 h-full py-8">
      <NextImage
        src={imageAddress}
        altText={collectionName}
        className="w-[350px] md:w-[500px] rounded-2xl"
      />
      <div className="flex flex-col items-center justify-start gap-4">
        <h1
          className="text-center font-bold lg:ml-0 lg:mr-auto lg:text-left px-4 md:px-0"
          style={{ fontFamily: 'Helvetica Neue, sans-serif', fontSize: '32px' }}
        >
          {collectionName}
        </h1>
        <div className="lg:ml-0 lg:mr-auto lg:text-left" style={{ color: '#8A919E' }}>
          {' '}
          0.00 ETH{' '}
        </div>
        {mintContent}
      </div>
    </div>
  );
}
