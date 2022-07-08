import React, { Component } from 'react';


class Headers extends Component {
    render() {
        return (
            <div>
                <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", justifyContent: "center",height: "auto", width: "100vw", backgroundColor: "black", color: "white" }}>
                    <h1 style={{ display: "flex", justifyContent: "center", fontSize: "100px" }}>Accomplishments</h1>
                </div>
                <br></br>
                <div style={{ display: "flex", justifyContent: "center", height: "auto", width: "100vw", backgroundColor: "black", color: "white" }}>
                    <h1 style={{ alignContent: "center", fontSize: "100px" }}>Resume</h1>
                </div>
            </div>
        )
    }
}

export default Headers