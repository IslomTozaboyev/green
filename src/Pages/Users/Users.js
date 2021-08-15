import {
  LinearProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { setUsers } from "../../Redux/actions/usersActions";
import UsersWrapper from "./UsersWrapper";

const Users = () => {
  useEffect(() => {
    setUsers();
  }, []);

  const data = useSelector((state) => state.users.data);
  const loading = useSelector((state) => state.global.loading);

  return (
    <UsersWrapper>
      <h2 className="m-3">Users</h2>

      {(loading && <LinearProgress />) ||
        (data.length > 0 && (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className="title">id</TableCell>
                  <TableCell className="title">Name</TableCell>
                  <TableCell className="title">Username</TableCell>
                  <TableCell className="title">Email</TableCell>
                  <TableCell className="title">Phones</TableCell>
                  <TableCell className="title">Website</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((v) => (
                  <TableRow>
                    <TableCell className="subtitle">{v.id}</TableCell>
                    <TableCell className="subtitle">{v.name}</TableCell>
                    <TableCell className="subtitle">{v.username}</TableCell>
                    <TableCell className="subtitle">{v.email}</TableCell>
                    <TableCell className="subtitle">{v.phone}</TableCell>
                    <TableCell className="subtitle">{v.website}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )) ||
        "no data"}
    </UsersWrapper>
  );
};

export default Users;
