FROM oven/bun:latest

# Create app directory
WORKDIR /app

# Create user
RUN adduser -D node
USER node

# Install app dependencies
COPY package*.json ./
RUN bun install

# Copy source code
COPY . .

EXPOSE 4173

CMD ["bun", "run", "preview", "--host", "0.0.0.0", "--port", "4173"]