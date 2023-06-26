'use client';

import 'react-responsive-carousel/lib/styles/carousel.css';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Carousel } from 'react-responsive-carousel';

import SectionTitle from '@/components/molecules/SectionTitle/SectionTitle';
import TestimonialCard, { TestimonialCardProps } from '@/components/molecules/TestimonialCard/TestimonialCard';
import SectionWrapper from '@/components/templates/SectionWrapper/SectionWrapper';
import { Box } from '@mui/material';

const testimonialsData: TestimonialCardProps[] = [
  {
    image: '/assets/testimonials/thomas.jpeg',
    content: `Anas is the Rock of any succesful development team.
    I had the pleasure of working together with Anas during my time as Product at Zoover.
    He lead one of the two development teams in one of the most interesting times for the company.
    We were tasked to build out the product to support the business transformation and turn Zoover into a online travel booking platform.
    Every day he worked side by side with the team leading, coaching and helping them be the best they could be.
    I always enjoyed how he ran the daily standups, his sense of calm and personal approach made starting the day always a very enjoyable experience.
    He’s an experienced Full-stack developer with a top-notch experience and understand that building product can only be done by amazing people.
    I really enjoyed working together and hope I get the chance to do so again in the future.`,
    name: 'Thomas Rovekamp',
    position: 'Brand & Marketing Strategy, Product Development and Project management',
  },
  {
    image: '/assets/testimonials/milton.jpeg',
    content: `Anas is one of, if not the, best hires I've made.
     He's self driven, motivated by challenge, has a strong work ethic and is constantly looking to improve.
     From day one Anas did two things that impressed me. Firstly,
      he dove straight into the teams work, trying to add value as quickly as possible and he did.
     Secondly, his first request from me was about feedback and how to setup a development plan to help him reach his next goals.
     Anas is a very caring teammate and I'm happy to see him take the next steps in becoming a leader.
     Anas is a great person to have on your team, in your company and as your friend.`,
    name: 'Milton Hultgren',
    position: 'Senior Software Engineer at Elastic',
  },
  {
    image: '/assets/testimonials/korany.jpeg',
    content: `Anas is a Talented Software Engineer with the passion to learn about new technologies and continues learning,
     proactively works with the teams to get work done in very fast and elegant way.I enjoyed work with Anas.`,
    name: 'Ahmed Korany',
    position: 'Master of Science (MSc.) Machine Learning - Georgia Institute of Technology',
  },
  {
    image: '/assets/testimonials/sven.jpg',
    content: `I really enjoy working with Anas.
     He is a very skilled backend and frontend developer who is always eager to learn new technologies and increase his knowledge.
      He puts his heart and soul into work and always delivers. Anas is also a great guy to have around with his international experience
      and interest in history and world politics.`,
    name: 'Sven Emtell',
    position: 'Co-founder and CTO/Backend developer at Doremir Music Research AB',
  },
];

const TestimonialsSection = () => {
  const { t } = useTranslation();


  return (
    <SectionWrapper id="testimonials" className="bg-gray-2 p-4 md:p-16">
      <SectionTitle
        sectionShortTitle={t('home.testimonials.shortTitle')}
        sectionLongTitle={t('home.testimonials.longTitle')}
        sectionDescription={t('home.testimonials.description')}
      />

      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        stopOnHover={true}
        swipeable={true}
        useKeyboardArrows={true}
        showThumbs={false}
        showStatus={false}
      >
        {testimonialsData.map((testimonial) => (
          <Box key={testimonial.name} >
            <TestimonialCard
              image={testimonial.image}
              content={testimonial.content}
              name={testimonial.name}
              position={testimonial.position}
            />
          </Box>
        ))}
      </Carousel>
    </SectionWrapper>
  );
};

export default TestimonialsSection;
