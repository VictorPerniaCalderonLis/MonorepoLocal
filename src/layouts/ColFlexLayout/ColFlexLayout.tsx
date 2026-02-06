import { ReactElement } from 'react';
import { Footer } from '../../components/static/Footer/Footer';
import { Header } from '../../components/static/Header/Header';

export const ColFlexLayout = ({ children }: { children: ReactElement }) => {
  return (
    <div className="flex h-full flex-col">
      <Header />
      <main className="flex grow">{children}</main>
      <Footer />
    </div>
  );
};
