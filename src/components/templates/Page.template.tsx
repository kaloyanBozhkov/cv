import { forwardRef, type ReactNode } from "react";

const PageTemplate = forwardRef<HTMLDivElement, { children: ReactNode }>(
  function PageTemplate({ children }, ref) {
    return (
      <div ref={ref} className="bg-noise min-h-full w-full">
        <div className="mx-auto flex w-full max-w-screen-lg flex-col gap-14 p-4 sm:p-8">
          {children}
        </div>
      </div>
    );
  },
);

export default PageTemplate;
