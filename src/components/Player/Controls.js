import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons'
import styled from "styled-components"

function Controls(props) {
    return (
        <Container>
            <div>

                <button onClick={() => props.setIsPlaying(!props.isPlaying)}>
                    <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
                </button>



            </div>
        </Container>
    )
}

export default Controls

const Container = styled.div`
 
`;
