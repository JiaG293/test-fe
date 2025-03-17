FROM oven/bun:alpine AS build
WORKDIR /app

#COPY package.json bun.lockb ./
#RUN bun install --frozen-lockfile && bun cache clean

COPY package.json ./
RUN bun install --no-lockfile && bun cache clean

COPY . .
RUN bun run build || true

FROM oven/bun:alpine AS runtime
WORKDIR /app

COPY --from=build /app/dist ./dist
#COPY package.json bun.lockb ./
#RUN bun install --omit=dev --no-lockfile && bun cache clean

COPY package.json ./
RUN bun install --omit=dev --no-lockfile && bun cache clean

EXPOSE 4173
CMD ["bun", "run", "vite", "preview", "--host", "0.0.0.0", "--port", "$${PORT}"]