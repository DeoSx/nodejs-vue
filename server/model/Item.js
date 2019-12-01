const { model, Schema } = require('mongoose');

const itemSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});

module.exports = model('Item', itemSchema);
