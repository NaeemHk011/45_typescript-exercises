function make_great(magicians: string[]) {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = `the Great ${magicians[i]}`;
  }
}

function show_magicians(magicians: string[]) {
  console.log(magicians);
}

const magicians: string[] = ['Naeem', 'Hussain', 'Faheem', 'Shahmeer', 'Shehzad', 'Irfan'];
make_great(magicians);
show_magicians(magicians);
