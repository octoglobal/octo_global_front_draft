FROM node:16.14-alpine
WORKDIR /app
COPY package.json package-lock.json ./
COPY . .
RUN npm install
ENV NODE_ENV production
RUN npm run build
RUN npm prune --production
CMD ["npm", "start"]
EXPOSE 3000
