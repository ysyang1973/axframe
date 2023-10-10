import React from "react";
import { AXFIDefaultProgram, AXFISetting, AXFITemplate } from "@axframe/icon";

// eslint-disable-next-line react-refresh/only-export-components
export enum MenuIconType {
  Default,
  Example,
  Setting,
}

interface Props {
  role?: string;
  typeName: keyof typeof MenuIconType;
  fontSize?: number;
  color?: string;
  secondColor?: string;
  style?: React.CSSProperties;
  className?: string;
}

export const menuIcons = Object.values(MenuIconType).filter((v) => isNaN(Number(v)));

export function MenuIcon({ typeName, ...rest }: Props) {
  const className = "ant-menu-item-icon";
  rest.secondColor = "#fff";
  switch (typeName) {
    case "Example":
      return <AXFITemplate {...{ className }} />;
    case "Setting":
      return <AXFISetting {...{ className }} />;
    case "Default":
    default:
      return <AXFIDefaultProgram {...{ className }} />;
  }
}

export default MenuIcon;
