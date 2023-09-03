import React, { useEffect, useState } from "react";
import { MessageText, PromoContainer } from "../styles/promobar";
import { Slide } from "@mui/material";
import { Box } from "@mui/material";

const messages: string[] = [
  "Unique Items Added Daily!",
  "100% Authenticated By Our Experts",
  "Sourcing? You Don't Need To Know!",
];

const PromoBar: React.FC = () => {
  const [messageIndex, setMessageIndex] = useState<number>(0);
  const [show, setShow] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    const intervalId = setInterval(() => {
      setMessageIndex((i) => (i + 1) % messages.length);
      setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 3000);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <PromoContainer>
      <Slide
        direction={show ? "left" : "right"}
        in={show}
        timeout={{
          enter: 500,
          exit: 100,
        }}
      >
        <Box display={"flex"} justifyContent="center" alignItems="center">
          <MessageText>{messages[messageIndex]}</MessageText>
        </Box>
      </Slide>
    </PromoContainer>
  );
};

export default PromoBar;
