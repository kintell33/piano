import { useEffect, useState } from "react";

export default function KeyWhite({
  dProp,
  sound,
  letter
}: {
  dProp: string;
  sound?: any;
  letter:string;
}) {
  const [over, setOver] = useState(false);
  const audio = new Audio(sound);

  const handleKeyPress = (event:any) => {
    if(event.key === letter){
      audio.play();
    }
  }

  useEffect(()=>{
    document.addEventListener("keydown", handleKeyPress, false);
  },[])

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
