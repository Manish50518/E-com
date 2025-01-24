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
