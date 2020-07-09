import { React, styled, MaterialUI } from "@cdn";
import Layout from "../components/Layout.tsx";
const { useState } = React;
const { Button } = MaterialUI;

const Logo = styled.img`
  height: 200px;
  width: 200px;
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
        <Button variant="contained" onClick={() => setCount(count + 1)}>Yes!</Button>
        <p>You clicked the 🦕 {count} times</p>
      </div>
    </Layout>
  );
}

export default Home;
