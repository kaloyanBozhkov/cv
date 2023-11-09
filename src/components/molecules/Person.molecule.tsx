import Image from "next/image";
import CuteLink from "../atoms/CuteLink.atom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown } from "@fortawesome/free-regular-svg-icons";

const Person = ({
  name,
  picSrc,
  linkedIn,
  gitHub,
  email,
  onDownloadCV,
}: {
  name: string;
  picSrc: string;
  email: string;
  linkedIn: string;
  gitHub: string;
  onDownloadCV?: () => void;
}) => {
  return (
    <div className="flex flex-col-reverse flex-nowrap gap-4 sm:flex-row">
      <div className="flex flex-1 flex-col">
        <h1 className="text- py-3 text-5xl font-semibold tracking-tighter">
          {name}
        </h1>
        <div className="h-px w-full bg-black" />
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
        {onDownloadCV && (
          <div className="mt-auto">
            <button
              onClick={onDownloadCV}
              className="flex flex-row flex-nowrap items-center gap-2 border-b-[1px] border-transparent font-light opacity-50 hover:border-gray-500 hover:text-gray-700 hover:opacity-100"
            >
              <FontAwesomeIcon icon={faCircleDown} className="min-w-[15px]" />
              <p className="whitespace-nowrap">Download as PDF</p>
            </button>
          </div>
        )}
      </div>
      <div>
        <Image
          src={picSrc}
          alt="My Picture"
          className="h-auto w-fit border-[1px] border-black italic"
          width={150}
          height={150}
        />
      </div>
    </div>
  );
};

export default Person;
