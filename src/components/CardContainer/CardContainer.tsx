import useVisibility from "../../Utils/visiblility";
import Card from "../Card/Card";
import "./CardContainer.css";

const CardContainer = () => {
   const { ref, isVisible} = useVisibility();
   return (
     <div 
       ref={ref} 
       className={`card-rows ${isVisible ? 'visible' : 'hidden'}`}
       style={{ transition: 'opacity 0.5s', opacity: isVisible ? 1 : 0 }}
     >

       <Card 
         title={"Danddy"} 
         description={"A D&D Campaign helper that improves quality of life for campaigns and combat."} 
         image={""} 
         link={""}
       />
   
       <Card 
         title={"TamaGOtchi"} 
         description={"Habit tracker written in Golang with Tamagotchi gameplay elements."} 
         image={""} 
         link={""}
       />
       <Card 
         title={"VTT_to_TXT"} 
         description={"Convert a VTT file to TXT."} 
         image={""} 
         link={"https://github.com/lorenzjdr/VTT_to_TXT"}
       />
     </div>
   );
}

export default CardContainer;
