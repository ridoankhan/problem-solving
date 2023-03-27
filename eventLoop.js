const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"), 500);
const baz = () => console.log("Third");
const four = () => console.log('Fourth');

foo();
bar();
baz();
four();