import "./DiscriptionBox.css";

const DiscriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="decriptionbox-navigator">
        <div className="description-nav-box">Description</div>
        <div className="description-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online plateform that facilitate buying
          and selling of products or services over the internet serves as a
          virtual marketplace where businesses and individual showcase their
          products, interact with customer, abd conduction transactions without
          the need for a physical presence.
          <br />
          <br />
          E-commerce websites have gained immense popularity due to their
          convenial accessibility, and the global reach they offer.
        </p>
      </div>
    </div>
  );
};

export default DiscriptionBox;
