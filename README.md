# pjecz-citas-v2-cliente

Sistema de Citas V2. Interfaz para el cliente hecho en React.js / NodeJS

## Pasos para los desarrolladores

Para instalar en **Fedora Linux**

    sudo dnf install nodejs npm

Revise que tenga la version **16** de NodeJS

    nodejs --version
    npx --version

Para bajar, instalar y ejecutar

1. Clone el repositorio `git clone https://github.com/PJECZ/pjecz-citas-v2-cliente.git`
1. Cambie al directorio `cd pjecz-citas-v2-cliente`
1. Ejecute `npm install` para descargar e instalar
1. Ejecute `npm start` para probar y desarrollar

## Pasos para subir a produccion

Para subir a Google Cloud

1. Ejecute `npm run build`
1. Escriba el archivo `app.yaml` de no tenerlo
1. Suba a Google Cloud con `gcloud app deploy`

## Archivo app.yaml

Con este contenido

    runtime: nodejs16
    service: citas-cliente
    handlers:
    # Serve all static files with url ending with a file extension
    - url: /(.*\..+)$
      static_files: build/\1
      upload: build/(.*\..+)$
    # Catch all handler to index.html
    - url: /.*
      static_files: build/index.html
      upload: build/index.html
