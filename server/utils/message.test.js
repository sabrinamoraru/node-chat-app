var expect = require("expect");

var { generateMessage } = require("./message");

describe("generateMessage", () => {
  it("should generate correct message object", () => {
    var from = "Alex";
    var text = "Some meesage";
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA("number");
    expect(message).toInclude({ from, text });
    // store res in variable
    // assert from match
    // assert text match
    // assert cretedAt is number
  });
});
