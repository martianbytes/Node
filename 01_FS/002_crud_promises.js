const fs = require('fs/promises')

const createFile = async () => {
    try {
        await fs.writeFile('./readfiles/log.txt', 'Day 1: This is the first day of the node journey');
        console.log("Successfully created / overwritten a file.")
    } catch (err) {
        console.error("Error occured ! " + err.message)
    }
}

// create a file
createFile()

const readMyFile = async () => {
    try {
        const data = await fs.readFile('./readfiles/log.txt', 'utf-8');
        console.log(data)
    } catch(err) {
    console.error("Error occured ! " + err.message)
    }
}
// read the file
readMyFile()

const appendMyFile = async () => {
    try {
        await fs.appendFile('./readfiles/log.txt', 'This is newly appended data in the file.');
        console.log("Appending succeeded!");
    } catch (err) {
        console.error("Error occured! " + err.message)
    }
}

// append the text to file
appendMyFile()


// read my file
readMyFile()


const deleteMyFile = async () => {
    try {
        await fs.unlink('./readfiles/log.txt');
        console.log("File deleted successfully");
    } catch (err) {
        console.error("Error occured! " + err.message)
    }
}

//delete the file now
deleteMyFile()


// race condition because delete will execute before creation or appending so , use async await to execute as well

const runWorkflow = async () => {
    await createFile();
    await readMyFile();
    await appendMyFile();
    await readMyFile();
    await deleteMyFile();
}


runWorkflow();