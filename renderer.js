var fs = require("fs");
// Function that handles the reading of files and merges in values

function view(templateName, values, response) {
  var fileContents = fs.readFileSync('./views/' + templateName + '.html', {encoding: 'utf8'});
  // Insert values into content
  fileContents = mergeValues(values, fileContents);
  // Write out to the response
  response.write(fileContents);
}

function mergeValues(values, content) {
  // Cycle over all the keys
  for (var key in values) {
     // Replace all {{key}} with the value from the values object
    
    content = content.replace("{{" + key + "}}", values[key]);
  }
  return content;
}

module.exports.view = view;