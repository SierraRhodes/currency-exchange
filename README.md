# Currency Exchange

#### Currency Exchange is an app that takes user's inputted USD value and conversion choice and outputs the converted amount.

#### By Sierra Rhodes

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _Linter_
* _Babel_
* _npm_
* _Bootstrap_


## Description

The Currency Exchange application takes a user's inputted USD amount and their selected currency and converts it into the selected currency. 

## Setup/Installation Requirements

* _Open a browser and navigate to https://github.com/SierraRhodes/currency-exchange_
* _copy link_
* _In the command line cd into your desktop directory_
* _in the command line type git clone and paste the link after_
* _When the cloned repository appears cd into the project_
* _run the command: npm install_
* _run the command: npm _
* _npm install dotenv-webpack@2.0.0 --save-dev_
* _add to webpack.config const Dotenv = require('dotenv-webpack');_
* _add to webpack.config to plugins new Dotenv()_
* _add .env to .gitignore file_
* _commit changes and push to github_
* _create file called .env_
* _inside .env file add API_KEY=_
* _Visit the ExchangeRate-API site. Input your email address and click the "Get Free Key" button.
You'll be prompted to create an account with your email, first name and a password. Agree to the terms of use and click "Get Started!"_
* _Go to your email and copy and paste the API key into the API_KEY= variable to store your API_
* _Within the url of the API call input ${process.env.API_KEY} Make sure you are using backticks._




## Known Bugs

* _None_


## License
Copyright 2023 Sierra Rhodes

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.