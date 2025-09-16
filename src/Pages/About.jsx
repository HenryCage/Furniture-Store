import './About.css';

const AboutUs = () => {
    return (
    <section className="about-us">
      <div className="about-image">
        <img
          src="https://www.logoai.com/uploads/output/2025/02/12/6654f95bc56988e09074e131d2a76cee.jpg"
          alt="Furniture showcase"
        />
      </div>
      <div className="about-text">
        <h2>About Us</h2>
        <p>
          At <strong>Super Store</strong>, we believe every home deserves
          furniture that combines style, comfort, and quality. From timeless
          classics to modern designs, our collection is crafted to help you
          create spaces that feel truly yours. We’re committed to offering
          durable, beautiful pieces at prices that make sense, while providing
          a shopping experience that’s simple and enjoyable.
        </p>
      </div>
    </section>
  );
}

export default AboutUs;
