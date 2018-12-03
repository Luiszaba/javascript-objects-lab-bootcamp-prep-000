var Obj = {foo: 'bar'};
var newObj = object.assign({}, obj)

newObj // {foo: 'bar'}

delete newObj.foo //true

obj // {foo: 'bar'}