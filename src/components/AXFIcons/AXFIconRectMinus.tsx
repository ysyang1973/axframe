import React from "react";
import { AXFIconComponent, AXFIconProps } from "./AXFIconComponent";
function AXFIconRectMinus(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M11 7.5H5V8.5H11V7.5Z' fill='black' />
        <path d='M2 2V14H14V2H2ZM13 13H3V3H13V13Z' fill='black' />
      </svg>
    </AXFIconComponent>
  );
}
export { AXFIconRectMinus };
