import CuteLink from "@/components/atoms/CuteLink.atom";
import Separator from "@/components/atoms/Separator.atom";
import Education from "@/components/molecules/Education.molecule";
import InfoSection from "@/components/molecules/InfoSection.molecule";
import Other from "@/components/molecules/Other.molecule";
import Person from "@/components/molecules/Person.molecule";
import Project from "@/components/molecules/Project.molecule";
import WorkPlace from "@/components/molecules/WorkPlace.molecule";
import PageTemplate from "@/components/templates/Page.template";
import {
  EDUCATION,
  EXPERIENCE,
  INTRO,
  OTHER,
  PROJECTS,
  TECH_SKILLS,
  WORK,
} from "@/utils/constants";
import { linesFormatFE, pointsFormatFE } from "@/utils/formatters";
import Head from "next/head";
import { Fragment } from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kaloyan Bozhkov</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Senior Full-Stack Engineer | React | Next.JS | Node.JS | Prisma | React | tRPC | GraphQL | Rust | Python | Blockchain | Three.JS"
        />
        <meta
          name="keywords"
          content="Full-Stack Engineer, 10+ years of experience, React, Next.JS, Node.JS, Rust, TypeScript, Figma, TailwindCSS, SCSS, Redux, Zustand, Zod, tRPC, REST, GraphQL"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageTemplate>
        <Person
          name="Kaloyan Bozhkov"
          linkedIn="https://www.linkedin.com/in/kaloyanbozhkov/"
          gitHub="https://github.com/kaloyanBozhkov"
          email="kaloyan@bozhkov.com"
        />
        <InfoSection sectionName="Highlights">
          <p>{INTRO}</p>
          <ul className="mt-4 list-inside list-disc">
            {EXPERIENCE.map((exp, idx) => (
              <li key={idx}>{exp}</li>
            ))}
          </ul>
        </InfoSection>
        <InfoSection sectionName="Tech Skills">
          <h2 className="text-md font-mono">
            {TECH_SKILLS.map((skill, idx) => (
              <Fragment key={idx}>
                {skill}
                {idx !== TECH_SKILLS.length - 1 && <br />}
              </Fragment>
            ))}
          </h2>
        </InfoSection>
        <InfoSection sectionName="Experience">
          <div className="flex flex-col gap-0">
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
                    <div className="flex flex-col gap-4">
                      <WorkPlace
                        position={position}
                        positionTec={linesFormatFE(positionTec)}
                        info={{
                          company,
                          startDate,
                          endDate,
                          location,
                        }}
                      />
                      <ul className="list-inside list-disc">
                        {pointsFormatFE(points)}
                      </ul>
                    </div>
                    <Separator
                      className={isLast ? "mt-7" : "my-7"}
                      double={isLast}
                    />
                  </Fragment>
                );
              },
            )}
          </div>
        </InfoSection>
        <InfoSection sectionName="Publications">
          <div className="flex flex-col">
            {OTHER.map(({ link, title, desc, linkLabel }, idx) => {
              const isLast = idx === OTHER.length - 1;
              return (
                <Fragment key={idx}>
                  <Other
                    title={title}
                    desc={desc}
                    link={link}
                    linkLabel={linkLabel}
                  />
                  <Separator className="my-7" double={isLast} />
                </Fragment>
              );
            })}
          </div>
        </InfoSection>
        <InfoSection sectionName="Personal Projects">
          <div className="flex flex-col">
            {PROJECTS.map((project, idx) => {
              const isLast = idx === PROJECTS.length - 1;
              return (
                <Fragment key={idx}>
                  <Project {...project} tech={linesFormatFE(project.tech)} />
                  <Separator className="my-7" double={isLast} />
                </Fragment>
              );
            })}
          </div>
        </InfoSection>
        <InfoSection sectionName="Education">
          <div className="flex flex-col">
            {EDUCATION.map(({ lines, projects, ...educationProps }, idx) => {
              const isLast = idx === EDUCATION.length - 1;
              return (
                <Fragment key={idx}>
                  <div className="flex flex-col gap-2">
                    <Education {...educationProps} />
                    <div>
                      {lines.map(({ bold, content }, idx) => (
                        <p key={idx}>
                          <b>{bold}</b> {content}
                        </p>
                      ))}
                    </div>
                    {projects?.map(({ title, tech, links }, idx) => {
                      const isLast = idx === projects.length - 1;
                      return (
                        <div key={idx} className="mt-1 flex flex-col gap-1">
                          <p className={isLast ? "text-xl" : ""}>
                            <b>{title}</b>
                          </p>
                          <p className="-mt-1 font-mono">
                            {linesFormatFE(tech)}
                          </p>
                          <div className="flex flex-row gap-1">
                            {links.live && (
                              <CuteLink href={links.live}>Live Link</CuteLink>
                            )}
                            {"git" in links && (
                              <>
                                |<CuteLink href={links.git}>GitHub</CuteLink>
                              </>
                            )}
                            {"demo" in links && (
                              <>
                                |<CuteLink href={links.demo}>Demo</CuteLink>
                              </>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <Separator
                    className={isLast ? "mt-7" : "my-7"}
                    double={isLast}
                  />
                </Fragment>
              );
            })}
          </div>
        </InfoSection>
      </PageTemplate>
    </>
  );
}
