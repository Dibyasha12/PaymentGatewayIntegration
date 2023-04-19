import { useEffect } from "react";
import "./App.css";


function App() {
  useEffect(() => {
    const rzpPaymentForm = document.getElementById("rzp_payment_form");

    if (!rzpPaymentForm.hasChildNodes()) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.async = true;
      script.dataset.payment_button_id = "pl_LeYTIYitIOlcEh";
      rzpPaymentForm.appendChild(script);
    }
  }, []);
  return (
    <>
      <nav className="navbar bg-primary nabv" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Spread Smile :)
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="child.jpg"
              height="400"
              width="400"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block carousel-text2 ">
              <h5>Be the cause of change</h5>
              <p>Be the ray of hope in somebody's life.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="orphan.jpg"
              height="400"
              width="400"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block carousel-text1">
              <h5>Enlighten their future</h5>
              <p>Human life is worthless without donation</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="dona1.jpg"
              height="400"
              width="400"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block carousel-text">
              <h5>Be the part of good cause</h5>
              <p>Little efforts can bring back somebody's lost smile.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="cont1">
        <form id="rzp_payment_form"></form>

        <div className="cont1" id="signup">
          <h3> SignUp</h3>
          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary ">
              Submit
            </button>
          </form>
        </div>
      </div>
      <section>
        <div className="containerA">
          <h1 className="text-center text-capitalize p-4">about us </h1>
          <hr className="w-25 mx-auto " />

          <div className="row mb-5">
            <div className="col-lg-6 col-md-6 col-12 ">
              <img
                src="d1.jpg"
                className="img-fluid"
                // height="200"
                // width="400"
                alt=""
              />
            </div>
            <div className="col-lg-6 col-md-6 col-12 bbgg ">
              <h1>Spread Smile </h1>
              <hr />
              <p>
                Donation is a noble task only few people get this opportunity .
                So whenever we get the opportunity we grab it . "Donation" word
                itself denotes do-nation i.e do something for growth of nation.
                Nobody is asking for a bulk of money but your small contribution
                can brighten somebody's whole future.Now let me tell You about
                us our foundation has been working for orphans since 5 years .
                Providing them proper education and food .Also providing them
                training on other skills like singing , dancing , cooking etc .
                If we work together many lives can be saved .
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary">
        <div>
          <article className="py-5 text-center">
            <div>
              <h3 className="display-4 text-white">+91 1234562456</h3>
              <p>If u want to help contact us here </p>
              <button className=" btn btn-warning">Contact Now</button>
            </div>
          </article>
        </div>
      </section>
      <section>
        <footer>
          <p className="text-center bg-dark text-white">
            @copyright Dibyasha.com 2023
          </p>
        </footer>
      </section>
    </>
  );
}

export default App;
