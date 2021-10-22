# BTC ETH PRICE

BTC ETH PRICE is dashboard to show the Buy and Sell price of bitcoin and ethereum from two different exchanges and recommend what exchanges is the best for Buy and for Sell

## Installation

Install docker in your machine [docker](https://docs.docker.com/get-docker/). Please
visit the website for more information.

Install Docker Compose in your machine [Docker_Compose](https://docs.docker.com/compose/install/). Please visit the website for more information.

- clone the project and cd to server directory and run this command where Docker-Compose.yml file is

```bash
docker compose up
```

# Run the Backend first

- For client, cd to client and install `npm`

In the project directory, you can run:

```bash
  npm start
```

## Questionnaire

- Are there any sub-optimal choices( or short cuts taken due to limited time ) in your implementation?

  There is no any short cuts taken due to limited time but I use FastAPI framework to config the backend on optimal time

- Is any part of it over-designed? ( It is fine to over-design to showcase your skills as long as you are clear about it)

  The Btc and Eth component is over-designed and using Material UI library.

- If you have to scale your solution to 100 users/second traffic what changes would you make, if any?

  I would improve the backend http pipeline to be more scalable.

- What are some other enhancements you would have made, if you had more time to do this implementation

  I would on enhanc the design on each component with material ui and make them look better

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
