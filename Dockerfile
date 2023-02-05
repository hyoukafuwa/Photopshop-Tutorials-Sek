# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json .
RUN npm install
COPY . .

EXPOSE 5173

# start app
CMD ["npm", "run", "dev"]
