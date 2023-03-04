import * as React from "react";
import { GoSearch } from "react-icons/go";
import { BsImage } from "react-icons/bs";
import { BiNews } from "react-icons/bi";
import { RiVideoLine } from "react-icons/ri";
import { SlTag } from "react-icons/sl";

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

interface sideIcons {
  name: string;
  icon: string;
  to: string;
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

export const SideMenuIcons: sideIcons[] = [
  {
    name: "Search",
    icon: "/assets/search.png",
    to: "https://www.google.co.ug/webhp?authuser=0",
  },
  {
    name: "Maps",
    icon: "/assets/map.png",
    to: "https://www.google.co.ug/maps/@0.3077959,32.6164403,15z?hl=en&authuser=0",
  },
  {
    name: "YouTube",
    icon: "/assets/youtube.png",
    to: "https://youtube.com/",
  },
  {
    name: "Play",
    icon: "/assets/play.png",
    to: "https://play.google.com/store/games?hl=en&pli=1",
  },
  {
    name: "Gmail",
    icon: "/assets/gmail.png",
    to: "https://mail.google.com/mail/?authuser=0",
  },
  {
    name: "Contacts",
    icon: "/assets/gcontacts.png",
    to: "https://contacts.google.com/?hl=en&authuser=0",
  },
  {
    name: "Drive",
    icon: "/assets/drive.png",
    to: "https://drive.google.com/?authuser=0",
  },
  {
    name: "Calendar",
    icon: "/assets/calendar.png",
    to: "https://calendar.google.com/calendar?authuser=0",
  },

  {
    name: "Translate",
    icon: "/assets/translate.png",
    to: "https://translate.google.co.ug/?hl=en&authuser=0",
  },
  {
    name: "Photos",
    icon: "/assets/photo.webp",
    to: "https://photos.google.com/?authuser=0&pageId=none",
  },
  {
    name: "News",
    icon: "/assets/news.jpeg",
    to: "https://news.google.com/?authuser=0",
  },
];
