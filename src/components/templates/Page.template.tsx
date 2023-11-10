import { forwardRef, type ReactNode } from "react";
import { tw } from "tailwind.config";
import { Image as ImagePDF, usePDF, View } from "@react-pdf/renderer";
import { getBaseUrl } from "@/utils/common";

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

export const PageTemplatePdf = ({ children }: { children: ReactNode }) => {
  return (
    <View style={tw("min-h-full w-full")}>
      <View
        style={tw(
          "mx-auto flex w-full max-w-screen-lg flex-col gap-14 p-4 sm:p-8",
        )}
      >
        {children}
      </View>
      <View
        style={tw(
          "absolute top-0 left-0 flex flex-row w-full -z-10 oveflow-hidden",
        )}
      >
        {/* Update these rows and cols to fit size of page if it increases */}
        {new Array(10).fill(
          <View style={tw("flex flex-col")}>
            {new Array(50).fill(
              <ImagePDF
                src={`${getBaseUrl(false)}/assets/images/noise.jpg`}
                style={tw("w-[200px] h-[200px]")}
              />,
            )}
          </View>,
        )}
      </View>
    </View>
  );
};
