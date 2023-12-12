import "./components/next_button"
import Image from "next/image";

import Next_button from './components/next_button';
let Home = ()=>{
  return (
   <body>
    <div 
     className="text-center mt-10  bg-image" 
     >
      
<h1 className="text-4xl font-bold mb-6">On Click Button for Next and Previous Name</h1>
<Next_button/>
    </div>
   </body>)
}
export default Home;


