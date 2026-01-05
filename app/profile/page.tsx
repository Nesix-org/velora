// app/profile/page.tsx
"use client";

import { useAuth } from "@/context/AuthContext";
import { Metadata } from "next";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const metadata: Metadata = {
  title: "Velora || Profile Page",
  description: "The Profile Page of Velora Website",
};

function ProfilePage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  if (!user) return null;

  return (
    <div className="p-5 flex flex-col gap-2 items-center justify-center">
      <span>Welcome, {user.name}</span>
      <span>{user.email}</span>
    </div>
  );
}

export default ProfilePage;
