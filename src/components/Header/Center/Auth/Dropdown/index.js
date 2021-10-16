import {Link} from "react-router-dom";
import Button from "../../../../Button";

import "./style.scss";

const AuthDropdown = () => {
  return (
    <div className="auth-dropdown dropdown-menu">
      <Button width="100%" height="34px" size="sm" as={Link} to="/">
        Giriş Yap
      </Button>
      <Button variant="secondary" size="sm" width="100%" height="34px" as={Link} to="/">
        Üye Ol
      </Button>
    </div>
  );
};

export default AuthDropdown; 