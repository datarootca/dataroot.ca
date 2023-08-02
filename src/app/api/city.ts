import { BASE_URL } from ".";

export async function getCities(page: number = 1): Promise<CityApiResponse> {
  const response = await fetch(decodeURI(`${BASE_URL}/city?page=${page}`));
  return (await response.json()) as CityApiResponse;
}

export async function fetchCityBySlug(slug: string): Promise<ICity | null> {
  try {
    const response = await fetch(decodeURI(`${BASE_URL}/api/v1/city/${slug}`));
    if (response.status === 400) {
      return null;
    } else if (response.status === 204) {
      return null;
    }
    const cities = (await response.json()) as CityApiResponse;
    return cities.records[0];
  } catch (err) {
    return null;
  }
}
