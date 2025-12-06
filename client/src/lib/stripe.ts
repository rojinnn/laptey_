// Mock Stripe integration
export async function redirectToCheckout(items: any[]) {
  console.log("Redirecting to checkout with items:", items);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ url: '/success' });
    }, 1000);
  });
}
