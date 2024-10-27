import { useRouteError } from "react-router";
import { Link } from "react-router-dom";

function Error() {
  const error = useRouteError();

  return (
    <div>
      <p>Somthing went wrong </p>
      <p>{error.message}</p>
      <Link to={"/"}>&larr; Go back</Link>
    </div>
  );
}

export default Error;
