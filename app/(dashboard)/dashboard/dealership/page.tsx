import { getMyDealership } from "@/lib/fetchers/dealerships";
import DealershipForm from "./_components/dealership-form";
import { Separator } from "@/components/ui/separator";

const page = async () => {
  const dealership = await getMyDealership();

  return (
    <div>
      {dealership ? (
        <div>
          <h1>{dealership.name}</h1>
          <p>{dealership.contact_number}</p>
        </div>
      ) : (
        <div>
          <h2>Register your dealership</h2>
          <Separator />
          <div className="max-w-4xl py-4">
            <DealershipForm />
          </div>
        </div>
      )}
    </div>
  );
};
export default page;
