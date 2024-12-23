import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getCars } from "@/lib/fetchers/cars";
import Link from "next/link";

const DashboardHome = async () => {
  const carsData = getCars();

  const [cars] = await Promise.all([carsData]);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Number of Cars</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{cars.length}</p>
        </CardContent>
        <CardFooter>
          <div className="flex justify-end w-full">
            <Link href="/dashboard/cars">
              <Button>
                View Cars
              </Button>
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
export default DashboardHome;
