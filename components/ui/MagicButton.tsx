import React from "react";

type MagicButtonProps = {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
};

export default function MagicButton({
  title,
  position,
  icon,
  handleClick,
  otherClasses,
}: MagicButtonProps) {
  return (
   
      <button type="submit" formTarget="_blank"
        className="relative inline-flex w-full h-12 overflow-hidden rounded-lg p-[1px] focus:outilne-none md:w-60 md:mt-10"
        // onClick={handleClick}
            >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e2cbff_0%,#393bb2_50%,#e2cbff_100%)]" />
        <span
          className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
        >
          {position === "left" && icon}
          {title}
          {position === "right" && icon}
        </span>
      </button>
  );
}
