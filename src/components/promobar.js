import { useEffect, useState } from "react"
import { MessageText, PromoContainer } from "../styles/promobar"
import { Slide } from "@mui/material"
import { Box } from "@mui/material"

const messages = [
    "Unique Items Added Daily!",
    "100% Authenticated By Our Experts",
    "Sourcing? You Don't Need To Know!",
]

export default function PromoBar(){
    const [messageIndex,setMessageIndex] = useState(0)
    const [show,setShow] =useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setShow(false);
        },3000)
        const intervalId = setInterval(()=>{
            setMessageIndex(i=>(i+1)%messages.length);

            setShow(true);

            setTimeout(()=>{
                setShow(false);
            },3000)
        },4000);

        return()=>{
            clearInterval(intervalId);
        }

    },[]);
    return (
        <PromoContainer>
            <Slide direction={show ? "left" : "right"} in={show}
            timeout={{
                enter: 500,
                exit:100
            }}>
            <Box display={'flex'} justifyContent='center' alignItems={'center'}>
                <MessageText>
                    {messages[messageIndex]}
                </MessageText>
            </Box>
            </Slide>
        </PromoContainer>
    )
};