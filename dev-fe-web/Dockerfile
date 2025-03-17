# Build stage
FROM node:23-alpine AS build
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile  

COPY . .  
RUN yarn build  

# Runtime stage
FROM node:23-alpine AS runtime
WORKDIR /app

COPY --from=build /app/dist ./dist
COPY package.json yarn.lock ./

RUN yarn install --omit=dev --frozen-lockfile  

EXPOSE 4173
CMD ["yarn", "vite", "preview", "--host", "0.0.0.0", "--port", "4173"]
