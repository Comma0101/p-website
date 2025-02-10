// MenuItem.tsx
import { useState, useRef } from "preact/hooks";
import { route } from "preact-router";
import gsap from "gsap";
import styles from "../style/PhotoGallery.module.css";
import { FunctionalComponent } from "preact";
import { MenuItemData } from "./menuItems";

// interface MenuItemProps {
//   item: MenuItemData;
//   index: number;
// }

// const MenuItem: FunctionalComponent<MenuItemProps> = ({ item, index }) => {
//   const trailRefs = useRef<HTMLDivElement[]>([]);
//   const trailContainerRef = useRef<HTMLDivElement | null>(null);
//   const trailImagesCount = 5;
//   const trailDelay = 0.05;
//   const [isTrailing, setIsTrailing] = useState(false);

//   const handleMouseEnter = () => {
//     createTrail();
//   };

//   const handleMouseMove = (e: MouseEvent) => {
//     moveTrail(e);
//   };

//   const handleMouseLeave = () => {
//     removeTrail();
//   };

//   const handleClick = () => {
//     route(`/gallery/${index}`);
//   };

//   const createTrail = () => {
//     if (trailContainerRef.current) return;
//     setIsTrailing(true);
//     trailRefs.current = [];
//     trailContainerRef.current = document.createElement("div");
//     trailContainerRef.current.className = styles.trailContainer;
//     document.body.appendChild(trailContainerRef.current);

//     for (let i = 0; i < trailImagesCount; i++) {
//       const trailImage = document.createElement("div");
//       trailImage.className = styles.trailImage;
//       trailImage.style.backgroundImage = `url(${
//         item.galleryImages[i % item.galleryImages.length]
//       })`;
//       trailContainerRef.current.appendChild(trailImage);
//       trailRefs.current.push(trailImage);
//     }
//   };

//   const moveTrail = (e: MouseEvent) => {
//     if (!isTrailing) return;
//     trailRefs.current.forEach((trailImage, index) => {
//       const delay = index * trailDelay;
//       gsap.to(trailImage, {
//         x: e.clientX,
//         y: e.clientY,
//         delay: delay,
//         duration: 0.3,
//         ease: "power2.out",
//       });
//     });
//   };

//   const removeTrail = () => {
//     if (!trailContainerRef.current) return;
//     gsap.to(trailContainerRef.current, {
//       opacity: 0,
//       duration: 0.5,
//       onComplete: () => {
//         if (trailContainerRef.current && trailContainerRef.current.parentNode) {
//           trailContainerRef.current.parentNode.removeChild(
//             trailContainerRef.current
//           );
//         }
//         trailContainerRef.current = null;
//         setIsTrailing(false);
//       },
//     });
//   };

//   return (
//     <div
//       class={styles.menuItem}
//       onMouseEnter={handleMouseEnter}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       onClick={handleClick}
//     >
//       <span class={styles.menuItemText}>
//         <span class={styles.menuItemTextInner}>{item.title}</span>
//       </span>
//       <span class={styles.menuItemSub}>{item.subtitle}</span>
//     </div>
//   );
// };

// export default MenuItem;

//reveal effect
interface MenuItemProps {
  item: MenuItemData;
  index: number;
}

const MenuItem: FunctionalComponent<MenuItemProps> = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const revealRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    animateRevealIn();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    animateRevealOut();
  };

  const handleClick = () => {
    route(`/gallery/${index}`);
  };

  const animateRevealIn = () => {
    if (revealRef.current) {
      gsap.killTweensOf(revealRef.current);
      gsap.fromTo(
        revealRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  };

  const animateRevealOut = () => {
    if (revealRef.current) {
      gsap.killTweensOf(revealRef.current);
      gsap.to(revealRef.current, {
        opacity: 0,
        x: 50,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  return (
    <div
      class={styles.menuItem}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <span class={styles.menuItemText}>
        <span class={styles.menuItemTextInner}>{item.title}</span>
      </span>
      <span class={styles.menuItemSub}>{item.subtitle}</span>
      <div class={styles.hoverReveal} ref={revealRef}>
        <div class={styles.hoverRevealInner}>
          <div
            class={styles.hoverRevealImage}
            style={{ backgroundImage: `url(${item.imageUrl})` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
