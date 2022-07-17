FROM "alpine:latest"

RUN apk add --update nodejs npm

COPY express/*  ~

ENTRYPOINT [ "npm", "start" ]
