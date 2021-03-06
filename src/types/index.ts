import View from "../core/view";

export interface NewsStore{
    getAllFeeds: () => NewsFeed[];
    getFeed: (position: number) => NewsFeed;
    setFeeds: (feeds: NewsFeed[]) => void;
    makeRead: (id: number) => void;
    numberOfFeed: number;
    currentPage: number;
    nextPage: number;
    hasFeeds: boolean;
}

export interface Store{
    currentPage: number;
    feeds: NewsFeed[];
  }
  
export interface News{
    readonly id: number;
    readonly title: string;
    readonly url: string;
    readonly user: string;
    readonly time_ago: string;
    readonly content: string;
}
  
export interface NewsFeed extends News{
    readonly comments_count: number;
    readonly points: number;
    read?: boolean;
}
  
export interface NewsDetail extends News{
    readonly comments: NewsComment[];
}
  
export interface NewsComment extends News{
    readonly comments: NewsComment[];
    readonly level: number;
}
  
export interface RouteInfo{
    path: string;
    page: View;
}