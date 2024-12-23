import { ReactNode } from "react";
import Header from "./_components/header";

const MarketingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section>
      <Header />
      {children}
    </section>
  );
};
export default MarketingLayout;
