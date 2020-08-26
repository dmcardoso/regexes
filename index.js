const categoria = 'Blue';

// console.log(/blue/gi.test(categoria));
// console.log(categoria.match(/blue/gi));

const cinco = '51345 651345 2564 abc12 12abc';

// console.log(/\d{1,}/gi.test(cinco));
// console.log(cinco.match(/\d{1,}/gi));

const objeto = '"Nome" "Sexo"';

// console.log(/"(.*)"\s*?"(.*)"/gi.test(objeto));
// console.log(objeto.match(/"(.*)"\s*?"(.*)"/gi));
// console.log(objeto.replace(/"(.*)"\s*?"(.*)"/gi, 'Daniel: $1, Masculino: $2'));

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie scelerisque ultrices. Phasellus ac aliquet libero. Vivamus eu ante ullamcorper, facilisis mi nec, lobortis leo. Integer cursus enim non dapibus porta. Donec feugiat efficitur consequat. Morbi purus purus, bibendum vitae turpis at, tincidunt ornare orci. Nulla facilisi.

Aenean eros ligula, vestibulum sodales imperdiet id, sodales non nunc. Donec a tincidunt erat. Vivamus vel semper neque, ac iaculis risus. Vivamus sed ornare eros. Morbi gravida suscipit velit pharetra efficitur. Duis convallis libero risus, id congue lacus pretium et. Nulla luctus sagittis tempus. Donec cursus tristique ligula, sed placerat enim rhoncus et. Maecenas aliquet, ante non mollis facilisis, arcu metus hendrerit magna, at tristique odio risus eget nibh. In hac habitasse platea dictumst. Fusce vel mattis metus. Nam nec est metus. Nulla facilisi. Ut non elit hendrerit, efficitur ipsum sit amet, tristique enim. Aenean ornare congue massa, in commodo diam pharetra sit amet.

Proin convallis turpis vitae ante mattis malesuada sit amet facilisis risus. Aliquam accumsan, purus vel pulvinar pulvinar, ligula enim accumsan lacus, dapibus placerat sapien risus sed ipsum. Nunc ultrices orci et dictum viverra. Etiam ultricies tellus eget congue mollis. Donec semper, est quis dapibus iaculis, velit leo interdum massa, vitae semper tellus ante non sapien. Sed porttitor scelerisque lectus, quis malesuada dolor molestie eu. Praesent cursus urna sit amet quam sagittis, at tincidunt nibh placerat. Nunc ac faucibus lorem, at mattis mi. Quisque euismod diam at nulla varius, sed tincidunt dui imperdiet. Cras imperdiet orci magna, id sagittis velit tincidunt vitae. Curabitur molestie dictum lectus, sed venenatis massa finibus sed.

Maecenas in metus ut sapien viverra sodales quis sed nulla. Ut augue augue, tincidunt at maximus nec, varius vel nulla. Maecenas aliquam nibh at purus laoreet pulvinar. In id turpis fringilla ipsum viverra hendrerit. Aliquam aliquam risus libero, sed commodo sapien tristique et. Duis porta accumsan quam. Pellentesque elit leo, ultricies nec purus at, consectetur finibus elit. Curabitur sit amet auctor lorem, ut commodo dui. Praesent maximus, velit sit amet laoreet facilisis, nisl enim rutrum ipsum, a imperdiet augue nisi sed leo. Morbi dictum ex eu mi eleifend interdum. Mauris rhoncus fringilla felis, et volutpat enim euismod vel. Donec id consectetur urna, in fermentum sapien. Curabitur consectetur turpis et mollis consequat.

Nam viverra turpis vel consequat convallis. Sed vel dui risus. Proin sodales euismod diam vel tempor. Proin lobortis malesuada tortor, quis auctor dui viverra nec. Suspendisse non erat mollis, sollicitudin enim in, rutrum justo. Maecenas eget nunc a lectus lobortis interdum eu vitae leo. Nunc ut odio diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut non felis a mauris condimentum lobortis eu a metus. Ut neque mauris, commodo at dignissim sed, congue ut orci. Vestibulum euismod ultrices vestibulum. Aenean tincidunt ultrices sollicitudin. Etiam vel metus orci.`;


// console.log(/([A-Z])/g.test(loremIpsum));
// console.log(loremIpsum.match(/([A-Z])/g));
// console.log(loremIpsum.match(/(Lorem ipsum)/m));
// console.log(loremIpsum.replace(/(lorem ipsum)/mi, 'OLÁAAAAAAAAAAAAAAA'));
// console.log(loremIpsum.replace(/(lorem ipsum)/m, 'OLÁAAAAAAAAAAAAAAA'));
// console.log(/(lorem ipsum)/gi.exec(loremIpsum));

// const reg = new RegExp(/^((?!lorem ipsum).)(.*)\n*?/, 'gim');
// console.log(loremIpsum.match(/^((?!lorem ipsum).)(.*)\n*?/gim));
