# Utilizar una imagen de NodeJS como base
FROM node:22-alpine AS build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos necesarios para construir la app
COPY package*.json ./

# Define el argumento del entorno por defecto (dev)
ARG ENV_MODE=dev

# Configura la variable de entorno ENV_MODE
ENV ENV_MODE $ENV_MODE

# Instalar dependencias
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Ejecutar el build correspondiente dependiendo de ENV_MODE
RUN if [ "$ENV_MODE" = "uat" ]; then \
    npm run build:uat; \
    elif [ "$ENV_MODE" = "prod" ]; then \
    npm run build:prod; \
    else \
    npm run build:dev; \
    fi

FROM nginx:alpine
# Exponer el puerto de la aplicación
RUN rm /etc/nginx/conf.d/default.conf

# Copia la configuración personalizada
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar los archivos estáticos al directorio de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Ejecutar Nginx
CMD ["nginx", "-g", "daemon off;"]