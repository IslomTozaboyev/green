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
import { useDispatch, useSelector } from "react-redux";
import Error from "../../Components/Error";
import { setUsers } from "../../Redux/actions";
import UsersWrapper from "./UsersWrapper";

const Users = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setUsers(dispatch);
  }, []);

  const data = useSelector((state) => state.users);
  const error = useSelector((state) => state.error);
  const loading = useSelector((state) => state.loading);

  return (
    <UsersWrapper>
      <h1 className="text">Users</h1>
      {(loading && <LinearProgress />) || ""}
      {(error && <Error />) || ""}
      {(data.length > 0 && (
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
        ""}
    </UsersWrapper>
  );
};

export default Users;
