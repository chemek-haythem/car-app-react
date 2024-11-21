import { NavLink, Outlet } from "react-router-dom";

const HelpLayout = () => {
  return (
    <div className="help-layout">

     <h2>Website Help</h2>
          <p>Welcome to Car Haven's Help Center! Our commitment is to provide exceptional support and guidance as you navigate through the exciting world of cars on our platform. This Help Center is your go-to resource, designed to assist you with any questions or concerns you may encounter while exploring our automotive haven.</p>

          <p>Whether you're looking for information about our diverse car inventory, need assistance with orders, or seek clarifications about our policies, this hub is crafted to address your needs comprehensively. We've compiled a set of frequently asked questions and detailed guides to ensure quick and effective solutions.</p>

          <p>Your time is valuable to us, and we've designed this resource to empower you with the knowledge and tools needed to seamlessly immerse yourself in the captivating world of Car Haven. If you can't find the information you're looking for here, our dedicated customer support team is ready to provide personalized assistance.</p>

          <p>Thank you for choosing Car Haven. Let's embark on this automotive adventure together and make your Car Haven experience extraordinary!</p>


    <nav>
      <NavLink to="faq">View the FAQ</NavLink>
      <NavLink to="contact">Contact Us</NavLink>
    </nav>

    <Outlet />
  </div>
  );
}

export default HelpLayout;