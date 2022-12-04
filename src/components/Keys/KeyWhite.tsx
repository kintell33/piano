import { useState } from "react";

export default function KeyWhite({dProp}:{dProp:string}) {

    const [over, setOver] = useState(false);

  return (
    <svg
      width="128"
      height="563"
      viewBox="0 0 128 563"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => {setOver(true)}}
      onMouseLeave={() => {setOver(false)}}
    >
      <path
        d={dProp}
        fill={over ? '#ffd200' : '#ffffff'}
      />
    </svg>
  );
}
