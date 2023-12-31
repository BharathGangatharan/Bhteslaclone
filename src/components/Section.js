import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const Wrap=styled.div`
    width: 100vw;
    height: 100vh;
    background-image: ${props => `url("/images/${props.bgImage}")`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position:center;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
`
const ItemText=styled.div`
    padding-top: 15vh;
    text-align: center;
`
const ButtonGroup=styled.div`
    display: flex;
    margin-bottom: 30px;

    @media (max-width:768px){
        flex-direction: column;
    }

`

const LeftButton=styled.div`
    background-color: rgba(23,26,32,0.8);
    height: 40px;
    width: 256px;
    color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity:0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
    transition:all 1s ease;
`

const RightButton=styled(LeftButton)`
    background:white;
    color: black;
`;

const DownArrow=styled.img`
    height: 40px;
    overflow-x: hidden;
    animation:animateDown infinite 1.5s;
    cursor: pointer;
`
const Buttons=styled.div``

function Section({title,desc,backgroundImg,leftBtnText,rightBtntext}) {
    return (
        <div>
            <Wrap bgImage={backgroundImg}>
                <Fade bottom>
                    <ItemText>
                        <h1>{title}</h1>
                        <p>{desc}</p>
                    </ItemText>
                </Fade>
                <Buttons>
                    <Fade bottom>
                        <ButtonGroup>
                            <LeftButton>
                                {leftBtnText}
                            </LeftButton>
                            {rightBtntext && 
                                <RightButton>
                                    {rightBtntext}
                                </RightButton>
                            }
                        </ButtonGroup>
                    </Fade>
                    <DownArrow src="/images/down-arrow.svg"/>
                </Buttons>
            </Wrap>
        </div>
    )
}

export default Section;
