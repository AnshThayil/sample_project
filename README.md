# sample_project
A sample project built with Django and Create React App

##Submission Notes
Some notes about how create user is implemented:
- I rewrote some parts of the backend using the `djangorestframework` library. It can be installed using `pip install djangorestframework`.
- I also added some node packages and rewrote the frontend with Bootstrap to help with my implementation. Namely,
  - `axios` to help with making GET and POST requests.
  - `bootstrap` and `react-bootstrap` to help design the interface.

## Instructions
Clone this repository and implement these features:
- a `/users/add` api route in the **backend** to add a user to the database
- a form (containing an input field for "Name", an "Add" Button and a "Save" Button) on the **frontend** to add a user using the `/users/add` route

You are encouraged to read the django documentation [here](https://docs.djangoproject.com/en/3.0/intro/) and the react documentation [here](https://reactjs.org/docs/react-api.html) to inform your implementation decisions. However, you are not required to implement a feature if you don't know how.

The features you do implement must use the [git feature branch model](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow). For more information on development workflow, visit our [docs](https://github.com/Digital-Health-Lab-UVic/digital-health-lab-docs/blob/master/sections/Development-Workflow.md).

## Submission

Once the features are implemented, push your cloned repository to your github page and email us the link.

Please email digitalhealth@uvic.ca with the subject 'Dev Sample Project - Your Name' if you have any additional questions.
