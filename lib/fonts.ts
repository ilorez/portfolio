import { Inter as FontSans ,League_Spartan as PrimaryFont, Roboto as SecondaryFont, Roboto_Mono as ThirdFont } from 'next/font/google';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
});

const primaryFont = PrimaryFont({
  subsets: ['latin'],
  variable: '--font-primary'
});

const secondaryFont = SecondaryFont({
  subsets: ['latin'],
  variable: '--font-secondary',
  weight: '100'
});

const thirdFont = ThirdFont({
  subsets: ['latin'],
  variable: '--font-third'
});

export const fonts = [ primaryFont, secondaryFont, thirdFont,fontSans];
