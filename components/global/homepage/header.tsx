import Image from 'next/image';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import my_profile_image from '/public/znajdaou.jpg';
import bg_image from '/public/background.jpg';
import {
  Github,
  Discord,
  Facebook,
  Instagram,
  Linkedin,
  Stackoverflow,
  Twitter
} from '../Icons';
import { Mouse } from 'lucide-react';

const socials = [
  {
    name: 'github',
    link: 'https://github.com/ilorez',
    icon: Github
  },
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/zobair-najdaoui-7b7b6b1b2/',
    icon: Linkedin
  },
  {
    name: 'twitter',
    link: 'https://twitter.com/zobair_najdaoui',
    icon: Twitter
  },
  {
    name: 'stackoverflow',
    link: 'https://stackoverflow.com/users/14309191/zobair-najdaoui',
    icon: Stackoverflow
  },
  {
    name: 'instagram',
    link: 'https://www.instagram.com/zobair_najdaoui/',
    icon: Instagram
  },
  {
    name: 'facebook',
    link: 'https://www.facebook.com/zobair.najdaoui',
    icon: Facebook
  },
  {
    name: 'discord',
    link: 'https://discord.gg/8HvX7sZ',
    icon: Discord
  }
];

export default function Header() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg_image.src})`
      }}
      className="h-[75vh] relative bg-cover bg-center p-0 m-0 text-white"
    >
      <div className="p-10 w-full h-full flex flex-col gap-2 items-center bg-black bg-opacity-80  ">
        <div className="pl-24 w-full h-full flex   justify-around items-center">
          <div className="capitalize flex flex-col gap-6 text-3xl items-center ">
            <span >Najdaoui Zobair</span>
            <span className="text-primary">
              Full-Stack Developer
            </span>
          </div>
          <div className={'flex flex-col gap-6 items-center'}>
            <div>
              <Avatar className="w-[200px] h-auto">
                <AvatarImage src={my_profile_image.src} alt="zobair najdaoui" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div>
              {/* links */}
              <ul className="flex gap-3 ">
                {socials.map((social) => (
                  <li key={social.name}>
                    {/* // make svg white */}
                    <a
                      href={social.link}
                      target="_blank"
                      rel="noreferrer"
                      // className="[&>svg]:fill-white"
                    >
                      <social.icon size="25" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Mouse size={40}  />
      </div>
    </div>
  );
}


