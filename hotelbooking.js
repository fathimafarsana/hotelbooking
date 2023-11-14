const prompt = require('prompt-sync')();

// Sample data for room types and numbers
const roomData = [
    { type: 'Single', number: 101, booked: false },
    { type: 'Double', number: 201, booked: false },
    { type: 'Suite', number: 301, booked: false }
];

// Function to display room types with room numbers
function displayAvailableRooms() {
    console.log('\n==== Available Room Types and Numbers ====');
    roomData
        .filter(room => !room.booked)
        .forEach((room, index) => {
            console.log(`${index + 1}. Type: ${room.type}, Number: ${room.number}`);
        });
}

// Function to display booked rooms
function displayBookedRooms() {
    console.log('\n==== Booked Rooms ====');
    roomData
        .filter(room => room.booked)
        .forEach(room => {
            console.log(`Type: ${room.type}, Number: ${room.number}`);
        });
}

// Function to book a room
function bookRoom() {
    displayAvailableRooms();
    const roomIndex = parseInt(prompt('Enter the number of the room to book: '), 10) - 1;

    if (roomIndex >= 0 && roomIndex < roomData.length && !roomData[roomIndex].booked) {
        roomData[roomIndex].booked = true;
        console.log('Room booked successfully!');
    } else {
        console.log('Invalid room selection or room already booked.');
    }
}

// Main function
function startProcess() {
    let choice;
    do {
        console.log('\n==== Menu ====');
        console.log('1. Display available room types');
        console.log('2. Display booked rooms');
        console.log('3. Book a room');
        console.log('4. Exit');
        choice = prompt('Enter your choice (1-4): ');

        switch (choice) {
            case '1':
                displayAvailableRooms();
                break;
            case '2':
                displayBookedRooms();
                break;
            case '3':
                bookRoom();
                break;
            case '4':
                console.log('Exiting the process. Goodbye!');
                break;
            default:
                console.log('Invalid choice. Please enter a number between 1 and 4.');
        }
    } while (choice !== '4');
}

// Start the process
startProcess();
