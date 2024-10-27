import { useNavigate } from "react-router-dom";

function Logo() {
  const navigate = useNavigate();
  return (
    <div className="logo_div">
      <img src="2.jpg" className="logo_img" onClick={() => navigate("/")} />{" "}
      <span className="logo_text" onClick={() => navigate("/")}>
        e-com
      </span>
    </div>
  );
}

export default Logo;
