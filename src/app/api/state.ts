import { BASE_URL } from ".";

export async function getStates(
    page: number = 1,
): Promise<GroupApiResponse> {
    const response = await fetch(
        decodeURI(
            `${BASE_URL}/state?page=${page}`
        )
    );
    return await response.json() as GroupApiResponse;
}