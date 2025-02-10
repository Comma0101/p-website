import { FunctionalComponent } from "preact";
import Home from "./components/Home";
import { Router } from "preact-router"; // Import preact-router
import Blog from "./components/Blog";
import Artfulcode from "./components/Artfulcode";
import PhotoGallery from "./components/PhotoGallery";
import GalleryPage from "./components/GalleryPage";
const App: FunctionalComponent = () => {
  return (
    <Router>
      <Home path="/" />
      <Blog path="/blog" />
      <Artfulcode path="artfulcode" />
      <PhotoGallery path="/gallery" />
      <GalleryPage path="/gallery/:collectionId" />
    </Router>
  );
};

export default App; // Make sure App is being exported
