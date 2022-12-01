FROM node:18.12.1-alpine

WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock ./
RUN yarn install

COPY src ./src
COPY public ./public
COPY next.config.js .
COPY tsconfig.json .

CMD yarn dev