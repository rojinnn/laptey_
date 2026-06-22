import { apiRequest } from "./queryClient";
import type { CartItem } from "./cart-context";

export interface CheckoutCustomerInfo {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  zip: string;
}

export async function redirectToCheckout(
  items: CartItem[],
  customer: CheckoutCustomerInfo,
) {
  const res = await apiRequest("POST", "/api/checkout", {
    items: items.map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      image: item.image,
    })),
    customerEmail: customer.email,
    customerName: `${customer.firstName} ${customer.lastName}`.trim(),
    shippingAddress: {
      address: customer.address,
      city: customer.city,
      zip: customer.zip,
    },
  });

  const { url } = await res.json() as { url?: string };
  if (!url) {
    throw new Error("No checkout URL returned");
  }

  window.location.href = url;
}
