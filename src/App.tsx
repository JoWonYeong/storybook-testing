
import "./App.css";
import Plasma from "./plasma";

function App() {

  return (
    <div style={{ width: '100%', height: '800px', position: 'relative' }}>
  <Plasma 
    speed={0.6}
    direction="forward"
    scale={1.1}
    opacity={0.8}
    mouseInteractive={false}
  />
</div>
  );
}

export default App;
