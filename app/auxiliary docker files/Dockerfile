FROM node:lts
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "dev","--", "--port ", "3000", "--host"]

EXPOSE 3000