import { useState } from "react";
// import components
import Model from "./components/model";
import TabelTab from "./components/TabelTab";
//import ant design
import 'antd/dist/antd.css';



function App() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
    {/* header */}
      <div className="header">
        <h2 > Visits</h2>
        <div className="end">
          <Model isVisible={isVisible} setIsVisible={setIsVisible} />
        </div>
      </div>
      {/* body */}
      <TabelTab setIsVisible={setIsVisible} />
    </>
  );
}

export default App;
