import Modal from "./Modal.js"
import Profile from "../images/assets/view.webp"

function MyStory() {
    const styles = {
        background: {
          backgroundImage: `url(${Profile})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
          zIndex: "0",
        },
        divStyle: {
          backgroundColor: "rgba(0, 0, 0, 0.50)", 
          height: "100%", 
          width: "100%", 
        }
      }
    
      return (
        <div style={styles.background}>
          <div class="flex justify-center items-center" style={styles.divStyle}>
            <Modal />
          </div>
        </div>
      );
}

export default MyStory;