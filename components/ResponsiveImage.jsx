// components/ResponsiveImage.js
import { useState, useEffect } from "react";
import Image from "next/image";

const ResponsiveImage = ({ desktopSrc, mobileSrc, alt, ...props }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth <= 425);
    };

    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <Image
      src={isMobile ? mobileSrc : desktopSrc}
      alt={alt}
      {...props}
    />
  );
};

export default ResponsiveImage;
