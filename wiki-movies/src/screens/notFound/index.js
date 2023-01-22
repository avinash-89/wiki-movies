import React from 'react'

const NotFound = () => {
  return (
    <div className="card">
  <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light" style={{margin: 'auto'}} >
    <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp" className="img-fluid" height='144' width='144'/>
  </div>
  <div className="card-body">
    <h5 className="card-title">Page not found</h5>
    <p className="card-text"><span>click here</span> to go to home page</p>
  </div>
</div>
  )
}

export default NotFound