export default function LoginPage() {
  return (
    <>
      <div className="row box-login">
             <div className="imgpassword">
              <img src="/img/senyum.png" alt="" srcset="" />
            </div>
        <div className="card">
          <div className="card-body">
            <div className="mb-4">
               <h5 className="text-center">LOGIN</h5>
            </div>
            <form className="d-flex flex-column gap-1">
              <div className="form-group">
                <div className="input-wrapper">
                  <input type="email" id="email" name="email" placeholder=" " />
                <label htmlFor="email">Email</label>
                  <span className="icon">
                     <i class="bi bi-envelope"></i>
                  </span>
                </div>
              </div>
              <div className="form-group">
                <div className="input-wrapper">
                  <input type="password" id="password" name="password" placeholder=" " />
                <label htmlFor="password">Password</label>
                  <span className="icon">
                  <i class="bi bi-file-lock2-fill"></i>
                  </span>
                </div>
              </div>
              <div className="mb-5 d-flex">
                <a href="http://" className="ms-auto">Forgot Password?</a>
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
