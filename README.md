### Blog App API
##Tech Stack
-Server: Node, Express
-Tools: Mongo

##Environmental Variables
To run this project, you will need to download the following environmental variables to your .env file:

PORT=8888

MANGO_URI=" "

SALT=8

JWT_SECRET="

## SETUP
    - Server
        - Mongo Connected
        - Middleware
        - Routes Connected
    - Routes
        - /auth
        - /blogs
# Endpoints:
    - /auth
        - login
            - CREATE
        - registration
            - CREATE
    - /blogs
        - dynamic username
            - CREATE*!
            - READ*!
        - dynamic id
            - UPDATE*!
            - DELETE*!
        - base
            - READ
                - ONLY display NON private blogs
    
# Parameters


# Schema
   - User Schema
        - username: string, required
        - email: string, required
        - birthday: date, required
        - age: number
    -Blog Schema
        - created_by: string, required
        - created_at: date, required
        - blog_title: string, required
        - blog_content: string, required
        - blog_content: string, required
        - private: boolean, required 
        
## Hosted On Heroku at: 
# [BlogAppAPI](https://git.heroku.com/neondaydreams-blog-app.git)
