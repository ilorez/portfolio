import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Cat_Happy, Cat_Sad, Cat_Very_Happy } from './Icons';

interface NavbarProps {
  navHeight?: number;
}
const Navbar: React.FC<NavbarProps> = ({ navHeight = 4 }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`bg-card border-gray-200 rounded-lg dark:bg-card py-${navHeight}`}
    >
      <div>
        <Cat_Very_Happy color="black" size="60" />
      </div>
      <div>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
