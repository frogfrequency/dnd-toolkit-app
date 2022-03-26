# D&D toolkit app
Dungeons & Dragons toolkit app written using Angular and Express JS.



## db-setup (docker & postgres)

```bash
# run postgres locally in a docker container
$ docker run --name dnd-toolkit-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres

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
```

```javascript
// function
function doIt() {
    let a = 2;
    console.log(a);
    return a;
}
```

https://gist.github.com/bradtraversy/89fad226dc058a41b596d586022a9bd3



see running containers: