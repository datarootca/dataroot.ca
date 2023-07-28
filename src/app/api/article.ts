import { BASE_URL } from ".";

export async function fetchArticles(
    page: number = 1,
): Promise<ArticleApiResponse> {
    try {
        const items = await fetch(
            decodeURI(
                `${BASE_URL}/article?page=${page}`
            )
        );
      if(items.status === 400) {
        // probably clearn reset uri'
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
      return await items.json() as ArticleApiResponse;
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