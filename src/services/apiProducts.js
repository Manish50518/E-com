import supabase from "./supabase";

export async function getProducts() {
  const { data, error } = await supabase.from("product").select("*");
  if (error) {
    console.error(error);
    throw new Error("Product data cannot be find");
  }
  return data;
}

export async function getCartItems() {
  const { data, error } = await supabase
    .from("cart_items")
    .select("id,product(id,image,brand,price,description),quantity,total_price")
    .order("created_at");

  if (error) {
    console.error(error);
    throw new Error("Product data cannot be find");
  }

  return data;
}
// export async function getCartData() {
//   const { data, error } = await supabase.from("cartItems").select("*");
//   if (error) {
//     console.error(error);
//     throw new Error("Cart data cannot be find");
//   }
//   return data;
// }

// export const insertCartDataToSupabase = async (cart) => {
//   try {
//     const { data, error } = await supabase
//       .from("cartItem") // Replace with your actual table name in Supabase
//       .insert(cart); // Insert cart items

//     if (error) {
//       console.error("Error inserting cart data:", error);
//     } else {
//       console.log("Cart data inserted successfully:", data);
//     }
//   } catch (err) {
//     console.error("Error inserting cart data:", err.message);
//   }
// };
