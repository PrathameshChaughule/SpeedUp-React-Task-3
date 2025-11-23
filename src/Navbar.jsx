import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <div className="container">
        <a className="navbar-brand fw-bold" href="/">
          ShopEase
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/products">
                Products
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="categoryDropdown"
                role="button"
                data-bs-toggle="dropdown"
              >
                Categories
              </a>
            </li>
          </ul>

          <form className="d-flex me-3">
            <input
              className="form-control"
              type="search"
              placeholder="Search products"
            />
          </form>

          <a className="btn btn-warning fw-semibold">Cart</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
