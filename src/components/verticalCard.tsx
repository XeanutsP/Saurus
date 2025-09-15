import { FC, ReactNode } from "react";
import Image from "next/image";

interface VerticalComponent {
  children?: ReactNode;
  imageUrl?: string;
  title?: string;
  hrefLinks?: string;
}

const VerticalCard: FC<VerticalComponent> = ({
  children,
  imageUrl,
  title,
  hrefLinks,
}) => {
  return (
    <div className="grid grid-cols-1 grid-rows-3 gap-4 h-0">
      {imageUrl && (
        <Image
          src={imageUrl}
          width={100}
          height={100}
          alt={title || "An image should be here"}
          className="rounded-full"
        />
      )}
      <h4 className="">{title}</h4>
      {children}
      <a href={hrefLinks} className="flex-1 bg-cyan-300 text-black hover:bg-amber-800 transition-colors hover:text-white">
        Visit
      </a>
    </div>
  );
};

export default VerticalCard;
