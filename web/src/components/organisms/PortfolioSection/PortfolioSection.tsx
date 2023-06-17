import React, { useState } from 'react';

import { PortfolioCard } from '@/components/molecules/PortfolioCard/PortfolioCard';
import SectionTitle from '@/components/molecules/SectionTitle/SectionTitle';
import SectionWrapper from '@/components/templates/SectionWrapper/SectionWrapper';
import { Box, Button, ButtonProps } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/system';

const portfolioData = [
  {
    id: 1,
    category: 'Design',
    title: 'Design Project',
    imageUrl: '/assets/portfolio/portfolio-1.jpg',
  },
  {
    id: 2,
    category: 'Architecture',
    title: 'Architecture Project',
    imageUrl: '/assets/portfolio/portfolio-2.jpg',
  },
  {
    id: 3,
    category: 'Management',
    title: 'Management Project',
    imageUrl: '/assets/portfolio/portfolio-3.jpg',
  },
  {
    id: 4,
    category: 'Design',
    title: 'Design Project',
    imageUrl: '/assets/portfolio/portfolio-4.jpg',
  },
  {
    id: 5,
    category: 'Architecture',
    title: 'Architecture Project',
    imageUrl: '/assets/portfolio/portfolio-5.jpg',
  },
  {
    id: 6,
    category: 'Management',
    title: 'Management Project',
    imageUrl: '/assets/portfolio/portfolio-6.jpg',
  },
];

const PortfolioSection: React.FC = () => {
  const portfolioCategories = ['All Projects', 'Design', 'Architecture', 'Management', 'Teaching'];
  const [selectedCategory, setSelectedCategory] = useState(portfolioCategories[0]);

  const filteredPortfolio = selectedCategory === 'All Projects'
    ? portfolioData
    : portfolioData.filter((item) => item.category === selectedCategory);

  interface StyledButtonProps extends ButtonProps {
    selected?: boolean;
  }

  const StyledButton = styled(Button)<StyledButtonProps>(({ theme, selected }) => ({
    margin: theme.spacing(1),
    backgroundColor: 'transparent',
    color: selected ? theme.palette.secondary.main : theme.palette.primary.main,
    border: `1px solid ${selected ? theme.palette.secondary.main : theme.palette.primary.main}`,
    ':disabled': {
      color: theme.palette.secondary.main,
      border: `1px solid ${theme.palette.secondary.main}`,
    },
  }));

  return (
    <SectionWrapper id="portfolio" className="bg-white p-4 md:py-16">
      <SectionTitle
        sectionShortTitle="Our Portfolio"
        sectionLongTitle="Our Recent Projects"
        sectionDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />

      <Box className="flex flex-wrap items-center justify-center md:p-4 p-0">
        {portfolioCategories.map((category) => (
          <StyledButton
            variant="outlined"
            color="primary"
            key={category}
            onClick={() => setSelectedCategory(category)}
            selected={selectedCategory === category}
            className={'font-sans'}
            disabled={selectedCategory === category}
          >
            {category}
          </StyledButton>
        ))}
      </Box>

      <Grid container spacing={3} justifyContent="center" alignItems="center">
        {filteredPortfolio.map((item) => (
          <Grid xs={12} sm={6} md={4} key={item.id}>
            <PortfolioCard imgSrc={item.imageUrl} category={item.category} title={item.title} />
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
};

export default PortfolioSection;
