# What Can You Make

## Installation

Run:

    yarn

This will install all packages and get it ready to start.

## Development

To bring up locally run:

    yarn start

This will start the backend, run webpack, and handle request proxying for the front end.

Navigate to [localhost:3000](http://localhost:3000) to see the frontend running!

## working on the frontend

navigate to `/frontend` in your `editor`, all of the code lives in the `src/` folder.

## working on the backend

navigate to `/backend` in your `editor`, all of the code lives in the `src/` folder.

## vs code

if using vs code, [follow this](https://yarnpkg.com/getting-started/editor-sdks/#vscode) to get the dev env _juuuuuust_ **right**.

### debug

head to the `RUN` tab (the play button w/ a bug) and select `debug` and hit play. this will auto attach the node debugger in vsc to the backend for you.

## Bonus (one of)

1. add ci/cd using travis, circleCI, etc...
1. containerize the application
1. add deployments using heroku, digital ocean, etc...
1. add integration tests using puppeteer, webdriver, playwright, etc...

## Assumptions and Decisions

- 95% of my time on this project was in the frontend, A lot of time was spent familiarising myself with class based react components as I've been working in a code base with only functional for the last couple of years. I am also not used to connect redux architecture, having only used the hooks in the past.
- I timeboxed switching over the frontend project to be typescript. It hit a snag with the react typings not showing up so left it. Would definitely be an improvement for the app to add types.
- I also timeboxed converting the react components to be Functional but worked out it would take too much of my 4 hours to convert it.
- I used HTML elements with styled components as that was mostly out Home was done. I would replace these with Martial UI elements and useStyles.
