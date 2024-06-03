// const cards = useRef();
// const cardImg = useRef([]);

// let lastScrollTop;

// if (typeof window !== "undefined") {
//   lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
// }

// const onScroll = useCallback(() => {
//   let scrollTopPosition;

//   if (typeof window !== "undefined") {
//     scrollTopPosition =
//       window.pageYOffset || document.documentElement.scrollTop;
//   }

//   // Determine the scroll direction
//   const scrollDirection = scrollTopPosition > lastScrollTop ? "down" : "up";

//   if (Array.isArray(cardImg.current)) {
//     cardImg.current.forEach((imgElement, index) => {
//       const rect = imgElement.getBoundingClientRect();
//       const isInView = rect.top < window.innerHeight && rect.bottom >= 0;

//       if (isInView) {
//         // Adjust translateValue based on scroll direction
//         let translateValue = imgElement.dataset.translateValue || 0;
//         translateValue = parseFloat(translateValue, 10);

//         // Increment or decrement based on the scroll direction
//         if (scrollDirection === "down") {
//           translateValue -= 0.8;
//         } else {
//           translateValue += 0.8;
//         }

//         // Ensure translateValue is within the desired range
//         translateValue = Math.max(-200, Math.min(0, translateValue));

//         // Apply the new translateValue to the element and update the dataset
//         imgElement.style.transform = `translateY(${translateValue}px) translateZ(0px)`;
//         imgElement.dataset.translateValue = translateValue.toString();
//       } else {
//         // Reset translateValue for out-of-view images
//         // imgElement.style.transform = "translateY(0px) translateZ(0px)";
//         // imgElement.dataset.translateValue = "0";
//       }
//     });
//   } else {
//     console.error("cardImg.current is not an array");
//   }

//   lastScrollTop = scrollTopPosition <= 0 ? 0 : scrollTopPosition;
// }, []);

// useEffect(() => {
//   window.addEventListener("scroll", onScroll, { passive: true });
//   return () => {
//     window.removeEventListener("scroll", onScroll, { passive: true });
//   };
// }, [onScroll]);

// useEffect(() => {
//   window.addEventListener("scroll", onScroll, { passive: true });
//   return () => {
//     window.removeEventListener("scroll", onScroll, { passive: true });
//   };
// }, [onScroll]);
