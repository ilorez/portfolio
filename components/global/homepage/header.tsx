import Image from 'next/image';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import my_profile_image from '/public/znajdaou.jpg';
import bg_image from '/public/background.jpg';
import { Github, Discord,Facebook, Instagram, Linkedin,Stackoverflow, Twitter } from '../Icons';

const socials = [
  {
    name: 'github',
    link: 'https://github.com/ilorez',
    icon: Github,
  },
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/zobair-najdaoui-7b7b6b1b2/',
    icon: Linkedin,
  },
  {
    name: 'twitter',
    link: 'https://twitter.com/zobair_najdaoui',
    icon: Twitter,
  },
  {
    name: 'stackoverflow',
    link: 'https://stackoverflow.com/users/14309191/zobair-najdaoui',
    icon: Stackoverflow,
  },
  {
    name: 'instagram',
    link: 'https://www.instagram.com/zobair_najdaoui/',
    icon: Instagram,
  },
  {
    name: 'facebook',
    link: 'https://www.facebook.com/zobair.najdaoui',
    icon: Facebook,
  },
  {
    name: 'discord',
    link: 'https://discord.gg/8HvX7sZ',
    icon: Discord,
  },
];

export default function Header() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg_image.src})`
      }}
      className="h-[75vh] relative bg-cover bg-center p-0 m-0 text-card dark:text-card-foreground"
    >
      <div className="w-full h-full flex   justify-center items-center bg-black bg-opacity-60">
        <div>
          <span>Najdaoui Zobair</span>
          <span>Full-Stack Developer</span>
        </div>
        <div>
          <div>
            <Avatar className="w-[200px] h-auto">
              <AvatarImage src={my_profile_image.src} alt="zobair najdaoui" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div>
            {/* links */}
            <ul className="flex gap-2">
              {socials.map((social) => (
                <li key={social.name}>
                  {/* // make svg white */}
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className="[&>svg]:fill-white"

                  >
                    <social.icon size='25' />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <header
      style={{
        backgroundImage: `url(${src})`,
      }}
      className="h-[75vh] relative bg-cover bg-center p-0 m-0 text-card dark:text-card-foreground"
    >
      <div className="w-full h-full flex   justify-center items-center backdrop-brightness-50">
        <Hero
          subtitle="Welcome to our football haven, where every goal, tackle, and victory finds its home. Get ready to dive into the thrilling world of football with us!"
          title={title}
        />
        <div
          className=" max-w-[400px] 
        ml-10 h-full 
        bg-[url('/flishOfppt.svg')] 
        
        bg-cover bg-left  overflow-visible
        w-full 
        hidden sm:flex items-center justify-center
        "
        >
        </div>
      </div>
    </header> */
}
