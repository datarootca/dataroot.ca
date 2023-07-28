export {};

declare global {
  /**
   * The IState interface represents a single state record from the 'state' table.
   */
  export interface IState {
    /** Primary key */
    stateid: string;
    /** State name */
    name: string;
    /** State symbol */
    symbol: string;
    /** Creation timestamp */
    created_at: string;
    /** Last update timestamp */
    updated_at: string | null;
    /** External identifier */
    extid: string;
    /** High-res photo link */
    highres_link: string | null;
    /** Photo link */
    photo_link: string | null;
    /** Thumbnail link */
    thumb_link: string | null;
  }

  /**
   * The ICity interface represents a single city record from the 'city' table.
   * This interface describes the structure of the city data that will be returned from the API.
   */
  interface ICity {
    /** City name. This is a unique name of the city. */
    name: string;

    /** URL slug. This is a unique URL-friendly version of the city name. */
    slug: string;

    /** State Symbol. **/
    state_symbol: string;

    state_name: string;
  }
  /**
   * The IEvent interface represents a single event record from the 'event' table.
   */
  export interface IEvent {
    /** Primary key */
    eventid: string;
    /** Event title */
    name: string;
    /** Event description */
    description: string | null;
    /** External identifier */
    extid: string;
    /** Event URL or address */
    location: string;
    /** Group ID */
    groupid: string;
    /** In-person event status */
    in_person: boolean;
    /** Event start time */
    time: string;
    /** Event duration */
    duration: number;
    /** Event URL */
    link: string;
    /** Waitlist count */
    waitlist_count: number | null;
    /** Event capacity */
    rsvp_limit: number | null;
    /** Online event status */
    is_online: boolean;
    /** Attendance count */
    yes_rsvp_count: number;
    /** Event fee status */
    fee: boolean;
    /** High-res photo link */
    highres_link: string | null;
    /** Photo link */
    photo_link: string | null;
    /** Thumbnail link */
    thumb_link: string | null;
    /** Creation timestamp */
    created_at: string;
    /** Last update timestamp */
    updated_at: string | null;
  }

  /**
   * The IGroup interface represents a single group record from the 'group' table.
   */
  interface IGroup {
    group_name: string;
    group_highres_link: string;
    group_slug: string;
    city_name: string;
    state_symbol: string;
    city_slug: string;
    organizer: string;
    event_count: number;
    members: number;
  }
  /**
   * The IOrganizer interface represents a single organizer record from the 'organizer' table.
   */
  interface IOrganizer {
    /** Primary key */
    organizerid: string;
    /** Organizer's first name */
    firstname: string;
    /** Organizer's last name */
    lastname: string;
    /** Creation timestamp */
    created_at: string;
    /** Last update timestamp */
    updated_at: string | null;
    /** External identifier */
    extid: string;
    /** Organizer's bio */
    bio: string;
    /** High-res photo link */
    highres_link: string | null;
    /** Photo link */
    photo_link: string | null;
    /** Thumbnail link */
    thumb_link: string | null;
  }
  /**
   * The IArticle interface represents a single article record from the 'article' table.
   */
  interface IArticle {
    /** Primary key */
    articleid: string;
    /** External identifier */
    extid: string;
    /** Article title */
    name: string;
    /** Article description */
    description: string;
    /** Article duration in minutes */
    time_m: number | null;
    /** ication date *String;
    publish_at: string;
    /** Source name */
    source: string;
    /** Article link */
    link: string;
    /** Author name */
    author: string;
    /** High-res photo link */
    highres_link: string | null;
    /** Photo link */
    photo_link: string | null;
    /** Thumbnail link */
    thumb_link: string | null;
    /** Publish timestamp */
    publish_at: string;
    /** Creation timestamp */
    created_at: string;
    /** Last update timestamp */
    updated_at: string | null;
  }

  interface RequestFindEventFilter {
    name?: String;
    in_person?: boolean;
    is_online?: boolean;
    group_slug?: string;
    location?: string;
    has_fee?: boolean;
    rsvp_limit?: number;
    time_frame?: "Custom" | "Today" | "ThisWeek" | "ThisMonth";
    start_date?: Date;
    end_date?: Date;
    status?: string;
    page?: number;
    page_size?: number;
  }

  type ApiGroupDetailedResponse = {
    name: string;
    description: string;
    slug: string;
    active: bool;
    private: bool;
    members: string;
    city_name: string;
    state_symbol: string;
    organizer: string;
    highres_link?: string;
    photo_link?: string;
    thumb_link?: string;
    created_at: string;
    updated_at?: string;
  };

  interface IApiResponse<T> {
    meta: {
      count: number;
      page: number;
      pages: number;
    };
    records: T[];
  }

  type ArticleApiResponse = IApiResponse<IArticle>;
  type EventApiResponse = IApiResponse<IEvent>;
  type GroupApiResponse = IApiResponse<IGroup>;
  type OrganizerApiResponse = IApiResponse<IOrganizer>;
  type StateApiResponse = IApiResponse<IState>;
  type CityApiResponse = IApiResponse<ICity>;
}
