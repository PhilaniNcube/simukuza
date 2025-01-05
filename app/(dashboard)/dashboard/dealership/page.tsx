import { getMyDealership } from "@/lib/fetchers/dealerships";
import DealershipForm from "./_components/dealership-form";
import { Separator } from "@/components/ui/separator";
import UpdateDealershipForm from "./_components/update-dealership-form";
import { getMyCars } from "@/lib/fetchers/cars";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { formatToUsd } from "@/lib/utils";

const page = async () => {
  const dealership = await getMyDealership();
  const myCars = await getMyCars();

  return (
    <div>
      {dealership ? (
        <div>
          <h2>Update your dealership details</h2>
          <Separator />
          <div className="max-w-4xl py-4">
            <UpdateDealershipForm dealership={dealership} />
            <div className="mt-12">
              <h3 className="text-xl">My cars</h3>
              <Separator />
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell>Make</TableCell>
                    <TableCell>Model</TableCell>
                    <TableCell>Year</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Sold</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {myCars.map((car) => (
                    <TableRow key={car.id}>
                      <TableCell>{car.make}</TableCell>
                      <TableCell>{car.model}</TableCell>
                      <TableCell>{car.year}</TableCell>
                      <TableCell>{formatToUsd(car.price)}</TableCell>
                      <TableCell>{car.sold ? "Yes" : "No"}</TableCell>
                      <TableCell>
                        <Button variant="link" className="">Edit</Button>
                        <Button className="">Delete</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
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
