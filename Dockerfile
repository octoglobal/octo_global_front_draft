FROM node:16.14-alpine AS deps
WORKDIR /app
COPY package.json ./
RUN npm install

FROM node:16.14-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
GENERATE_SOURCEMAP=false/
RUN npm run build
RUN npm install --production --ignore-scripts --prefer-offline

FROM node:16.14-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
USER nextjs
EXPOSE 3000
CMD ["npm", "start"]
