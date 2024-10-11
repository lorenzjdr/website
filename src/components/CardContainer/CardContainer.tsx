import Card from "../Card/Card";
import "./CardContainer.css"

const CardContainer = () =>{
  return (
    <div className="card-rows">
      <Card title={"Danddy"} description={"A D&D Campaign helper that improves quality of life for campaigns and combat."} image={""} link={""}/>
      <Card title={"TamaGOtchi"} description={"Habit tracker written in Golang with Tamagotchi gameplay elements."} image={""} link={""}/>
      <Card title={"VTT_to_TXT"} description={"Convert a VTT file to TXT."} image={""} link={"https://github.com/lorenzjdr/VTT_to_TXT"}/>
    </div>
  );
}

export default CardContainer;
