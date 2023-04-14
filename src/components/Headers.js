import React from 'react';


function Headers() {
    const styles = {
        div: { 
            marginTop: "5vh", 
            display: "flex", 
            justifyContent: "center", 
            height: "auto", 
            width: "100vw", 
            color: "white", 
            backgroundColor: "black" 
        },
        professional: { 
            display: "flex", 
            justifyContent: "center", 
            fontSize: "100px" 
        }
    }

    return (
        <div class="mb-10">
            <br></br>
            <div style={styles.div}>
                <h1 style={styles.professional}>Professional Experience:</h1>
            </div>
            <hr></hr>
        </div>
    )
}

export default Headers