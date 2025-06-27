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
            <img
              src="../cards/yeimer.jpg"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Yeimer Armando Mendez Sanchez</h5>
              <p className="card-text text-center">
                3168940484<br />
                yeimer.mendez@correounivalle.edu.co<br />
                Backend<br />
                2243583<br />
                6to semestre<br />
                Tecnologia en desarrollo de software
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="card m-4"
            style={{ width: "18rem", cursor: "pointer" }}
          >
            <img
              src="../cards/daniel.jpg"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Daniel Esteban Celis Castillo</h5>
              <p className="card-text text-center">
                3045255220<br />
                celis.daniel@correounivalle.edu.co<br />
                Backend<br />
                2041425<br />
                6to semestre<br />
                Tecnologia en desarrollo de software
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="card m-4"
            style={{ width: "18rem", cursor: "pointer" }}
          >
            <img
              src="../cards/juan.jpg"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Juan Sebastian Ospina Maya</h5>
              <p className="card-text text-center">
                3127875131<br />
                juan.sebastian.ospina@correounivalle.edu.co<br />
                Backend<br />
                2041554<br />
                6to semestre<br />
                Tecnologia en desarrollo de software
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div
            className="card m-4"
            style={{ width: "18rem", cursor: "pointer" }}
          >
            <img
              src="../cards/cesar.jpg"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Cesar Mauricio Hincapie Lopez</h5>
              <p className="card-text text-center">
                3177936381<br />
                cesar.hincapie@correounivalle.edu.co<br />
                Frontend<br />
                2228820<br />
                6to semestre<br />
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
