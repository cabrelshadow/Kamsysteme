# Kamsysteme
application de gestion  du centre de santé kam siham
````
Sequelize CLI [Node: 18.15.0, CLI: 6.6.1, ORM: 6.32.0]

sequelize <commande>

Commandes :
  sequelize db:migrate                        Run pending migrations
  sequelize db:migrate:schema:timestamps:add  Update migration table to have timestamps
  sequelize db:migrate:status                 List the status of all migrations
  sequelize db:migrate:undo                   Reverts a migration
  sequelize db:migrate:undo:all               Revert all migrations ran
  sequelize db:seed                           Run specified seeder
  sequelize db:seed:undo                      Deletes data from the database
  sequelize db:seed:all                       Run every seeder
  sequelize db:seed:undo:all                  Deletes data from the database
  sequelize db:create                         Create database specified by configuration
  sequelize db:drop                           Drop database specified by configuration
  sequelize init                              Initializes project
  sequelize init:config                       Initializes configuration
  sequelize init:migrations                   Initializes migrations
  sequelize init:models                       Initializes models
  sequelize init:seeders                      Initializes seeders
  sequelize migration:generate                Generates a new migration file
  sequelize migration:create                  Generates a new migration file
  sequelize model:generate                    Generates a model and its migration
  sequelize model:create                      Generates a model and its migration
  sequelize seed:generate                     Generates a new seed file
  sequelize seed:create                       Generates a new seed file

Options :
  --version  Affiche le numéro de version                                                                                                                                 [booléen]  --help     Affiche l'aide                                                                                                                                               [booléen]
````

# Get Started


## if it is mysql
````bash
sequelize db:create
````

````bash
npm run migrate
````

````bash
npm run dev
````