let fantasyChar = {
    activity: ['go to dinner with', 'play chess against', 'fight evil with', 'introduce to your mum', 'cook a wholesome meal for', 'go partying with', 'have as your bodyguard', 'be with during a zombie apocolypse', 'french kiss', 'marry', 'have a one night stand with', 'see wearing a dress', 'spoon at night', 'be for one day', 'be best friends with', 'share a prison cell with', 'give you a massage', 'watch the game with', 'hold hands in public with', 'kill', 'see burn in hell'],
    harryPotter: ['Harry Potter', 'Ron Weasley', 'Hermoine Granger', 'Hagrid', 'Lord Voldemort', 'Severus Snape', 'Albus Dumbledore', 'Dobby the House Elf', 'Draco Malfoy', 'Professor McGonagell', 'Dolores Umbridge', 'Molly Weasley', 'Neville Longbottom'],
    got: ['Daenerys Targaryen', 'Jon Snow', 'Cersei Lannister', 'Tyrion Lannister', 'Arya Stark', 'Sansa Stark', 'Jaime Lannister', 'Bran Stark', 'Brienne of Tarth', 'Joffrey Baratheon', 'Petyr Baelish', 'Samwell Tarly', 'Hodor', 'Tormund'],
    lotr: ['Lord Sauron', 'Aragorn', 'Frodo Baggins', 'Gandalf the Grey', 'Legolas', 'Gollum', 'Arwen', 'Gimli', 'Samwise Gamgee', 'Bilbo Baggins', 'Merry and Pippen']

};

const randomGenerator = num => {
    return Math.floor(Math.random() * num);
};

let message = [];
for (let key in fantasyChar) {
    let charOption = randomGenerator(fantasyChar[key].length);
    switch (key) {
        case 'activity':
            message.push(`Who would you rather ${fantasyChar[key][charOption]}?`)
            break
        case 'harryPotter':
            message.push(`${fantasyChar[key][charOption]}`)
            break
        case 'got':
            message.push(`${fantasyChar[key][charOption]}`)
            break
        case 'lotr':
            message.push(`${fantasyChar[key][charOption]}`)
            break
        default:
            message.push('Error: Need more info.')
    }
};

const formatMessage = () => {
    const joinMessage = message.join('\n')
    console.log(joinMessage)
};

formatMessage(message);