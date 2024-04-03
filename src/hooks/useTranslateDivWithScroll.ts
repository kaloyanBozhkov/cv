import { useEffect } from "react";
import useWindowSize from "./useWindowSize";

interface TranslateDivProps {
  parentRef: React.RefObject<HTMLElement>;
  childRef: React.RefObject<HTMLElement>;
  margin?: number;
  startTranslatingAt?: number | null;
  stopTranslatingAt?: number | null;
  stopAt?: number;
  minScreenWidth?: number;
}

const useTranslateDivWithScroll = ({
  parentRef,
  childRef,
  margin = 0,
  startTranslatingAt = null,
  stopTranslatingAt = null,
  stopAt = 575,
  minScreenWidth = 0,
}: TranslateDivProps) => {
  const [windowWidth, windowHeight] = useWindowSize();

  useEffect(() => {
    if (windowHeight === undefined || windowWidth === undefined) return;
    if (windowHeight <= stopAt || minScreenWidth > windowWidth) {
      childRef.current!.style.transform = "";
      return;
    }

    const handler = () =>
      handleScrollPosition(
        parentRef,
        childRef,
        margin,
        startTranslatingAt,
        stopTranslatingAt,
      );

    window.addEventListener("scroll", handler);
    window.addEventListener("load", handler);

    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("load", handler);
    };
  }, [
    parentRef,
    childRef,
    margin,
    windowWidth,
    windowHeight,
    minScreenWidth,
    stopAt,
    startTranslatingAt,
    stopTranslatingAt,
  ]);
};

const handleScrollPosition = (
  parentRef: React.RefObject<HTMLElement>,
  childRef: React.RefObject<HTMLElement>,
  margin: number,
  startTranslatingAt: number | null,
  stopTranslatingAt: number | null,
) => {
  const { top, bottom, height } = parentRef.current!.getBoundingClientRect();

  const hasReachedBottom = bottom - childRef.current!.offsetHeight < margin;

  const newTop = hasReachedBottom
      ? height - childRef.current!.offsetHeight - margin
      : top < 0
      ? Math.floor(Math.abs(top)) + margin
      : 0,
    noLimits = !startTranslatingAt && !stopTranslatingAt,
    noStop = Boolean(startTranslatingAt && !stopTranslatingAt),
    noStart = Boolean(!startTranslatingAt && stopTranslatingAt),
    bothLimits = Boolean(startTranslatingAt && stopTranslatingAt);

  if (
    noLimits ||
    (noStop && window.scrollY > startTranslatingAt!) ||
    (noStart && window.scrollY < stopTranslatingAt!) ||
    (bothLimits &&
      window.scrollY > startTranslatingAt! &&
      window.scrollY < stopTranslatingAt!)
  )
    childRef.current!.style.transform = `translateY(${newTop}px)`;
};

export default useTranslateDivWithScroll;

/*
  // make sure to trigger the scroll event when the parent div size changes (becomes smaller for example), in order to update the child's position again!
  E.g. 
  useLayoutEffect(() => {
    window.scrollBy(0, 0)
  }, [destinations])

*/
