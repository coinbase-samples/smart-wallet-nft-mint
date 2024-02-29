import Link from 'next/link';
import clsx from 'clsx';

export default function BuildHeader({ className }: { className?: string }) {
  return (
    <div
      className={clsx('h-[108px] w-full p-4 text-left md:text-center md:h-[54px]', className)}
      style={{
        backgroundColor: '#141519',
      }}
    >
      <span
        className="mr-2"
        style={{
          background:
            'linear-gradient(90deg, #45E1E5 0%, #ABFF28 30%, #FFD200 66.5%, #FBCFFA 100%) text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        We’re building a smart wallet. Become an early partner and help build a great onchain
        experience.
      </span>
      <Link
        href="https://www.coinbase.com/blog/evolving-wallets-to-bring-a-billion-users-onchain"
        className="text-blue-500 no-underline"
        target="_blank"
      >
        Learn more
      </Link>
    </div>
  );
}
