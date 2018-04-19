const fs = require('fs');

/* Write hotfile */
const createHotFile = (hot) => {
  if (hot) {
    fs.writeFile('./.hot', 'Hot file created.',
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('Hot file created');
        }
      });
  } else {
    fs.unlink('./.hot', (res) => {
      console.log('Hotfile removed successfully.');
    });
  }
};

module.exports = {
  createHotFile: createHotFile,
};
