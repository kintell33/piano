import { useEffect, useState } from "react";

export default function KeyBlack({ dProp, sound, letter }: { dProp: string, sound?:any, letter?:string }) {
  const [over, setOver] = useState(false);
  const audio = new Audio(sound);

  const handleKeyPress = (event:any) => {
    if(letter && event.key === letter){
      audio.play();
    }
  }

  useEffect(()=>{
    document.addEventListener("keydown", handleKeyPress, false);
  },[])

  return (
    <>
      {dProp !== "" ? (
        <svg
          width="105"
          height="335"
          viewBox="0 0 105 335"
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
          <path d={dProp} fill={over ? "#f40082" : "#000000"} />
        </svg>
      ) : (
        <div style={{ width: "80px" }}>
            &nbsp;
        </div>
      )}
    </>
  );
}
