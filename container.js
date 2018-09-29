const dependable = require('dependable');
const container = dependable.container();
const path = require('path');

const dependencyModules = [
    ['_','lodash'],
]


// iterate modules
dependencyModules.forEach(function(vitems){
    container.register(vitems[0], function(){
        return require(vitems[1]);
    })
})


// we need a path for all the file to get sorted
// load the path
container.load(path.join(__dirname + '/controllers'));
container.load(path.join(__dirname + '/helpers'));



// container register 
container.register('container', function(){
    return container;
})
module.exports = container;