export async function hello2(msg: string) {
  console.log('server-side[1]: '+msg)
  return 'Msg 52: '+msg;
}

export async function hello(name: string) {
  console.log('server-side[2]: '+name)
 return 'welcome '+name;
}
