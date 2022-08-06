import { selectFunction } from "./conditional";
import { withTime, withTimeAsync } from "./ho-functions";
import { CreateUser, Role, UpdateUser, User, UserWithAddress } from "./utility";

/**
 * COnditional Type Definition
 */

selectFunction({
  options: [{ id: "1", title: "One" }],
  labelKey: "title",
  valueKey: "id",
});

selectFunction({ options: [1, 2, 3, 5] });
selectFunction({ options: ["Hello"] });

/**
 * Utility
 */

const user: User = {
  email: "test@test.com",
  id: 1,
  isActive: true,
  name: "Test",
  role: Role.ADMIN,
  address: undefined, //optional
  age: undefined, //options
};

const UserWithAddress: UserWithAddress = {
  ...user,
  age: 20,
  address: {
    city: "city-name",
    country: "Country",
  },
};

const createUserDto: CreateUser = {
  email: "test@test.com",
  id: 1,
  name: "Test",
};

const updateUserDto: UpdateUser = {
  name: "Test",
  address: undefined, //optional
};

/**
 * Higher Order Functions
 */
const sumValue = withTime(function (a: number, b: number) {
  return a + b;
})(2, 3);
console.log(sumValue);

const sumFn = withTimeAsync(async (a: number, b: number): Promise<number> => {
  const sum = a + b;
  return new Promise((resolve) => setTimeout(() => resolve(sum), 0));
});

sumFn(1, 2).then(console.log);
