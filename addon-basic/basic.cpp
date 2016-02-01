#include <node.h>
#include <v8.h>

using namespace v8;

void init(Handle<Object> exports) {
    // 在 module.exports 上添加一個屬性 hello，並賦予一個字串 world
    exports->Set(String::NewSymbol("hello"), String::New("world"));
}

// 編譯出 basic.node 的原生模組檔案
// 當這個模組被載入時，會使用 init() 函數進行初始化
NODE_MODULE(basic, init);
