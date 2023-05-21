// hoisting

hello();

const hello = function () {
  console.log("Hello world");
};

sayHello();

const sayHello = () => {
  console.log("hello everyone");
};
