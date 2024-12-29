import { ReactNode } from "react";
import Header from "./_components/header";
import { createClient } from "@/utils/supabase/server";
import Footer from "./_components/footer";



const MarketingLayout = async ({ children }: { children: ReactNode }) => {

  const supabase = await createClient();

  // get the current user
  const {data:{user}} = await supabase.auth.getUser();

  return (
    <section>
      <Header user={user}/>
      {children}
     <Footer />
    </section>
  );
};
export default MarketingLayout;
