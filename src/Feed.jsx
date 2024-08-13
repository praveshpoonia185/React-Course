import { post } from "./Post";

function feed() {
  console.log("This is Feed");
  post();
  post();
  post();
};

function anotherFunction() {
  console.log("This is another Function");
};

export default feed;
export {anotherFunction};