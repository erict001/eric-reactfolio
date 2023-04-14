import React from "react";
import { useEffect, useState } from "react";
import Modal from "./Modal"

import Kevin from "../images/assets/Kevin.webp"
import Hosting from "../images/assets/hosting.webp"
import talking from "../images/assets/talking.webp"

export default function Home() {
  const [photo, setPhoto] = useState(1);
  
  const change = () => {
    if (photo === 4) {
      return setPhoto();
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
  }, [photo]);


  const returnPhotoURL = () => {
    switch (photo) {
      case 1:
        return Hosting;
      case 2:
        return Kevin;
      case 3:
        return talking;
      default:
        return setPhoto(1);
    }
  };

  const styles = {
    background: {
      backgroundImage: `url(${returnPhotoURL()})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      marginTop: "2vh",
      width: "100vw",
      height: "92vh",
      zIndex: "0",
    },
    back: {
      backgroundColor: "rgba(0, 0, 0, 0.50)", 
      height: "100%", 
      width: "100%", }
  }

  return (
    <div style={styles.background}>
      <div class="flex justify-center items-center" style={styles.back}>
        <Modal />
      </div>
    </div>
  );
}

