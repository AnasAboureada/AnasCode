import Image from 'next/image';
import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import SectionTitle from '@/components/molecules/SectionTitle/SectionTitle';
import SectionWrapper from '@/components/templates/SectionWrapper/SectionWrapper';
import { DeveloperMode, SettingsEthernet, TipsAndUpdates, Translate, Work } from '@mui/icons-material';
import Groups2Icon from '@mui/icons-material/Groups2';
import { Box, ListItem, Typography } from '@mui/material';
import List from '@mui/material/List';
import Grid from '@mui/material/Unstable_Grid2';

interface Props {
  icon: ReactElement;
  text: string;
}

const ListItemWithIcon: React.FC<Props> = ({ icon, text }) => (
  <ListItem>
    {icon}
    <Typography variant="subtitle1" className={'pl-2 py-1 text-brand-color font-sans'}>{text}</Typography>
  </ListItem>
);

const AboutSection = () => {
  const imgWidth = 300;
  const { t } = useTranslation();

  const items = [
    {
      icon: <Groups2Icon className="text-dark-accent" />,
      text: t('home.about.item1'),
    },
    {
      icon: <Work className="text-dark-accent" />,
      text: t('home.about.item2'),
    },
    {
      icon: <SettingsEthernet className="text-dark-accent" />,
      text: t('home.about.item3'),
    },
    {
      icon: <DeveloperMode className="text-dark-accent" />,
      text: t('home.about.item4'),
    },
    {
      icon: <Translate className="text-dark-accent" />,
      text: t('home.about.item5'),
    },
    {
      icon: <TipsAndUpdates className="text-dark-accent" />,
      text: t('home.about.item6'),
    },
  ];

  return (
    <SectionWrapper id="about" className="bg-gray-1">
      <SectionTitle
        sectionShortTitle={t('home.about.shortTitle')}
        sectionLongTitle={t('home.about.longTitle')}
        sectionDescription={t('home.about.description')}
      />
      <Grid container >
        <Grid container spacing={3}>
          <Grid xs={12} md={3} className="relative rounded-md shadow-xl">
            <Image src="/assets/anascode/anas-photos/AnasFull.jpg" alt="Anas Photo" width={imgWidth} height={100} className="rounded-xl" />
            <Box className="flex justify-center items-center absolute top-0 right-0 p-2 md:p-3 rounded-xl bg-white" sx={{ boxShadow: 2 }}>
              <Typography variant="h4" className={'text-success pr-4 font-semibold font-sans'}>10+</Typography>
              <Box className="flex flex-col">
                <Typography variant="subtitle2" component='div' className={'font-sans'}>{t('home.about.yearsLabel')}</Typography>
                <Typography variant="subtitle2" component='div' className={'font-sans'}>{t('home.about.successLabel')}</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid xs={12} md={9}>
            <List dense>
              {items.map((item, index) => (
                <ListItemWithIcon key={index} icon={item.icon} text={item.text} />
              ))}
            </List>
          </Grid>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};

export default AboutSection;
