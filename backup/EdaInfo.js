import GraficaWidget from "./widgets/grafica";

const EdaInfo = (props) => {
  return (
    <div className="container pt-3">
      <h2 className="text-center">Descriptivos Iniciales</h2>
      <div className="row">
        <div className="col-4 text-left">
          <GraficaWidget
            header="Distribución de la Clasificación"
            source="/eda/Clase.png"
            descripcion="Se confirma que la base está deliberadamente balanceada según lo mencionado en la documentación."
          />
        </div>
        <div className="col-4 text-left">
          <GraficaWidget
            header="Distribución de los protocolos de seguridad en el link"
            source="/eda/Protocolo.png"
            descripcion="Las fuentes son en su mayoría segura."
          />
        </div>
        <div className="col-4 text-left">
          <GraficaWidget
            header="Distribución por el tema del artículo"
            source="/eda/Topic.png"
            descripcion="Se evidencia que los temas con mayor número de artículos son Política, Sociedad y Covid-19 (Coyuntural)."
          />
        </div>
      </div>
      <div className="row pt-3">
        <div className="col text-left">
          <GraficaWidget
            header="HEADER"
            source="/eda/Part_fake.png"
            descripcion="DESCRIPCION."
          />
        </div>
        <div className="col text-left">
          <GraficaWidget
            header="HEADER"
            source="/eda/Part_fake_protocolo.png"
            descripcion="DESCRIPCION."
          />
        </div>
      </div>
      <h2 className="pt-3 text-center">Análisis de Texto</h2>
      <h3 className="pt-3">Nube de Palabras - Títulos</h3>
      <div className="row">
        <GraficaWidget
          header="HEADER"
          source="/eda/nube_titulos_fake.png"
          descripcion="DESCRIPCION."
        />
        <GraficaWidget
          header="HEADER"
          source="/eda/nube_titulos_true.png"
          descripcion="DESCRIPCION."
        />
      </div>
      <h3 className="pt-3">Ngramas - Texto</h3>
      <div className="row">
        <div className="col text-left">
          <GraficaWidget
            header="HEADER"
            source="/eda/bigramas_texto.png"
            descripcion="DESCRIPCION."
          />
        </div>
        <div className="col text-left">
          <GraficaWidget
            header="HEADER"
            source="/eda/trigramas_texto.png"
            descripcion="DESCRIPCION."
          />
        </div>
      </div>
      <h3 className="pt-3">Frecuencia de Etiquetas</h3>
      <div className="row">
        <div className="col text-left">
          <GraficaWidget
            header="HEADER"
            source="/eda/frecuencia_tags.png"
            descripcion="DESCRIPCION."
          />
        </div>
      </div>
      <h3 className="pt-3">Análisis de Sentimiento</h3>
      <div className="row">
        <div className="col text-left">
          <GraficaWidget
            header="HEADER"
            source="/eda/anal_sentim.png"
            descripcion="DESCRIPCION."
          />
        </div>
      </div>
      <br></br>
    </div>
  );
};

export default EdaInfo;
