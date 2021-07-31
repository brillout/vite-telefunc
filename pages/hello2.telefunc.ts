import { getContext } from "telefunc";

export async function hello2(msg: string) {
  console.log("server-side[1]: " + msg);
  console.log("c1", getContext().headers);
  return "Msg 52: " + msg;
}

export async function hello(name: string) {
  console.log("server-side[2]: " + name);
  console.log("c2", getContext().headers);
  return "welcome " + name;
}
