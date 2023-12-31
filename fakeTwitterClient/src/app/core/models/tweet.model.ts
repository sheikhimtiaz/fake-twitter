export interface Tweet {
    tweet: string;
    createdAt: any;
    createdBy: string;
    createdByName: string;
    createdByPhoto: string;
    createdByUsername: string;
    likes: number;
    comments: number;
    shares: number;
    retweets: number;
    isLiked: boolean;
    isRetweeted: boolean;
    isShared: boolean;
    isCommented: boolean;
    isEdited: boolean;
  }

  export interface TweetContent {
    content: string;
    id: number;
    published: string;
    user: User;
  }

  export interface User {
    active: boolean;
    email: string;
    id: number;
    username: string;
  }