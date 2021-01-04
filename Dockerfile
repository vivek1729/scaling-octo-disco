FROM node:14-alpine
WORKDIR /scaling-octo-disco
COPY . .
RUN npm install
CMD ["node", "app.js"]