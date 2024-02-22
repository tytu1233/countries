export type CountryResponse = {
  capital: string;
  population: number;
  name: {
    common: string;
  };
  region: string;
  flags: {
    png: string;
  };
};

export type Country = {
  capital: string;
  population: number;
  name: string;
  region: string;
  flagUrl: string;
};

export type CountryDetailResponse = {
  name: {
    common: string;
  };
  population: number;
  cca3: string;
  borders: string[];
  capital: string[];
  flags: {
    png: string;
  };
  region: string;
};

export type CountryDetail = {
  name: string;
  borders: string[];
  capital: string[];
  flags: string;
  cca3: string;
  population: number;
  region: string;
};
