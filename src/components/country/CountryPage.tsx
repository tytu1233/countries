import styled from "styled-components";
import { useGetCountries } from "../../hooks/useGetCountries";
import { Country } from "../../types/Countries";
import Loader from "../shared/Loader";
import CountryItem from "./CountryItem";
import { ChangeEvent, useState } from "react";

const CountryPage = () => {
  const [region, setRegion] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const { countries, isLoading } = useGetCountries();
  let filteredData = [...countries];

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setRegion(e.target.value);
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value);
  };

  if (region || country) {
    filteredData = filteredData.filter(
      (innerCountry) =>
        innerCountry.name
          .toLocaleLowerCase()
          .includes(country.toLocaleLowerCase()) &&
        (!region || innerCountry.region === region)
    );
  }

  return (
    <>
      <Container>
        <div>
          <input onChange={onInputChange} type="text" />
        </div>
        <div>
          <select onChange={onSelectChange}>
            <option value="">All</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            <option value="Asia">Asia</option>
            <option value="Americas">Americas</option>
          </select>
        </div>
      </Container>
      <CountriesWrapper>
        {isLoading ? (
          <Loader />
        ) : (
          filteredData.map((country: Country) => {
            return <CountryItem key={country.name} {...country} />;
          })
        )}
      </CountriesWrapper>
    </>
  );
};

const CountriesWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
}
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2%;
`;

/*display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 50px;*/

export default CountryPage;
