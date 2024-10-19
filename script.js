const student={
	name : 'Sarthak'
}
Object.prototype.getkeys=function(){
	return Object.keys(this);
}
console.log(student.getKeys());