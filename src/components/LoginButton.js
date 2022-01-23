import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      type="button"
      className="btn btn-outline-primary me-2"
      onClick={() => loginWithRedirect()}
    >
      Login
    </button>
  );
};

export default LoginButton;
