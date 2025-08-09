export default function Navbar(){
    return(
        <>
       <nav className="navbar navbar-expand-lg ">
  <div className="container mt-2 p-1">
   <a className="navbar-brand centered" href="#">
    <img src="/img/logo1.png" alt="Bootstrap" width="30" height="30" className="d-inline-block align-text-center"/>
      StudyClass
  </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <a className="nav-link active" aria-current="page" href="/"> <i className="bi bi-house-fill"></i> Halaman Utama</a>
        <a className="nav-link" href="#"><i className="bi bi-person-circle"></i> Akun</a>
      </div>
    </div>
  </div>
</nav>
        </>
    )
}