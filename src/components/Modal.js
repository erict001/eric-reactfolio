import zIndex from "@mui/material/styles/zIndex";
import React from "react";


const styles = {
    header: {
        display: "flex",
        flexDirection: "column",
        listStyle: "none",
        justifyContent: "space-around",
    },
    label: {
        width: "30rem",
    },
    text: {
        color: "white",
        textShadow: "1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000",
    },
    zIndex: { 
        zIndex: "1" 
    },
    background: { 
        backgroundColor: "rgba(255, 255, 255, 0.00)" 
    },
    zIndexs: { 
        zIndex: "5" 
    },
    styled: {
         fontSize: "30px", 
         textShadow: "2px 0 0 #000, 0 -2px 0 #000, 0 2px 0 #000, -2px 0 0 #000" 
        }
}



function Modal() {
    return (
        <div>
            <div id="card">
                <div class="container" style={styles.zIndex}>
                    <div class="flex flex-col md:flex-col overflow-hidden
                                        rounded-lg h-96 w-full" style={styles.background}>
                        <div style={styles.zIndexs} class="w-full flex justify-center text-black ">
                            <h1 style={styles.text}>Hi, I'm Eric Taylor. </h1>
                        </div>
                        <div class="w-full px-12 text-white">
                            <h3 style={styles.styled} class="whitespace-normal">Full stack software developer with over 5 years of experience in all stages of advanced web development. Built two multi-six figure companies from scratch in under 2 years while operating a third multi-million dollar company. </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;