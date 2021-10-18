const AuthButton = () => {
  return (
    <a href="#top" className="account-nav-link auth-button">
      <div className="icon-container">
        <i className="i-user initial-icon"></i>
        <i className="i-user-orange hover-icon"></i>
      </div>
      <span>Giriş Yap</span>
    </a>
  );
};

export default AuthButton;