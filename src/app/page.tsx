import VerticalCard from "@/components/verticalCard";

export default function Home() {
  return (
    <div className="flex h-8">
      <h4 className="">Now you&apos;re visiting...</h4>
      <div>
        <h1 className="text-9xl text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to to-cyan-300 inline">
          XeanutsP
        </h1>
        <span className="">&apos;s profile</span>
      </div>
      <p>Anything could happends... Right?</p>

      <div>
        <VerticalCard
        title="Github"
        imageUrl="https://github.com/XeanutsP.png"
        >This is my github page</VerticalCard>
      </div>
    </div>
  );
}
