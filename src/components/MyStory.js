import Modal from "./Modal.js"
import Profile from "../images/assets/Profiles.png"

function MyStory() {
    const styles = {
        background: {
          backgroundImage: `url(${Profile})`,
          backgroundPosition: "right",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
          zIndex: "0",
        }
      }
    
      return (
        <div style={styles.background}>
          <div class="flex justify-center items-center" style={{backgroundColor: "rgba(0, 0, 0, 0.20)", height: "100%", width: "100%", }}>
            <Modal />
          </div>
        </div>
      );
}

export default MyStory;