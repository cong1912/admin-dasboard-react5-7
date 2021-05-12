import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Layout from "./Layout";
function Links(props) {
  const [links, setLinks] = useState([]);
  const [page, setPage] = useState(0);
  const perPage = 10;
  const { id } = useParams();

  useEffect(async () => {
    const result = await axios
      .get(`users/${id}}/links`)
      .then((result) => {
        setLinks(result.data);
        console.log(links);
      })
      .catch(function (error) {});
  }, []);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  return (
    <Layout>
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Code</TableCell>
              <TableCell>Count</TableCell>
              <TableCell>Revenue</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {links.slice(page * perPage, (page + 1) * perPage).map((link) => {
              return (
                <TableRow key={link.id}>
                  <TableCell>{link.id}</TableCell>
                  <TableCell>{link.code}</TableCell>
                  <TableCell>{link.orders.length}</TableCell>
                  <TableCell>
                    {link.orders.reduce((s, o) => s + o.total, 0)}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
          <TableFooter>
            <TablePagination
              count={links.length}
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

export default Links;
