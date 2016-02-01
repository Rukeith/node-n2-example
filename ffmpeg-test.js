var ffmpeg = require('fluent-ffmpeg');

ffmpeg.getAvailableFormats(function(err, formats) {
    console.log("Available formats:");
    console.log(formats);
});

ffmpeg.getAvailableCodecs(function(err, codecs) {
    console.log("Available codecs:");
    console.log(codecs);
});
