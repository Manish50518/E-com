import { useEffect } from "react";
import { Link } from "react-router-dom";

function Login({ setOpenLogin, setOpenRegister }) {
  function handleRegister() {
    setOpenLogin(false);
    setOpenRegister(true);
  }

  useEffect(() => {
    document.body.style.overflow = "hidden"; // Disable scroll
    return () => {
      document.body.style.overflow = "auto"; // Re-enable scroll when modal is closed
    };
  }, []);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative">
        <button
          onClick={() => setOpenLogin(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <header className="page_header text-center text-2xl font-bold text-gray-800 mb-4">
          Login
        </header>
        <hr className="page_hr border-t-2 border-blue-500 w-16 mx-auto mb-6" />

        <form className="contact_form">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="pass" className="block text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="pass"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <p className="login_contact text-sm text-gray-600">
            New Here?{" "}
            <a
              onClick={handleRegister}
              className="text-blue-500 hover:underline"
            >
              Register
            </a>
          </p>

          <button
            type="submit"
            className="submit_contact mt-6 w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
