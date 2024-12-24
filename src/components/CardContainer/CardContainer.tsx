import { useEffect, useState } from "react";
import useVisibility from "../../Utils/visiblility";
import Card from "../Card/Card";
import "./CardContainer.css";
import danddyImage from '../../assets/danddy.jpg';
import vttToTxtImage from '../../assets/vtt_to_txt.png';
import darkSkyRoadsImage from '../../assets/darkskyroads-epk.png';

const CardContainer = () => {
  const { ref, isVisible } = useVisibility();
  const [played, setPlayed] = useState(false);

  useEffect(() => {
    if (isVisible && !played) {
      setPlayed(true);
    }
  }, [isVisible, played]);

  return (
    <>
    <div >
      <h1 ref={ref} className={`card-container-title ${played ? 'visible': 'hidden'}`}>
      Projects</h1>
    </div>
    <div 
      ref={ref} 
      className={`card-rows ${played ? 'visible' : 'hidden'}`}
      style={{ transition: 'opacity 0.5s', opacity: played ? 1 : 0 }}
    >
      <Card 
        title={"Dark Sky Roads Electronic Press Kit"} 
        description={"An electronic press kit built in React for the band Dark Sky Roads."} 
        image={darkSkyRoadsImage}
        link={"https://darkskyroads.com/"}
        linkText={"View the EPK!"}
      />

      <Card 
        title={"VTT_to_TXT"} 
        description={"A tool to remove timestamps and convert a .VTT file to a .TXT."} 
        image={vttToTxtImage} 
        link={"https://vtt-to-txt.lorenzjdr.dev/"}
        linkText={"Try it!"}
      />
      
      <Card 
        title={"Danddy"} 
        description={"A D&D Campaign helper that improves quality of life for campaigns and combat."} 
        image={danddyImage} 
        link={""}
      />
    </div>
    </>
  );
}

export default CardContainer;
