// components/auth/ProfileMenu.tsx
"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
//Context & Hooks
import { useAuth } from "@/components/context/AuthContext";
import { useStatus } from "@/hooks/status";
// Images & Icons
import avatar from "@/public/assets/signup/avatar.png";
import {
  ChevronDown,
  ChevronUp,
  User,
  Bell,
  Settings,
  FileText,
  LogOut,
} from "lucide-react";
// State
import React, { useState } from "react";
// Animation
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};
interface ProfileItem {
  label: string;
  icon: React.ElementType;
}
const Profile: ProfileItem[] = [
  { label: "My Profile", icon: User },
  { label: "Notifications", icon: Bell },
  { label: "Settings", icon: Settings },
  { label: "My Reviews", icon: FileText },
  { label: "Logout", icon: LogOut },
];
export default function ProfileMenu() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const isOnline = useStatus();
  const [showProfile, setShowProfile] = useState(false);

  const handleClick = (label: string) => {
    switch (label) {
      case "Logout":
        logout();
        setShowProfile(false);
        break;
      case "Settings":
        router.push("/settings");
        break;
      case "My Profile":
        router.push("/profile");
        break;
      case "My Reviews":
        router.push("/reviews");
        break;
      case "Notifications":
        router.push("/notifications");
        break;
    }
  };

  return (
    <div className="px-4 flex items-center gap-4   cursor-pointer">
      <Image
        src={avatar}
        alt="User Avatar"
        className="w-11 h-11 rounded-full border border-gray-300"
      />
      <div className="flex items-center gap-2">
        <div className="text-center">
          <p className="text-[#A1C249] capitalize font-bold ">{user?.name}</p>
          <div className="flex items-center gap-1.5 ">
            <span
              className={`h-2.5 w-2.5 rounded-full  ${
                isOnline ? "bg-green-500" : "bg-red-500"
              }`}
            />
            <span
              className={`text-xs font-normal  ${
                isOnline ? "text-[#A1C249]" : "text-red-500"
              }`}
            >
              {isOnline ? "Online" : "Offline"}
            </span>
          </div>
        </div>
        {showProfile ? (
          <ChevronUp
            className=" w-5 h-5 cursor-pointer"
            onClick={() => setShowProfile(false)}
          />
        ) : (
          <ChevronDown
            className=" w-5 h-5 cursor-pointer"
            onClick={() => setShowProfile(true)}
          />
        )}
      </div>
      {showProfile && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          className="absolute top-[76px] right-0 -translate-x-[110px] bg-[#A1C249] px-5 py-2 text-black flex items-center gap-3 rounded-md z-50"
        >
          <div>
            {Profile.map((menu) => {
              const Icon = menu.icon;
              return (
                <div
                  key={menu.label}
                  className="flex items-center gap-2 px-1 py-2 rounded-md cursor-pointer"
                  onClick={() => handleClick(menu.label)}
                >
                  <span>
                    <Icon />
                  </span>
                  <p className="text-sm font-medium text-primary">
                    {menu.label}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      )}
    </div>
  );
}
