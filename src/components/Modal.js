import React, { Component } from "react";


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
      }
}



class Modal extends Component {
    render() {
        return (
            <div>
                <div id="card">
                    {/* <!-- container for all cards --> */}
                    <div class="container" style={{zIndex: "1"}}>
                        {/* <!-- card --> */}
                        <div class="flex flex-col md:flex-col overflow-hidden
                                        rounded-lg h-96 w-full" style={{backgroundColor: "rgba(255, 255, 255, 0.00)"}}>
                            {/* <!-- media --> */}
                            <div style={{zIndex: "5"}} class="w-full flex justify-center text-black">
                                <h1 style={styles.text}>Hi, I'm Eric Taylor. </h1>
                            </div>
                            {/* <!-- content --> */}
                            <div class="w-full px-12 text-white">
                                <h3 style={{fontSize: "30px", textShadow: "2px 0 0 #000, 0 -2px 0 #000, 0 2px 0 #000, -2px 0 0 #000"}} class="whitespace-normal">I'm a full stack developer with over 3 years as a UI/UX designer and over 7 years owning and operating multiple 6 and 7 figure youth sports companies. </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Modal;