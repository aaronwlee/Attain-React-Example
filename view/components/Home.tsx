import { React, styled } from "@cdn";
import Layout from "./Layout.tsx";
const { useState } = React;

const Logo = styled.img`
  height: 200px;
  width: 200px;
`;

const MyButton = styled.button`
  padding: 15px 30px;
  color: rgb(252, 252, 254);
  background-color: rgb(54, 192, 204);
  letter-spacing: 0.8px;
  box-shadow: rgba(82, 82, 83, 0.3) 0px 2px 4px 0px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(54, 192, 204);
  border-image: initial;
  border-radius: 4px;
  box-sizing: border-box;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  text-transform: unset;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  outline: unset !important;
  &:hover {
    background-color: rgb(48, 180, 192);
    box-shadow: rgba(82, 82, 83, 0.3) 0px 2px 4px 0px;
  }
  &:active {
    background-color: rgb(38, 143, 152);;
  }
`;

function Home() {
  const [count, setCount] = useState(0);

  return (
    <Layout title="Home">
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Logo src="https://deno.land/logo.svg" />
          <p>+</p>
          <Logo src="logo192.png" />
        </div>

        <h4>Do you like this?</h4>
        <MyButton onClick={() => setCount(count + 1)}>Yes!</MyButton>
        <p>You clicked the 🦕 {count} times</p>
      </div>
    </Layout>
  );
}

export default Home;
