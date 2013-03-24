module.exports = Lumberjack;

function Pancake(){} //TODO put this in its own module.


/**
 * Lumberjack Class
 *
 * @param {String} name of lumberjack
 * @param {String} delimiter for cutting wood
 * @param {Array} set of pancakes
 */
function Lumberjack(name, axe, pancakes) {
  this.name = name;
  this.axe = axe;
  this.pancakes = pancakes;
}


/**
 * Eats pancakes
 *
 * @param {Function(!Error)} callback
 */
Lumberjack.prototype.eat = function(callback) {
  for (var p in this.pancakes) {
    delete this.pancakes[p];
  }

  callback(null);
};


/**
 * Chops wood.
 *
 * @param {String} wood
 */
Lumberjack.prototype.chopWood = function(wood){
  return wood.split(this.axe);
};


/**
 * Makes pancakes
 *
 * @param {Function(!Error, pancakes)} callback
 */
Lumberjack.prototype.makePancakes = function(callback){
  for (var p in this.pancakes) {
    this.pancakes[p] = new Pancake();
  }

  callback(null, this.pancakes);
};
