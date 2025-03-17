FROM oven/bun:latest AS build
WORKDIR /app

COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile && bun cache clean

COPY . .
RUN bun run build || true

FROM oven/bun:latest AS runtime
WORKDIR /app

COPY --from=build /app/dist ./dist
COPY package.json bun.lockb ./
RUN bun install --omit=dev && bun cache clean

EXPOSE 4173
CMD ["sh", "-c", "export $(cat .env | xargs) && bun run vite preview --host 0.0.0.0 --port $PORT"]