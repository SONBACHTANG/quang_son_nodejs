const mongoose = require('mongoose');
async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/quang_son_web', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    //console.log("connect Successfully")
  } catch (error) {
    console.log('connect failture');
  }
}
module.exports = { connect };
