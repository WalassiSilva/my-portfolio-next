
import SocialMedias from "./SocialMedias";

export function Footer() {
  return (
    <footer className="w-full mg-24 md:mb-5 pb-10 px-4" id="contact">
      

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light mb-10 md:mb-0">
          Copyright © 2024 Walassi Silva
        </p>

        <SocialMedias />
      </div>
    </footer>
  );
}
