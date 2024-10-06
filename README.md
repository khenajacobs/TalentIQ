We can start the user journey by changing the route to /register-user (for now)

There is a lot of room for improvements on this PoC. I left out the steps to do User research on understanding the needs and pain points and went straight into development. I aimed to have a basic implementation of the form as communication with stakeholders is out of scope for this exercise (Thinking about questioning the user registration flow, understanding what kind of endpoints there will exist to make use of, Accessibility guidelines, Mobile and dekstop UX).

To make some speed. I made use of a few packages which helps in improving th elead time of this project:

Yup & Formup: Assist in form validation (input validity, error message handling, etc.)
Bootstrap and Material: Improve the look and feel of standard HTML components, I used a stepper example of Material
i18n: I haven't made use of the package, but I strongy insist of using this to generate translation labels. 


Things I consider as a MUST on when I had more time:

- Avoid bootstrap import into each page. This must be set into one file that defines it for the entire application
- i18n translation usage for every property that is defined. This makes is 1) easier to maintain when changes are necessary 2) improves the configurability of the application based on the needs of the user
- Unit tests for every page and component to use as a validation for the written changes. The pipeline on e.g. NX Cloud could enable us to block merging when a unit test fails.
- Define and make use of a component library (or TailwindCSS): Although Bootstrap and Material are in my opinion a great way to kick things off, they are somewhat incomplete ini containing certain components. I would like to spend some more time in investigating what React-first libraries there exists and are recommended to make use of.
- Environment variables: Right now, a lot has been hard-coded to speed things up. Ideally I want to have some environment configuration where we can retrieve these values. (e.g. API BASE URL for services, default language, etc.)
- Stepper component shouldn't be a hard coded value on each page. I'd prefer to have this on the top-parent domain defined and dynamically changes based on the rules that would be set.

Things I consider as NICE TO HAVE when I had more time:
- Automated testing: As a preparation on a QA engineer, I'd prefer to have some tags ready in the components so that an Automated testing script (Cypress, Selenium, etc.) could be picked up to start testing E2E flows when there is a need for this.


Things I am UNCERTAIN of which I'd like to dive in deeper:
- React architecutre best practises: For this exercise, I tried to give some structure to the code base to make it more reusable, but I am convinced there are some best practises in what way you can improve the structure of the code base.