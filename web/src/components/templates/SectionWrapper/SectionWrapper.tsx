import { FC, HTMLAttributes, ReactNode } from 'react';

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  id: string;
  children: ReactNode;
  className?: string;
}

const SectionWrapper: FC<SectionWrapperProps> = ({ children, className, ...props }) => {
  return (
    <section className={`px-4 py-2 md:px-16 md:py-16 rounded-2xl ${className}`} {...props}>
      {children}
    </section>
  );
};

export default SectionWrapper;
