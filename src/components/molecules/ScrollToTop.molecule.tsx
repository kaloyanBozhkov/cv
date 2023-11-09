import { faArrowAltCircleUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWindowScroll } from "@mantine/hooks";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [scroll, scrollTo] = useWindowScroll();
  const [hidden, setHidden] = useState(scroll.y < 100);

  useEffect(() => {
    setHidden(scroll.y < 100);
  }, [scroll.y]);

  if (hidden) return null;

  return (
    <button
      onClick={() => scrollTo({ x: 0, y: 0 })}
      className="fixed bottom-4 right-4 z-40 text-gray-700 hover:text-gray-500 sm:bottom-10 sm:right-10"
    >
      <FontAwesomeIcon
        icon={faArrowAltCircleUp}
        className="min-w-[30px]"
        color="inherit"
      />
    </button>
  );
};

export default ScrollToTop;
