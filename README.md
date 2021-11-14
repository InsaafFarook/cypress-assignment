# cypress-assignment
Cypress assignment using JScript

## Table of Contents
1. [Introduction](#Introduction)
2. [Folder Structure](#Folder Structure)


# Introduction
This repository contains **Sign Up related test scenarios** of Miro which are automated using [Cypress](https://www.cypress.io).

| Item | Description | 
| --- |---|
| **Test Type** | End-to-End Tests |
| **Technologies** | ![Cypress](https://img.shields.io/badge/cypress-^6.8.0-red.svg?style=plastic&logo=cypress) |
| **Dependencies** | Cypress Allure Plugin |
| | |

# Folder Structure
There are 5 main folders inside cypress folder.

## fixtures
All test data required for the tests are placed here.

## integration
All the test files are placed here. Based on modules can organize the test files.

## lib
There are 4 sub folders under lib.
  - functions : Application specific functions to be placed here. These methods will be used in the test layer.
  - helpers : Application domain specific helper methods to be placed here. Such as generating session cookie, retreive data from external apis and etc.
  - pages : Application page specific elements and methods to be placed here.
  - utils : Utlity functions like currency conversions, date/time conversions can be placed here.

## Plugins
Plugins that needed to be placed here

## Support
Custom cypress commands to be placed here. Domain specific commands should not be placed here

