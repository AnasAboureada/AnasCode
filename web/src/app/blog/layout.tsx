import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Anas Aboreeda\'s Blog',
  description: 'Software Engineering Blog',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen" >
      {children}
    </div>
  );
}
