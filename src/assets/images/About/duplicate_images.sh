#!/bin/bash

# Find all image files in the current directory and its subdirectories
find . -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.gif" \) -print0 |

# Loop through the found files and resize/compress them
while IFS= read -r -d '' file; do
  # Get the filename without extension
  filename_without_extension="${file%.*}"
  
  # Construct the output filename with -20px suffix
  output_filename="${filename_without_extension}-20px.${file##*.}"

  # Resize the image using ffmpeg
  ffmpeg -i "$file" -vf "scale=20:-1" "$output_filename"
done
