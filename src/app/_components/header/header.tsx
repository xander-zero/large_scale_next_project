import Image from 'next/image';
import { TopNavigation } from './top-navigarion';

export const Header: React.FC = () => {
  return (
    <header className="border-b dark:border-base-content dark:border-opacity-5">
      <div className="container flex items-center justify-between h-full">
        <Image
          src="/images/logo.svg"
          alt="xander_logo"
          width={50}
          height={26}
        />
        <TopNavigation />
        <span className="mr-auto">User Authentication</span>
      </div>
    </header>
  );
};
