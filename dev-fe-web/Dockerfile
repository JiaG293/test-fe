# Build stage
FROM node:lts AS build
WORKDIR /app


ENV NODE_ENV=production


COPY package.json package-lock.json ./
RUN npm ci --omit=optional


COPY . .
RUN npm install
# Build project
RUN npm run build


FROM node:lts AS runtime
WORKDIR /app


COPY --from=build /app/dist ./dist
COPY package.json package-lock.json ./

RUN npm ci --omit=dev


EXPOSE 4173
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "4173"]
