import Link from "next/link";
import { GoLocation } from "react-icons/go";
import { quickLinks, settingMenu } from "../utils/constants";
import { getLocation } from "../utils/helpers";

const Footer = () => {
  return (
    <footer className="bg-[#f2f2f2]">
      <div className="flex border-b border-[#dadce0] py-[15px] px-[15px] md:px-[30px]">
        <GoLocation className="mr-1" />
        <span className="text-[15px] leading-none text-[#70757a]">
          {getLocation()}
        </span>
      </div>

      <div className="flex flex-col justify-between border-b border-[#dadce0] py-3 md:flex-row md:py-0 md:px-[15px]">
        <div className="flex justify-center">
          {quickLinks.map((menu, index) => (
            <Link
              href=""
              key={index}
              className="p-[10px] text-[12px] leading-none text-[#70757a] hover:underline md:p-[15px] md:text-[14px]"
            >
              {menu}
            </Link>
          ))}
        </div>

        <div className="flex justify-center">
          {settingMenu.map((menu, index) => (
            <Link
              href=""
              key={index}
              className="p-[10px] text-[12px] leading-none text-[#70757a] hover:underline md:p-[15px] md:text-[14px]"
            >
              {menu}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
