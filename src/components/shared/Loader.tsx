import { MoonLoader } from "react-spinners";
import styled from "styled-components";

function Loader() {
  return (
    <LoaderDiv>
      <MoonLoader color="#36d7b7" />
    </LoaderDiv>
  );
}

const LoaderDiv = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Loader;
