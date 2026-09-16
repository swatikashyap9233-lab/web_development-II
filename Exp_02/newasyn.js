const fs = require('fs');

// 1. Create File
fs.writeFile('newsample.txt', 'Welcome to FSD', (err) => {
    if (err) {
        console.log('Error creating file:', err);
        return;
    }

    console.log('1. File created successfully!');

    // 2. Read File
    fs.readFile('newsample.txt', 'utf-8', (err, data) => {
        if (err) {
            console.log('Error reading file:', err);
            return;
        }

        console.log('2. File content:', data);

        // 3. Append Data
        fs.appendFile('newsample.txt', '\nSemester: 3', (err) => {
            if (err) {
                console.log('Error updating file:', err);
                return;
            }

            console.log('3. File updated successfully!');

            // 4. Delete File
            fs.unlink('newsample.txt', (err) => {
                if (err) {
                    console.log('Error deleting file:', err);
                    return;
                }

                console.log('4. File deleted successfully!');
            });
        });
    });
});
