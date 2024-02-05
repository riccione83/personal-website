# Makefile for TypeScript project

# Environment variables
AWS_BUCKET ?= www.riccardorizzo.eu
AWS_PROFILE ?= default

# Default target
all: build

# Clean build artifacts
clean:
	rm -rf dist

# Install dependencies
install:
	npm install

# Build the project
build:
	npm run build

# Run the project
run:
	npm start

# Run tests
test:
	npm test

# Package the project
package:
	zip -r project.zip dist

# Deploy the project to AWS S3
deploy:
	npm run build &
	aws s3 sync build s3://$(AWS_BUCKET) --profile $(AWS_PROFILE)

# Lint the project
lint:
	npm run lint

# Check code style
checkstyle:
	npm run checkstyle

# Backup the project
backup:
	tar -czvf backup.tar.gz .

# Initialize the project
init:
	npm init

.PHONY: all clean install build run test package deploy lint checkstyle backup init