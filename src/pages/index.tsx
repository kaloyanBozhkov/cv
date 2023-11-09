import Separator from "@/components/atoms/Separator.atom";
import Education from "@/components/molecules/Education.molecule";
import InfoSection from "@/components/molecules/InfoSection.molecule";
import Person from "@/components/molecules/Person.molecule";
import Project from "@/components/molecules/Project.molecule copy";
import WorkPlace from "@/components/molecules/WorkPlace.molecule";
import PageTemplate from "@/components/templates/Page.template";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kaloyan Bozhkov</title>
        <meta
          name="description"
          content="Senior Full-Stack Engineer | Node.JS | React | Next.JS | Prisma | React | tRPC | GraphQL | Rust | Python | Blockchain | Three.JS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageTemplate>
        <Person
          name="Kaloyan Bozhkov"
          picSrc="/assets/images/my-profile.png"
          linkedIn="https://www.linkedin.com/in/kaloyanbozhkov/"
          gitHub="https://github.com/kaloyanBozhkov"
          email="kaloyan@bozhkov.com"
          // onDownloadCV={async () => {
          //   try {

          //   } catch (err) {
          //     console.error(err);
          //   }
          // }}
        />
        <InfoSection sectionName="Highlights">
          <p>
            I&apos;ve spent the past decade developing server-side software and
            bringing it to life in production. Personally, I fancy good system
            design, talking to people and taking action. These three things have
            propelled me to become a team lead at multiple jobs I&apos;ve had.
            As part of the crypto space as a user since 2015 and as a
            professional for the past 3 years, I have worked on various
            projects: DeFi, NFT, blockchain indexers and platforms for
            processing crypto payments.
          </p>
          <ul className="list-inside list-disc">
            <li>
              10+ yrs of experience with design and development of software
              systems
            </li>
            <li>
              7+ yrs of production experience with Node.js, Typescript and
              Microservices architectures
            </li>
            <li>
              6+ yrs of experience with Docker, CI/CD pipelines, Kubernetes,
              DevOps
            </li>
            <li>3+ yrs of experience within the Blockchain and Web3 space</li>
            <li>2+ yrs of experience with Solidity and Smart Contracts</li>
            <li>1.5+ yrs of experience with Rust</li>
          </ul>
        </InfoSection>
        <InfoSection sectionName="Tech Skills">
          <h2 className="text-md font-mono">
            Node.JS, TypeScript, Python, Rust
            <br />
            Express, Next.JS, React, TailwindCSS, SCSS, Flask, Django
            <br />
            tRPC, graphQL, REST,
            <br />
            Zustand, Redux, Zod, Three.JS, D3.JS, React Query
            <br />
            Eslint, Stylelint, Prettier, Husky, WebPack, Babel, Code Generator
            <br />
            Prisma, Postgres, MySQL, Firestore, SQLAlchemy
            <br />
            Docker, AWS, Google Cloud Console, Vercel, Netlify
            <br />
            CI/CD, Github Actions
            <br />
            Cypress, Jest, Enzyme, React Testing Library
            <br />
            Figma
            <br />
            Distributed Systems, Event-Driven Systems, Microservices, Monoliths
          </h2>
        </InfoSection>
        <InfoSection sectionName="Experience">
          <div className="flex flex-col gap-0">
            <div className="flex flex-col gap-4">
              <WorkPlace
                position="Senior Full-Stack Engineer"
                positionTec={
                  <>
                    Node.JS, React, GraphQL, TailwindCSS
                    <br />
                    Docker, AWS, GitLab CI
                    <br />
                    NFTs, Sui blockchain
                  </>
                }
                info={{
                  company: "Clutchy",
                  startDate: new Date("06/01/2023"),
                  endDate: new Date("10/31/2023"),
                  location: "remote",
                }}
              />
              <ul className="list-inside list-disc">
                <li>Did this, that</li>
                <li>Did this, that</li>
                <li>Did this, that</li>
                <li>Did this, that</li>
                <li>Did this, that</li>
              </ul>
            </div>
            <Separator className="my-7" />
            <div className="flex flex-col gap-4">
              <WorkPlace
                position="Senior Full-Stack Engineer"
                positionTec={
                  <>
                    Node.JS, React, GraphQL, TailwindCSS
                    <br />
                    Docker, AWS, GitLab CI
                    <br />
                    NFTs, Sui blockchain
                  </>
                }
                info={{
                  company: "Clutchy",
                  startDate: new Date("06/01/2023"),
                  endDate: new Date("10/31/2023"),
                  location: "remote",
                }}
              />
              <ul className="list-inside list-disc">
                <li>Did this, that</li>
                <li>Did this, that</li>
                <li>Did this, that</li>
                <li>Did this, that</li>
                <li>Did this, that</li>
              </ul>
            </div>
            <Separator className="my-7" />
            <div className="flex flex-col gap-4">
              <WorkPlace
                position="Senior Full-Stack Engineer"
                positionTec={
                  <>
                    Node.JS, React, GraphQL, TailwindCSS
                    <br />
                    Docker, AWS, GitLab CI
                    <br />
                    NFTs, Sui blockchain
                  </>
                }
                info={{
                  company: "Clutchy",
                  startDate: new Date("06/01/2023"),
                  endDate: new Date("10/31/2023"),
                  location: "remote",
                }}
              />
              <ul className="list-inside list-disc">
                <li>Did this, that</li>
                <li>Did this, that</li>
                <li>Did this, that</li>
                <li>Did this, that</li>
                <li>Did this, that</li>
              </ul>
            </div>
            <Separator className="my-7" />
            <div className="flex flex-col gap-4">
              <WorkPlace
                position="Senior Full-Stack Engineer"
                positionTec={
                  <>
                    Node.JS, React, GraphQL, TailwindCSS
                    <br />
                    Docker, AWS, GitLab CI
                    <br />
                    NFTs, Sui blockchain
                  </>
                }
                info={{
                  company: "Clutchy",
                  startDate: new Date("06/01/2023"),
                  endDate: new Date("10/31/2023"),
                  location: "remote",
                }}
              />
              <ul className="list-inside list-disc">
                <li>Did this, that</li>
                <li>Did this, that</li>
                <li>Did this, that</li>
                <li>Did this, that</li>
                <li>Did this, that</li>
              </ul>
            </div>
            <Separator double className="mt-7" />
          </div>
        </InfoSection>
        <InfoSection sectionName="Education">
          <div className="flex flex-col gap-14">
            <div className="flex flex-col gap-2">
              <Education
                title="MSc in Computer Science & Engineering"
                entity="University stuff"
                startDate={new Date("01/09/2023")}
                endDate={new Date("01/09/2023")}
                location="Chester, United Kingdom"
              />
              <div>
                <p>
                  <b>Major:</b> Software Engineering
                </p>
                <p>
                  <b>Thesis:</b> Fault Tolerance of the Blockchain as a
                  Distributed Database in a Commercial Context
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Education
                title="BSc in Networking & Security"
                entity="University stuff"
                startDate={new Date("01/09/2023")}
                endDate={new Date("01/09/2023")}
                location="Chester, United Kingdom"
              />
              <div>
                <p>
                  <b>Major:</b> Software Engineering
                </p>
                <p>
                  <b>Thesis:</b> Fault Tolerance of the Blockchain as a
                  Distributed Database in a Commercial Context
                </p>
              </div>
            </div>
          </div>
        </InfoSection>
        <InfoSection sectionName="Personal Projects">
          <div className="flex flex-col">
            <Project
              title="AICaramba"
              entity="AI-powered e-commerce paltform"
              startDate={new Date("1/09/2022")}
              tech={<>Next.JS, React, Vercel</>}
              repoUrl=""
              projectLink=""
            />
            <Separator className="my-7" />
            <Project
              title="AICaramba"
              entity="AI-powered e-commerce paltform"
              startDate={new Date("1/09/2022")}
              tech={<>Next.JS, React, Vercel</>}
              repoUrl=""
              projectLink=""
            />
            <Separator className="my-7" />
            <Project
              title="AICaramba"
              entity="AI-powered e-commerce paltform"
              startDate={new Date("1/09/2022")}
              tech={<>Next.JS, React, Vercel</>}
              repoUrl=""
              projectLink=""
            />
          </div>
        </InfoSection>
      </PageTemplate>
    </>
  );
}
