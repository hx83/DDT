var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ui;
(function (ui) {
    var GameScene = (function (_super) {
        __extends(GameScene, _super);
        function GameScene() {
            var _this = _super.call(this) || this;
            _this._map = new map.Map();
            _this.addChild(_this._map);
            _this.player = new player.Player();
            _this._map.addPlayer(_this.player);
            Camera.setup(_this._map);
            Camera.follow(_this.player);
            return _this;
        }
        GameScene.prototype.update = function () {
            this.player.move();
            //console.log(this._map.isOnMap(this.player.x,this.player.y));
            var grid = this._map.getPlayerGrid();
            if (grid == null) {
                console.warn("dead!");
            }
            else {
                this._map.mapLevel = grid.info.mapLevel;
            }
        };
        return GameScene;
    }(egret.Sprite));
    ui.GameScene = GameScene;
    __reflect(GameScene.prototype, "ui.GameScene");
})(ui || (ui = {}));
//# sourceMappingURL=GameScene.js.map