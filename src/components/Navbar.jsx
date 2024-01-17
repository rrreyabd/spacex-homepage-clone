import { useState, useEffect } from 'react';
import '../index.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);
  const [blackBackground, setBlackBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY <= scrollPos);
      setBlackBackground(currentScrollY > 700 && currentScrollY <= scrollPos);
      setScrollPos(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPos]);

  const navigations = [
    {
      id: 1,
      name: 'FALCON 9',
      url: 'https://www.spacex.com/vehicles/falcon-9/'
    },
    {
      id: 2,
      name: 'FALCON HEAVY',
      url: 'https://www.spacex.com/vehicles/falcon-heavy/'
    },
    {
      id: 3,
      name: 'DRAGON',
      url: 'https://www.spacex.com/vehicles/dragon/'
    },
    {
      id: 4,
      name: 'STARSHIP',
      url: 'https://www.spacex.com/vehicles/starship/'
    },
    {
      id: 5,
      name: 'HUMAN SPACEFLIGHT',
      url: 'https://www.spacex.com/humanspaceflight/'
    },
    {
      id: 6,
      name: 'RIDESHARE',
      url: 'https://www.spacex.com/rideshare/'
    },
    {
      id: 7,
      name: 'STARSHIELD',
      url: 'https://www.spacex.com/starshield/'
    },
    {
      id: 8,
      name: 'STARLINK',
      url: 'https://www.starlink.com/'
    }
  ]

  return (
    <header className={`flex items-center justify-center fixed top-0 left-0 w-full h-24 z-20 px-28 transition-all duration-300 ease-out 
    ${showNavbar ? 'opacity-100' : 'opacity-0'}
    ${blackBackground ? 'bg-black' : ''}
    `}>
        <nav className="flex items-end gap-8 w-full text-white text-sm font-semibold font-custom">
            <img src="./logo.png" alt="logo" className="h-8 pb-1"/>
            {
              navigations && navigations.map((navigation) => {
                return (
                  <a 
                    className={`underline-custom ${showNavbar ? '' : 'disabled'}`} 
                    key={navigation.id} 
                    href={navigation.url}
                  >
                    {navigation.name}
                  </a>
                )
              })
            }
        </nav>
    </header>
  );
};

export default Navbar;
