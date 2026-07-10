export const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <div className="container-fluid ps-0">
        <a className="navbar-brand text-white " href="#">MyApp</a>
        <div className="navbar-nav ms-auto d-flex flex-row gap-3">
          <a className="nav-link text-white" href="#" >Home</a>
          <a className="nav-link text-white" href="#">About</a>
          <a className="nav-link text-white" href="#">Contact</a>
        </div>
      </div>
    </nav>
  )
}

