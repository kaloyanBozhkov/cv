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
import { MyCVDocument } from "@/pages/pdf";
import useClientVariable from "@/hooks/useClientVariable";
import DotsLoader from "../atoms/DotsLoader.atom";
import Profile3D from "../dynamic/Profile3D";
import { useLuffy } from "@/store/luffy.store";
import { useMemo } from "react";

const Person = ({
  name,
  role,
  linkedIn,
  gitHub,
  email,
}: {
  name: string;
  role: string;
  email: string;
  linkedIn: string;
  gitHub: string;
}) => {
  const w = useClientVariable(() => window),
    { setAction } = useLuffy(),
    downloadBtn = useMemo(
      () =>
        w && (
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
        ),
      [w],
    );

  return (
    <div className="flex flex-col-reverse flex-nowrap gap-4 sm:flex-row">
      <div className="flex flex-1 flex-col">
        <h2 className="-mb-[10px] text-2xl font-normal leading-[24px] tracking-tighter text-gray-500">
          {role}
        </h2>
        <h1 className="py-3 text-5xl font-semibold tracking-tighter">{name}</h1>
        <div className="h-px w-full bg-gray-400" />
        <div
          className="flex w-fit flex-col gap-1 py-3"
          onMouseEnter={() => setAction("wave")}
          onMouseLeave={() => setAction("standing")}
        >
          <h2>
            <b>Email:</b>{" "}
            <a
              href={`mailto:${email}`}
              className="text-gray-500 hover:text-gray-400"
            >
              {email}
            </a>
          </h2>
          <div
            className="flex w-fit flex-row justify-items-center gap-2"
            onMouseEnter={() => setAction("wave")}
            onMouseLeave={() => setAction("standing")}
          >
            <CuteLink href={linkedIn}>LinkedIn</CuteLink>|
            <CuteLink href={gitHub}>GitHub</CuteLink>
          </div>
        </div>
        <div
          className="mt-auto w-fit"
          onMouseEnter={() => setAction("punch")}
          onMouseLeave={() => setAction("standing")}
        >
          {downloadBtn}
        </div>
      </div>
      <div className="relative h-[150px] w-[150px] border border-solid border-gray-400">
        <div className="absolute inset-[-1.5px]">
          <Profile3D />
        </div>
      </div>
    </div>
  );
};

export default Person;

export const PdfPerson = ({
  name,
  picSrc,
  linkedIn,
  role,
  gitHub,
  email,
}: {
  name: string;
  role: string;
  picSrc: string;
  email: string;
  linkedIn: string;
  gitHub: string;
}) => {
  return (
    <View style={tw("flex flex-col-reverse flex-nowrap gap-4 sm:flex-row")}>
      <View style={tw("flex flex-1 flex-col")}>
        <Text
          style={tw(
            "-mb-[20px] text-2xl font-semibold leading-[24px] tracking-tighter text-gray-500",
          )}
        >
          {role}
        </Text>
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
            style={tw("flex flex-row justify-items-center gap-2 text-[14px]")}
          >
            <CuteLinkPdf href={linkedIn}>LinkedIn</CuteLinkPdf>
            <Text style={tw("text-gray-500")}>|</Text>
            <CuteLinkPdf href={gitHub}>GitHub</CuteLinkPdf>
          </View>
        </View>
      </View>
      {process.env.WITH_PROFILE_PIC_DPF && (
        <View style={tw("border-[1px] border-gray-500")}>
          <ImagePdf src={picSrc} style={tw("h-[150px] w-[150px]")} />
        </View>
      )}
    </View>
  );
};
