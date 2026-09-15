import { useEffect, useState } from "react";

const METEOR_COUNT = 4;

const createStars = () => {
  const numberOfStars = Math.floor(
    (window.innerWidth * window.innerHeight) / 10000
  );

  return Array.from({ length: numberOfStars }, (_, id) => ({
    id,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    opacity: Math.random() * 0.5 + 0.5,
    animationDuration: Math.random() * 4 + 2,
  }));
};

const createMeteors = () =>
  Array.from({ length: METEOR_COUNT }, (_, id) => ({
    id,
    size: Math.random() * 2 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 15,
    animationDuration: Math.random() * 3 + 3,
  }));

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState(createMeteors);

  useEffect(() => {
    setStars(createStars());

    // Mobile browsers fire resize while scrolling (address bar shows/hides),
    // so only rebuild the stars when the width really changes.
    let lastWidth = window.innerWidth;
    let timeoutId;
    const handleResize = () => {
      if (window.innerWidth === lastWidth) return;
      lastWidth = window.innerWidth;
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setStars(createStars()), 200);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  // Start each new pass from a fresh spot; the meteor is invisible at the loop point.
  const moveMeteor = (id) => {
    setMeteors((prev) =>
      prev.map((meteor) =>
        meteor.id === id
          ? { ...meteor, x: Math.random() * 100, y: Math.random() * 100 }
          : meteor
      )
    );
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          onAnimationIteration={() => moveMeteor(meteor.id)}
          style={{
            width: meteor.size * 50 + "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay + "s",
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};
