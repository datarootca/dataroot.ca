import { BASE_URL } from ".";

export async function getCities(
    page: number = 1,
): Promise<CityApiResponse> {
    const response = await fetch(
        decodeURI(
            `${BASE_URL}/city?page=${page}`
        )
    );
    return await response.json() as CityApiResponse;
}

export async function fetchCityBySlug(
    slug: string,
): Promise<ICity> {
    console.log(slug)
    const response = await fetch(
        decodeURI(
            `${BASE_URL}/api/v1/city/${slug}`
        )
    );
    const cities = await response.json() as CityApiResponse;
    return cities.records[0]
}