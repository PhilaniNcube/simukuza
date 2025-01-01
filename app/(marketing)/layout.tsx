import { ReactNode } from "react";
import Header from "./_components/header";
import { createClient } from "@/utils/supabase/server";
import Footer from "./_components/footer";
    import { NuqsAdapter } from "nuqs/adapters/next/app";


const MarketingLayout = async ({ children }: { children: ReactNode }) => {

  const supabase = await createClient();

  // get the current user
  const {data:{user}} = await supabase.auth.getUser();

  return (
    <NuqsAdapter>
      <section>
        <Header user={user} />
        {children}
        <Footer />
      </section>
    </NuqsAdapter>
  );
};
export default MarketingLayout;
