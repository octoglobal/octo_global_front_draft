FROM node:16.14-alpine
WORKDIR /app
COPY package.json package.json
RUN npm install
ADD . .
ENV NODE_ENV production
RUN npm run build
RUN npm prune --production
COPY . .
CMD ["npm", "start"]
EXPOSE 3000
