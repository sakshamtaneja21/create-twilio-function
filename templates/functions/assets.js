exports.handler = function(context, event, callback) {
  callback(null, Runtime.getAssets());
};