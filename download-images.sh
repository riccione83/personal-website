#!/bin/bash

# Create medium directory if it doesn't exist
mkdir -p client/public/images/medium

# Download the images
curl -o client/public/images/medium/swift-realm.jpeg "https://miro.medium.com/v2/resize:fit:1400/1*fSGayL9fUzK5hdhg5r7Nxw.jpeg"
curl -o client/public/images/medium/swift-extension.jpeg "https://miro.medium.com/v2/resize:fit:300/1*QJDPy8b4NnzYKvjs9Jh0lA.jpeg"

echo "Images downloaded successfully" 