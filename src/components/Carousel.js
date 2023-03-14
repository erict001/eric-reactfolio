import React from "react";
import { useEffect, useState } from "react";
import Modal from "./Modal"

import Kevin from "../images/assets/Kevin.jpg"
import Hosting from "../images/assets/hosting.jpg"
import budbud from "../images/assets/budbud.jpg"
import talking from "../images/assets/talking.jpg"

export default function Home() {
  const [photo, setPhoto] = useState(1);
  
  const change = () => {
    if (photo === 4) {
      setPhoto(1);
      return;
    }

    setPhoto((prev) => prev + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      change();
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, (photo));


  const returnPhotoURL = () => {
    switch (photo) {
      case 1:
        return Hosting;
      case 2:
        return Kevin;
      case 3:
        return budbud;
      case 4:
        return talking;
      default:
        return;
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${returnPhotoURL()})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        marginTop: "2vh",
        width: "100vw",
        height: "92vh",
        zIndex: "0",
      }}
    >
      <div class="flex justify-center items-center" style={{backgroundColor: "rgba(0, 0, 0, 0.50)", height: "100%", width: "100%", }}>
        <Modal />
      </div>
    </div>
  );
}

