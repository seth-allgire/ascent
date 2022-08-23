import React from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import background from "../assets/homeHeader.jpg";
import bgTriangle from "../assets/triangle-1.png";
import famTriangle from "../assets/triangle-family.png";
// import logo from "../assets/ascent-logo-white-bkgrnd.png";

export default function ParallaxHome() {
  return (
    <>
      <ParallaxBanner style={{ height: "100vh" }}>
        <ParallaxBannerLayer
          image={background}
          speed={-25}
          scale={[1, 1.2]}
          opacity={[1.5, 0.75]}
          shouldAlwaysCompleteAnimation={true}
        />
        <ParallaxBannerLayer speed={-20} translateY={[0, 60]}>
          <aside className="orange-container">
            <div>FIND YOUR</div>
            <div>ADVENTURE</div>
            <div className="catch-phrase">Family vacations with purpose</div>
          </aside>
        </ParallaxBannerLayer>
      </ParallaxBanner>

      {/* <ParallaxBanner style={{ height: "100vh" }} speed={-5}> */}
      {/* <ParallaxBannerLayer> */}
      <section className="home-content-container">
        <article className="vision-container">
          <div className="large-print">
            We want to strengthen
            <br />
            families, fitness and faith
          </div>
          {/* <div className="large-print"></div> */}
          <div className="desire-container">
            <p>
              Most families know that family life can be better. We know we can
              take care of our bodies better. We want to have better
              communication. And we want to be renewed spiritully.
              <br />
              <br />
              At Ascent, we want to strengthen families on an adventure
              vacation. We offer adventure challenges, workshops, and spiritual
              formation opportunities- all to strengthen families.
            </p>
          </div>
        </article>
        {/* <div className="triangle-image-stuff"> */}
        <ParallaxBanner className="triangle-image-stuff">
          <ParallaxBannerLayer
            // sx={{ height: "auto", innerWidth: "full" }}
            scale={[0.6, 0.6]}
            // easing="easeOutCubic"
            // speed={20}
            translateY={[0, -9]}
            translateX={[0, -10]}
            opacity={[0.5, 0.8]}
            shouldAlwaysCompleteAnimation={true}
          >
            <img src={bgTriangle} alt="bgTriangle" />
          </ParallaxBannerLayer>

          <ParallaxBannerLayer
            scale={[2, 0.6]}
            translateX={[0, 5]}
            translateY={[0, -2]}
            // opacity={[0.7, 1]}
            // speed={20}
            shouldAlwaysCompleteAnimation={true}
          >
            <img src={bgTriangle} alt="bgTriangle" />
          </ParallaxBannerLayer>

          <ParallaxBannerLayer
            id="famTriangle"
            scale={[2, 0.5]}
            translateX={[20, -20]}
            translateY={[0, 10]}
            // speed={20}
            easing="easeIn"
            shouldAlwaysCompleteAnimation={true}
          >
            <img src={famTriangle} alt="famTriangle" />
          </ParallaxBannerLayer>
        </ParallaxBanner>
        {/* </div> */}
      </section>
      {/* </ParallaxBannerLayer> */}

      {/* <ParallaxBannerLayer translateX={[40, 40]}>
          <img src={logo} alt="logo" id="home-head-logo" />
        </ParallaxBannerLayer> */}
      {/* </ParallaxBanner> */}
    </>
  );
}
