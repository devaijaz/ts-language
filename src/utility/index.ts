export enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
}
export type Address = {
  city: string;
  country: string;
};
export type User = {
  id: number;
  name: string;
  age?: number;
  email: string;
  role: Role;
  isActive: boolean;
  address?: Address;
};

export type UpdateUser = Omit<User, "id" | "role" | "isActive" | "email">;

export type CreateUser = Pick<
  User,
  "id" | "email" | "name" | "address" | "age"
>;

export type UserWithAddress = Required<User>;
