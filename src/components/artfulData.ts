// projectsData.ts
import AnimationOne from "./Animations/AnimationOne";
import AnimationTwo from "./Animations/AnimationTwo";
import AnimationThree from "./Animations/AnimationThree";
import { FunctionalComponent } from "preact";
export interface Project {
  id: number;
  title: string;
  canvasComponent: FunctionalComponent;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Animation One",
    canvasComponent: AnimationOne,
  },
  {
    id: 2,
    title: "Animation Two",
    canvasComponent: AnimationTwo,
  },
  // Add more animations as needed
  {
    id: 3,
    title: "Animation Three",
    canvasComponent: AnimationThree,
  },
];
