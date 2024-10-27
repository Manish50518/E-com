import { getCartItems } from "../../services/apiProducts";
import supabase from "../../services/supabase";

export async function addToCart({ id, price }) {
  const cart_data = await getCartItems();
  console.log(cart_data);
  // console.log(cart_data.quantity);
  console.log(id);

  const upQty = cart_data.find((item) => item.product.id === id);

  if (upQty) {
    const newQunatity = upQty.quantity + 1;
    const newTotalPrice = price * newQunatity;

    const { data, error } = await supabase
      .from("cart_items")
      .update({
        quantity: newQunatity,
        total_price: newTotalPrice,
      })
      .eq("product_id", id);
    if (error) {
      console.error(error);
      throw new Error("Product data cannot be find");
    }
    return data;
  } else {
    const { data, error } = await supabase
      .from("cart_items")
      .insert({ product_id: id, quantity: 1, total_price: price });

    if (error) {
      console.error(error);
      throw new Error("Error inserting product into cart");
    }
    return data;
  }
}
