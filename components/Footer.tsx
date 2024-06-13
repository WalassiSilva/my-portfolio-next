import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { socialMedia } from "@/data";
import Image from "next/image";
import SocialMedias from "./SocialMedias";

export function Footer() {
  return (
    <footer className="w-full mg-24 md:mb-5 pb-10 px-4" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]"></h1>
        <a href="mailto:walassi.b@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light mb-10 md:mb-0">
          Copyright © 2024 Walassi Silva
        </p>

        <SocialMedias />
      </div>
    </footer>
  );
}
