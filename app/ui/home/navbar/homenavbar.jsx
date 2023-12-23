"use client";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const HomeNavbar = () => {
  const pathname = usePathname();

  return (
    <>
    <div className={styles.container}>
      <div className={styles.title}>
        <Link href="/" className="">
            <Image 
            src="/logo.svg"
            alt="Books Logo"
            width={30}
            height={30}
            />
            NICER CAVES
        </Link>
      </div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <Link href="/news" className="black_btn">
                        News
                    </Link>
        </div>
        <div className={styles.search}>
        <Link href="/find" className="black_btn">
                        Find a Cave
                    </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default HomeNavbar;
