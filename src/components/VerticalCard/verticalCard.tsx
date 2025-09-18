import { FC, ReactNode } from "react";
import Image from "next/image";
interface VerticalComponent {
  children?: ReactNode;
  imageUrl?: string;
  title?: string;
  hrefLinks?: string;
  username?: string;
}

const VerticalCard: FC<VerticalComponent> = ({
  children,
  imageUrl,
  title,
  hrefLinks,
  username,
}) => {
  return (
    <div className="flex flex-col bg-amber-200 dark:bg-neutral-800 w-37 h-auto rounded-xl overflow-x-hidden">
      {imageUrl && (
        <Image
          src={imageUrl}
          width={100}
          height={100}
          alt={title || "An image should be here"}
          className="m-2 rounded-full"
        />
      )}
      <div className="m-1">
        <h4 className=" font-bold">{title}</h4>
        <span>{username}</span>
        <span className="italic">&quot;{children}&quot;</span>
      </div>

      <a
        href={hrefLinks}
        className="flex mt-auto group bg-cyan-200 p-2 text-black hover:bg-white dark:bg-neutral-900 dark:text-white dark:hover:bg-white dark:hover:text-black transition-colors relative duration-300"
      >
        Visit
        <span className="pl-2 opacity-0 group-hover:opacity-100 transition duration-300">→</span>
      </a>
    </div>
  );
};

export default VerticalCard;
