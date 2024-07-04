"use client";
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

function Header() {
  const {user} = useUser();
  const path = usePathname();
  useEffect(() => {
    console.log(path);
  }, []);

  return (
    <div className="flex p-4 items-center justify-between bg-secondary shadow-sm">
      <Image src={"/logo-ai.png"} width={80} height={20} alt="logo" />
      <ul className="hidden md:flex gap-6">
        <Link href={"/"}>
          <li
            className={`hover:text-primary hover:font-bold transition-all
            cursor-pointer
            ${path == "/" && "text-primary font-bold"}
            `}
          >
            Home
          </li>
        </Link>
        <Link href={"/dashboard"}>
          <li
            className={`hover:text-primary hover:font-bold transition-all
            cursor-pointer
            ${path == "/dashboard" && "text-primary font-bold"}
            `}
          >
            Dashboard
          </li>
        </Link>

        <Link href={"/questions"}>
        <li
          className={`hover:text-primary hover:font-bold transition-all
            cursor-pointer
            ${path == "/dashboard/questions" && "text-primary font-bold"}
            `}
        >
          Questions
        </li>
        </Link>
        <Link href={"/dashboard/upgrade"}>
          <li
            className={`hover:text-primary hover:font-bold transition-all
            cursor-pointer
            ${path == "/dashboard/upgrade" && "text-primary font-bold"}
            `}
          >
            Upgrade
          </li>
        </Link>
        <li
          className={`hover:text-primary hover:font-bold transition-all
            cursor-pointer
            ${path == "/dashboard/how" && "text-primary font-bold"}
            `}
        >
          How it Works?
        </li>
        <Link href={"/career-paths"}>
        <li
          className={`hover:text-primary hover:font-bold transition-all
            cursor-pointer
            ${path == "/career-paths" && "text-primary font-bold"}
            `}
        >
          Career Paths
        </li>
        </Link>
      </ul>
      {
        user ? <UserButton /> : <Link href={"/sign-in"}><Button>Sign in</Button></Link>
      }
      
    </div>
  );
}

export default Header;
