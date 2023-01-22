import React from 'react'
import './signUp.css'

const SignUp = ({heading, subHeading, }) => {
  return (
    <div className="vh-100 gradient-custom">
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
            <div className="card-body p-5 text-center">
              <div className="3mt-md-4 pb-5">
                <h2 className="fw-bold mb-2 text-uppercase">{heading}</h2>
                {subHeading && <p className="text-white-50 mb-5"> {subHeading}</p>}

                <div className="form-outline form-white mb-4">
                  <input type="email" id="typeEmailX" className="form-control form-control-lg"/>
                  <label className="form-label" htmlFor="typeEmailX"> Email </label>
                </div>

                <div className="form-outline form-white mb-4">
                  <input type="password" id="typePasswordX" className="form-control form-control-lg"/>
                  <label className="form-label" htmlFor="typePasswordX"> Password </label>
                </div>
                {heading === 'signUp' &&
                <div className="form-outline form-white mb-4">
                  <input type="password" id="typePasswordX" className="form-control form-control-lg"/>
                  <label className="form-label" htmlFor="typePasswordX"> Confirm Password </label>
                </div>}
                {/* Add this feature in future */}
                {/* <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p> */}

                <button className="btn btn-outline-light btn-lg px-5" type="submit"> {heading==='login' ? 'Continue' : 'Register' } </button>

              </div>
                {heading === 'login' &&
              <div>
                
                <p className="mb-0">Don't have an account? <span className="text-white-50 fw-bold">Sign Up</span></p>

              </div> }
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SignUp