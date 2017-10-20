# README

## Get it running

1. Build the image: `$ docker-compose build`
1. Start the database image: `$ docker-compose up -d postgres`
1. Run the database migration script: `$ docker-compose run web npm run db:migrate`
1. Build the spec: `$ docker-compose run web npm run spec:build`
   * This needs to be run everytime you update the spec!
1. Instantiate the API: `$ docker-compose up`
1. Navigate to the Swagger docs: <http://localhost/docs>
