import Link from "next/link";
import Image from "next/image";
import Styles from "../Styles/navbar.module.css";
const navbar = () => {
  return (
    <div className={Styles.navbar}>
      <Image
        className={Styles.img}
        src="/../public/myPhoto.jpg"
        alt="/"
        width="72"
        height="72"
      />
      <div className={Styles.links}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/books">Books</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
};
export default navbar;
