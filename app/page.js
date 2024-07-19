import ProfileBody from "@/components/Profile/ProfileBody";
import ProfileHeader from "@/components/Profile/ProfileHeader";
import ProfileNav from "@/components/Profile/ProfileNav";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ProfileHeader/>
      <ProfileNav/>
      <ProfileBody/>
    </main>
  );
}
