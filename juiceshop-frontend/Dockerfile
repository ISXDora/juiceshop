FROM node:19-alpine3.18
WORKDIR /app
COPY package* .
RUN npm install --legacy-peer-deps
COPY . .
EXPOSE 8080
CMD [ "npm", "run", "dev" ]
