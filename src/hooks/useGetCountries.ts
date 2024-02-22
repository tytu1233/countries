import { useEffect, useState } from "react";
import { Country, CountryResponse } from "../types/Countries";

export const useGetCountries = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setIsLoading(true);
        const countriesResponse = await fetch(
          "https://restcountries.com/v3.1/all"
        );
        const response = await countriesResponse.json();
        const formattedCountries = response.map((country: CountryResponse) => {
          return {
            capital: country.capital && country.capital[0],
            name: country.name.common,
            population: country.population,
            region: country.region,
            flagUrl: country.flags.png,
          };
        });
        setCountries(formattedCountries);
      } catch (e) {
        setError("Error while fetching countries. Please try again");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return { countries, isLoading, error };
};
