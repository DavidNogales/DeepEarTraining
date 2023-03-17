FROM node:18-alpine3.15
WORKDIR /astro_workspace
RUN mkdir ../tmp_files
COPY package*.json ./
RUN npm init --yes
RUN npm install
#RUN cd /usr
#RUN npm update
#RUN npm install astro
#RUN npx astro add tailwind
#RUN npx astro add mdx
EXPOSE 3000
