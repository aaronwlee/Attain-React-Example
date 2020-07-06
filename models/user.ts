const userMock = [
  {
    id: 1,
    firstName: "Aaron",
    lastName: "Lee",
    email: "aaronwoolee95@gmail.com",
  },
  {
    id: 2,
    firstName: "Gregory",
    lastName: "Nguyen",
    email: "gregory.nguyen@example.com",
  },
  {
    id: 3,
    firstName: "Victoria",
    lastName: "Wheeler",
    email: "victoria.wheeler@example.com",
  },
  {
    id: 4,
    firstName: "Noah",
    lastName: "Armstrong",
    email: "noah.armstrong@example.com",
  },
];

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

const User = new Map<number | string, User>();

userMock.map((u) => User.set(u.id, u));

export default User;
