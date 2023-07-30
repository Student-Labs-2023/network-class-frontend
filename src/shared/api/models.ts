export interface IRoom {
  id: number;
  title: string;
  public: boolean;
  owner: string;
  isPublic: boolean;
  url: string,
  photo_url: string,
}

export interface IFunction {
  icon: string;
  iconActive: string;
  title: string;
  description: string;
  link: string;
  onClick?: () => void;
}

export interface IUser {
  email: string;
  email_verified: boolean;
  name: string;
  nickname: string;
  picture: string;
  sub: string;
  updated_at: string;
}
