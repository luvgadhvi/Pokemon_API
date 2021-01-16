# Pokemon_API
This Backend project provides sets of RESTful API to extract Pokemon realted information by their Generation or by their name and Scripts to Load data into MongoDB Server so user can create their own dataset.

## Requirements

For development, you will only need Node.js and a node global package, installed in your environment.<br /> This project has been deployed in Heroku on the following URL:-  https://infinite-tundra-39902.herokuapp.com/.

## Install 
Command to Set your node appilcation.
```sh
git clone <repo_url>
npm install 
```

## Setup 
Run following commoand for local setup.
```sh
mkdir config
touch dev.env
```
Open `dev.env` and inject your credentials so it looks like this<br/>
```
PORT=3000
mongoosedb=<mongoDB_ServerURL>
```

## Running Locally
```sh
npm run dev 
```
Your app should now be running on [localhost:3000](http://localhost:3000/).

## Deploying to Heroku

```
heroku create
git push heroku master
```
## Script to load json into database.
Run This command will load JSON files into your database so the user can have their own dataset. <br />
User will need to inject mongoosedb=<mongoDB_ServerURL> variable in dev.env to make it work.
```
npm run loaData
```

## Endpoint
### Pokemon By Generation Id
Returns JSON data about list of pokemon by their generation id.
* **URL**<br/>
  /byGeneration/:id
* **Method:**<br/>
  `GET`
*  **URL Params**<br/>
   **Required:**<br/>
   `id=[integer]`<br/>
* **Query Params**<br/>
    None
* **Success Response:**
  * **Code:** 200 <br />
    **Content:** `{ "count": "xxxx", PokeByGen: [...]" }`<br />
    The count will be the total count of pokemon in that generation.<br />
    PokeByGen will list pokemon filtred by their generation id and sorted by their PokeId.
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{}`
    
 ### Pokemon Search API
Returns json data about list of pokemon by their search string.
* **URL**<br/>
  /searchPokemon
* **Method:**<br/>
  `GET`
*  **URL Params**<br/>
   None
* **Query Params**<br/>
   **Required:**<br/>
   `search=[string]`<br/>
* **Success Response:**
  * **Code:** 200 <br />
    **Content:** `{ "count": "xxxx", pokeResult: [...]" }`<br />
    The count will be the total count of pokemon in that search result.<br />
    pokeResult will to list of pokemon filtered by their search string. 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{}`



