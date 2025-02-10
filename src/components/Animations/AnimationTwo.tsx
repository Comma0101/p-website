import { FunctionalComponent } from "preact";
import { useEffect, useRef } from "preact/hooks";

interface SpiralShape {
  x: number;
  y: number;
  baseSize: number;
  angle: number;
  rotationSpeed: number;
  hue: number;
}

const AnimationTwo: FunctionalComponent = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      console.error("Failed to get 2D context");
      return;
    }
    // Set canvas dimensions to full viewport
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const bgColor = "#000"; // Solid black background

    // Array of shapes along a Fermat spiral
    const shapes: SpiralShape[] = [];
    const maxShapes = 400;
    let itr = 0;
    let globalAngle = 0; // Used to add a slow twist to all shapes

    const scalar = 10; // Spiral scaling factor

    // Function to add a new shape using Fermat spiral coordinates
    const addShape = () => {
      const theta = Math.sqrt(5) * 2 * Math.PI * itr;
      const radius = scalar * Math.sqrt(itr);
      const x = radius * Math.cos(theta);
      const y = radius * Math.sin(theta);
      const baseSize = Math.abs(x * 0.1) + 5; // Size based on x (with variation)
      const shape: SpiralShape = {
        x,
        y,
        baseSize,
        angle: globalAngle,
        rotationSpeed: (Math.random() - 0.5) * 0.02, // Slight individual rotation speed
        hue: Math.random() * 360, // Random starting hue
      };
      if (shapes.length >= maxShapes) {
        shapes.shift(); // Remove oldest shape if we exceed the limit
      }
      shapes.push(shape);
      itr++;
    };

    // The render loop
    const render = () => {
      // Clear the canvas (for a trailing effect, you could use a semi-transparent fill)
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Translate origin to center of canvas
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);

      // For each shape, update its angle and draw a pulsating circle
      shapes.forEach((shape, index) => {
        // Update individual shape rotation
        shape.angle += shape.rotationSpeed;
        // Compute pulsating factor based on time and shape index
        const pulsate = 1 + 0.3 * Math.sin(Date.now() * 0.002 + index);
        const currentSize = shape.baseSize * pulsate;

        // Use the (x, y) from the spiral (they remain fixed) and draw a circle here
        const x = shape.x;
        const y = shape.y;

        // Create a radial gradient for the circle
        const grad = ctx.createRadialGradient(
          x,
          y,
          currentSize * 0.1,
          x,
          y,
          currentSize
        );
        // Colors evolve over time using the global angle
        const color1 = `hsla(${
          (shape.hue + globalAngle * 10) % 360
        }, 80%, 60%, 1)`;
        const color2 = `hsla(${
          (shape.hue + 60 + globalAngle * 10) % 360
        }, 80%, 30%, 0)`;
        grad.addColorStop(0, color1);
        grad.addColorStop(1, color2);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(x, y, currentSize, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();

      // Continuously add new shapes up to a limit
      if (itr < maxShapes * 2) {
        addShape();
      }
      // Slowly update a global twist angle to add a fluid evolution effect
      globalAngle += Math.PI / 360;

      requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ display: "block", width: "100vw", height: "100vh" }}
    />
  );
};

export default AnimationTwo;
