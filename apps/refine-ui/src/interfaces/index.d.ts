export interface ICategory {
  id: number;
  title: string;
}
export interface IPost {
  id: number;
  title: string;
  content: string;
  status: 'published' | 'draft' | 'rejected';
  createdAt: string;
  category: { id: number };
}
export interface IUser {
  id: string;
  username: string;
  name: string;
  email: string;
  password: string;
}
export interface LoginFormTypes {
  username: string;
  password: string;
}
