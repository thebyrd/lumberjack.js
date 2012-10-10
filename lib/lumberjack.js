module.exports = Lumberjack;

function Pancake(){}//TODO put this in its own module.

Lumberjack.prototype.eat = function(callback) {
  for (var p in this.pancakes) {
    delete this.pancakes[p]
  }
  callback();
};

Lumberjack.prototype.chopWood = function(wood){
  return wood.split(this.axe);
};

Lumberjack.prototype.makePancakes = function(callback){
  for(var p in this.pancakes) {
    this.pancakes[p] = new Pancake();
  }
  callback();
};

function Lumberjack(name, axe, pancakes) {
  this.name = name;
  this.axe = axe;
  this.pancakes = pancakes;
}

