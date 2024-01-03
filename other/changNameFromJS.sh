#!/bin/bash

echo "Script started"

loopOver() {
  local input_directory="$1"

  for input_file in "$input_directory"/*; do
  echo "$input_file"
    if [ -d "$input_file" ]; then
      loopOver "$input_file"
    else
      if [[ "$input_file" =~ \.jpg$ ]]; then
            base_name=$(basename "$input_file" .jpg)
            output_file="$input_directory/$base_name-20px-small.jpg"
            ffmpeg -i "$input_file" -vf "scale=20:-1" "$output_file"
            echo "--> Processed: $input_file"
      fi
    fi
  done
}

loopOver "./src/assets/images/ProjectCategories"

echo "Script completed"