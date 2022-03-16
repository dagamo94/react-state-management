function Header({loggedIn, handleLoggedInClick}) {
    // TODO: define loggedIn
    return (
      <button style={{marginTop: "30px"}} onClick={handleLoggedInClick}>{loggedIn ? "Log Out" : "Log In"}</button>
    );
  }

  export default Header;