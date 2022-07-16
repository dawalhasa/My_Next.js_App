import Link from "next/link";
import Styles from "../styles/navbar.module.css"
const navbar = () => {
  return (
    <div className={Styles.navbar}>
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
