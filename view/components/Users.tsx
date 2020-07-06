import { React, styled } from "../deps.ts";
import Layout from "./Layout.tsx";
import User from "../../models/user.ts";

const { useState, useEffect } = React;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  text-align: center;

  th, td {
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/user").then((response) =>
      response.json()
        .then((data) => {
          setUsers(data);
        })
    );
  }, []);
  return (
    <Layout title="Users">
      <div>
        {users.length > 0
          ? <Table>
            <thead>
              <tr>
                {Object.keys(users[0]).map((k, index) =>
                  <th key={index}>{k}</th>
                )}
              </tr>
            </thead>
            <tbody>
              {users.map((u: User, index: number) =>
                <tr key={index}>
                  <td>{u.id}</td>
                  <td>{u.firstName}</td>
                  <td>{u.lastName}</td>
                  <td>{u.email}</td>
                </tr>
              )}
            </tbody>
          </Table>
          : <p>...loading</p>}
      </div>
    </Layout>
  );
}

export default Users;
