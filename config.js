var rc = require("rc");

var defaults = {
    aws: {
        accessKeyId: "AKIAIUCT6GNTVDMWFZIQ",
        secretAccessKey: "7b46aCCdfM7N0fNmaZftkt0S/R5xl9MUYzgJI3EM"
    },

    log4js: {
        "level": "INFO",
        "replaceConsole": true,
        "appenders": [
            {"type": "console"}
        ]
    },

    s3sync:{
        regions: [
            {region:'us-east-1',suffix:'.use1'},
            {region:'us-west-2',suffix:'.usw2'},
            {region:'eu-west-1',suffix:'.euw1'},
            {region:'cn-north-1',suffix:'.cnn1',access:'',secret:''}
        ],
        buckets: [
            {src:'destiny-private',srcprefix:'/',srcregion:'us-west-2',dest:'destiny-backup',destprefix:'private-backup/',destregions:["us-west-2","eu-west-1","cn-north-1"]},
        ]
    }

};

module.exports = rc("s3sync", defaults);
