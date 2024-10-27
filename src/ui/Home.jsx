import Footer from "./Footer";
import Product from "../features/products/Product";

function Home() {
  return (
    <div>
      Hi dude this is home
      <div>
        {" "}
        <img src="blue_img.webp" className="image-home" />
      </div>
      <Product />
      <Footer />
    </div>
  );
}

export default Home;
