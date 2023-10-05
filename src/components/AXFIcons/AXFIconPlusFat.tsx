import React from "react";
import { AXFIconComponent, AXFIconProps } from "./AXFIconComponent";
function AXFIconPlusFat(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M12 7H9V4H7V7H4V9H7V12H9V9H12V7Z' fill='black' />
      </svg>
    </AXFIconComponent>
  );
}
export { AXFIconPlusFat };
