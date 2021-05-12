import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";

function Orders() {
  const [orders, setOrders] = useState([]);
  useEffect(async () => {
    const result = await axios
      .get("orders")
      .then(function (response) {
        console.log(response);
        setOrders(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <Layout>
      {orders.map((order) => {
        return (
          <Accordion key={order.id}>
            <AccordionSummary>
              {order.name} ${order.total}
            </AccordionSummary>
            <AccordionDetails>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Product Title</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Quantity</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {order.order_items.map((item) => {
                    return (
                      <TableRow key={item.id}>
                        <TableCell>{item.id}</TableCell>
                        <TableCell>{item.product_title}</TableCell>
                        <TableCell>{item.price}</TableCell>
                        <TableCell>{item.quantity}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Layout>
  );
}

export default Orders;
