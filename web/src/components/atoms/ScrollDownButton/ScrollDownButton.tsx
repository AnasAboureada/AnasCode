import React from 'react';

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

type ScrollDownButtonProps = {
  className?: string;
};

const ScrollDownButton = ({ className }: ScrollDownButtonProps) => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <Box className={`hidden sm:block animate-bounce200 flex align-center justify-center items-center ${className}`}>
      <IconButton
        onClick={scrollToBottom}
        color="primary"
        aria-label="Scroll down"
        data-testid="scroll-down-button"
      >
        <ArrowDownwardIcon />
      </IconButton>
    </Box>
  );
};

export default ScrollDownButton;
