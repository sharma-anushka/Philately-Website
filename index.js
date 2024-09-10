const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const Ancillary = require('./models/ancillary');

mongoose.connect('mongodb://localhost:27017/postaldb', {});

const initializeDB = async () => {
    
    const baseDir = require('./postalData');
    const postalCircles = fs.readdirSync(baseDir);

    for (const circle of postalCircles) {
        const circlePath = path.join(baseDir, circle);
        const ancillaryFiles = fs.readdirSync(circlePath);

        for (const file of ancillaryFiles) {
            const filePath = path.join(circlePath, file);
            try {
                // Dynamically require the ancillary JS file
                const ancillaryData = require(path.resolve(filePath)); 
                await Ancillary.create({ postalCircle: circle, data: ancillaryData });
                console.log(`Successfully saved data for ${circle} from file ${file}`);
            } catch (error) {
                console.error(`Failed to save data for ${circle}: ${error.message}`);
            }
        }
    }

    mongoose.connection.close(); // Close connection when done
};

initializeDB();
