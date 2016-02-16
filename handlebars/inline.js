var source   = $('#entry-template').html();
console.log(source);
var template = Handlebars.compile(source);

console.log(template);
var context = { title: 'My New Post', body: 'This is my first post!' };

console.log(context);
var html = template(context);

console.log(html);

$('result').html(html);
