import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Cat_Sad, Cat_Very_Happy } from './Icons';
import { AtSign, FerrisWheel, Lightbulb, TextSelect, User } from 'lucide-react';
import { ModeToggle } from '../mode-toggle';
// get theme from next-themes
import { useTheme } from 'next-themes';

interface NavbarProps {}
const Navbar: React.FC<NavbarProps> = () => {
  // get theme from next-themes
  const { theme } = useTheme();
  const [open, setOpen] = useState(true);
  // navbar on scroll effect
  const [navStyle, setNavStyle] = useState('');
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrolledDown = prevScrollPos < currentScrollPos;

      setPrevScrollPos(currentScrollPos);

      // Show the navbar if scrolling up or at the top

      if (window.scrollY > 10) {
        if (!isScrolledDown) {
          setNavStyle('');
        } else {
          // setNavStyle('display-none  hidden');
          setOpen(false);
        }
      } else {
        // setNavStyle('bg-none');
        setOpen(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div
      className={cn(
        'flex  flex-col gap-6 w-fit px-1 py-1 bg-card  rounded-full shadow-lg dark:bg-card  ',
        navStyle
      )}
    >
      <div className="w-full" onClick={() => setOpen(!open)}>
        {open ? (
          <div className="flex flex-col items-center ">
            {/* if it next theme is dark mode color of cat should be white */}
            {theme === 'dark' ? (
              <Cat_Very_Happy color="white" size="60" />
            ) : (
              <Cat_Very_Happy color="black" size="60" />
            )}

            <span className="relative bottom-[10px]">Ilorez</span>
          </div>
        ) : theme === 'dark' ? (
          <Cat_Sad color="white" size="60" />
        ) : (
          <Cat_Sad color="black" size="60" />
        )
        }
      </div>
      {open && (
        <div className="w-full">
          <nav className="w-full">
            <ul className="flex flex-col gap-4 w-full items-center [&>li>a]:w-full [&>li>a]:flex [&>li>a]:flex-col [&>li>a]:items-center pb-2 ">
              <li>
                <Link href="#about">
                  <User />
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <TextSelect />
                  <span>Resume</span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <Lightbulb />
                  <span>Projects</span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <FerrisWheel />
                  <span>Blogs</span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <AtSign />
                  <span>Contact</span>
                </Link>
              </li>
              <li>
                <ModeToggle />
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
