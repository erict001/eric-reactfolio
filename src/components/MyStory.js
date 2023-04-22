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
    },
    margins: {
      marginTop: "40vh",
    },
    miniModal: {
      marginTop: "5vh"
    },
    biggerModal: {
      display: "flex",
      justifyContent: "center"
    }
  }

  return (
    <div style={styles.background}>
      <div class="flex flex-col text-center justify-center items-center" style={styles.divStyle}>
        <div style={styles.margins}>
          <div style={styles.biggerModal}>
            <MyModal2 />
          </div>
          <div style={styles.miniModal}>
            <MyModal />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyStory;