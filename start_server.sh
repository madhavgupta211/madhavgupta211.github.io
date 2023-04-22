#!/bin/sh

# Author : Madhav Gupta
# Script follows here:
cd ./mavi-frontend
yarn build
cd ..
go run main.go