var ChunkedStream = require('..')
  , chunkedStream = ChunkedStream()

chunkedStream.on('data', function (data) {
  process.stdout.write(data)
})

chunkedStream.write('cool story\nbro')
chunkedStream.end()
