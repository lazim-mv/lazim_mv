import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import styles from "./test.module.css";
import { SplitText } from "gsap-trial/all";

gsap.registerPlugin(Observer, SplitText);

const AnimatedSections = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const sections = containerRef.current.querySelectorAll(`.${styles.section}`);
      const images = containerRef.current.querySelectorAll(`.${styles.bg}`);
      const headings = gsap.utils.toArray(`.${styles.sectionHeading}`);
      const outerWrappers = gsap.utils.toArray(`.${styles.outer}`);
      const innerWrappers = gsap.utils.toArray(`.${styles.inner}`);
      const splitHeadings = headings.map(
        (heading) =>
          new SplitText(heading, {
            type: "chars,words,lines",
            linesClass: styles.clipText,
          })
      );
      let currentIndex = -1;
      const wrap = gsap.utils.wrap(0, sections.length);
      let animating = false;

      gsap.set(outerWrappers, { yPercent: 100 });
      gsap.set(innerWrappers, { yPercent: -100 });

      const gotoSection = (index, direction) => {
        index = wrap(index);
        animating = true;
        const fromTop = direction === -1;
        const dFactor = fromTop ? -1 : 1;
        const tl = gsap.timeline({
          defaults: { duration: 1.25, ease: "power1.inOut" },
          onComplete: () => (animating = false),
        });

        if (currentIndex >= 0) {
          gsap.set(sections[currentIndex], { zIndex: 0 });
          tl.to(images[currentIndex], { yPercent: -15 * dFactor }).set(
            sections[currentIndex],
            { autoAlpha: 0 }
          );
        }

        gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
        tl.fromTo(
          [outerWrappers[index], innerWrappers[index]],
          { yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor) },
          { yPercent: 0 },
          0
        )
          .fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
          .fromTo(
            splitHeadings[index].chars,
            { autoAlpha: 0, yPercent: 150 * dFactor },
            {
              autoAlpha: 1,
              yPercent: 0,
              duration: 1,
              ease: "power2",
              stagger: {
                each: 0.02,
                from: "random",
              },
            },
            0.2
          );

        currentIndex = index;
      };

      const scrollHandler = (event) => {
        if (!animating) {
          const deltaY = event.deltaY || event.wheelDelta || -event.detail;
          if (deltaY > 0) {
            gotoSection(currentIndex + 1, 1);
          } else {
            gotoSection(currentIndex - 1, -1);
          }
        }
      };

      containerRef.current.addEventListener("wheel", scrollHandler);

      return () => {
        containerRef.current.removeEventListener("wheel", scrollHandler);
      };
    }
  }, []);

  return (
    <div ref={containerRef} className={styles.bodyContainer}>
      <section className={`${styles.section} ${styles.first}`}>
        <div className={styles.outer}>
          <div className={styles.inner}>
            <div className={`${styles.bg} ${styles.one}`}>
              <h2 className={styles.sectionHeading}>Scroll down</h2>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.section} ${styles.second}`}>
        <div className={styles.outer}>
          <div className={styles.inner}>
            <div className={styles.bg}>
              <h2 className={styles.sectionHeading}>Animated with GSAP</h2>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.section} ${styles.third}`}>
        <div className={styles.outer}>
          <div className={styles.inner}>
            <div className={styles.bg}>
              <h2 className={styles.sectionHeading}>GreenSock</h2>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.section} ${styles.fourth}`}>
        <div className={styles.outer}>
          <div className={styles.inner}>
            <div className={styles.bg}>
              <h2 className={styles.sectionHeading}>Animation platform</h2>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.section} ${styles.fifth}`}>
        <div className={styles.outer}>
          <div className={styles.inner}>
            <div className={styles.bg}>
              <h2 className={styles.sectionHeading}>Keep scrolling</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnimatedSections;
