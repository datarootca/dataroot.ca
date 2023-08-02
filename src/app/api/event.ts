import { BASE_URL } from ".";

export async function fetchEvents(
  filter: RequestFindEventFilter
): Promise<EventApiResponse | null> {
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

  // Append each filter value to the URL
  const response = await fetch(`${BASE_URL}/event?${params.toString()}`);
  console.log(`${BASE_URL}/event?${params.toString()}`)
  if (response.status === 200) {
    return (await response.json()) as EventApiResponse;
  } else if (response.status === 204) {
    // Status 204 means "No Content"
    return null; // Or handle it based on your specific use case
  } else if (response.status === 404) {
    throw new Error("Event not found"); // Or handle it based on your specific use case
  } else if (response.status === 500) {
    throw new Error("Server Error"); // Or handle it based on your specific use case
  }
  throw new Error("Unknown Error"); // Or handle it based on your specific use case
}

export async function fetchDetailedEvent(eventid: number): Promise<IEvent> {
  const response = await fetch(`${BASE_URL}/event/${eventid}`);

  const parserResponse = (await response.json()) as EventApiResponse;

  return parserResponse.records[0];
}
