function TileSet (route, tileSet) {
  for (let property in tileSet) {
    if (tileSet.hasOwnProperty(property)) {
      this[property] = tileSet[property]
    }
  }

  this.baseTexture = PIXI.Texture.fromImage(route + '/the-game/' + tileSet.image.source, false, PIXI.SCALE_MODES.NEAREST)
  this.textures = []

  for (let y = this.margin; y < this.image.height; y += this.tileHeight + this.spacing) {
    for (let x = this.margin; x < this.image.width; x += this.tileWidth + this.spacing) {
      this.textures.push(new PIXI.Texture(this.baseTexture, new PIXI.Rectangle(x, y, this.tileWidth, this.tileHeight)))
    }
  }
}

module.exports = TileSet
