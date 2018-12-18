const shout = (string) => {
  return string.toUpperCase();
}

const whisper = (string) => {
  return string.toLowerCase();
}

const logShout = (string) => {
  console.log(string.toUpperCase());
}

const logWhisper = (string) => {
  console.log(string.toLowerCase);
}

/*
describe('logWhisper(string)', function() {
  it('calls console.log() its one argument in all lowercase', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logWhisper('HELLO')

    expect(spy).toHaveBeenCalledWith('hello')

    console.log.restore()
  })
})
*/