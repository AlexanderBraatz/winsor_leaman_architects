#!/bin/bash
echo "Script started"

# Set the input directory relative to the current working directory
input_directory="./src/assets/images/About"

# Get the canonical, absolute path for the input directory (using readlink on macOS)
input_directory=$(readlink -f "$input_directory" 2>/dev/null || realpath "$input_directory")

# Find all JPG files in the input directory and its subdirectories
find "$input_directory" -type f -name '*.jpeg' | while read -r input_file; do
    # Get the base name of the file (excluding the extension)
    base_name=$(basename "$input_file" .jpeg)

    echo "-input_directory: $input_directory for $input_file"

    # Set the output file path for the compressed image
    output_file="$input_directory/$base_name-20px-small.jpeg"

    # Check if the output file already exists and doesn't end with -20px-small
    if [ -e "$output_file" ] && [[ ! "$output_file" =~ -20px-small.jpeg$ ]]; then
        echo "Skipped (already compressed): $input_file"
    else
        # Run ffmpeg command to resize and save the compressed image
        ffmpeg -i "$input_file" -vf "scale=20:-1" "$output_file"

        # Print a message for each processed file
        echo "--> Processed: $input_file"
    fi
done

echo "Script completed"
