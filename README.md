# covid19_visualize
Displaying all reported Covid19 cases from a website from March 23 up to today autonomously.

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Description](#Description)

## General info
Displaying all reported Covid19 cases from a https://www.gov.mb.ca/health/newsreleases/index.html autonomously from March 23 to June 19, 2020; and insert all the data into a Postgres database.
	
## Technologies
This project is created with:
* JavaScript
* Express
* HTML5, CSS3, Bootstrap 4

## Description
* Backend:
    The main thing is to use this xHttp.open('GET', 'https://covid19manitobaapi.herokuapp.com/', true) to get JSON results from an API that I implemented in the covid19_api repo.
* Front-end:
    Simple responsive Bootstrap table and CSS3 to display data into a table.


* Using a cron job on Heroku server to run a script from the covid19_daily_update to get daily reported cases and insert into a database; then an API will be updated for HTTP request.
