export default interface User {
  id?: number;
  name: string;
  phone: string;
  email: string;
  password?: string;
  createdAt: Date;
}
