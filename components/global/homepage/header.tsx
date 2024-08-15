import Image from 'next/image';
import github_icon from '/public/icons/social/github.svg';

export default function Header() {
  return (
    <div className="">
      <div>
        <div>
          <span>Najdaoui Zobair</span>
          <span>Full-Stack Developer</span>
        </div>
        <div>
          <div>{/* image */}</div>
          <div>
            {/* links */}
            <ul>
              {/* github */}
              <li>
                <a href="https://github.com/ilorez" target="_blank">
                  <Image
                    src={github_icon}
                    alt="Github"
                    width={24}
                    height={24}
                    // change svg color to black
                    className="fill-current text-green-500"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
