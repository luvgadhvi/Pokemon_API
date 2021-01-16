# Pokemon_API
This Backend Project provides Sets of RESTful API to Extract Pokemon Realted Information by Their Generation or by their Name and Scripts to Load data into MongoDB Server so user can create their own Database server.

## Requirements

For development, you will only need Node.js and a node global package, installed in your environement.

## Install 
Command to Set your node appilcation.
```sh
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

## Endpoint
### Pokemon By Generation
Returns json data about list of pokemon by their generation number.
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
    count will be total count of pokemon in that generation.
    Results will to list of pokemon filtred by their generation id and sorted by their PokeId.
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{}`



