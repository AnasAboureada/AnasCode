import { useTranslation } from 'react-i18next';

import SectionTitle from '@/components/molecules/SectionTitle/SectionTitle';
import { ServiceCard } from '@/components/molecules/ServiceCard/ServiceCard';
import SectionWrapper from '@/components/templates/SectionWrapper/SectionWrapper';
import {
  DataUsage as DataScienceIcon,
  Cloud as SaasIcon,
  DeveloperMode as SoftwareEngineeringIcon,
  SupervisorAccount as TeamLeadIcon,
} from '@mui/icons-material';
import { Grid } from '@mui/material';

const ServicesSection: React.FC = () => {

  const { t } = useTranslation();

  const services = [
    {
      icon: <SoftwareEngineeringIcon sx={{ fontSize: '3em' }} className='text-dark-accent' />,
      title: t('home.services.softwareEngineeringTitle'),
      description: t('home.services.softwareEngineeringDescription'),
    },
    {
      icon: <DataScienceIcon sx={{ fontSize: '3em' }} className='text-dark-accent' />,
      title: t('home.services.dataScienceTitle'),
      description: t('home.services.dataScienceDescription'),
    },
    {
      icon: <TeamLeadIcon sx={{ fontSize: '3em' }} className='text-dark-accent' />,
      title: t('home.services.teamLeadTitle'),
      description: t('home.services.teamLeadDescription'),
    },
    {
      icon: <SaasIcon sx={{ fontSize: '3em' }} className='text-dark-accent' />,
      title: t('home.services.saasTitle'),
      description: t('home.services.saasDescription'),
    },
  ];

  return (
    <SectionWrapper id="services" className='bg-white'>
      <SectionTitle
        sectionShortTitle={t('home.services.sectionShortTitle')}
        sectionLongTitle={t('home.services.sectionLongTitle')}
        sectionDescription={t('home.services.sectionDescription')}
      />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} md={6} key={index}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};

export default ServicesSection;
