var assert = require('assert')
  , lab = require('lab')
  , Stream = require('stream').Stream
  , ChunkedStream = require('..')

// setup BDD
var describe = lab.experiment
  , it = lab.test
  , expect = lab.expect
  , before = lab.before
  , after = lab.after

//console.dir(ChunkedStream)

describe('ChunkedStream', function () {
  var chunkedStream = ChunkedStream()

  it('should be a ChunkedStream', function (done) {
    assert.ok(chunkedStream instanceof ChunkedStream)
    done()
  })

  it('should be a Stream', function (done) {
    assert.ok(chunkedStream instanceof Stream)
    done()
  })

  it('should accumulate the value written to it', function (done) {
    chunkedStream.on('data', function (data) {
      assert.deepEqual(data, 'cool story\n')
      done()
    })
    chunkedStream.write('cool story\nbro')
  })

  // configure a chunkedStream to chunk on tabs
  var tabChunkedStream = ChunkedStream('\t')

  it('should chunk on configured matcher', function (done) {
    tabChunkedStream.on('data', function (data) {
      assert.deepEqual(data, 'one fish\t')
      done()
    })
    tabChunkedStream.write('one fish\ttwo fish\tred fish\tblue fish\t\n')
  })
})
