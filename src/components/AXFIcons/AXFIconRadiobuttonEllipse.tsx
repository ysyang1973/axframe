import React from "react";
import { AXFIconComponent, AXFIconProps } from "./AXFIconComponent";
function AXFIconRadiobuttonEllipse(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M11 0.6C10.1 0.2 9.2 0 8.2 0H8C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 4.6 13.9 1.8 11 0.6ZM8 12C5.8 12 4 10.2 4 8C4 5.8 5.8 4 8 4C10.2 4 12 5.8 12 8C12 10.2 10.2 12 8 12Z'
          fill='black'
        />
      </svg>
    </AXFIconComponent>
  );
}
export { AXFIconRadiobuttonEllipse };
