$.validator.addMethod("isUserName", function(value, element) {
var chrnum = /^([a-zA-Z0-9]{6,10})$/;
return this.optional(element) || (chrnum.test(value));
}, "用户名只能输入6到10位的数字或字母");