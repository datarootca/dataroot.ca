import { BASE_URL } from ".";

export async function fetchEvents(
  filter: RequestFindEventFilter
): Promise<EventApiResponse> {
  const stringifiedFilter: Record<string, string> = {};
  for (const [key, value] of Object.entries(filter)) {
    if (value instanceof Date) {
      stringifiedFilter[key] = value.toISOString();
    } else {
      stringifiedFilter[key] = String(value);
    }
  }
  // Create URLSearchParams object from filter object
  const params = new URLSearchParams(stringifiedFilter);

  console.log(`${BASE_URL}/event?${params.toString()}`);
  // Append each filter value to the URL
  const response = await fetch(`${BASE_URL}/event?${params.toString()}`);

  return (await response.json()) as EventApiResponse;
}
