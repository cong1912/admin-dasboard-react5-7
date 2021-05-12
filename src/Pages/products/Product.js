import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";
import { ToggleButtonGroup } from "@material-ui/lab";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";

function Product() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const perPage = 10;
  useEffect(async () => {
    const result = await axios
      .get(`products`)
      .then((result) => {
        setProducts(result.data);
        console.log(products);
      })
      .catch(function (error) {});
  }, []);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const del = async (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      await axios.delete(`products/${id}`);
      setProducts(products.filter((p) => p.id !== id));
    }
  };
  return (
    <Layout>
      <div className="pt-3 pb-2 mb-3 border-bottom">
        <Button href={"/products/create"} variant="contained" color="primary">
          Add
        </Button>
      </div>
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products
              .slice(page * perPage, (page + 1) * perPage)
              .map((product) => {
                return (
                  <TableRow key={product.id}>
                    <TableCell>{product.id}</TableCell>
                    <TableCell>
                      <img src={product.image} width={50} />
                    </TableCell>
                    <TableCell>{product.title}</TableCell>
                    <TableCell>{product.description}</TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell>
                      <ToggleButtonGroup>
                        <Button
                          variant="contained"
                          href={`/products/${product.id}/edit`}
                          color="primary"
                        >
                          Edit
                        </Button>
                        <Button
                          variant="contained"
                          onClick={() => del(product.id)}
                          color="secondary"
                        >
                          Delete
                        </Button>
                      </ToggleButtonGroup>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
          <TableFooter>
            <TablePagination
              count={products.length}
              page={page}
              onChangePage={handleChangePage}
              rowsPerPage={perPage}
              rowsPerPageOptions={[]}
            />
          </TableFooter>
        </Table>
      </div>
    </Layout>
  );
}

export default Product;
