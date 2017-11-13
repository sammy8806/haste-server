{

  "host": "127.0.0.1",
  "port": 8084,

  "keyLength": 10,

  "maxLength": 4000000,

  "staticMaxAge": 86400,

  "recompressStaticAssets": true,

  "logging": [
    {
      "level": "verbose",
      "type": "Console",
      "colorize": true
    }
  ],

  "keyGenerator": {
    "type": "phonetic"
  },

  "storage": {
	"path": "./data",
	"type": "file"
  },

  "documents": {
    "about": "./about.md"
  }

}
