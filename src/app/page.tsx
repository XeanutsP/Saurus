import VerticalCard from "@/components/verticalCard";

export default function Home() {
  const socialData = [
    {
      name: "Github",
      imagepath: "https://github.com/XeanutsP.png",
      Description: "",
      socialUrl: "https://github.com/XeanutsP",
    },
    {
      name: "X",
      imagepath:
        "https://pbs.twimg.com/profile_images/1967832215066382338/PmIEMBgG_400x400.jpg",
      Description: "",
      socialUrl: "https://x.com/XeanutP",
    },
  ];
  return (
    <div className="h-8 flex flex-col items-center transition duration-300 bg-white dark:bg-black">
      <h4 className="">Now you&apos;re visiting...</h4>
      <div>
        <h1 className="inline text-9xl text-transparent bg-clip-text bg-gradient-to-br from-orange-400 via-cyan-300 to to-blue-300 bg[length:200%_100%] dark:from-red-800 dark:via-purple-900 dark:to-blue-700 transition-colors duration-300 fade-in">
          XeanutsP
        </h1>
        <span className="">&apos;s profile</span>
      </div>
      <p>Anything could happends... Right?</p>

      <div className="flex flex-row gap-2">
        {socialData.map((item, idx) => (
          <VerticalCard
            key={idx}
            title={item.name}
            imageUrl={item.imagepath}
            hrefLinks={item.socialUrl}
          >
            {item.Description}
          </VerticalCard>
        ))}
      </div>
    </div>
  );
}
