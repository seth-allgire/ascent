import React from "react";
import logo from "../assets/ascent-logo-white-bkgrnd.png";

export default function HomePage() {
  return (
    <>
      <section className="home-head">
        <aside className="orange-container">
          <div>FIND YOUR</div>
          <div>ADVENTURE</div>
          <div className="catch-phrase">Family vacations with purpose</div>
        </aside>
      </section>

      <img src={logo} alt="logo" id="home-head-logo" />

      <section>
        <article>
          <div>We want to strengthen families, fitness and faith</div>
          <div>
            <p>
              Most families know that family life can be better. We know we can
              take care of our bodies better. We want to have better
              communication. And we want to be renewed spiritully.
            </p>
            <p>
              At Ascent, we want to strengthen families on an adventure
              vacation. We offer adventure challenges, workshops, and spiritual
              formation opportunities- all to strengthen families.
            </p>
            <p></p>
          </div>
          <div className="triangle-image-stuff"></div>
        </article>
      </section>
    </>
  );
}
