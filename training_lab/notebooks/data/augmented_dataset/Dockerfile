FROM node:lts

WORKDIR /usr/src/app/

COPY package*.json /usr/src/app/

RUN npm install

COPY . ./

CMD [ "npm", "run", "start", "&&", "tail", "-f", "/dev/null" ]