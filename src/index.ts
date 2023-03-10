import { selectFunction } from "./conditional";
import {
  AdminUser,
  processUser,
  StandardUser,
  User as Uzer,
} from "./exclusion-narrowing";
import { withTime, withTimeAsync } from "./ho-functions";
import { Request } from "./lookup";
import { registerObjectListener } from "./mapped";
import { CreateUser, Role, UpdateUser, User, UserWithAddress } from "./utility";

/**
 * Exclusion and Narrowing
 */

processUser({ type: "ADMIN", adminEmail: "admin@admin.com", isAdmin: true });
processUser({ type: "USER", userEmail: "admin@admin.com", isUser: true });

const users: Uzer[] = [];

//infer to User[]
const standardUsers1 = users.filter((user): boolean => {
  return "isUser" in user;
});

//infer to StandardUser[]
const standardUsers2 = users.filter((user): user is StandardUser => {
  return "isUser" in user;
});

const adminUsers = users.filter((user): user is AdminUser => "isAdmin" in user);

/**
 * Mapped
 */

let myObj = {
  id: 1,
  name: "X",
  salary: 4000,
};
registerObjectListener(myObj, {
  onIdChange: (id: number) => {
    console.log("ID changed to", id);
  },
  onNameChange: (name: string) => {
    console.log("Name Changed to", name);
  },
  onSalaryChange: (newSalary: number) => {
    console.log("Salary Changed to", newSalary);
  },
});
myObj.name = "AAA";
myObj.id = 123455;
myObj.salary = 11111111;
console.log(myObj);
/**
 * Lookup
 */
type OrderRequest = Request["order"];
type Item = Request["order"]["items"][0];
const getOrder = function (): OrderRequest {
  return {
    items: [],
    orderId: 123,
  };
};
const item: Item = {
  coupon: "XXXXXX",
  itemId: 12,
  price: 2000,
  quantity: 3,
};

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
