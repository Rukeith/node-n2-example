function *foo() {
    // 輸出返回值0
    var x = yield 0;
    // 取得帶回的數字，並將其加一
    x++;
    // 輸出結果成返回值
    yield x;
}

var f = foo();

var first = f.next();
console.log(first);
console.log(first.value);

var second = f.next(first.value);
console.log(second.value);
