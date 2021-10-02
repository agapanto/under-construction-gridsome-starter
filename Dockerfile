FROM node:lts-alpine AS builder
WORKDIR /build

COPY . ./
RUN yarn install && npm run build

FROM nginx:alpine
COPY --from=builder /build/dist /usr/share/nginx/html/

EXPOSE 80
