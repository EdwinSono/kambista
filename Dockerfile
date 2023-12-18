FROM node:20-alpine

WORKDIR /usr/src/app 

# Esta línea instala el paquete build-base usando el gestor de paquetes Alpine (apk). Este paquete incluye las herramientas necesarias para construir # módulos nativos de Node.js. 
# RUN apk add build-base 

# Esta línea instala Python 3 usando el gestor de paquetes Alpine. Python es necesario para algunos módulos Node.js que tienen dependencias nativas. 
# RUN apk add python3 

# Esta línea instala el paquete node-gyp globalmente usando npm. node-gyp es una herramienta para construir módulos Node.js nativos. 
# RUN npm install -g node-gyp 

COPY package*.json ./ 

RUN npm install 

COPY . . 

COPY .env ./

RUN npm run build

EXPOSE 3000

CMD npm run start:prod
