    import { BASE_URL } from ".";

export async function fetchGroups(
    page: number = 1,
    city?: string,
): Promise<GroupApiResponse> {
    try {
        let URL= `${BASE_URL}/group?page=${page}`;
        if(city) {
            URL += `&city=${city}`
        }
        const items = await fetch(
            decodeURI(URL)
        );
      if(items.status === 400) {
        return {
            meta: {
                page: 1,
                pages: 1,
                count: 0,
            },
            records: [],
          };
      } else if (items.status === 204) {
        return {
            meta: {
                page: 1,
                pages: 1,
                count: 0,
            },
            records: [],
          };
        }   
      return await items.json() as GroupApiResponse;
    } catch(err){
      return {
        meta: {
            page: 1,
            pages: 1,
            count: 0,
        },
        records: [],
      };
    }
}

export async function fetchDetailGroup(
    slug: string,
): Promise<ApiGroupDetailedResponse | null> {
    try {
        const URL= `${BASE_URL}/api/v1/group/${slug}`;
        const items = await fetch(
            decodeURI(URL)
        );
      if(items.status === 400) {
        return null;
      } else if (items.status === 204) {
        return null;
    }   
      return await items.json() as ApiGroupDetailedResponse;
    } catch(err){
      return null;
    }
}