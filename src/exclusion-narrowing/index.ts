export interface StandardUser {
  type: "USER";
  isUser: true;
  userEmail: string;
}

export interface AdminUser {
  type: "ADMIN";
  isAdmin: true;
  adminEmail: string;
}

export type User = StandardUser | AdminUser;

export function processUser(user: User) {}



processUser({ type: "ADMIN", adminEmail: "admin@admin.com", isAdmin: true });
processUser({ type: "USER", userEmail: "admin@admin.com", isUser: true });

const users: User[] = [];

//infer to User[]
const standardUsers1 = users.filter((user): boolean => {
  return "isUser" in user;
});

//infer to StandardUser[]
const standardUsers2 = users.filter((user): user is StandardUser => {
  return "isUser" in user;
});

const adminUsers = users.filter((user): user is AdminUser => "isAdmin" in user);
