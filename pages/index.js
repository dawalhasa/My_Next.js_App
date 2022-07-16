import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Home Page</title>
      </Head>
        <h1 className={styles.homePageTitile}> Hello Friends</h1>
    </div>
  );
}
