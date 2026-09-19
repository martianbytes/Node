const fs = require('fs/promises')


async function demo() {
    try {

        const fileName = 'readfiles/final.txt'
        const data = await fs.readFile(fileName, 'utf-8');
        console.log(data);
        
        const newData = 'This is the newest data';
        await fs.writeFile(fileName, newData);
        
        const newestData = await fs.readFile(fileName, 'utf-8');
        console.log(newestData);
    } catch(err) {
        console.log(err)
    }
}

demo()