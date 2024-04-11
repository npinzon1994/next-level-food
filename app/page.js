import classes from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import burgerImg from "../assets/burger.jpg";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          {/* <Image src={burgerImg} alt="A juicy burger" /> */}
        </div>
        <div>
          <div className={classes.hero}>
            <h1>NextLevel food for NextLevel Foodies</h1>
            <p>Taste & share food from all over the world</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes and
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes and connect with
            other food lovers.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes and
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes and connect with
            other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
