import { useState, useEffect } from "react";

import styles from "../styles/AudioPlayer.module.css";

import Player from '../components/Player/Player';


function MusicPlayer() {

  
  const [play, setPlay] = useState(1);

  function playoupause() {
    if (play % 2 === 0) {
      setPlay(play + 1);
      document.getElementById('player').pause()
      console.log("pause")
    }
    if (play % 2 === 1) {
      setPlay(play + 1);
      document.getElementById('player').play()
      console.log("play")
    }
  }

  useEffect(() => {
    if(play === 1){
      document.getElementById('player').play()
    }
  }, []);

  const [songs] = useState([
    {
     
      src: "https://radiotungane.ao/radio/8030/radio"
    },
    {
      src: "https://radiotungane.ao/radio/8030/radio"
    },
    {
    
      src: "https://radiotungane.ao/radio/8030/radio"
    },
    {
      
      src: "https://radiotungane.ao/radio/8030/radio"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  



  return (
    <div className="musicPlayer flex flex-col px-5 w-[100%] border-2 border-black py-3 bg-[#232A4E] rounded-xl mt-5">
      {/* Upper Part */}
      <div className="upperPart flex items-center justify-between">
        {/* profile */}
        <div className="profile flex">
          <img
            src={require("../img/Mask Group 23.png")}
            alt=""
            className="w-[2.5rem] h-[2.5rem] border-2 border-white rounded-full"
          />
          <div className="detailsf flex flex-col ml-4">
            <span className="text-[1rem]">Promo Music</span>
            <span className="text-sm text-gray-500">Progama com A Bia</span>
          </div>
        </div>
        <div>
          <img src={require("../img/path.png")} alt="" className=" h-[1rem] " />
        </div>
      </div>

      <audio id="player" autoplay="autoplay">
         {/* <source src="https://radiotungane.ao/radio/8030/radio" />*/}
      </audio>

      {/* lower part */}
      <div className="lowerPart flex items-center justify-between mt-5">
        {/* track */}
        <div className="track flex justify-between text-sm text-gray-500 flex-[2] items-center">
         
          <img
            src={require("../img/Group 9.png")}
            alt=""
            className="w-[16rem]"
          />
  
        </div>
        {/* Controls */}
        <div className="controls flex-1 flex items-center justify-around">
          {/* previous arrow */}

          {/* pauseButton */}

          <div className="pauseButton ">
     
    </div>



          
       
       

          <Player 
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />


          {/* next arrow */}
         
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
