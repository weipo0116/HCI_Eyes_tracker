# WebGazer Environment Setup

WebGazer is an eye-tracking library that enables eye-tracking capabilities on web pages. This document provides instructions on how to set up the WebGazer environment.

## Prerequisites

Before you begin, ensure that you have the following prerequisites installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node.js package manager)

## Installation

1. Clone this repository:

   ```bash
   # Ensure Node is downloaded: https://nodejs.org/en/download/ (tested on v16 and v18)
   git clone https://github.com/weipo0116/HCI_Eyes_tracker.git
   cd HCI_Eyes_tracker
   
   #install the dependencies
   npm install
   #build the project
   npm run build

## Customization

You can customize the WebGazer setup by modifying the configuration files and scripts in the src directory.

- main.js: Contains the main logic for WebGazer setup.
- calibration.js: Handles the calibration process.
- xy.js: Records eye movement data.
