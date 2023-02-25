# Imagen base
FROM node:16

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de la aplicación al contenedor
COPY . .

# Instala las dependencias
RUN npm install
RUN npm install -g serverless

# Expone el puerto en el que se ejecutará la aplicación
EXPOSE 3000

# Inicia la aplicación
CMD ["serverless", "offline", "start"]