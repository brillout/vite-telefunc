import { getContext } from "telefunc";

export async function hello2(msg: string) {
  console.log("server-side[1]: " + msg);
  const ctx = getContext()
  console.log("c1", Object.keys(ctx).sort(), 'c2', ctx.headers);
  return "Msg 52: " + msg;
}

export async function hello(name: string) {
  console.log("server-side[2]: " + name);
  const ctx = getContext()
  return "welcome " + name;
}
