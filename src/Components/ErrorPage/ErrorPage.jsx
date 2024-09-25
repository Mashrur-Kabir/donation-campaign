import { useNavigate } from 'react-router-dom';
import './ErrorPage.css'; 

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="error-container">
      <h1>404</h1>
      <h2>Oops! Page not found</h2>
      <p>The page you are looking for might have been removed or is temporarily unavailable.</p>
      <button className="btn-back" onClick={handleGoBack}>
        Go Back Home
      </button>
    </div>
  );
};

export default ErrorPage;
