export interface Root {
  transaction_id: string;
  status: Status;
  payment_sequence: string;
  created_at: string;
  price: Price;
  price_paid: PricePaid;
  payment_method: PaymentMethod;
  fees: Fees;
  customer: Customer;
  products: Product[];
  coupons: any[];
  gift_cards: any[];
  recurring_payment_reference: any;
  decline_reason: DeclineReason;
}

export interface Status {
  id: number;
  description: string;
}

export interface Price {
  amount: number;
  currency: string;
}

export interface PricePaid {
  amount: number;
  currency: string;
}

export interface PaymentMethod {
  name: string;
  refundable: boolean;
}

export interface Fees {
  tax: Tax;
  gateway: Gateway;
}

export interface Tax {
  amount: number;
  currency: string;
}

export interface Gateway {
  amount: number;
  currency: string;
}

export interface Customer {
  first_name: string;
  last_name: string;
  email: string;
  ip: string;
  username: Username;
  marketing_consent: boolean;
  country: string;
  postal_code: string;
}

export interface Username {
  id: string;
  username: string;
}

export interface Product {
  id: number;
  name: string;
  quantity: number;
  base_price: BasePrice;
  paid_price: PaidPrice;
  variables: Variable[];
  expires_at: any;
  custom: any;
  username: Username2;
}

export interface BasePrice {
  amount: number;
  currency: string;
}

export interface PaidPrice {
  amount: number;
  currency: string;
}

export interface Variable {
  identifier: string;
  option: string;
}

export interface Username2 {
  id: string;
  username: string;
}

export interface DeclineReason {
  code: string;
  message: string;
}
