FROM node:9

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

RUN npm install

COPY . /app

# Expose the port and start the application
EXPOSE 8080

CMD ["npm","start"]