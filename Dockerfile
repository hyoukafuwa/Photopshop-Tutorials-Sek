# base image
FROM node

# set working directory
WORKDIR /app

COPY package.json .
RUN npm install
COPY . .

EXPOSE 5173

# start app
CMD ["npm", "run", "dev"]
