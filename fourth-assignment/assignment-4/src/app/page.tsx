import "./components/next_button"


import Next_button from './components/next_button';
let Home = ()=>{
  return (
   <>
    <div 
     className="text-center mt-10  bg-image" 
     >
      
<h1 className="text-4xl font-bold mb-6 text-black">On Click Button for Next and Previous Name</h1>
<Next_button/>
    </div>
   </>)
}
export default Home;


