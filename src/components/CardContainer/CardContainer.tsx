import { useEffect, useState } from "react";
import useVisibility from "../../Utils/visiblility";
import Card from "../Card/Card";
import "./CardContainer.css";

const CardContainer = () => {
  const {ref, isVisible} = useVisibility();
  const [played, setPlayed] = useState(false)

  useEffect(() => {
    if (isVisible && !played) {
      setPlayed(true);
    }
  }, [isVisible, played]);

  return (
    <div 
      ref={ref} 
      className={`card-rows ${played ? 'visible' : 'hidden'}`}
      style={{ transition: 'opacity 0.5s', opacity: played ? 1 : 0 }}
    >
      <Card 
        title={"Danddy"} 
        description={"A D&D Campaign helper that improves quality of life for campaigns and combat."} 
        image={"/src/assets/danddy.jpg"} 
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
        image={"src/assets/vtt_to_txt.png"} 
        link={"https://vtt-to-txt.lorenzjdr.dev/"}
        linkText={"Try it!"}
      />
    </div>
  );
}

export default CardContainer;
