import { Link } from "react-router-dom";
import "./NotFound.scss";

const NotFound: React.FC = () => {
  return (
    <main className="not-found">
      <div className="not-found-content">
        <p className="not-found-code">404</p>
        <h1 className="not-found-title">Page not found</h1>
        <p className="not-found-message">
          The page you requested does not exist or may have moved.
        </p>
        <Link className="not-found-link" to="/">
          Back to home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
