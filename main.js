var data = "hello";
data = "data";
var num = 1;
var arr = [{}];
var valid = true;
console.log(data);
//null & undefied Data type 
var n = null;
var u = undefined;
//Array 
var list1 = [1, 2, 3, 4, 5];
var list2 = [1, 2, 3, 4, 5];
//tuple in array (Order of the value should match with order of the value)
console.log("--tuple in array (Order of the value should match with order of the value)--\n\n");
var list3 = [1, "data"];
//enum is a special "class" that represents a group of constants
console.log("--An enum is a special \"class\" that represents a group of constants--\n\n");
var datas;
(function (datas) {
    datas["red"] = "hello";
    datas["blue"] = "ss";
    datas["green"] = "ssss";
})(datas || (datas = {}));
console.log(datas.red);
//any to assign any dynamic value to the variable 
console.log("--any to assign any dynamic value to the variable--\n\n");
var convert = 6;
console.log(convert);
convert = true;
console.log(convert);
// unknown is more disciplined. It won’t let you willy-nilly perform operations on it. You need to prove its identity first!
console.log("--unknown is more disciplined. It won\u2019t let you willy-nilly perform operations on it. You need to prove its identity first!--\n\n");
var mydata = "10";
//Before do some operation we need to tell & confirm this data type 
mydata.toLowerCase();