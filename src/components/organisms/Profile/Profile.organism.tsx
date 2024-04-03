import ErrorBoundary from "@/components/ErrorBoundary";
import DotsLoader from "@/components/atoms/DotsLoader.atom";
import { Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import Main from "./scenes/Main.scene";
import Center from "@/components/layouts/Center.layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceGrimace } from "@fortawesome/free-regular-svg-icons";
import Stack from "@/components/layouts/Stack.layout";

export type ProfileProps = Record<string, string>;

const Profile = (_: ProfileProps) => {
  return (
    <ErrorBoundary
      fallback={
        <Center>
          <Stack className="gap-4">
            <FontAwesomeIcon icon={faFaceGrimace} className="w-[50px]" />
            <p className="text-center italic leading-[18px]">
              Could not load avatar..
            </p>
          </Stack>
        </Center>
      }
    >
      <Canvas
        className="h-full w-full"
        style={{ width: "auto", height: "auto" }}
      >
        <Suspense
          fallback={
            <Html center>
              <Center>
                <DotsLoader size="default" dotsBg="bg-gray-400" />
              </Center>
            </Html>
          }
        >
          <Main />
        </Suspense>
      </Canvas>
    </ErrorBoundary>
  );
};

export default Profile;
