import React from "react";
import { IconComponent, IconProps } from "./IconComponent";

interface Props {}

function IconUser(props: IconProps) {
  return (
    <IconComponent {...props}>
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M19.3336 18.7984C20.9884 17.0143 22 14.6253 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.6253 3.01164 17.0143 4.66636 18.7984C5.60894 16.6424 7.47448 14.982 9.7635 14.3168C8.69953 13.598 8 12.3807 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 12.3807 15.3005 13.598 14.2365 14.3168C16.5255 14.982 18.3911 16.6424 19.3336 18.7984Z'
          fill='black'
          fillOpacity='0.15'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M18.8403 17.8492C20.1868 16.2761 21 14.233 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 14.233 3.81325 16.2761 5.15972 17.8492C6.18725 16.1595 7.82324 14.8807 9.7635 14.3168C8.69953 13.598 8 12.3807 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 12.3807 15.3005 13.598 14.2365 14.3168C16.1768 14.8806 17.8128 16.1595 18.8403 17.8492ZM19.3337 18.7984C20.9884 17.0143 22 14.6253 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C14.5095 22 16.8031 21.0756 18.5588 19.5488C18.5588 19.5488 18.5589 19.5488 18.5589 19.5488C18.8304 19.3127 19.0891 19.0622 19.3337 18.7984C19.3337 18.7984 19.3337 18.7984 19.3337 18.7984ZM18.1198 18.5991C16.9242 16.4523 14.6317 15 12 15C9.36831 15 7.07581 16.4523 5.88021 18.5992C7.48608 20.0891 9.63666 21 12 21C14.3634 21 16.5139 20.0891 18.1198 18.5991ZM12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z'
          fill='black'
        />
      </svg>
    </IconComponent>
  );
}

export { IconUser };
