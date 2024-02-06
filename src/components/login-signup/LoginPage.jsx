import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Add your login logic here (e.g., call an API endpoint for authentication)

    console.log('Logging in with:', { email, password });
  };

  return (
    <div className="card card-side mx-auto mt-8 md:mt-24 w-full sm:w-2/5 lg:w-1/5 bg-base-100 shadow-xl">
      <div className="card-body p-6">
        <h2 className="card-title text-xl md:text-2xl lg:text-3xl font-bold mb-4">Log In</h2>

        {/* Form for login */}
        <form onSubmit={handleLogin}>
          <div className="form-control border-0 mb-4">
            <label className="label">
              <span className="label-text text-base font-bold">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-control border-0 mb-6">
            <label className="label">
              <span className="label-text text-base font-bold">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary w-full">Log In</button>
        </form>

        {/* Additional information or links can be added here */}
      </div>
    </div>
  );
};

export default LoginPage;
