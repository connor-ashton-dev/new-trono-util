import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function Person({
  setProceed,
  setShipName,
  setShipAddy,
  setShipRegion,
  setBillName,
  setBillAddy,
  setBillRegion,
  shipName,
  shipAddy,
  shipRegion,
  billName,
  billAddy,
  billRegion,
  setBillDate,
  setBillNumber,
  billDate,
  billNumber,
}: any) {
  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <h1 className="text-2xl py-16 font-bold">Billing Details</h1>

      <Card className="mb-16 w-80">
        <CardHeader>
          <CardTitle>Order Information</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Input
            placeholder="Order Number (don't include the #)"
            onChange={(e) => setBillNumber(e.target.value)}
            value={billNumber}
          />
          <Input
            placeholder="Order Date"
            type={"date"}
            onChange={(e) => setBillDate(e.target.value)}
            value={billDate}
          />
        </CardContent>
      </Card>

      <div className="flex flex-col md:flex-row gap-20">
        <Card className="">
          <CardHeader>
            <CardTitle>Shipping Information</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Input
              placeholder="Name"
              value={shipName}
              onChange={(e) => {
                setShipName(e.target.value);
              }}
            />
            <Input
              placeholder="Street Address"
              value={shipAddy}
              onChange={(e) => {
                setShipAddy(e.target.value);
              }}
            />
            <Input
              placeholder="Region, State and Zip"
              value={shipRegion}
              onChange={(e) => {
                setShipRegion(e.target.value);
              }}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Billing Information</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Input
              placeholder="Name"
              value={billName}
              onChange={(e) => {
                setBillName(e.target.value);
              }}
            />
            <Input
              placeholder="Street Address"
              value={billAddy}
              onChange={(e) => {
                setBillAddy(e.target.value);
              }}
            />
            <Input
              placeholder="Region, State and Zip"
              value={billRegion}
              onChange={(e) => {
                setBillRegion(e.target.value);
              }}
            />
          </CardContent>
        </Card>
      </div>
      <Button
        onClick={() => setProceed(true)}
        size="lg"
        className="mt-20 mb-10 p-4 md:w-60 md:text-lg"
      >
        Next
      </Button>
    </div>
  );
}

export default Person;
