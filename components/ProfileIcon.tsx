import { forwardRef, useRef, useState } from "react";
import { TbGridDots } from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";
import { SideMenuIcons } from "../utils/constants";
import { useOnClickOutside } from "../hooks/hooks";

const ProfileIcon = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>();
  useOnClickOutside(ref, () => setOpen(false));
  return (
    <div className="relative flex gap-2">
      <span
        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-black/[0.05]"
        onClick={() => setOpen(!open)}
        tabIndex={0}
        role="button"
        onKeyDown={() => setOpen(!open)}
      >
        <TbGridDots size={20} color="#5f6368" />
      </span>
      <span className="relative flex h-10 w-10 items-center justify-center">
        {/* <img className="absolute" alt="" src="/assets/profile-ring.svg" /> */}
        <span className="relative h-8 w-8 cursor-pointer overflow-hidden rounded-full">
          <Image alt="" src="/assets/pic.jpg" fill />
        </span>
      </span>
      {open && <IconMenu ref={ref} />}
    </div>
  );
};

export default ProfileIcon;

const IconMenu = forwardRef<HTMLDivElement>(function IconMenu(props, ref) {
  return (
    <div
      ref={ref}
      className="absolute right-0 top-11 z-10 grid w-[300px] grid-cols-3 gap-1 rounded-md bg-white py-3 px-4 shadow-lg"
    >
      <Link
        href=""
        className="flex flex-col space-y-2 rounded-sm p-2 text-center hover:bg-blue-200"
      >
        <span className="relative mx-auto h-10  w-10 overflow-hidden rounded-full">
          <Image alt="" src="/assets/pic.jpg" fill />
        </span>
        <span className="text-sm">Account</span>
      </Link>
      {SideMenuIcons.map(({ Icon, name }, i) => (
        <Link
          key={i}
          href=""
          className="flex flex-col space-y-2 rounded-sm p-2 text-center hover:bg-blue-200"
        >
          <Icon size={30} className="mx-auto text-center" />
          <span className="text-sm">{name}</span>
        </Link>
      ))}
    </div>
  );
});
