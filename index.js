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
  console.log(string.toLowerCase());
}

const sayHiToGrandma = (string) {
  if (string = lowercase) {
    return "I can't hear you!";
  } if else (string = uppercase) {
    return "YES INDEED!";
  } else {
    
  }
}

/*
describe('sayHiToGrandma(string)', function() {
  it('returns "I can\'t hear you!" if `string` is lowercase', function() {
    expect(sayHiToGrandma('hello')).toEqual("I can't hear you!")
  })

  it('returns "YES INDEED!" if `string` is uppercase', function() {
    expect(sayHiToGrandma('HELLO')).toEqual("YES INDEED!")
  })

  it('returns "I love you, too." if `string` is "I love you, Grandma."`', function() {
    expect(sayHiToGrandma("I love you, Grandma.")).toEqual("I love you, too.")
  })
})
*/