
import Model from "./components/model";
import TabelTab from "./components/TabelTab";
import 'antd/dist/antd.css';
import { useState } from "react";


function App() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
    <div className="header">
    <h2 > Visits</h2>
<div className="end">
<Model isVisible={isVisible} setIsVisible={setIsVisible} />
</div>
      
    </div>
<TabelTab setIsVisible={setIsVisible} />


    
    
    </>
  );
}

export default App;
