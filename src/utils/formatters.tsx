import ListItem from "@/components/atoms/ListItemPdf.atom";
import { Text } from "@react-pdf/renderer";
import { tw } from "tailwind.config";

export const formatDate = (d: Date) => `${d.getMonth() + 1}/${d.getFullYear()}`;

export const pointsFormatFE = (p: string[]) =>
  p.map((p, idx) => <li key={idx}>{p}</li>);

export const linesFormatFE = (p: string[]) =>
  p.map((t, idx) => [t, ...(idx === p.length - 1 ? [] : [<br key={idx} />])]);

export const pointsFormatPDF = (p: string[]) =>
  p.map((p, idx) => (
    <ListItem style={tw("text-[16px]")} key={idx}>
      {p}
    </ListItem>
  ));

export const linesFormatPDF = (p: string[]) =>
  p.map((t, idx) => <Text key={idx}>{t}</Text>);
