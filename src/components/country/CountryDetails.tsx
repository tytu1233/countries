import { useNavigate, useParams } from "react-router-dom";
import { useGetCountry } from "../../hooks/useGetCountry";
import styled from "styled-components";
import BorderDetails from "./borders/BorderDetails";

const CountryDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { country } = useGetCountry(id);

  return (
    <>
      <GoBackButton onClick={() => navigate(-1)}>Go back</GoBackButton>
      <CountryDetail>
        <ImageBox>
          <Image src={`${country?.flags}`} />
        </ImageBox>
        <InfoDiv>
          <p>Name: {country?.name}</p>
          <p>Capital: {country?.capital[0]}</p>
          <p>Region: {country?.region}</p>
          <p>Population: {country?.population}</p>
          <p>Code: {country?.cca3}</p>
          <>
            <BorderDetails borders={country?.borders} />
          </>
        </InfoDiv>
      </CountryDetail>
    </>
  );
};

const Image = styled.img`
  aspect-ratio: 160/98;
  width: 50%;
`;

const GoBackButton = styled.button`
  width: 200px;
  height: 50px;
  border: none;
  border-radius: 10px;
  font-family: Nyala;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background-color: #130000;
  }
`;

const CountryDetail = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  height: 100vh;

  @media only screen and (max-width: 1024px) {
    width: 100%;

    flex-direction: column;
  }
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const InfoDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 40%;

  @media only screen and (max-width: 1024px) {
    width: 100%;
    align-items: center;
  }
`;

export default CountryDetails;
