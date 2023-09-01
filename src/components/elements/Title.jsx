import styled from "styled-components";

const TitlePage = ({ children = "default title" }) => {
  return <Title>{children}</Title>;
};

const Title = styled.h2`
  color: #292929;
`;

export { TitlePage };
