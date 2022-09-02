import React, { useEffect, useState } from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import background from "../assets/homeHeader.jpg";
import bgTriangle from "../assets/triangle-1.png";
import famTriangle from "../assets/triangle-family.png";
import paperBg from "../assets/paperBackground.jpg";
import { getPackInfo } from "./packInfo";
import PackageCard from "./PackageCard";
// import logo from "../assets/ascent-logo-white-bkgrnd.png";

export default function ParallaxHome() {
  const packageInfo = getPackInfo();
  const [packs, setPacks] = useState();

  useEffect(() => {
    setPacks(() =>
      packageInfo.map((pack, idx) => ({
        key: idx,
        name: pack.name,
        description: pack.description,
        cardBackInfo: pack.cardBackInfo,
        buttonText: pack.buttonText,
      }))
    );
  }, [packageInfo, setPacks]);

  return (
    <>
      <ParallaxBanner style={{ height: "100vh" }}>
        <ParallaxBannerLayer
          image={background}
          speed={-25}
          // scale={[1, 1.2]}
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

      <div
        style={{
          position: "sticky",
          top: "0px",
        }}
      >
        <ParallaxBanner style={{ height: "100vh" }}>
          <ParallaxBannerLayer
            opacity={[3, 0]}
            shouldAlwaysCompleteAnimation={true}
          >
            <section className="home-content-container pad-left">
              <article className="vision-container">
                <div className="large-print">
                  We want to strengthen
                  <br />
                  families, fitness and faith
                </div>
                {/* <div className="large-print"></div> */}
                <div className="desire-container">
                  <p>
                    Most families know that family life can be better. We know
                    we can take care of our bodies better. We want to have
                    better communication. And we want to be renewed spiritully.
                    <br />
                    <br />
                    At Ascent, we want to strengthen families on an adventure
                    vacation. We offer adventure challenges, workshops, and
                    spiritual formation opportunities- all to strengthen
                    families.
                  </p>
                </div>
              </article>

              <ParallaxBanner className="triangle-image-stuff">
                <ParallaxBannerLayer
                  scale={[0.6, 0.6]}
                  translateY={[-10, -9]}
                  translateX={[-10, -10]}
                  opacity={[0.5, 0.8]}
                  shouldAlwaysCompleteAnimation={true}
                >
                  <img src={bgTriangle} alt="bgTriangle" />
                </ParallaxBannerLayer>

                <ParallaxBannerLayer
                  scale={[0.6, 0.6]}
                  translateX={[7, 5.5]}
                  translateY={[-9, -3]}
                  shouldAlwaysCompleteAnimation={true}
                >
                  <img src={bgTriangle} alt="bgTriangle" />
                </ParallaxBannerLayer>

                <ParallaxBannerLayer
                  id="famTriangle"
                  scale={[0.5, 0.5]}
                  translateX={[-20, -15]}
                  translateY={[-10, -2]}
                  shouldAlwaysCompleteAnimation={true}
                >
                  <img src={famTriangle} alt="famTriangle" />
                </ParallaxBannerLayer>
              </ParallaxBanner>
            </section>
          </ParallaxBannerLayer>
        </ParallaxBanner>
      </div>

      <ParallaxBanner style={{ height: "50vh" }} speed={20}></ParallaxBanner>

      <ParallaxBanner style={{ height: "150vh", marginTop: "90" }}>
        <ParallaxBannerLayer
          image={paperBg}
          opacity={[0.25, 0.5]}
        ></ParallaxBannerLayer>
        <ParallaxBannerLayer style={{ marginTop: "50px" }}>
          <span className="large-print section-title">Our Packages</span>
        </ParallaxBannerLayer>
        <ParallaxBannerLayer style={{ marginTop: "100px" }}>
          <div className="cards-wrapper">
            <div className="cards-container">
              {packs &&
                packs.map((val) => (
                  <PackageCard
                    key={val.idx}
                    name={val.name}
                    description={val.description}
                    buttonText={val.buttonText}
                    cardBackInfo={val.cardBackInfo}
                  ></PackageCard>
                ))}
            </div>
          </div>
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </>
  );
}
