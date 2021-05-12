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
import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";

function Users() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const perPage = 10;
  useEffect(async () => {
    const result = await axios
      .get("ambassadors")
      .then((result) => {
        setUsers(result.data);
      })
      .catch(function (error) {
        // history.push("/login");
      });
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
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.slice(page * perPage, (page + 1) * perPage).map((user) => {
              return (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>
                    {user.first_name} {user.last_name}
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      href={`users/${user.id}/links`}
                    >
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
          <TableFooter>
            <TablePagination
              count={users.length}
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

export default Users;
