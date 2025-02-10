// GalleryPage.tsx
import { FunctionComponent } from "preact";
import { useEffect, useState } from "preact/hooks";
import { route } from "preact-router";
import styles from "../style/GalleryPage.module.css";
import { menuItems } from "./menuItems";

interface GalleryPageProps {
  collectionId?: string; // collectionId is passed as a prop by Preact Router
}

const GalleryPage: FunctionComponent<GalleryPageProps> = ({ collectionId }) => {
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [title, setTitle] = useState("");
  console.log(collectionId);
  useEffect(() => {
    if (collectionId) {
      const index = parseInt(collectionId, 10);
      const collection = menuItems[index];
      if (collection) {
        setGalleryImages(collection.galleryImages);
        setTitle(collection.title);
      } else {
        route("/");
      }
    } else {
      route("/");
    }
  }, [collectionId]);

  return (
    <div class={styles.galleryPage}>
      <h1>{title}</h1>
      <div class={styles.galleryGrid}>
        {galleryImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery Image ${index + 1}`}
            class={styles.galleryImage}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
