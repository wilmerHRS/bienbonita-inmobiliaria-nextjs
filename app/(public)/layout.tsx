import { Header } from '@/shared/layouts/Header';
import { Footer } from '@/shared/layouts/Footer';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
