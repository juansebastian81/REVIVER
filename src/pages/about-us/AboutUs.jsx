import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="heart-page container-fluid">
      <h1 className="heart-title">Sobre Nosotros</h1>

      <div className="row heart-content">
        <div className="col-md-12 d-flex flex-wrap justify-content-center">
          {/* Card 1 */}
          <div
            className="card card-hover m-4"
            style={{ width: "18rem", cursor: "pointer" }}
          >
            <img
              src="../cards/about-us/yeimer.jpg"
              className="card-img-top"
              alt="Yeimer"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Yeimer A. Mendez Sanchez</h5>
              <p className="card-text text-center">Backend Developer</p>
              <div className="d-flex flex-column gap-2">
                <a
                  href="mailto:mendezyeimeres@gmail.com"
                  className="btn btn-outline-primary btn-sm"
                >
                  📧 Email
                </a>
                <a
                  href="https://github.com/YeimerrrM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark btn-sm"
                >
                  🐱 GitHub
                </a>
              </div>
              <p className="mt-3 mb-0 text-center">6to semestre</p>
              <p className="mb-0 text-center">
                Tecnología en Desarrollo de Software
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="card card-hover m-4"
            style={{ width: "18rem", cursor: "pointer" }}
          >
            <img
              src="../cards/about-us/daniel.jpg"
              className="card-img-top"
              alt="Daniel"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Daniel E. Celis Castillo</h5>
              <p className="card-text text-center">Backend Developer</p>
              <div className="d-flex flex-column gap-2">
                <a
                  href="mailto:daniel805228@gmail.com"
                  className="btn btn-outline-primary btn-sm"
                >
                  📧 Email
                </a>
                <a
                  href="https://github.com/H4ppyGh0st"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark btn-sm"
                >
                  🐱 GitHub
                </a>
              </div>
              <p className="mt-3 mb-0 text-center">6to semestre</p>
              <p className="mb-0 text-center">
                Tecnología en Desarrollo de Software
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="card card-hover m-4"
            style={{ width: "18rem", cursor: "pointer" }}
          >
            <img
              src="../cards/about-us/juan.jpg"
              className="card-img-top"
              alt="Juan"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Juan S. Ospina Maya</h5>
              <p className="card-text text-center">Backend Developer</p>
              <div className="d-flex flex-column gap-2">
                <a
                  href="mailto:juan.sebastian.ospina@correounivalle.edu.co"
                  className="btn btn-outline-primary btn-sm"
                >
                  📧 Email
                </a>
                <a
                  href="https://github.com/juansebastian81"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark btn-sm"
                >
                  🐱 GitHub
                </a>
              </div>
              <p className="mt-3 mb-0 text-center">6to semestre</p>
              <p className="mb-0 text-center">
                Tecnología en Desarrollo de Software
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div
            className="card card-hover m-4"
            style={{ width: "18rem", cursor: "pointer" }}
          >
            <img
              src="../cards/about-us/cesar.jpg"
              className="card-img-top"
              alt="Cesar"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Cesar M. Hincapie Lopez</h5>
              <p className="card-text text-center">Frontend Developer</p>
              <div className="d-flex flex-column gap-2">
                <a
                  href="mailto:cesarmauricio009@gmail.com"
                  className="btn btn-outline-primary btn-sm"
                >
                  📧 Email
                </a>
                <a
                  href="https://github.com/c3s4rXD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark btn-sm"
                >
                  🐱 GitHub
                </a>
              </div>
              <p className="mt-3 mb-0 text-center">6to semestre</p>
              <p className="mb-0 text-center">
                Tecnología en Desarrollo de Software
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
