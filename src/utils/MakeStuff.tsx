import React, { useState } from "react";
import { productData } from "./data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
function MakeStuff({
  cart,
  setCart,
  setSubmitted,
  setDiscount,
  discount,
  ppe,
  setPPE,
  setProceed,
}: any) {
  const [model, setModel] = useState(productData[0].ProductName);
  const [quantity, setQuantity] = useState("");

  const updateCart = () => {
    var result = productData.filter((obj: any) => {
      return obj.ProductName === model;
    });
    console.log(result);

    setCart((oldCart: any) => [
      ...oldCart,
      {
        data: result[0],
        quantity: quantity,
      },
    ]);
  };

  const handleChange = (event: any) => {
    setModel(event.target.value);
    setQuantity("");
  };

  const removeItem = (itemName: any) => {
    let filteredArray = cart.filter(
      (item: any) => item.data.ProductName !== itemName,
    );
    setCart(filteredArray);
  };

  return (
    <div className={"w-screen h-screen flex items-center flex-col"}>
      <div className="flex justify-start w-full p-5">
        <Button className="" onClick={() => setProceed(false)}>
          Go back
        </Button>
      </div>

      <Card className="mt-20">
        <CardHeader>
          <CardTitle>Cart Details</CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col gap-y-5">
          <Input
            placeholder="Price per item"
            value={ppe}
            onChange={(e) => setPPE(e.target.value)}
          />
          <Input
            placeholder="Discount (leave empty for $0)"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
          />
          <div className="flex flex-row items-center gap-x-5">
            <select
              name="Model"
              id="Model"
              className="border border-gray p-2 rounded-md"
              onChange={handleChange}
            >
              {productData.map((item: any, index: any) => (
                <option key={index} value={item.ProductName}>
                  {item.ProductName}
                </option>
              ))}
            </select>

            <Input
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <Button onClick={updateCart}>Add</Button>
          </div>

          <div className="flex justify-center flex-col items-center">
            <h1 className="font-bold">Your Cart (Click to Remove)</h1>
            {cart.map((item: any, index: any) => (
              <div
                key={index}
                onClick={() => removeItem(item.data.ProductName)}
              >
                <h1>
                  {item.data.ProductName} x{item.quantity}
                </h1>
              </div>
            ))}
            <Button
              className="mt-20 text p-4"
              onClick={() => {
                setSubmitted(true);
              }}
            >
              Submit Cart
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default MakeStuff;
