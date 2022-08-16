# D&D toolkit app
Dungeons & Dragons toolkit app written using Angular and Express JS.



## db-setup (docker & postgres)

```bash
# run postgres locally in a docker container
$ docker run --name dnd-toolkit-postgres -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres

# show running containers
$ docker container ls

# show all containers
$ docker container ls -a

# start already created container (whats difference to run)?
$ docker container start *namehere

# stop running container
$ docker container stop *namehere

# SSH into running postgres container
$ winpty docker exec -it dnd-toolkit-postgres bash

# exit SSH session
$ exit

# create new db (when inside container)
$ createdb -U postgres <dbnamehere>

# access specific database
$ psql -U postgres <dbnamehere>

# list all databases (when inside postgres)
$ \l

# exit postgres
$ \q
```

https://www.postgresql.org/docs/14/tutorial.html


https://gist.github.com/bradtraversy/89fad226dc058a41b596d586022a9bd3



see running containers: