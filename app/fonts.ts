import { Inter as FontSans ,League_Spartan as PrimaryFont, Roboto as SecondaryFont, Roboto_Mono as ThirdFont } from 'next/font/google';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
});

export const primaryFont = PrimaryFont({
  subsets: ['latin'],
  variable: '--font-primary'
});

export const secondaryFont = SecondaryFont({
  subsets: ['latin'],
  variable: '--font-secondary',
  weight: '100'
});

export const thirdFont = ThirdFont({
  subsets: ['latin'],
  variable: '--font-third'
});
