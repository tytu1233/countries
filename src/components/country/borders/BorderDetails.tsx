import { Link } from "react-router-dom";
import styled from "styled-components";

const BorderDetails = ({ borders }: { borders: string[] | undefined }) => {
  return (
    <BorderBox>
      {borders ? (
        borders.map((border) => {
          return (
            <Link
              key={border}
              style={{ textDecoration: "none", color: "inherit" }}
              to={`/country/${border}`}
            >
              <BorderDiv>{border}</BorderDiv>
            </Link>
          );
        })
      ) : (
        <p>No borders</p>
      )}
    </BorderBox>
  );
};

const BorderBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;

  @media only screen and (max-width: 1024px) {
    justify-content: center;
  }
`;

const BorderDiv = styled.div`
  border: solid 1px white;
  padding: 0 5px;
`;

export default BorderDetails;
