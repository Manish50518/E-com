import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full mb-4">
      <div className="w-full px-4">
        <hr className="border-t-2 border-gray-200 mb-6" />
        <div className="flex justify-center gap-5">
          <Link to="https://www.facebook.com/">Privacy Policy</Link>
          <Link to="https://tinder.com/">Terms and Conditions</Link>
          <Link to="https://x.com/?lang=en">Return Policy</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
