FROM node:18-alpine AS Builder
WORKDIR /app

ARG APP_ENV prod
ENV APP_ENV ${APP_ENV}

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN yarn nx reset \
    && yarn cs:build --prod

FROM node:18-alpine AS Service

ENV HOST=0.0.0.0
ENV PORT=4200

RUN apk --no-cache add ca-certificates

WORKDIR /app/

COPY --from=Builder /app/dist ./dist
COPY --from=Builder /app/apps/cs ./apps/cs
COPY --from=Builder /app/node_modules ./node_modules
COPY --from=Builder /app/package.json ./package.json
COPY --from=Builder /app/nx.json ./nx.json

EXPOSE 4200
CMD ["yarn", "cs:serve","--prod"]
