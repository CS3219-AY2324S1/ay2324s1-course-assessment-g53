[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/6BOvYMwN)
![image](https://github.com/CS3219-AY2324S1/ay2324s1-course-assessment-g53/assets/62133038/152c7635-054e-4548-9afc-644081ec518f)

# Welcome to Project peer prep created by g53!
In the wake of the COVID-19 pandemic, companies are progressively shifting to online platforms for interviews. Traditional face-to-face interviews are being replaced with interviews conducted over platforms such as zoom, or MS Teams.
In order to provide aspiring programmers with a platform to practise and prepare for such technical interviews, our team has implemented a web application – PeerPrep.

PeerPrep is a web application that helps students prepare themselves for an online technical interview. This is done by simulating a technical interview setting to provide them with a rough gauge of what it is like to be in an actual interview. In addition, PeerPrep also helps students improve their technical and communication skills as they work together with others to solve programming problems. These are skills that employers will be looking out for during an actual interview as well.

Embark on your exciting journey of progress with us at Peer Prep today!

# Features 
🔐 Safe authentication with password

✏️ View and design your personal profile

🤝 Match with other users based on question difficulty

💻 Collaborate with other users with a live code-editor

🎥 Video with each other to simulate interview environment

👨‍💻 Test your code with support of 8 most common coding languages

📊 View attempted question history to identify area for improvments

# Tech stack
Clinet: React, React Router, Axios, MaterialUI

Server: Nodejs, Express

Testing: Mochai and chai, sinon, nyc_istanbul, c8

Containerization: Docker, Docker Compose

Cloud: Google Cloud, AWS

Databases: MongoDB Altas, PostgreSQL

Message Broker: RabbitMQ

Code compiler and execution: Piston api

CI/CD Tools: Github actions, AWS Elastic Container Registry

# Run locally

***Prerequisites***: 

1. Git
2. Docker
3. Web brower based on your own preference

**Steps**:

Clone the project:

```git clone https://github.com/CS3219-AY2324S1/ay2324s1-course-assessment-g53.git```

Go to Server-Configs

***Todo***

Start docker. Build and deploy all containers

```docker-compose up -d --build```

Access Peer Prep

```Visit https://localhost:3000```

# Test Account

We have prepared two accounts in the database. It is for you to explore our app freely.

| Username     | Password | Admin_status|
| ---      | ---       | --- |
| admin_test | Password!123 | YES|
| demo| Demo789!| No|
 
