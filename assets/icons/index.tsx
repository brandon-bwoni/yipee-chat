import { View, Text } from "react-native";
import React from "react";
import { theme } from "@/constants/theme";

// Icons import
import Home from "./Home";
import ArrowLeft from "./ArrowLeft";
import Call from "./Call";
import Camera from "./Camera";
import Comment from "./Comment";
import Delete from "./Delete";
import Edit from "./Edit";
import Heart from "./Heart";
import Image from "./Image";
import Location from "./Location";
import Lock from "./Lock";
import Logout from "./Logout";
import Mail from "./Mail";
import Plus from "./Plus";
import Search from "./Search";
import Send from "./Send";
import Share from "./Share";
import ThreeDotsCircle from "./ThreeDotsCircle";
import ThreeDotsHorizontal from "./ThreeDotsHorizontal";
import User from "./User";
import Video from "./Video";

// Define the icons type
const icons = {
  home: Home,
  arrowLeft: ArrowLeft,
  call: Call,
  camera: Camera,
  comment: Comment,
  delete: Delete,
  edit: Edit,
  heart: Heart,
  image: Image,
  location: Location,
  lock: Lock,
  logout: Logout,
  mail: Mail,
  plus: Plus,
  search: Search,
  send: Send,
  share: Share,
  threeDotCirles: ThreeDotsCircle,
  threeDotsHorizontal: ThreeDotsHorizontal,
  user: User,
  video: Video,
} as const;

// Extract keys of icons object
type IconName = keyof typeof icons;

// Define props for the Icon component
interface IconProps {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  color?: string;
  [key: string]: any; // Allow additional props
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  strokeWidth = 1.9,
  color = theme.colors.textLight,
  ...props
}) => {
  const IconComponent = icons[name];

  if (!IconComponent) {
    console.error(`Icon "${name}" does not exist.`);
    return null;
  }

  return (
    <IconComponent
      height={size}
      width={size}
      strokeWidth={strokeWidth}
      color={color}
      {...props}
    />
  );
};

export default Icon;
