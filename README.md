# food_report

### Setting up the .env file

To set up the .env file for this project, follow these steps:

Copy the .env.example file and rename it to .env.

Open the .env file and find the line that says VITE_FOOD_DATA_CENTRAL_API_KEY=.

in the VITE_FOOD_DATA_CENTRAL_API_KEY= line, add Your food data central APi key. For example:
```
VITE_FOOD_DATA_CENTRAL_API_KEY=gskfrfnkg4Zyq2xO2ne3ZPUpjRBMUJ3gyPd7rbjy
```

Replace {{Your food data central APi key}} with the actual API key.

if required you can update the food data central api base url with VITE_FOOD_DATA_CENTRAL_API_BASE_URL in .env file.

Save the changes to your .env file.

By setting up the .env file with a base URL and api key, you can easily change the backend server URL of your project without having to update it in multiple places throughout your code.