import { React, styled, ReactRouterDOM } from "../deps.ts";

const Link = ReactRouterDOM.Link;

const AttainNav = styled.nav`
  display: flex;
  padding: 25px 0;
  background-color: rgb(54, 192, 204);
`;

const LinkItem = styled.div`
  flex-grow: 1;
  text-align: center;
  a {
    text-decoration: none;
    color: white;

    &:hover {
      color: black;
    }
  }
`;

function Nav() {
  return (
    <AttainNav>
      <LinkItem>
        <Link to="/">Home</Link>
      </LinkItem>
      <LinkItem>
        <Link to="/users">Users</Link>
      </LinkItem>
    </AttainNav>
  );
}

export default Nav;
