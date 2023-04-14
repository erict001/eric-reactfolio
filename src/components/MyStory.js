import MyModal from "./myModal.js"
import MyModal2 from "./myModal2.js"
import City from "../images/assets/ManCity.webp"

function MyStory() {
    const styles = {
        background: {
          backgroundImage: `url(${City})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
          zIndex: "0",
        },
        divStyle: {
          backgroundColor: "rgba(0, 0, 0, 0.60)", 
          height: "100%", 
          width: "100%", 
        }
      }
    
      return (
        <div style={styles.background}>
          <div class="flex text-center justify-around items-center" style={styles.divStyle}>
            <MyModal />
            <MyModal2 />
          </div>
        </div>
      );
}

export default MyStory;