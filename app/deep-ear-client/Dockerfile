FROM node:lts
WORKDIR /usr/src/app/
COPY package*.json /usr/src/app/
RUN npm install
#RUN npm install abcjs
#RUN npx astro add react
#RUN mkdir /usr/src/cache
#RUN cp -r /usr/src/node_modules/. /usr/src/cache/node_modules/
COPY . ./
#CMD ["npm", "run", "dev","--", "--port ", "3000", "--host"]
CMD ["npm", "run", "dev"]