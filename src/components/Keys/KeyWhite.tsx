import { useState } from "react";

export default function KeyWhite({
  dProp,
  sound,
}: {
  dProp: string;
  sound?: any;
}) {
  const [over, setOver] = useState(false);
  const audio = new Audio(sound);

  return (
    <svg
      width="128"
      height="563"
      viewBox="0 0 128 563"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => {
        setOver(true);
      }}
      onMouseLeave={() => {
        setOver(false);
      }}
      onClick={() => {
        audio.play();
      }}
    >
      <path d={dProp} fill={over ? "#ffd200" : "#ffffff"} />
    </svg>
  );
}
