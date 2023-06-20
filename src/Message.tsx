function Message() {
  const name = "John";

  if (name) {
    return <h1>Hi, I'm a message, your name is {name} !</h1>;
  }
  return <h1>Hi, I'm a message, your name is unknown !</h1>;
}

export default Message;
