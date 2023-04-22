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
        fontSize: "2rem",
        width: "90vw"
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
    },
    divStyle: {
        backgroundColor: "rgba(0, 0, 0, 0.60)",
        height: "100%",
        width: "100%",
    },
    headers: {
        border: "1px solid white"
    }
}


function myModal() {
    return (
        <div>
            <table style={styles.text}>
                <tbody>
                    <tr style={styles.headers}>
                        <th scope="row" style={styles.headers}>Languages</th>
                        <td>HTML5</td>
                        <td>CSS</td>
                        <td>JavaScript</td>
                        <td>jQuery</td>
                    </tr>
                    <tr style={styles.headers}>
                        <th scope="row" style={styles.headers}>Frameworks</th>
                        <td>Bootstrap</td>
                        <td>Express.js</td>
                        <td>Node.js</td>
                        <td>React</td>
                        <td>Wordpress</td>
                    </tr>
                    <tr style={styles.headers}>
                        <th scope="row" style={styles.headers}>Databases</th>
                        <td>MySQL</td>
                        <td>SQL</td>
                    </tr>
                    <tr style={styles.headers}>
                        <th scope="row" style={styles.headers}>Learning</th>
                        <td>Python</td>
                        <td>MongoDB</td>
                        <td>Flutter & Dart</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default myModal;