import { Link, useRouteError } from "react-router-dom";

function NotFound() {
   // Get error details from React Router
  const err=useRouteError()
    
  return (
    <div className="error-container">
      <h1 className="error-code">404</h1>

      <h2 className="error-title">Oops! Page Not Found</h2>

      {/* Display error message from router */}
      <p className="error-text">
        {err.data}
      </p>

      {/* Button to navigate back to home page */}
      <Link to="/">
        <button className="home-btn">Go Back Home</button>
      </Link>
    </div>
  );
}

export default NotFound;


