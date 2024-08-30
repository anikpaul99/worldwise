// Uses the same styles as Product
import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            Explore the world and document your travels effortlessly with
            WorldWise. For just $9 a month, you&apos;ll have access to all the
            features that make tracking your journeys a breeze. No hidden fees,
            no complicated tiers—just one affordable price for unlimited
            exploration. Whether you&apos;re a seasoned traveler or just
            starting to wander, WorldWise gives you the tools to keep your
            travel memories organized and easily accessible.
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}
