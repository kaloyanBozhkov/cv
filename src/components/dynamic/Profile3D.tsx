import dynamic from "next/dynamic";

import Center from "@/components/layouts/Center.layout";
import DotsLoader from "@/components/atoms/DotsLoader.atom";
import { type ProfileProps } from "@/components/organisms/Profile/Profile.organism";

const Profile = dynamic(
    () => import("@/components/organisms/Profile/Profile.organism"),
    {
      loading: () => (
        <Center>
          <DotsLoader dotsBg="bg-gray-400" />
        </Center>
      ),
    },
  ),
  Profile3D = (props: ProfileProps) => (
    <div className="h-full w-full">
      <Profile {...props} />
    </div>
  );
export default Profile3D;
