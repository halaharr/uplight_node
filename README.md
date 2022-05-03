# HMAC Generator

There are 2 ways to run the server (1) docker container (2) using 'npm run start'

## Using npm run start

(1) Run

```
  git clone https://github.com/halaharr/uplight_node.git
```

(2) Go to the root directory of the project

(3) run
`npm install`

(4) run
`npm run start`

## Using docker container

(1) Run

```
  git clone https://github.com/halaharr/uplight_node.git
```

(2) Go to the root directory

(3) Run
`docker build . -t halaharr/hmac-generator`

(4) Run
`docker run -p 8080:8080 -d halaharr/hmac-generator`

### Once the server is running

```
 curl  -d "id=MDAwMDAwMDAwMDAwVOwMD" http://localhost:8080

```
