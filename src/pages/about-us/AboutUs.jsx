import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="heart-page container-fluid">
      <h1 className="heart-title">Sobre Nosotros</h1>

      <div className="row heart-content">
        <div className="col-md-12 d-flex flex-wrap justify-content-center">
          {/* Card 1 */}
          <div
            className="card m-4"
            style={{ width: "18rem", cursor: "pointer" }}
          >
            <img src="../cards/about-us/yeimer.jpg" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Yeimer Armando Mendez Sanchez</h5>
              <p className="card-text text-center">
                Backend Developer
                <br />
                mendezyeimeres@gmail.com
                <br />
                GitHub: YeimerrrM
                <br />
                2243583
                <br />
                6to semestre
                <br />
                Tecnologia en desarrollo de software
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="card m-4"
            style={{ width: "18rem", cursor: "pointer" }}
          >
            <img src="../cards/about-us/daniel.jpg" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Daniel Esteban Celis Castillo</h5>
              <p className="card-text text-center">
                Backend Developer
                <br />
                daniel805228@gmail.com
                <br />
                GitHub: Happy_ghost
                <br />
                Linkedin: @Daniel Celis
                <br />
                2041425
                <br />
                6to semestre
                <br />
                Tecnologia en desarrollo de software
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="card m-4"
            style={{ width: "18rem", cursor: "pointer" }}
          >
            <img src="../cards/about-us/juan.jpg" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Juan Sebastian Ospina Maya</h5>
              <p className="card-text text-center">
                Backend Developer
                <br />
                juansebastianospina2002@hotmail.com
                <br />
                GitHub: juansebastian81
                <br />
                2041554
                <br />
                6to semestre
                <br />
                Tecnologia en desarrollo de software
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div
            className="card m-4"
            style={{ width: "18rem", cursor: "pointer" }}
          >
            <img src="../cards/about-us/cesar.jpg" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Cesar Mauricio Hincapie Lopez</h5>
              <p className="card-text text-center">
                Frontend Developer
                <br />
                cesarmauricio009@gmail.com
                <br />
                GitHub: c3s4rXD
                <br />
                2228820
                <br />
                6to semestre
                <br />
                Tecnologia en desarrollo de software
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
