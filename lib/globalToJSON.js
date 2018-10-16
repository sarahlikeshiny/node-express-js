function globalToJSON(schema){
  schema.set('toJSON', {
    virtuals: true,//if there are any virtuals, use them. mongoose creates a virtual id string automatically
    transform(obj, json) {
      delete json._id;
      delete json.__v;
    }
  });
}

module.exports = globalToJSON;
