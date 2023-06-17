import Image from 'next/image';

import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

export type TestimonialCardProps = {
  image: string;
  content: string;
  name: string;
  position: string;
};

const CardWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '16px',
});


const InnerWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

const TextWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '16px',
});

const StyledTypography = styled(Typography)({
  fontFamily: 'Montserrat, sans-serif',
  color: '#1a202c',
  textAlign: 'left',
});

const TestimonialCard: React.FC<TestimonialCardProps> = (testimonial) => (
  <CardWrapper className='p-2 md:p-16'>
    <InnerWrapper className='p-2 md:p-8 md:flex'>
      <Box display={'flex'} p={1} className="rounded-full md:flex items-center md:w-1/2">
        <Image src={testimonial.image} alt="Anas Photo" width={100} height={100} className="rounded-full" />
      </Box>

      <TextWrapper>
        <StyledTypography variant="subtitle2" className={'font-sans text-brand-color'}>{testimonial.content}</StyledTypography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
          <Box>
            <StyledTypography variant="subtitle1" className={'font-sans text-dark-accent'}>{testimonial.name}</StyledTypography>
            <Typography variant="body1" color="text.secondary" className={'font-sans text-light-shadow'}>{testimonial.position}</Typography>
          </Box>
        </Box>
      </TextWrapper>
    </InnerWrapper>
  </CardWrapper>
);

export default TestimonialCard;
