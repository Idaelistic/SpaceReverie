## SpaceReverie

# Inititalisation
```
composer require webapp
docker compose up
php bin/console doctrine:migration:migrate
# all .sql to fill the databse is in the sql file
```

```
# Run the serveur
php -S localhost:8000 -t public
# APP: localhost:8000
```

# Adminer:
- URL: localhost:8888
- SYSTEM: MySql
- SERVER: database
- USER: root
- PW: root
- DATABASE: spacereverie


