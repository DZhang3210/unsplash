import MobileProfileHeader from "@/components/Profile/MobileProfileHeader";
import ProfileBody from "@/components/Profile/ProfileBody";
import ProfileHeader from "@/components/Profile/ProfileHeader";
import ProfileNav from "@/components/Profile/ProfileNav";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-between pt-24">
      <div className="w-full hidden lg:block"><ProfileHeader/></div>
      <div className="w-full block lg:hidden"><MobileProfileHeader/></div>
      <ProfileNav/>
      <ProfileBody/>
    </main>
  );
}
