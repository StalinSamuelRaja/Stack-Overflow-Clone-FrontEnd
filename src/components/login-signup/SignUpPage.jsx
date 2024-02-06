import React from 'react';

const SignUpPage = () => {
  return (
    <div className="card card-side mx-auto mt-8 md:mt-24 w-full sm:w-2/5 lg:w-1/5 xl:w-1/3 bg-base-100 shadow-xl">
      <div className="card-body p-8">
        <h2 className="card-title text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Sign Up</h2>
        <p className="text-base md:text-lg lg:text-xl mb-6">Create your account to ask questions</p>
        
        {/* Form for sign-up */}
        <form>
          <div className="form-control border-0 mb-4">
            <label className="label">
              <span className="label-text text-base font-bold">Display name</span>
            </label>
            <input type="text" placeholder="Enter your username" className="input input-bordered w-full" />
          </div>
          
          <div className="form-control border-0 mb-4">
            <label className="label">
              <span className="label-text text-base font-bold">Email</span>
            </label>
            <input type="email" placeholder="Enter your email" className="input input-bordered w-full" />
          </div>
          
          <div className="form-control border-0 mb-6">
            <label className="label">
              <span className="label-text text-base font-bold">Password</span>
            </label>
            <input type="password" placeholder="Enter your password" className="input input-bordered w-full" />
          </div>

          <button type="submit" className="btn btn-primary mx-32 w-50">Sign Up</button>
        </form>
        
        {/* Additional information or links can be added here */}
      </div>
    </div>
  );
}

export default SignUpPage;
