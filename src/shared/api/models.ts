export interface IRoom {
  id: number;
  title: string;
  owner: string;
  isActive: boolean;
}

export interface IFunction {
  icon: string;
  iconActive: string;
  title: string;
  description: string;
  link: string;
}

export interface IUser {
  email: string,
  email_verified: boolean,
  name: string,
  nickname: string,
  picture: string,
  sub: string,
  updated_at: string,
}
