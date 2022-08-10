import React from "react";
import { useEffect, useState } from "react";

import Stuff from "../images/assets/91030.png"
import Denali from "../images/assets/Denali.png"
import ApolloB from "../images/assets/ApolloB.png"
import APT from "../images/assets/APT.png"

export default function Home() {
  const [photo, setPhoto] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      change();
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [photo]);

  const change = () => {
    if (photo === 5) {
      setPhoto(1);
      return;
    }

    setPhoto((prev) => prev + 1);
  };

  const returnPhotoURL = () => {
    switch (photo) {
      case 1:
        return APT;
      case 2:
        return ApolloB;
      case 3:
        return Denali;
      case 4:
        return Stuff;
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${returnPhotoURL()})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        marginTop: "1vh",
        width: "100vw",
        height: "90vh",
        zIndex: "0",
      }}
    >
      <div style={{backgroundColor: "rgba(255, 255, 255, 0.56)", height: "100%", width: "100%"}}>
        <h1 class="z-100 opacity-100 text-red-900">There</h1>
      </div>
    </div>
  );
}

