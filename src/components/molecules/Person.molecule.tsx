import Image from "next/image";
import CuteLink, { CuteLinkPdf } from "../atoms/CuteLink.atom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown } from "@fortawesome/free-regular-svg-icons";
import {
  View,
  Text,
  Link,
  Image as ImagePdf,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import { tw } from "tailwind.config";
import { default as LinkNext } from "next/link";
import { MyCVDocument } from "@/pages/pdf";
import useClientVariable from "@/hooks/useClientVariable";
import DotsLoader from "../atoms/DotsLoader.atom";

const Person = ({
  name,
  picSrc,
  linkedIn,
  gitHub,
  email,
}: {
  name: string;
  picSrc: string;
  email: string;
  linkedIn: string;
  gitHub: string;
}) => {
  const w = useClientVariable(() => window);

  return (
    <div className="flex flex-col-reverse flex-nowrap gap-4 sm:flex-row">
      <div className="flex flex-1 flex-col">
        <h1 className="text- py-3 text-5xl font-semibold tracking-tighter">
          {name}
        </h1>
        <div className="h-px w-full bg-gray-400" />
        <div className="flex flex-col gap-1 py-3">
          <h2>
            <b>Email:</b>{" "}
            <a
              href={`mailto:${email}`}
              className="text-gray-500 hover:text-gray-400"
            >
              {email}
            </a>
          </h2>
          <div className="flex flex-row justify-items-center gap-2">
            <CuteLink href={linkedIn}>LinkedIn</CuteLink>|
            <CuteLink href={gitHub}>GitHub</CuteLink>
          </div>
        </div>
        <div className="mt-auto w-fit">
          {w && (
            <PDFDownloadLink
              document={<MyCVDocument />}
              fileName="kaloyan-bozhkov-full-stack-engineer-cv.pdf"
            >
              {({ loading }) =>
                loading ? (
                  <div className="h-[20px]">
                    <DotsLoader dotsBg="bg-gray-400" size="sm" />
                  </div>
                ) : (
                  <div className="flex h-[20px] w-fit cursor-pointer flex-row flex-nowrap items-center gap-2 border-b-[1px] border-transparent font-light opacity-50 hover:border-gray-500 hover:text-gray-700 hover:opacity-100">
                    <FontAwesomeIcon icon={faCircleDown} className="w-[15px]" />
                    <p className="whitespace-nowrap">Download as PDF</p>
                  </div>
                )
              }
            </PDFDownloadLink>
          )}
        </div>
      </div>
      <div className="min-w[150px] min-h-[150px]">
        <Image
          src={picSrc}
          alt="My Picture"
          className="h-auto w-fit border-[1px] border-gray-500 italic lg:max-w-[150px]"
          width={150}
          height={150}
        />
      </div>
    </div>
  );
};

export default Person;

export const PdfPerson = ({
  name,
  picSrc,
  linkedIn,
  gitHub,
  email,
}: {
  name: string;
  picSrc: string;
  email: string;
  linkedIn: string;
  gitHub: string;
}) => {
  return (
    <View style={tw("flex flex-col-reverse flex-nowrap gap-4 sm:flex-row")}>
      <View style={tw("flex flex-1 flex-col")}>
        <Text style={tw("py-3 text-5xl font-bold tracking-tighter")}>
          {name}
        </Text>
        <View style={tw("h-px w-full bg-gray-500")} />
        <View style={tw("flex flex-col gap-1 py-3")}>
          <Text>
            <Text style={tw("font-semibold text-[16px]")}>Email: </Text>
            <Link
              src={`mailto:${email}`}
              style={tw("text-gray-500 text-[14px]")}
            >
              {email}
            </Link>
          </Text>
          <View
            style={tw("flex flex-row justify-items-center gap-2  text-[14px]")}
          >
            <Text>
              <CuteLinkPdf href={linkedIn}>LinkedIn</CuteLinkPdf>
            </Text>
            <Text style={tw("text-gray-500")}>|</Text>
            <Text>
              <CuteLinkPdf href={gitHub}>GitHub</CuteLinkPdf>
            </Text>
          </View>
        </View>
      </View>
      <View style={tw("border-[1px] border-gray-500")}>
        <ImagePdf src={picSrc} style={tw("h-[150px] w-[150px]")} />
      </View>
    </View>
  );
};
