import { useTranslation } from 'react-i18next';

import SectionTitle from '@/components/molecules/SectionTitle/SectionTitle';
import StatCard from '@/components/molecules/StatCard/StatCard';
import SectionWrapper from '@/components/templates/SectionWrapper/SectionWrapper';
import { Code as CodeIcon, GitHub as GitHubIcon, Group as GroupIcon, School } from '@mui/icons-material';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import Grid from '@mui/material/Unstable_Grid2';

interface CardData {
  IconComponent: OverridableComponent<SvgIconTypeMap<Record<string, unknown>, 'svg'>>;
  number: string;
  description: string;
}

const AchievementsSection: React.FC = () => {
  const { t } = useTranslation();

  const funFacts: CardData[] = [
    { IconComponent: GitHubIcon, number: '550+', description: t('home.achievements.funFacts.gitHubStars') },
    { IconComponent: GroupIcon, number: '5+', description: t('home.achievements.funFacts.highPerformingTeams') },
    { IconComponent: CodeIcon, number: '2k+', description: t('home.achievements.funFacts.codeCommits') },
    { IconComponent: School, number: '100+', description: t('home.achievements.funFacts.studentsTaught') },
  ];

  return (
    <SectionWrapper id="Achievements" className="bg-white p-4 md:p-16">
      <SectionTitle
        sectionShortTitle={t('home.achievements.shortTitle')}
        sectionLongTitle={t('home.achievements.longTitle')}
        sectionDescription={t('home.achievements.description')}
      />
      <Grid container spacing={3}>
        {funFacts.map((card, index) => (
          <Grid xs={6} sm={6} md={3} key={index}>
            <StatCard IconComponent={card.IconComponent} number={card.number} description={card.description} />
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
};

export default AchievementsSection;
