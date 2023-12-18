
## Description

Calcular tipo de cambio de divisas.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## RUN DOCKER 
```sh
  # Build the Docker Image
  docker build -t kambista-api .
  # App run from Docker image
  docker run --rm -p 3000:3000 --name api-rest-server kambista-api
```

## Ver documentación

Ver [Api documentation](http://localhost:3000/api/docs)

## Despliegue api NestJs con Lambda
```sh
# Agregar src/lambda.ts
# Agregar serverless.yml
# Deploy
sls deploy
```

## Curl LOCAL exchange-rate calculate
```sh
curl --location 'http://localhost:3000/exchange-rate/calculate' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOiJLYW1iaXN0YSIsIm5hbWUiOiJlZHdpbnNvbm8ifQ.TdRVi4hMZSMmPoZAoXE85rRehe24-pvn1KzMO9zgmwk' \
--data '{
    "source_currency": "PEN",
    "source_amount": 4,
    "destination_currency": "USD"
}'
```

## Curl Server AWS exchange-rate calculate
```sh
curl --location 'https://4vq04ubjf7.execute-api.us-east-1.amazonaws.com/exchange-rate/calculate' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOiJLYW1iaXN0YSIsIm5hbWUiOiJlZHdpbnNvbm8ifQ.TdRVi4hMZSMmPoZAoXE85rRehe24-pvn1KzMO9zgmwk' \
--data '{
    "source_currency": "PEN",
    "source_amount": 4,
    "destination_currency": "USD"
}'
```