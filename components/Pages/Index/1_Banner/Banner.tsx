import BabylonCanvas from "./BabylonCanvas/BabylonCanvas";
import Welcome from "./Welcome/Welcome";

export default function Banner() {
  return (
    <>
      <div
        style={{
          // position: "relative",
          width: "100vw",
          height: "80vh",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            transform: "translate(-0%, 10%)", // Shift to perfectly center both axes
          }}
        >
          <Welcome />
          <BabylonCanvas />
        </div>
      </div>
    </>
  );
}
