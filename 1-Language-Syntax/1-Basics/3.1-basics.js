//Primiteves: Number, String, Boolean,Null, undefiend, Symbol
//Objects: Object, Array, Function

console.table({
    Number: typeof 22,
    String: typeof "city name",
    Boolean: typeof false,
    Null: typeof null, // will return "object", since this is a JS bug
    Undefiend: typeof undefined,
    Symbol: typeof Symbol("Foo"),
});
