import { useNavigate } from "react-router-dom";

function Logo() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center item-center gap-3 cursor-pointer mr-9">
      <img
        src="2.jpg"
        alt="Logo"
        className="h-8 w-8 rounded-lg object-contain"
        onClick={() => navigate("/")}
      />

      <span
        className="text-2xl font-bold text-gray-800 hover:text-blue-500"
        onClick={() => navigate("/")}
      >
        e-com
      </span>
    </div>
  );
}

export default Logo;
