const student = {
  name: "Sarthak"
};

Object.prototype.getKeys = function() {
  return Object.keys(this);
};

console.log(student.getKeys());