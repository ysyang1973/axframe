import React from "react";
import { AXFIconComponent, AXFIconProps } from "./AXFIconComponent";
function AXFIconRectTriangleLeft(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M2 2V14H14V2H2ZM13 13H3V3H13V13Z' fill='black' />
        <path d='M9 5L6 8L9 11V5Z' fill='black' />
      </svg>
    </AXFIconComponent>
  );
}
export { AXFIconRectTriangleLeft };
