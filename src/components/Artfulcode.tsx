// Projects.tsx
import { useState } from "preact/hooks";
import styles from "../style/artfulcode.module.css";
import { projects } from "./artfulData";
import { FunctionalComponent } from "preact";
const Artfulcode: FunctionalComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalProjects = projects.length;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : totalProjects - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < totalProjects - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div class={styles.projectsContainer}>
      <div
        class={styles.gallery}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {projects.map((project, index) => (
          <div key={project.id} class={styles.projectItem}>
            {index === currentIndex && <project.canvasComponent />}
            <div class={styles.projectTitle}>{project.title}</div>
          </div>
        ))}
      </div>
      <button
        class={styles.prevButton}
        onClick={handlePrev}
        aria-label="Previous Project"
      >
        &#10094;
      </button>
      <button
        class={styles.nextButton}
        onClick={handleNext}
        aria-label="Next Project"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Artfulcode;
