function About() {
  return (
    <div className="about bg-gray-50 py-12 px-6 md:px-16">
      <header className=" text-center text-4xl font-bold text-gray-800 mb-6">
        About
      </header>
      <hr className=" border-t-4 border-blue-500 w-16 mx-auto mb-8" />

      <div className="text-gray-700 leading-relaxed">
        <p className="text-lg mb-8">
          At <span className="font-semibold text-blue-600">eCom</span>, we are
          more than just an online store — we are a community that thrives on
          innovation, customer satisfaction, and quality. Founded with the
          vision of simplifying the shopping experience,{" "}
          <span className="font-semibold">eCom</span> has grown into a trusted
          platform where customers can find a wide variety of products from
          reliable brands. Our core belief is that shopping should be easy,
          enjoyable, and accessible to everyone, no matter where you are.
        </p>

        <p className="text-lg mb-8">
          We pride ourselves on offering products that meet the highest
          standards of quality. Our team works tirelessly to handpick each item,
          ensuring that it not only serves a purpose but also adds value to our
          customers’ lives. Whether you’re a trendsetter in fashion, a tech
          enthusiast, or someone who loves to discover unique home goods,
          <span className="font-semibold"> eCom</span> is the place where you
          can find exactly what you need.
        </p>

        <header className="text-2xl font-bold text-gray-800 mt-12 mb-4">
          Our Mission
        </header>
        <p className="text-lg mb-8">
          Our mission is to create an effortless shopping experience by offering
          a platform that prioritizes customer satisfaction above all else. We
          aim to bridge the gap between quality products and affordability,
          ensuring that everyone has access to the best the market has to offer.
          With every purchase, we want our customers to feel the joy and
          excitement of a seamless transaction, backed by exceptional service.
        </p>

        <header className="text-2xl font-bold text-gray-800 mt-12 mb-4">
          Our Products
        </header>
        <p className="text-lg mb-8">
          At <span className="font-semibold text-blue-600">eCom</span>, we
          proudly offer a diverse range of high-quality products for men, women,
          and children, ensuring there’s something for everyone. From stylish
          apparel to functional accessories, our collections are carefully
          curated to meet the needs of all ages and preferences. Explore our
          selection and discover products that enhance your lifestyle and
          reflect your unique personality.
        </p>
      </div>

      <div className="about_img_div grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
        <img
          src="opm2.jpg"
          alt="Product 1"
          className="about_img w-full h-48 object-cover rounded-lg shadow-lg"
        />
        <img
          src="opm3.jpg"
          alt="Product 2"
          className="about_img w-full h-48 object-cover rounded-lg shadow-lg"
        />
        <img
          src="opw1.jpg"
          alt="Product 3"
          className="about_img w-full h-48 object-cover rounded-lg shadow-lg"
        />
        <img
          src="opc6.jpg"
          alt="Product 4"
          className="about_img w-full h-48 object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}

export default About;
