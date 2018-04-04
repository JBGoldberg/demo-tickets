Coding Challenge
================

Welcome to the coding challenge for the position as Software Developer at [byrd](https://getbyrd.com).  
This gist explains the coding exercise in detail, what's important to us and how you submit the exercise.  

Depending on the position you are applying for, we focus on different parts of the exercise. Read _What's important to us_ for more details.






Coding Challenge
----------------
Your task is to write a simple ticketing system. It consists of a frontend and a backend.
In the frontend, anonymous people can submit new tickets for the IT Support Team and logged in employees can view and edit committed tickets.  
The backend handles the requests from the frontend and persists the data in a database.

### Frontend Functionalities

The frontend should have the following functionalities:

- **Submit new Ticket**  
    Anonymous users should be able to submit new tickets by filling out a form with the following fields:  
    - Name
    - Email
    - Subject
    - Type (*Bug Report*, *Feature Request*, *Other*)
    - Urgency (*Low*, *Mid*, *High*)
    - Message
- **View, Edit, Comment Tickets (login required)**  
    Logged in users should be able to see a list of all submitted tickets.
    Optionally, logged in users should be able to add comments to a ticket.  
    Each ticket must also have one of the following status:  
    - *Open*
    - *In Progress*
    - *Completed*
    - *Rejected*
    

#### Here's an example of how the interface could look like
(Feel free to change the design how you like)

![byrd tickets](https://i.imgur.com/E1bgY13.png)  

### Technology Requirements

You can basically use all frameworks and technologies you like with only a few limitations.  
Generally, the more technologies you use from our technology stack, the better.

**Frontend**:  
As long as you are using HTML, CSS and Javascript (and/or Typescript), you may use any frameworks you want.  
Our tech stack consists of Angular and Bootstrap.

**Backend**:  
Use Python 2.7 as main programming language for the backend and PostgreSQL as database. You may use any frameworks you want.  
Our tech stack consists of Flask, SQLAlchemy, Celery, PostgreSQL, Redis.






What's important to us
----------------------

**We value quality over feature-completeness.**  
We understand that completing this exercise is time consuming and depending on your motivation and creativity you might have even more ideas you want to implement in order to show us your skills.
Therefore we focus on code quality over feature-completeness.  
It is fine to leave things aside as long as you explain it in the project's README.
The goal of this challenge is to help us identify what you consider as well written, production-ready code.


Here are the main aspects of your project we are focusing on:

- **Architecture**  
How clean is the separation between front-end and back-end?
- **Clarity:**  
Is your code easyly readable? Does the README explain the problem and the solution? Are technical tradeoffs explained?
- **Correctness:**  
Does the application do what it should? If you decide to leave something by side, does the README explain why?
- **Code quality:**  
Is your code simple, easy to understand, and maintainable? Is the coding style consistent with the language's best practices?
- **Security:**  
Are there any obvious vulnerabilities? Is there something that can be added / changed to improve security?
- **Testing:**  
Did you write any unit tests? Will they be difficult to change if the requirements of the application were to change?
- **UX:**  
Is the web interface clear, easy to understand and pleasing to use? Is the API intuitive?
- **Technical choices:**  
Do your choices of libraries, architecture etc. seem appropriate for the given task?


### For Frontend Developers

When applying for a position as frontend developer, it's not required to develop the backend part of the challenge.
However, you must still implement the API calls and use mock data for `GET` requests. You may also use a tool like [Mockbin](http://mockbin.org/) or [httpbin](https://httpbin.org/) to test the API Requests.


### For Full Stack Developers

When applying for a position as full stack developer, we pay additional attention on the architecture.
Especially to the separation between front-end and back-end.


### For Backend Developers

When applying for a position as backend developer, we pay most attention on the api and the backend in general.
We fully understand that you might not be the best frontend developer, but we expect a basic knowledge of HTML.  
It's totally ok to just have a very basic form for submitting a ticket and table to view the submitted tickets as long as you document the decision you made in the README.






Submitting the Coding Challenge
-------------------------------

Please create a [GitHub](https://github.com) or [bitbucket](https://bitbucket.com) repository that includes all necessary files to run the project.  
We also expect you to write a README that covers at least the following topics:
- Problem Description
- Solution Description
    - Additions / Tradeoffs
    - Technical Decisions
- How to run the code
- How to run unit tests (if any)

We would also like to see the progress of the project in the git revisions. So don't forget to create a git repository from day one ;)

Once you think the project is finished, send us the link to the repository.  
We would also be happy if you host a sample instance of your project on e.g. [Heroku](https://heroku.com) or [DigitalOcean](https://digitalocean.com) (optional).