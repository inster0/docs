var marked = require('marked');
var fs = require('fs');
var async = require('async');
var docs = ['README', 'terms_of_service', 'privacy_policy'];
async.each(docs, function(doc, callback) {
    fs.readFile('./' + doc + '.md', 'utf8', function (err, data) {
        if (err) {
            return callback(err);
        }
        fs.writeFile('./' + doc + '.html', marked(data), function(err) {
            if(err) {
                return callback(err);
            }
            callback();
        });
    });
}, function(err) {
    if (err) return console.log(err);
    console.log('All docs have been parsed.');
});
