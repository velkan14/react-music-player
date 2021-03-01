FROM node:14.16.0

# Create app directory
RUN mkdir -p /usr/src/music-player
WORKDIR /usr/src/music-player

# Install app dependencies
COPY package.json /usr/src/music-player
RUN npm install

# Bundle app source
COPY . /usr/src/music-player

RUN npm install --only=prod

RUN npm run build 

#Setup serve
RUN npm install -g serve

# Build arguments
ARG NODE_VERSION=14.16.0

# Environment
ENV NODE_VERSION $NODE_VERSION

# Start app
CMD ["serve", "-s", "build"]