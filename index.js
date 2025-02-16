const fs = require('fs');

function createFolder(folderName) {
    fs.mkdir(folderName, { recursive: true }, (err) => {
        if (err) {
            console.error('Error creating folder:', err);
        } else {
            console.log('Folder created successfully.');
        }
    });
}


createFolder('name-of-new-folder'); 

// Replace with the desired folder name




function deleteFolder(folderPath) {
    fs.rmdir(folderPath, { recursive: true }, (err) => {
        if (err) {
            console.error('Error deleting folder:', err);
        } else {
            console.log('Folder deleted successfully.');
        }
    });
}

// function call
deleteFolder('The-path-of-folder-that-you-want-to-delete'); 
// put the path of the folder you want to delete

