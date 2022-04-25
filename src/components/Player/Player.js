import React, { useState, useRef, useEffect } from 'react'
import Controls from './Controls';
import Details from './Details';
import styled from "styled-components";

function Player(props) {
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    });

    const SkipSong = (forwards = true) => {
        if (forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;

                if (temp > props.songs.length - 1) {
                    temp = 0;
                }

                return temp;
            });
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = props.songs.length - 1;
                }

                return temp;
            });
        }
    }

    return (
        <Container className="   items-cente bg-gradient-to-bl from-[#F3071D] to-[#E600FF]">
            <div>
                <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>

                <Details song={props.songs[props.currentSongIndex]} />
                <Controls styles={{

                }} isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong} />

            </div>
        </Container>
    )
}

export default Player;


const Container = styled.div`

border: none;
border-radius: 50%;
width: 45px;
height: 45px;
font-size: 20px;
color: var(--secondary);
display: flex;
justify-content: center;
align-items:center;


}
.state {
  svg {
    color: white;
  }
}

.icon {
  font-size: 2rem;
  color: red;
}
`;
