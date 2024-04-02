import CuteLink, { CuteLinkPdf } from "@/components/atoms/CuteLink.atom";
import ListItem from "@/components/atoms/ListItemPdf.atom";
import { Text } from "@react-pdf/renderer";
import { tw } from "tailwind.config";

export const formatDate = (d: Date) => `${d.getMonth() + 1}/${d.getFullYear()}`;

export const pointsFormatFE = (
  p: (string | { link: string; label: string })[],
) =>
  p.map((p, idx) => {
    const isLink = typeof p !== "string";

    return (
      <li key={idx} className={isLink ? "ml-10" : ""}>
        {isLink ? (
          <>
            <CuteLink href={p.link}>{p.label}</CuteLink>
            {"desc" in p ? p.desc : ""}
          </>
        ) : (
          p
        )}
      </li>
    );
  });

export const linesFormatFE = (p: string[]) =>
  p.map((t, idx) => [t, ...(idx === p.length - 1 ? [] : [<br key={idx} />])]);

export const pointsFormatPDF = (
  p: (string | { link: string; label: string })[],
) =>
  p.map((p, idx) => {
    const isLink = typeof p !== "string";
    return (
      <ListItem style={tw(`text-[16px] ${isLink ? "ml-10" : ""}`)} key={idx}>
        {isLink ? (
          <>
            <CuteLinkPdf href={p.link}>{p.label}</CuteLinkPdf>
            <Text>{"desc" in p ? (p.desc as string) : ""}</Text>
          </>
        ) : (
          p
        )}
      </ListItem>
    );
  });

export const linesFormatPDF = (p: string[]) =>
  p.map((t, idx) => <Text key={idx}>{t}</Text>);
