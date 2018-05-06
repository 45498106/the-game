const PIXI = require('pixi.js')
const Rectangle = PIXI.Rectangle

class Bullet {
  constructor (texture, x, y, targetX, targetY) {
    this.animationTextures = []
    this.animationTextures.push(generateTextureFromTileMap(texture, new Rectangle(0, 48, 16, 16)))
    this.animationTextures.push(generateTextureFromTileMap(texture, new Rectangle(16, 48, 16, 16)))
    this.animationTextures.push(generateTextureFromTileMap(texture, new Rectangle(32, 48, 16, 16)))
    this.animationTextures.push(generateTextureFromTileMap(texture, new Rectangle(48, 48, 16, 16)))

    this.animation = new PIXI.extras.AnimatedSprite(this.animationTextures)
    this.animation.anchor.set(0.5)
    this.animation.position.set(x, y)
    this.animation.animationSpeed = 0.1
  }

  getAnimation () {
    return this.animation
  }

  playAnimation () {
    this.animation.play()
  }

  stopAnimation () {
    this.animation.stop()
  }

  getPosition () {
    return this.animation.position
  }
}

function generateTextureFromTileMap (tileMap, rectangle) {
  let tempTexture = tileMap.clone()
  tempTexture.frame = rectangle
  return tempTexture
}

module.exports = Bullet;
