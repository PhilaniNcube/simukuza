import { getMakes } from "@/lib/fetchers/car-makes";
import NewCarForm from "../../_components/new-car-form";

const NewCarPage = async () => {

  const makes = await getMakes();

  return <div>
    <h1 className="text-lg font-semibold text-gray-800">
      Create New Car
    </h1>
    <div>
      <NewCarForm makes={makes} />
    </div>
  </div>;
};
export default NewCarPage;
