'use client'
import React, { useEffect, useState } from "react";
import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { useRouter } from "next/router";
import { getLoggedInUser } from "@/lib/actions/user.actions";

const RootLayout = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getLoggedInUser();
      if (!user) {
        router.push("/sign-in");
      } else {
        setLoggedIn(user);
      }
    };

    fetchUser();
  }, [router]);

  if (!loggedIn) return null; // Prevent rendering until user state is resolved

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
};

export default RootLayout;
