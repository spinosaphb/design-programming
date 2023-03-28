#!/bin/bash

# Get the filename.ts
project_path="$1"
source_file="$2"

# Run the file
tsc "$project_path/$source_file"; node "$project_path/${source_file%.*}.js"; rm -rf $project_path/*.js