import * as React from "react";
import { GoSearch, GoLocation } from "react-icons/go";
import { BsImage } from "react-icons/bs";
import { BiNews } from "react-icons/bi";
import { RiVideoLine } from "react-icons/ri";
import { SlTag } from "react-icons/sl";
import { FcGoogle, FcStart } from "react-icons/fc";

interface IconBaseProps extends React.SVGAttributes<SVGElement> {
  children?: React.ReactNode;
  size?: string | number;
  color?: string;
  title?: string;
}

// eslint-disable-next-line no-undef
type IconType = (props: IconBaseProps) => JSX.Element;

export interface MenuItems {
  name: string;
  Icon: IconType;
}

export const quickLinks = [
  "About",
  "Advertising",
  "Business",
  "How Search works",
];
export const settingMenu = ["Privacy", "Terms", "Settings"];

export const pagination = [
  { page: 1, startIndex: 1 },
  { page: 2, startIndex: 11 },
  { page: 3, startIndex: 21 },
  { page: 4, startIndex: 31 },
  { page: 5, startIndex: 41 },
  { page: 6, startIndex: 51 },
  { page: 7, startIndex: 61 },
  { page: 8, startIndex: 71 },
  { page: 9, startIndex: 81 },
  { page: 10, startIndex: 91 },
];

// export const menu: MenuItems[] = [
//     { name: "All", icon: <GoSearch/> },
//     { name: "Images", icon: <BsImage size={14} /> },
//     { name: "News", icon: <BiNews /> },
//     { name: "Videos", icon: <RiVideoLine /> },
//     { name: "Shopping", icon: <SlTag size={14} /> },
// ];
export const menu: MenuItems[] = [
  { name: "All", Icon: GoSearch },
  { name: "Images", Icon: BsImage },
  { name: "News", Icon: BiNews },
  { name: "Videos", Icon: RiVideoLine },
  { name: "Shopping", Icon: SlTag },
];

export const SideMenuIcons: MenuItems[] = [
  {
    name: "Search",
    Icon: FcGoogle,
  },
  {
    name: "YouTube",
    Icon: FcStart,
  },
  {
    name: "Maps",
    Icon: GoLocation,
  },
  {
    name: "Search",
    Icon: FcGoogle,
  },
  {
    name: "YouTube",
    Icon: FcStart,
  },
  {
    name: "YouTube",
    Icon: FcStart,
  },
  {
    name: "Maps",
    Icon: GoLocation,
  },
  {
    name: "Search",
    Icon: FcGoogle,
  },

  {
    name: "Maps",
    Icon: GoLocation,
  },
  {
    name: "Search",
    Icon: FcGoogle,
  },
  {
    name: "YouTube",
    Icon: FcStart,
  },
];
