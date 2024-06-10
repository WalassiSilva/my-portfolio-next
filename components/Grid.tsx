import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

export default function Grid() {
  return (
    <section id="about" className="px-4">
      <BentoGrid>
        {gridItems.map(
          ({
            id,
            title,
            description,
            className,
            imgClassName,
            titleClassName,
            img,
            spareImg,
          }) => (
            <BentoGridItem
              key={id}
              id={id}
              title={title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
}
