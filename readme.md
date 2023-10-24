## SpaceReverie

# Inititalisation
```
composer require webapp
composer require symfony/mailer
docker compose up
php bin/console doctrine:migration:migrate

# all .sql to fill the databse is in the sql file
```

```
# Run the serveur
php -S localhost:8000 -t public or symfony server:start
```
# APP
- http://localhost:8000

# Adminer:
- URL: http://localhost:8888
- SYSTEM: MySql
- SERVER: database
- USER: root
- PW: root
- DATABASE: spacereverie

# MailCatcher
- http://localhost:1025