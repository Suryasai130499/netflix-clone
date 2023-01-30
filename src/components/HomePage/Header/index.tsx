import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import styles from './index.module.css';

const Header = () => {
  const activeIndex = useRef(0);

  const navbar = [
    {
      name: 'Home',
      link: '/browse',
    },
    {
      name: 'TV Shows',
      link: '/browse/genre/83',
    },
    {
      name: 'Movies',
      link: '/browse/genre/34399',
    },
    {
      name: 'My List',
      link: '/browse/my-list',
    },
  ];

  const path = usePathname();

  useEffect(() => {
    if (path === '/browse') {
      activeIndex.current = 0;
    } else if (path === '/browse/genre/83') {
      activeIndex.current = 1;
    } else if (path === '/browse/genre/34399') {
      activeIndex.current = 2;
    } else if (path === '/browse/my-list') {
      activeIndex.current = 3;
    }
  }, [path]);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Image
            src="/images/logo.svg"
            alt="LOGO"
            fill
          />
        </div>
        {navbar.map((item, index) => {
          return (
            <Link
              key={index}
              href={item.link}
              className={`${styles.link} ${
                index === activeIndex.current ? styles.active : ''
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
      <div className={styles.rightSection}>
        <div className={styles.searchIcon}>
          <Image
            src="/images/search.svg"
            alt="SEARCH"
            fill
          />
        </div>
        <div className={styles.dropDownButton}>
          <div className={styles.avatar}>
            <Image
              src="/images/avatar.png"
              alt="Avatar"
              fill
            />
          </div>
          <span className={styles.arrow} />
        </div>
      </div>
    </header>
  );
};

export default Header;
