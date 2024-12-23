
import * as React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { getCars } from "@/lib/fetchers/cars";
import Link from "next/link";
import { Link2 } from "lucide-react";





export default async function CarSalesTable() {

  const cars = await getCars();

  const formatToUSD = (price: number) => {
  return Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  return (
    <div className="container py-10">
      <Table>
        <TableCaption>A list of cars currently on sale</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Make</TableHead>
            <TableHead>Model</TableHead>
            <TableHead>Year</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead className="text-center">Availability</TableHead>
            <TableHead className="text-center">View Car</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cars.map((car) => (
            <TableRow key={car.id}>
              <TableCell className="font-medium">{car.make}</TableCell>
              <TableCell>{car.model}</TableCell>
              <TableCell>{car.year}</TableCell>
              <TableCell className="text-right">
                {formatToUSD(car.price)}
              </TableCell>
              <TableCell className="text-center">
                <Badge variant={car.sold ? "destructive" : "default"}>{car.sold ? "Sold" : "In Stock"}</Badge>
              </TableCell>
              <TableCell className="text-center">
                <Link href={`/dashboard/cars/${car.id}`}>
                  <Link2 className="cursor-pointer" size={24} />
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
