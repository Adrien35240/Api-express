# in progress
## Scripts :
- ### Start Production
        npm start
- ### Start Developement
        npm run dev
- ### Start container
        docker-compose up -d
- ### Attach terminal to container ```docker ps``` for get container name
        docker attach <container-name> 
- ### Format all files
        npm run prettier
- ### Lint all files
        npm run lint
- ## DB
        - sqitch deploy dev
        - sqitch deploy heroku-staging
        - sqitch deploy heroku-production

        - sqitch revert dev
        - sqitch revert heroku-staging
        - sqitch revert heroku-production

        - sqitch verify dev
        - sqitch verify heroku-staging
        - sqitch verify heroku-production
        

# Notes new project
- ### Sqitch config
        sqitch init <name> --uri <github-repo> --engine pg
        sqitch add <label> -n 'message'