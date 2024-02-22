import styled from "styled-components";
import { Country } from "../../types/Countries";
import { Link } from "react-router-dom";

const CountryItem = ({
  name,
  population,
  region,
  capital,
  flagUrl,
}: Country) => {
  return (
    <CountryWrapper>
      <Link
        style={{ textDecoration: "none", color: "inherit" }}
        to={`/country/${name}`}
      >
        <CountryFlagBox>
          <CountryFlag src={flagUrl} />
        </CountryFlagBox>
        <CountryInfoBox>
          <CountryNameSpan>{name}</CountryNameSpan>
          <CountryInfoSpan>Population: {population}</CountryInfoSpan>
          <CountryInfoSpan>Region: {region}</CountryInfoSpan>
          <CountryInfoSpan>Capital: {capital}</CountryInfoSpan>
        </CountryInfoBox>
      </Link>
    </CountryWrapper>
  );
};

const CountryWrapper = styled.div`
  border-radius: 10px;
  width: 15%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0px 10px 10px -8px rgb(68, 68, 90);
  margin: 2%;

  @media only screen and (max-width: 1024px) {
    width: 20%;
  }

  @media only screen and (max-width: 726px) {
    width: 40%;
  }

  @media only screen and (max-width: 500px) {
    width: 50%;
  }
`;

const CountryFlagBox = styled.div`
  display: flex;
`;

const CountryInfoBox = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 5px;
`;

const CountryFlag = styled.img`
  aspect-ratio: 160/98;
  width: 100%;
`;

const CountryNameSpan = styled.span`
  font-size: 40px;
  font-weight: bold;
`;

const CountryInfoSpan = styled.span`
  font-size: 15px;
`;

export default CountryItem;
