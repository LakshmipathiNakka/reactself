const SignIn = () => (
  <div className="container">
    <div className="header">
      <h1>Sign In</h1>
    </div>
    <div className="body">
      <p>Sign in to your account</p>
      <div className="social-sign-in">
        <button className="google-sign-in">Sign in with Google</button>
        <button className="apple-sign-in">Sign in with Apple</button>
      </div>
      <div className="email-sign-in">
        <label htmlFor="email">Email address</label>
        <input type="email" id="email" placeholder="johndoe@gmail.com" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
        <p>Forgot password?</p>
      </div>
      <button className="sign-in-btn">Sign In</button>
    </div>
    <div className="footer">
      <p>Don't have an account? Register here</p>
    </div>
  </div>
)

export default SignIn
