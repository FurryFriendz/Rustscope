FROM node:slim

ENV NODE_ENV development

WORKDIR /app
COPY . .
RUN npm install

CMD [ "node", "app.js" ]
EXPOSE 3000
