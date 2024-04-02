import { CuteLinkPdf } from "@/components/atoms/CuteLink.atom";
import ListItem from "@/components/atoms/ListItemPdf.atom";
import { SeparatorPDF } from "@/components/atoms/Separator.atom";
import { EducationPDF } from "@/components/molecules/Education.molecule";
import { InfoSectionPdf } from "@/components/molecules/InfoSection.molecule";
import { OtherPDF } from "@/components/molecules/Other.molecule";
import { PdfPerson } from "@/components/molecules/Person.molecule";
import { ProjectPDF } from "@/components/molecules/Project.molecule";
import { WorkPlacePDF } from "@/components/molecules/WorkPlace.molecule";
import { PageTemplatePdf } from "@/components/templates/Page.template";
import useClientVariable from "@/hooks/useClientVariable";
import { getBaseUrl } from "@/utils/common";
import {
  EDUCATION,
  EXPERIENCE,
  INTRO,
  OTHER,
  PROJECTS,
  TECH_SKILLS,
  WORK,
} from "@/utils/constants";
import { linesFormatPDF, pointsFormatPDF } from "@/utils/formatters";
import {
  Document,
  Page,
  PDFViewer,
  Text,
  Font,
  View,
} from "@react-pdf/renderer";
import { Fragment } from "react";
import { tw } from "tailwind.config";

Font.register({
  family: "ui-monospace",
  src: `${getBaseUrl(false)}/assets/fonts/mono.ttf`,
});

Font.register({
  family: "SourceSans3",
  src: `${getBaseUrl(false)}/assets/fonts/SourceSans3-Black.ttf`,
  fontStyle: "normal",
  fontWeight: 900,
});

Font.register({
  family: "SourceSans3",
  src: `${getBaseUrl(false)}/assets/fonts/SourceSans3-ExtraBold.ttf`,
  fontStyle: "normal",
  fontWeight: 800,
});

Font.register({
  family: "SourceSans3",
  src: `${getBaseUrl(false)}/assets/fonts/SourceSans3-Bold.ttf`,
  fontStyle: "normal",
  fontWeight: 700,
});

Font.register({
  family: "SourceSans3",
  src: `${getBaseUrl(false)}/assets/fonts/SourceSans3-SemiBold.ttf`,
  fontStyle: "normal",
  fontWeight: 600,
});

Font.register({
  family: "SourceSans3",
  src: `${getBaseUrl(false)}/assets/fonts/SourceSans3-SemiBoldItalic.ttf`,
  fontStyle: "italic",
  fontWeight: 600,
});

Font.register({
  family: "SourceSans3",
  src: `${getBaseUrl(false)}/assets/fonts/SourceSans3-Medium.ttf`,
  fontStyle: "normal",
  fontWeight: 500,
});

Font.register({
  family: "SourceSans3",
  src: `${getBaseUrl(false)}/assets/fonts/SourceSans3-Regular.ttf`,
  fontStyle: "normal",
  fontWeight: 400,
});

Font.register({
  family: "SourceSans3",
  src: `${getBaseUrl(false)}/assets/fonts/SourceSans3-Light.ttf`,
  fontStyle: "normal",
  fontWeight: 300,
});

Font.register({
  family: "SourceSans3",
  src: `${getBaseUrl(false)}/assets/fonts/SourceSans3-ExtraLight.ttf`,
  fontStyle: "normal",
  fontWeight: 200,
});

export default function PdfPage() {
  const w = useClientVariable(() => window);

  if (!w) return null;

  return (
    <PDFViewer width="100%" height="100%">
      <MyCVDocument />
    </PDFViewer>
  );
}

export const MyCVDocument = () => (
  <Document
    title="Kaloyan Bozhkov | Full-Stack Engineer"
    subject="Full-Stack Engineer with 10+ Years of Experience Developing Software And Bringing It To Life In Production"
    author="Kaloyan Bozhkov"
    creator="Kaloyan Bozhkov"
    producer="Kaloyan Bozhkov"
    language="English"
    keywords="Full-Stack Engineer, 10+ years of experience, React, Next.JS, Node.JS, Rust, TypeScript, Figma, TailwindCSS, SCSS, Redux, Zustand, Zod, tRPC, REST, GraphQL"
  >
    <Page size="A2" style={tw("font-[SourceSans3]")} wrap={false}>
      <PageTemplatePdf>
        <PdfPerson
          name="Kaloyan Bozhkov"
          picSrc="/assets/images/my-profile.png"
          linkedIn="https://www.linkedin.com/in/kaloyanbozhkov/"
          gitHub="https://github.com/kaloyanBozhkov"
          email="kaloyan@bozhkov.com"
        />
        <InfoSectionPdf sectionName="Highlights">
          <Text style={tw("text-[16px] mb-4")}>{INTRO}</Text>
          {EXPERIENCE.map((exp, idx) => (
            <ListItem style={tw("text-[16px]")} key={idx}>
              {exp}
            </ListItem>
          ))}
        </InfoSectionPdf>
        <InfoSectionPdf sectionName="Tech Skills">
          {TECH_SKILLS.map((skill, idx) => (
            <Text key={idx} style={tw("text-[16px] font-mono")}>
              {skill}
            </Text>
          ))}
        </InfoSectionPdf>
        <InfoSectionPdf sectionName="Experience">
          <View style={tw("flex flex-col gap-0")}>
            {WORK.map(
              (
                {
                  position,
                  positionTec,
                  company,
                  startDate,
                  endDate,
                  location,
                  points,
                },
                idx,
              ) => {
                const isLast = idx === WORK.length - 1;
                return (
                  <Fragment key={idx}>
                    <View style={tw("flex flex-col")}>
                      <WorkPlacePDF
                        position={position}
                        positionTec={linesFormatPDF(positionTec)}
                        info={{
                          company,
                          startDate,
                          endDate,
                          location,
                        }}
                      />
                      {pointsFormatPDF(points)}
                    </View>
                    <SeparatorPDF
                      className={isLast ? "mt-7" : "my-7"}
                      double={isLast}
                    />
                  </Fragment>
                );
              },
            )}
          </View>
        </InfoSectionPdf>
        <InfoSectionPdf sectionName="Publications">
          {OTHER.map(({ title, desc, link, linkLabel }, idx) => {
            const isLast = idx === PROJECTS.length - 1;
            return (
              <Fragment key={idx}>
                <OtherPDF
                  title={title}
                  desc={desc}
                  link={link}
                  linkLabel={linkLabel}
                />
                {!isLast && <SeparatorPDF className="my-7" />}
              </Fragment>
            );
          })}
        </InfoSectionPdf>
        <InfoSectionPdf sectionName="Personal Projects">
          {PROJECTS.map((project, idx) => {
            const isLast = idx === PROJECTS.length - 1;
            return (
              <Fragment key={idx}>
                <ProjectPDF {...project} tech={linesFormatPDF(project.tech)} />
                {!isLast && <SeparatorPDF className="my-7" />}
              </Fragment>
            );
          })}
        </InfoSectionPdf>
        <InfoSectionPdf sectionName="Education">
          {EDUCATION.map(({ lines, projects, ...educationProps }, idx) => {
            const isLast = idx === EDUCATION.length - 1;
            return (
              <Fragment key={idx}>
                <div className="flex flex-col gap-2">
                  <EducationPDF {...educationProps} />
                  <View style={tw("text-[14px]")}>
                    {lines.map(({ bold, content }, idx) => (
                      <Text key={idx}>
                        <Text style={tw("font-semibold")}>{bold} </Text>
                        <Text>{content}</Text>
                      </Text>
                    ))}
                    {projects?.map(({ title, tech, links }, idx) => (
                      <View key={idx} style={tw("flex flex-col gap-1 mt-1")}>
                        <Text style={tw("font-bold text-[20px]")}>{title}</Text>
                        <View style={tw("font-mono -mt-2")}>
                          {linesFormatPDF(tech)}
                        </View>
                        <View style={tw("flex flex-row gap-1")}>
                          {links.live && (
                            <CuteLinkPdf href={links.live}>
                              Live Link
                            </CuteLinkPdf>
                          )}
                          {"git" in links && (
                            <>
                              <Text style={tw("text-gray-500")}>|</Text>
                              <CuteLinkPdf href={links.git}>GitHub</CuteLinkPdf>
                            </>
                          )}
                          {"demo" in links && (
                            <>
                              <Text style={tw("text-gray-500")}>|</Text>
                              <CuteLinkPdf href={links.git}>Demo</CuteLinkPdf>
                            </>
                          )}
                        </View>
                      </View>
                    ))}
                  </View>
                </div>
                <SeparatorPDF
                  className={isLast ? "mt-7" : "my-7"}
                  double={isLast}
                />
              </Fragment>
            );
          })}
        </InfoSectionPdf>
      </PageTemplatePdf>
    </Page>
  </Document>
);
