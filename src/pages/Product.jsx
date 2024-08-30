import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About WorldWise.</h2>
          <p>
            WorldWise is your ultimate travel companion, designed to help you
            effortlessly document and relive your journeys. Whether you&apos;re
            exploring a new city or revisiting a beloved destination, WorldWise
            makes it easy to keep track of every place you&apos;ve been. With an
            intuitive interface and powerful features, you can log your visits,
            add personal notes, and explore your travels on an interactive map.
          </p>
          <p>
            Built for travelers by travelers, WorldWise is more than just a trip
            tracker—it&apos;s a way to keep your memories alive. Whether
            you&apos;re planning your next adventure or reflecting on past
            experiences, WorldWise provides the tools you need to stay connected
            to the places that matter most to you.
          </p>
        </div>
      </section>
    </main>
  );
}
