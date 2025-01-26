"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleSearchClick = () => {
    // router.push('/search');
    console.log('search clicked');
  };

  const handleHeartClick = () => {
    // router.push('/favorites');
    console.log('heart clicked');
  };

  const handleUserClick = () => {
    // router.push('/profile');
    console.log('user clicked');
  };

  const handleNightModeClick = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  const navIcons = [
    { src: '/assets/icons/search.svg', alt: 'search', onClick: handleSearchClick },
    { src: '/assets/icons/black-heart.svg', alt: 'heart', onClick: handleHeartClick },
    { src: '/assets/icons/user.svg', alt: 'user', onClick: handleUserClick },
    { src: '/assets/icons/night-mode.png', alt: 'night mode', onClick: handleNightModeClick }
  ];

  return (
    <header className="w-full">
      
      <nav className="nav">
        <Link href="/" className="flex items-center gap-1">
          <Image 
            src="/assets/icons/logo.svg"
            width={27}
            height={27}
            alt="logo"
            className="invert"
          />

          <p className="nav-logo">
            Price<span className='text-blue-400 text-size-2 text-7x'>Pal</span>
          </p>
        </Link>

        <div className="flex items-center gap-5">
          {navIcons.map((icon) => (
            <Image 
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              width={28}
              height={28}
              className="object-contain cursor-pointer invert"
              onClick={icon.onClick}
            />
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;