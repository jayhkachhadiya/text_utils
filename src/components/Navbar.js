import React from 'react'


export default function Navbar(props) {
  return (
    
      <div className='bg-img'>
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark ">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-light">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">Destination</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">Trip plan</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href='/'>{props.offer}</a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-primary" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>


  )
}

// Navbar.propTypes={
//     title:PropTypes.string.isRequired,
//     aboutText:PropTypes.string
// }
// Navbar.defaultProps={
//     title:'set title here',
//     offer:'more offer here'
// }
