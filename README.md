## Entrega final Mineria de Datos - MIIA

Este proyecto hace parte de la entrega final de minería de datos. Por el momento no cuenta con un despliegue productivo, sin embargo, el demo se puede ralizar de manera local. Para esto es necesario tener instalado `node.js` en la máquina de trabajo.

### Ejecución

Correr:

```sh
npm start
```

Para correr la aplicación en `DEVELOPMENT MODE`
Abrir [http://localhost:3000](http://localhost:3000) para ver en el explorador.

Es necesario resaltar que en el archivo `src/controller/requests.js` la petición (POST) se está realizando sobre la url `http://localhost:5000/fake_news/predict`. Es decir, que el API de predicción se encuentra en otro servidor, el cual también debe ser ejecutado de manera local para el demo.

### API

El API que expone la funcionalidad de predicción de textos, se encuentra hecha en python. Para referirse a este proyecto ir a:
https://github.com/camtorr95/fake_news_back
