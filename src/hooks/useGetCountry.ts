import { useEffect, useState } from "react";
import { CountryDetail } from "../types/Countries";

export const useGetCountry = (id: string | undefined) => {
  const [country, setCountry] = useState<CountryDetail>();

  useEffect(() => {
    const url =
      id?.length !== 3
        ? `https://restcountries.com/v3.1/name/${id}`
        : `https://restcountries.com/v3.1/alpha/${id}`;

    console.log(url);
    const fetchCountry = async () => {
      const country = await fetch(url);
      const countryResponse = await country.json();
      const countryDetails: CountryDetail = {
        name: countryResponse[0]?.name?.common,
        population: countryResponse[0]?.population,
        cca3: countryResponse[0]?.cca3,
        borders: countryResponse[0]?.borders,
        capital: countryResponse[0]?.capital,
        flags: countryResponse[0]?.flags?.png,
        region: countryResponse[0]?.region,
      };
      console.log(countryDetails);
      setCountry(countryDetails);
    };
    fetchCountry();
  }, [id]);

  return { country };
};
