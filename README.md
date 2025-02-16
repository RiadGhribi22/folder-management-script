# Folder Management Script

This is a simple Node.js script for creating and deleting folders using the `fs` module.

## Features

- Create a folder with a specified name.
- Delete a folder from a specified path.

## Requirements

- Node.js installed on your system.

## Installation

1. Clone this repository:
   ```sh
   git clone https://github.com/RiadGhribi22/folder-management-script.git
   ```
2. Navigate to the project directory:
   ```sh
   cd folder-management-script
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Usage

1. Open the `index.js` file and modify the folder name or path as needed.
2. Run the script with Node.js:
   ```sh
   node index.js
   ```

## Code Explanation

### Create a Folder

```javascript
function createFolder(folderName) {
    fs.mkdir(folderName, { recursive: true }, (err) => {
        if (err) {
            console.error('Error creating folder:', err);
        } else {
            console.log('Folder created successfully.');
        }
    });
}
```

Call `createFolder('name-of-new-folder');` to create a folder.

### Delete a Folder

```javascript
function deleteFolder(folderPath) {
    fs.rmdir(folderPath, { recursive: true }, (err) => {
        if (err) {
            console.error('Error deleting folder:', err);
        } else {
            console.log('Folder deleted successfully.');
        }
    });
}
```

Call `deleteFolder('path-to-folder');` to delete a folder.



