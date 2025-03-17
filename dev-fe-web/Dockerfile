# Build stage
FROM node:23-alpine AS build
WORKDIR /app

# Copy và cài đặt dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy source code và build
COPY . .
RUN npm run build

# Runtime stage
FROM node:23-alpine AS runtime
WORKDIR /app

# Copy thư mục build và dependencies cần thiết
COPY --from=build /app/dist ./dist
COPY package.json package-lock.json ./

RUN npm ci --omit=dev

EXPOSE 4173
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "4173"]
