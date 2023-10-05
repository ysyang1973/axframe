import React from "react";
import { IconComponent, IconProps } from "./IconComponent";

interface Props {}

function PeatIconGear(props: IconProps) {
  return (
    <IconComponent {...props}>
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M11.118 2C10.7393 2 10.393 2.214 10.2236 2.55279L9.41314 4.17373C9.31419 4.37162 9.14181 4.52239 8.93744 4.60715C8.73288 4.69199 8.50534 4.70683 8.29524 4.6368L6.57592 4.06369C6.21658 3.94391 5.82041 4.03743 5.55258 4.30527L4.30529 5.55256C4.03746 5.82039 3.94394 6.21656 4.06372 6.57589L4.63682 8.29521C4.70685 8.5053 4.69201 8.73283 4.60717 8.93739C4.52244 9.14168 4.37175 9.31401 4.17396 9.41296L2.55279 10.2235C2.214 10.3929 2 10.7392 2 11.118V12.8819C2 13.2607 2.214 13.6069 2.55279 13.7763L4.17371 14.5868C4.37159 14.6857 4.52236 14.8581 4.60711 15.0625C4.69186 15.2668 4.70676 15.4941 4.63697 15.704L4.06363 17.424C3.94385 17.7834 4.03737 18.1795 4.30521 18.4474L5.55249 19.6946C5.82033 19.9625 6.21649 20.056 6.57583 19.9362L8.29509 19.3631C8.50519 19.2931 8.73274 19.308 8.93731 19.3928C9.14167 19.4776 9.31404 19.6283 9.41298 19.8262L10.2235 21.4472C10.3929 21.786 10.7391 22 11.1179 22H12.8818C13.2606 22 13.6069 21.786 13.7763 21.4472L14.5867 19.8263C14.6857 19.6284 14.858 19.4777 15.0624 19.3929C15.2669 19.3081 15.4944 19.2933 15.7045 19.3633L17.424 19.9364C17.7833 20.0562 18.1795 19.9627 18.4473 19.6949L19.6946 18.4476C19.9624 18.1797 20.0559 17.7836 19.9362 17.4242L19.3631 15.705C19.2931 15.4949 19.3079 15.2674 19.3928 15.0628C19.4775 14.8584 19.6283 14.686 19.8262 14.5871L21.4472 13.7766C21.786 13.6072 22 13.2609 22 12.8821V11.1182C22 10.7394 21.786 10.3932 21.4472 10.2238L19.8264 9.41339C19.6285 9.31442 19.4777 9.14202 19.3929 8.93761C19.3081 8.73302 19.2932 8.50545 19.3633 8.29534L19.9364 6.57604C20.0561 6.2167 19.9626 5.82054 19.6948 5.5527L18.4475 4.30542C18.1797 4.03758 17.7835 3.94406 17.4242 4.06384L15.7051 4.63686C15.4949 4.70692 15.2673 4.69207 15.0627 4.60719C14.8584 4.52246 14.686 4.3718 14.587 4.17405L13.7764 2.55279C13.607 2.214 13.2607 2 12.882 2H11.118ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z'
          fill='black'
          fillOpacity='0.3'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M5.58565 16.0202L5.01231 17.7403L6.2596 18.9875L7.97886 18.4145C8.43787 18.2614 8.91404 18.3006 9.32041 18.4691C9.72477 18.6368 10.0906 18.9454 10.3074 19.379L11.1179 21H12.8818L13.6923 19.3791C13.9091 18.9455 14.275 18.6369 14.6793 18.4692C15.0857 18.3007 15.5618 18.2616 16.0207 18.4146L17.7402 18.9877L18.9875 17.7405L18.4144 16.0213C18.2614 15.5622 18.3005 15.086 18.4691 14.6797C18.6368 14.2753 18.9454 13.9095 19.379 13.6927L21 12.8821V11.1182L19.3792 10.3078C18.9455 10.091 18.6369 9.72509 18.4692 9.32067C18.3007 8.91429 18.2616 8.43811 18.4146 7.97911L19.3633 8.29534C19.2932 8.50545 19.3081 8.73302 19.3929 8.93761C19.4777 9.14202 19.6285 9.31442 19.8264 9.41339L21.4472 10.2238C21.786 10.3932 22 10.7394 22 11.1182V12.8821C22 13.2609 21.786 13.6072 21.4472 13.7766L19.8262 14.5871C19.6283 14.686 19.4775 14.8584 19.3928 15.0628C19.3079 15.2674 19.2931 15.4949 19.3631 15.705L19.9362 17.4242C20.0559 17.7836 19.9624 18.1797 19.6946 18.4476L18.4473 19.6949C18.1795 19.9627 17.7833 20.0562 17.424 19.9364L15.7045 19.3633C15.4944 19.2933 15.2669 19.3081 15.0624 19.3929C14.858 19.4777 14.6857 19.6284 14.5867 19.8263L13.7763 21.4472C13.6069 21.786 13.2606 22 12.8818 22H11.1179C10.7391 22 10.3929 21.786 10.2235 21.4472L9.41298 19.8262C9.31404 19.6283 9.14167 19.4776 8.93731 19.3928C8.73274 19.308 8.50519 19.2931 8.29509 19.3631L6.57583 19.9362C6.21649 20.056 5.82033 19.9625 5.55249 19.6946L4.30521 18.4474C4.03737 18.1795 3.94385 17.7834 4.06363 17.424L4.63697 15.704C4.70676 15.4941 4.69186 15.2668 4.60711 15.0625C4.52236 14.8581 4.37159 14.6857 4.17371 14.5868L4.62092 13.6924C5.05455 13.9092 5.36313 14.275 5.53083 14.6794C5.69918 15.0853 5.73811 15.5617 5.58565 16.0202ZM4.60717 8.93739L5.53088 9.32048C5.69941 8.91413 5.7385 8.43797 5.58551 7.97898L5.0124 6.25966L6.25969 5.01237L7.97902 5.58548C8.438 5.73848 8.91417 5.69939 9.32053 5.53086C9.7249 5.36316 10.0907 5.05457 10.3076 4.62094L11.118 3L12.882 3L13.6926 4.62126C13.9095 5.05448 14.2754 5.36329 14.6796 5.5309C15.086 5.69946 15.5622 5.73857 16.0213 5.58555L17.7404 5.01252L18.9877 6.25981L18.4146 7.97911L19.3633 8.29534L19.9364 6.57604C20.0561 6.2167 19.9626 5.82054 19.6948 5.5527L18.4475 4.30542C18.1797 4.03758 17.7835 3.94406 17.4242 4.06384L15.7051 4.63686C15.4949 4.70692 15.2673 4.69207 15.0627 4.60719C14.8584 4.52246 14.686 4.3718 14.587 4.17405L13.7764 2.55279C13.607 2.214 13.2607 2 12.882 2H11.118C10.7393 2 10.393 2.214 10.2236 2.55279L9.41314 4.17373C9.31419 4.37162 9.14181 4.52239 8.93744 4.60715C8.73288 4.69199 8.50534 4.70683 8.29524 4.6368L6.57592 4.06369C6.21658 3.94391 5.82041 4.03743 5.55258 4.30527L4.30529 5.55256C4.03746 5.82039 3.94394 6.21656 4.06372 6.57589L4.63682 8.29521C4.70685 8.5053 4.69201 8.73283 4.60717 8.93739ZM4.17396 9.41296L2.55279 10.2235C2.214 10.3929 2 10.7392 2 11.118V12.8819C2 13.2607 2.214 13.6069 2.55279 13.7763L4.17371 14.5868L4.62092 13.6924L3 12.8819L3 11.118L4.62117 10.3074C5.05458 10.0906 5.36323 9.72471 5.53088 9.32048L4.60717 8.93739C4.52244 9.14168 4.37175 9.31401 4.17396 9.41296ZM17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12ZM16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z'
          fill='black'
        />
      </svg>
    </IconComponent>
  );
}

export { PeatIconGear };
