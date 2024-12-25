import { ReactNode } from "react";
import Header from "./_components/header";
import Footer from "./_components/footer";

const MarketingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section>
      <Header />
      {children}
      <Footer />
    </section>
  );
};
export default MarketingLayout;
