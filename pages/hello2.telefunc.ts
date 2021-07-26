export async function hello2(msg: string) {
  console.log('server-side: '+msg)
  return 'Msg: '+msg;
}
