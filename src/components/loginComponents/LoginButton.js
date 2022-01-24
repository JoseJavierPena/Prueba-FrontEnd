import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  // Al hacer click redirecciona al login que utiliza auth0
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-primary me-2"
        onClick={() => loginWithRedirect()}
      >
        Login
      </button>
    </div>
  );
};

export default LoginButton;
