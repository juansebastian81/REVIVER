import "./feeds.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import GLBViewer from "../../../../components/viewer/GLBViewer.jsx";
import ScrollDownButton from "../../../../components/scroll/ScrollDownButton.jsx";

const FeedsFailure = () => {
    const [scrollEnabled, setScrollEnabled] = useState(false);

    useEffect(() => {
        const preventZoom = (e) => {
            if (e.ctrlKey) {
                e.preventDefault();
            }
        };

        window.addEventListener("wheel", preventZoom, { passive: false });

        return () => {
            window.removeEventListener("wheel", preventZoom);
        };
    }, []);

    const handleScrollDown = () => {
        document.body.style.overflow = "auto";
        setScrollEnabled(true);

        const section = document.getElementById("info-section");
        section?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <div className="viewer-container">
                <GLBViewer
                    stagingModel="park"
                    scaleModel={[0.125, 0.125, 0.125]}
                    positionModel={[0, 0.225, 0]}
                    targetModel={[0, 0.25, 0]}
                    shadowPosition={[0, 0.15, 0]}
                    modelUrl="/models-3d/heart-failure/Feeds.glb"
                    cameraPosition={[0, 1.5, 4]}
                    fov={5}
                    titleHeart="Sintoma: Pies hinchados"
                    titlePosition={[0, 0.35, -0.1]}
                    titleSize={0.02}
                    defaultAnimation="ArmatureAction"
                    audioUrl="/sounds/heartBeating.mp3"
                    title2D="Síntoma Pies Hinchados en Insuficiencia Cardíaca"
                    text2D="                    La hinchazón en los pies es un síntoma común en personas con insuficiencia cardíaca. 
                    Esta condición impide que el corazón bombee la sangre de forma eficiente, lo que provoca 
                    acumulación de líquidos en las extremidades inferiores. Como resultado,
                    los pies y tobillos pueden verse inflamados, especialmente al final del día o después
                    de estar mucho tiempo de pie. En algunos casos,la piel puede sentirse tensa y dejar una marca 
                    al presionar. Esta hinchazón, conocida como edema, indica que el cuerpo está reteniendo líquidos,
                    y puede empeorar si no se trata. Aunque es un signo de alerta, puede controlarse mediante el uso
                    de medicamentos, reducción del consumo de sal, y seguimiento médico constante."
                    youtubeURL="fRqC0t71pGs"


                />

                {!scrollEnabled && <ScrollDownButton onClick={handleScrollDown} />}
            </div>

            <div className="text-container" id="info-section">
                <h3>Descripción:</h3>
                <p>
                    La <strong>hinchazón en los pies, tobillos y piernas</strong> es un síntoma
                    frecuente en personas con <strong>insuficiencia cardíaca</strong>. Esta condición
                    impide que el corazón bombee la sangre de forma eficiente, lo que provoca
                    una acumulación de líquidos en los tejidos, especialmente en las extremidades
                    inferiores debido a la gravedad.
                </p>
                <p>
                    El exceso de líquido, conocido como <strong>edema periférico</strong>, suele
                    comenzar en los pies y puede avanzar hacia los tobillos y las piernas. Los
                    pacientes pueden notar que los zapatos les quedan más apretados o que
                    presentan marcas al quitarse las medias. En algunos casos, al presionar la
                    piel con un dedo, queda una hendidura visible durante unos segundos
                    (<em>edema con fóvea</em>).
                </p>
                <p>
                    Esta hinchazón suele empeorar al final del día o después de estar mucho
                    tiempo de pie o sentado. Además, puede acompañarse de otros síntomas como
                    <strong>sensación de pesadez, rigidez o dolor en las piernas</strong> y dificultad
                    para caminar. A medida que la insuficiencia cardíaca avanza, el edema puede
                    extenderse al abdomen (ascitis) o a otras partes del cuerpo.
                </p>

                <h3>Tratamiento:</h3>
                <p>
                    El abordaje de la hinchazón por insuficiencia cardíaca requiere una combinación
                    de <strong>tratamiento médico, control del estilo de vida y seguimiento continuo</strong>.
                    Algunas medidas incluyen:
                </p>
                <ul>
                    <li>
                        <strong>Medicamentos:</strong> Diuréticos (como la furosemida) que ayudan a
                        eliminar el exceso de líquido acumulado; también se utilizan inhibidores de la ECA,
                        antagonistas de los receptores de angiotensina, y otros que mejoran el rendimiento cardíaco.
                    </li>
                    <li>
                        <strong>Elevación de las piernas:</strong> Elevar las piernas por encima del nivel del corazón
                        varias veces al día para favorecer el retorno venoso y reducir la hinchazón.
                    </li>
                    <li>
                        <strong>Uso de medias de compresión:</strong> Ayudan a prevenir la acumulación de líquidos
                        en las piernas y mejoran la circulación.
                    </li>
                    <li>
                        <strong>Restricción de sal y líquidos:</strong> Disminuir el consumo de sodio y
                        controlar la ingesta de líquidos puede ser clave para evitar la retención.
                    </li>
                    <li>
                        <strong>Monitoreo diario del peso:</strong> Controlar el peso corporal ayuda a detectar
                        retención de líquidos temprana, permitiendo ajustes en el tratamiento.
                    </li>
                </ul>
                <p>
                    Es fundamental seguir las recomendaciones del equipo médico y acudir a
                    controles periódicos, ya que el edema puede indicar un empeoramiento de la
                    función cardíaca que requiere ajustes terapéuticos inmediatos.
                </p>


                <div style={{ marginTop: "2rem", textAlign: "center" }}>
                    <NavLink to="/diseases/heart-failure/cough-symptom">
                        <button className="btn btn-primary">Más síntomas</button>
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default FeedsFailure;
