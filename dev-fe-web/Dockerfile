# Build stage
FROM node:lts AS build
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm ci --omit=optional

# Copy source code and build
COPY . .
RUN npm run build

# Runtime stage
FROM node:lts AS runtime
WORKDIR /app

# Copy built files from build stage
COPY --from=build /app/dist ./dist
COPY package.json package-lock.json ./

# Install only production dependencies
RUN npm ci --omit=dev --omit=optional

# Expose port and run Vite preview
EXPOSE 4173
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "4173"]
