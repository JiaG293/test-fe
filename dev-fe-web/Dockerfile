FROM oven/bun:alpine AS runtime
WORKDIR /app

COPY --from=build /app/dist ./dist
#COPY package.json bun.lockb ./
#RUN bun install --omit=dev && bun cache clean

COPY package.json ./
RUN bun install --no-lockfile && bun cache clean


EXPOSE 4173
CMD ["sh", "-c", "export $(cat .env | xargs) && bun run vite preview --host 0.0.0.0 --port $PORT"]