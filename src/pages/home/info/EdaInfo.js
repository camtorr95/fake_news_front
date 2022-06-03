import GraficaWidget from "./widgets/grafica";

const EdaInfo = (props) => {
  return (
    <div className="container pt-3">
      <h2 className="text-center">Análisis Descriptivo Inicial</h2>
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
            header="Distribución de los protocolos de seguridad en el enlace"
            source="/eda/Protocolo.png"
            descripcion="Las fuentes son en su mayoría seguras."
          />
        </div>
        <div className="col-4 text-left">
          <GraficaWidget
            header="Distribución por el Tema general del artículo"
            source="/eda/Topic.png"
            descripcion="Se evidencia que los temas con mayor número de artículos son Política, Sociedad y Covid-19 (Coyuntural)."
          />
        </div>
      </div>
      <div className="row pt-3">
        <div className="col text-left">
          <GraficaWidget
            header="Participación de noticias Falsas por Tema"
            source="/eda/Part_fake.png"
            descripcion="Los temas menos balanceados son 'Economía', 'Deportes' y 'Política'. En todos los casos, la participación de las noticias falsas es superior al 40%"
          />
        </div>
        <div className="col text-left">
          <GraficaWidget
            header="Participación de noticias Falsas por Protocolo de la URL"
            source="/eda/Part_fake_protocolo.png"
            descripcion="A menor seguridad de la página web, se evidencia mayor frecuencia de noticias clasificadas falsas"
          />
        </div>
      </div>
      <h2 className="pt-3 text-center">Análisis de Texto</h2>
      <h3 className="pt-3">Nube de Palabras de los Títulos</h3>
      <div className="row">
        <GraficaWidget
          header="Noticias Falsas"
          source="/eda/nube_titulos_fake.png"
          descripcion="Amplia coincidencia de palabras"
        />
        <GraficaWidget
          header="Noticias Verdaderas"
          source="/eda/nube_titulos_true.png"
          descripcion="Cambia la importancia (frecuencia) de las palabras coincidentes frente a las noticias falsas"
        />
      </div>
      <h3 className="pt-3">Ngramas del Texto de los artículos</h3>
      <div className="row">
        <div className="col text-left">
          <GraficaWidget
            header="Top 10 de Bigramas mas frecuentes"
            source="/eda/bigramas_texto.png"
            descripcion="Las mayores frecuencias se asocian a nombres propios y palabras previamente etiquetadas."
          />
        </div>
        <div className="col text-left">
          <GraficaWidget
            header="Top 10 de Trigramas mas frecuentes"
            source="/eda/trigramas_texto.png"
            descripcion="Se mantiene el comportamiento visto en los bigramas. Trigamas ligados a los temas más frecuentes"
          />
        </div>
      </div>
      <h3 className="pt-3">Frecuencia de Etiquetas</h3>
      <div className="row">
        <div className="col text-left">
          <GraficaWidget
            header="Frecuencia de etiquetas para títulos y texto"
            source="/eda/frecuencia_tags.png"
            descripcion="Las noticias falsas suelen presentar menor frecuencia de palabras, principalmente en cuanto a números (cifras) se refiere."
          />
        </div>
      </div>
      <h3 className="pt-3">Análisis de Sentimiento</h3>
      <div className="row">
        <div className="col text-left">
          <GraficaWidget
            header="Análisis de Subjetividad y Polaridad para el texto de los artículos"
            source="/eda/anal_sentim.png"
            descripcion="Aunque no se encuentran diferencias en la media que parezcan significativas entre las dos categorías, si se evidencia mayor variabilidad tanto de la subjetividad como de la polaridad para las noticias clasificadas como falsas."
          />
        </div>
      </div>
      <br></br>
    </div>
  );
};

export default EdaInfo;
