import { useState, useEffect } from "react";

export const useWindowWidth = (px: number) => {
  const [width, setWidth] = useState<boolean>(false);
  useEffect(() => {
    if (window.innerWidth < px) setWidth(true);
    else setWidth(false);

    window.addEventListener("resize", () => {
      if (window.innerWidth < px && !width) setWidth(true);
      else if (window.innerWidth > px && width) setWidth(false);
    });
  }, []);

  return width;
};
