### Start up
- In addition to npm install, we also need docker to host a mongo database. Please make sure  you have docker installed on your OS:
```
docker --version
```
and that the following command does not output an error
```
docker info
```
and then
```
docker run -d -p 27017-27019:27017-27019 --name student-expense-db mongo

-- or --

docker start student-expense-db 
```