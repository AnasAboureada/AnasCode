import { render, screen } from '@testing-library/react';

import AboutSection from './AboutSection';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (str: string) => str,
  }),
}));

jest.mock('next/font/google', () => {
  return {
    Lato: jest.fn().mockReturnValue({ className: 'mock-class-name' }),
    Montserrat: jest.fn().mockReturnValue({ className: 'mock-class-name' }),
    Handlee: jest.fn().mockReturnValue({ className: 'mock-class-name' }),
    Roboto: jest.fn().mockReturnValue({ className: 'mock-class-name' }),
  };
});


describe('AboutSection', () => {
  it('renders correctly', () => {
    render(<AboutSection />);

    // Check that the section title is present
    expect(screen.getByText('home.about.shortTitle')).toBeInTheDocument();
    expect(screen.getByText('home.about.longTitle')).toBeInTheDocument();
    expect(screen.getByText('home.about.description')).toBeInTheDocument();

    // Check that all list items are present
    for (let i = 1; i <= 6; i++) {
      expect(screen.getByText(`home.about.item${i}`)).toBeInTheDocument();
    }

    // Check that years of success is present
    expect(screen.getByText('home.about.yearsLabel')).toBeInTheDocument();
    expect(screen.getByText('home.about.successLabel')).toBeInTheDocument();
  });
});
