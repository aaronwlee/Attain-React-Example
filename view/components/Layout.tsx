import { React, styled } from "@cdn";

const Layout = styled(({ children, title, ...rest }: any) =>
  <div>
    <h2 {...rest}>{title}</h2>
    <div>
      {children}
    </div>
  </div>
)`
  text-align: center;
`;

export default Layout;
