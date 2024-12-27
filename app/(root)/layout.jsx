'use client';
import React, { useEffect, useState } from "react";
import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { useRouter } from "next/router";
import { getLoggedInUser } from "@/lib/actions/user.actions";

const RootLayout = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getLoggedInUser();
      if (!user) {
        router.push("/sign-in");
      } else {
        setLoggedIn(user);
      }
      setLoading(false); // Set loading to false after fetching
    };

    fetchUser();
  }, [router]);

  if (loading) return <div>Loading...</div>; // Show loading state until user data is available
  if (!loggedIn) return null; // If no user, don't render the layout

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user="{loggedIn}" />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobileNav user="{loggedIn}" />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
};

export default RootLayout;
