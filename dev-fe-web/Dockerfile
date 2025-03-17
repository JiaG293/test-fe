# Build stage
FROM node:23-alpine AS build
WORKDIR /app


COPY package.json package-lock.json ./
RUN npm ci


COPY . .
RUN npm run build -- --force


FROM node:23-alpine AS runtime
WORKDIR /app


COPY --from=build /app/dist ./dist
COPY package.json package-lock.json ./


RUN npm ci --omit=dev

EXPOSE 4173
CMD ["npm", "run", "vite", "preview", "--", "--host", "0.0.0.0", "--port", "4173"]