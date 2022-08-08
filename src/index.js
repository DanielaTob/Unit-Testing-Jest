const cities = ['Ciudad de México', 'Bogotá', 'Lima', 'Buenis Aires', 'Guadalajara'];

const randomString = () => {
    const strings = cities[Math.floor(Math.random() * cities.length)];
    return strings; 
}

module.exports = randomString;

