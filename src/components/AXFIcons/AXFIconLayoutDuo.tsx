import React from "react";
import { AXFIconComponent, AXFIconProps } from "./AXFIconComponent";
function AXFIconLayoutDuo(props: AXFIconProps) {
  return (
    <AXFIconComponent {...props}>
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M6 1H1V8H6V1Z' fill='red' fillOpacity='0.3' />
        <path d='M6 12H1V15H6V12Z' fill='red' fillOpacity='0.3' />
        <path d='M15 1H10V4H15V1Z' fill='red' fillOpacity='0.3' />
        <path d='M15 8H10V15H15V8Z' fill='red' fillOpacity='0.3' />
        <path d='M6 1V8H1V1H6ZM7 0H0V9H7V0Z' fill='black' />
        <path d='M6 12V15H1V12H6ZM7 11H0V16H7V11Z' fill='black' />
        <path d='M15 1V4H10V1H15ZM16 0H9V5H16V0Z' fill='black' />
        <path d='M6 1V8H1V1H6ZM7 0H0V9H7V0Z' fill='black' />
        <path d='M15 8V15H10V8H15ZM16 7H9V16H16V7Z' fill='black' />
      </svg>
    </AXFIconComponent>
  );
}
export { AXFIconLayoutDuo };
