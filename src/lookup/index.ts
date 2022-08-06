export type Request = {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
    country: string;
  };
  billing: {
    orderId: number;
    amount: number;
    userId: number;
    address: {
      street: string;
      city: string;
      country: string;
      pin: number;
    };
  };
  order: {
    orderId: number;
    items: {
      itemId: number;
      price: number;
      quantity: number;
      coupon: string;
    }[];
  };
  payment: {
    token: string;
  };
};
