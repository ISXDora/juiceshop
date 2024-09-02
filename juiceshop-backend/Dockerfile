FROM node:19-alpine3.18
WORKDIR /app
COPY package* .
RUN npm install
COPY . .
RUN chmod +x script.sh
EXPOSE 5000
CMD ["./script.sh"]
