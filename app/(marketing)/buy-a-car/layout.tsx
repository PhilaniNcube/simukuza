import { ReactNode } from "react";
import { getMakes } from "@/lib/fetchers/car-makes";
import { ScrollArea } from "@/components/ui/scroll-area";
import CarFilter from "../_components/car-filter";

const ConditionPageLayout = async ({children}:{children:ReactNode}) => {

  const makes = await getMakes();

  return (
    <div className="pt-36 pb-6 ">
      <div className="max-w-7xl relative  mx-auto flex flex-col md:flex-row gap-4">
        <CarFilter makes={makes} />
        <ScrollArea className="flex-1 h-[calc(100vh-9rem)] mx-4 lg:mx-0">
          {children}
        </ScrollArea>
      </div>
    </div>
  );
};
export default ConditionPageLayout;
