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
    <div className="flex flex-col">
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
      <a href={hrefLinks} className=" bg-cyan-200 text-black hover:bg-white dark:bg-purple-800 dark:text-white dark:hover:bg-blue-300 dark:hover:text-black transition-colors duration-300">
        Visit
      </a>
    </div>
  );
};

export default VerticalCard;
