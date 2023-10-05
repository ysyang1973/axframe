import React from "react";
import { AXFIconComponent, AXFIconProps } from "./AXFIconComponent";
function AXFIconRectArrowLeft(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M2 2V14H14V2H2ZM13 13H3V3H13V13Z' fill='black' />
        <path d='M9.4 10.6L6.7 8L9.4 5.4L8.6 4.6L5.3 8L8.6 11.4L9.4 10.6Z' fill='black' />
      </svg>
    </AXFIconComponent>
  );
}
export { AXFIconRectArrowLeft };
