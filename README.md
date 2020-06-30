# theinfinitytimes

This is the front-end module of the website theinfinitytimes.com . Our main goal with the website
is to inform and entertain young people, and not only. We decided to use the latest technologies
to build a responsive website and design a good user experience. 

## Getting Started 
These instructions will get you a copy of the project up and running on your local machine 
for development and testing purposes.

### Prerequisites

1. Git
2. Nodejs
3. Angular CLI

### Instructions

First clone the repository: 

`git clone https://gitlab.com/theinfinitytimes/theinfinitytimes.git `

Go to the repository's directory: 

`cd theinfinitytimes`

Install dependencies:

`npm install`

Run application (this will run on port 4200 by default): 

`ng serve` 

### Running the tests

We have broken down the tests to unit tests and e2e tests. We are using Jasmine and Karma 
to run our tests. 

To run our unit tests: 

`npm run test`

To run our e2e tests: 

`npm run e2e`

### Run inside a container

We are also providing a Dockerfile that you can build using either Docker or Podman that will
get you an up and running development container for the front end. 

##### Docker
```bash
// this creates the container image
docker build --tag theinfinitytimes .
// this creates a container from the image `theinfinitytimes`, names it `theinfinitytimes` 
// and binds the port 4200 from the container to the port on the host machine 
docker run -d -p 4200:4200 --name theinfinitytimes --net=host theinfinitytimes
```
To stop the container, run 
```bash
docker container stop theinfinitytimes
```
To start it again, run 
```bash
docker container start theinfinitytimes
```


##### Podman
```bash
// this creates the container image
podman build --tag theinfinitytimes -f ./Dockerfile
// this creates a container from the image `theinfinitytimes`, names it `theinfinitytimes` 
// and binds the port 4200 from the container to the port on the host machine 
podman run -p 4200:4200 --name theinfinitytimes theinfinitytimes 
```
To stop the container, run 
```bash
podman container stop theinfinitytimes
```
To start it again, run 
```bash
podman container start theinfinitytimes
```

### Built with

1. Angular CLI 9
3. Angular Material
4. Ionic
5. Bootstrap


### Contributing
Please read <a href="https://gitlab.com/theinfinitytimes/theinfinitytimes/blob/master/CONTRIBUTING.md">CONTRIBUTING.md</a> 
for details on our code of conduct, and the process for submitting merge requests to us.

### License
This project is licensed under the MIT License - see the <a href="https://gitlab.com/theinfinitytimes/theinfinitytimes/blob/master/LICENSE">LICENSE.md</a> file for details
