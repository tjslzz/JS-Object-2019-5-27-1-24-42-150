var user={
	name:John,
	surname:Mike,
}
user.name = Peter;
delete user.name;

var fruit = {
	apple: 20,
	pear: 20,
	peach: 10
};
var count = 0;
for (var i in fruit){
	count += user[i];
}
console.log(count);