#!/bin/bash
echo "Script started"

# Set the input directory
input_directory="./src/assets/images/About"

# Iterate over image files (JPEG and PNG) in the input directory and its subdirectories
for input_file in "$input_directory"/**/*.{jpg,jpeg,png}; do
    # Check if the file is a regular file
    if [ -f "$input_file" ]; then
        # Get the base name of the file (excluding the extension)
        base_name=$(basename "$input_file")

        echo "Processing: $input_file"

        # Set the output file path for the compressed image
        output_file="${input_file%.*}-20px-small.${input_file##*.}"

        # Run ffmpeg command to resize and save the compressed image
        ffmpeg -i "$input_file" -vf "scale=20:-1" "$output_file"

        # Print a message for each processed file
        echo "Processed: $output_file"
    fi
done

echo "Script completed"
