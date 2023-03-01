import Link from "next/link";
import ProfileIcon from "./ProfileIcon";

const HomeHeader = () => {
  return (
    <header className="flex h-16 items-center justify-between gap-4 px-5 md:justify-end">
      <div className="flex gap-4">
        <Link
          href=""
          className="line-height cursor-pointer text-[13px] text-black/[0.87] hover:underline"
        >
          Gmail
        </Link>
        <Link
          href=""
          className="line-height cursor-pointer text-[13px] text-black/[0.87] hover:underline"
        >
          Images
        </Link>
      </div>

      <ProfileIcon />
    </header>
  );
};

export default HomeHeader;
