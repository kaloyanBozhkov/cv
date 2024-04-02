import Center from "@/components/layouts/Center.layout";
import Profile from "@/components/organisms/Profile/Profile.organism";
import PageTemplate from "@/components/templates/Page.template";

import Head from "next/head";

export default function Three() {
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
        <Center>
          <div className="h-[400px] w-[500px]">
            <Profile />
          </div>
        </Center>
      </PageTemplate>
    </>
  );
}
