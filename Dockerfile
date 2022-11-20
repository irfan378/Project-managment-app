FROM node:13-alpine

RUN mkdir -p /home/app
COPY . /home/app
RUN npm install
CMD ["node","/home/app/server/index.js"]
CMD ["cd","client"]
CMD ["npm","start"]