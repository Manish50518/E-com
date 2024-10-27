function About() {
  return (
    <div className="about">
      <header className="page_header">About</header>
      <hr className="page_hr" />
      <p>
        At eCom, we are more than just an online store — we are a community that
        thrives on innovation, customer satisfaction, and quality. Founded with
        the vision of simplifying the shopping experience, eCom has grown into a
        trusted platform where customers can find a wide variety of products
        from reliable brands. Our core belief is that shopping should be easy,
        enjoyable, and accessible to everyone, no matter where you are. We pride
        ourselves on offering products that meet the highest standards of
        quality. Our team works tirelessly to handpick each item, ensuring that
        it not only serves a purpose but also adds value to our customers’
        lives. Whether you’re a trendsetter in fashion, a tech enthusiast, or
        someone who loves to discover unique home goods, eCom is the place where
        you can find exactly what you need.
        <header> Our Mission</header>
        <p>
          Our mission is to create an effortless shopping experience by offering
          a platform that prioritizes customer satisfaction above all else. We
          aim to bridge the gap between quality products and affordability,
          ensuring that everyone has access to the best the market has to offer.
          With every purchase, we want our customers to feel the joy and
          excitement of a seamless transaction, backed by exceptional service.
        </p>
        <header>Our Products</header>
        {/* <p>
          At eCom, we proudly offer a diverse range of high-quality products for
          men, women, and children, ensuring there’s something for everyone. Our
          men's collection features stylish and functional apparel, from casual
          wear to formal attire, empowering men to express their individuality
          with confidence. The women's collection celebrates femininity with
          fashionable clothing and accessories, blending modern trends with
          timeless classics for every occasion. For children, we provide vibrant
          and durable styles designed for comfort and active play, prioritizing
          safety without compromising on style. Explore our curated selection
          and discover products that enhance your lifestyle and reflect your
          unique personality.
        </p> */}
      </p>
      <div className="about_img_div">
        <img src="opm2.jpg" className="about_img" />
        <img src="opm3.jpg" className="about_img" />
        <img src="opw1.jpg" className="about_img" />
        <img src="opc6.jpg" className="about_img" />
      </div>
    </div>
  );
}

export default About;
