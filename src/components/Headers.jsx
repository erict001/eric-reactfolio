import React, { Component } from 'react';


class Headers extends Component {
    render() {
        return (
            <div class="mb-10">
                {/* <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", justifyContent: "center",height: "auto", width: "100vw", color: "white", backgroundColor: "black"}}>
                    <h1 style={{ display: "flex", justifyContent: "center", fontSize: "100px" }}>Accomplishments</h1>
                </div> */}
                <br></br>
                <div style={{ marginTop: "5vh", display: "flex", justifyContent: "center", height: "auto", width: "100vw", color: "white", backgroundColor: "black" }}>
                    <h1 style={{ alignContent: "center", fontSize: "100px" }}>Resume</h1>
                </div>
                <hr></hr>
            </div>
        )
    }
}

export default Headers