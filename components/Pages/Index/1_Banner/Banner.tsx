import BabylonCanvas from "./BabylonCanvas/BabylonCanvas";
import Welcome from "./Welcome/Welcome";

export default function Banner() {
  return (
    <>
    <div style={{ position: 'relative', width: '100vw', height: '50vh', overflow: 'hidden' }}>
      <div>
        <BabylonCanvas />
      </div>
      <Welcome/>
    </div>
    </>
    );
}
