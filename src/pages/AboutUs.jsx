const AboutUs = () => {
  return (
    <div>

      <div>
        <h1 className="text-3xl font-bold text-center text-orange-500">About Us</h1>
        <div className="border-b-2 border-orange-500 py-3 mb-10"></div>
      </div>
      <div className="py-3 flex flex-col gap-3">
        <p>
          At <span className="text-orange-500 font-bold p-1">FoodPoint</span>, food is not just a necessity — it is an
          experience, a celebration of flavors, and a way to bring people
          together. Our journey began with a passion for authentic cooking and a
          dream to create a place where every guest feels at home. From the very
          first day, our mission has been simple: serve fresh, flavorful dishes
          with love and care.
        </p>

        <p>
          We take pride in sourcing the finest ingredients, blending traditional
          recipes with modern creativity, and presenting meals that delight both
          the eyes and the taste buds. Whether it’s a cozy family dinner, a
          romantic evening, or a gathering with friends, our restaurant offers
          the perfect ambience — warm lights, inviting décor, and a friendly
          team ready to welcome you.
        </p>

        <p>
          {" "}
          Our specialties range from signature local dishes to international
          favorites, each prepared by skilled chefs who believe in the art of
          cooking. Beyond food, we promise hospitality that makes every visit
          memorable. Because at <span className="text-orange-500 font-bold p-1">FoodPoint</span>, we don’t just serve
          meals — we create moments worth cherishing.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
