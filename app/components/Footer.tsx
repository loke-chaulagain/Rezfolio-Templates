"use client";
import { Text } from "@mantine/core";
import Image from "next/image";
// import GithubIcon from "./icons/GithubIcon";
import Link from "next/link";
import heart from "../../public/heart.svg";

export function Footer() {
  return (
    <footer className="flex justify-center   bg-white px-2 md:px-0  sm:py-0 border-t">
      <div className="flex gap-5 items-center justify-between lg:w-6/12 ">
        <Text
          color="dimmed"
          size="sm">
          © 2023 lokendra chaulagain.
        </Text>

        <Link
          className="flex items-center gap-1 "
          target="_blank"
          href={"https://rezfolio.vercel.app/"}>
          <Text
            className=" text-primary-500 hover:underline transition-all ease-in-out"
            color="dimmed"
            size="sm">
            Made with Rezfolio
          </Text>
          <Image
            className=" h-3 w-3"
            src={heart}
            alt="image"
          />
        </Link>
      </div>
    </footer>
  );
}
