var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var player;
(function (player) {
    //地图上奔跑的玩家
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player() {
            var _this = _super.call(this) || this;
            _this.SKIN_NAME = "player_skin_";
            _this._skinID = 0;
            _this._speed = 0;
            _this.skinSprite = new egret.Sprite();
            _this.addChild(_this.skinSprite);
            _this.skinID = 0;
            _this.speed = 5;
            _this.direction = player.Direction.TOP;
            return _this;
        }
        Object.defineProperty(Player.prototype, "skinID", {
            get: function () {
                return this._skinID;
            },
            //设置皮肤
            set: function (v) {
                this._skinID = v;
                this._playerImg = utils.DisplayObjectUtil.createBitmapByName(this.SKIN_NAME + this.skinID + "_png");
                this.skinSprite.addChild(this._playerImg);
                this._playerImg.x = -this._playerImg.width / 2;
                this._playerImg.y = -this._playerImg.height / 2;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player.prototype, "pos", {
            set: function (v) {
                this.x = v.x;
                this.y = v.y;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player.prototype, "speed", {
            get: function () {
                return this._speed;
            },
            set: function (v) {
                this._speed = v;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player.prototype, "direction", {
            get: function () {
                return this._dir;
            },
            //改变奔跑方向
            set: function (dir) {
                this._dir = dir;
                if (dir == player.Direction.LEFT) {
                    this._xPower = -1;
                    this._yPower = 0;
                    this.skinSprite.rotation = -90;
                }
                else if (dir == player.Direction.TOP) {
                    this._xPower = 0;
                    this._yPower = -1;
                    this.skinSprite.rotation = 0;
                }
                else if (dir == player.Direction.RIGHT) {
                    this._xPower = 1;
                    this._yPower = 0;
                    this.skinSprite.rotation = 90;
                }
                else if (dir == player.Direction.BOTTOM) {
                    this._xPower = 0;
                    this._yPower = 1;
                    this.skinSprite.rotation = 180;
                }
            },
            enumerable: true,
            configurable: true
        });
        //跳跃
        Player.prototype.jump = function () {
            console.log("player jump.......");
        };
        //人物移动
        Player.prototype.move = function () {
            this.x += this._xPower * this.speed;
            this.y += this._yPower * this.speed;
        };
        return Player;
    }(egret.Sprite));
    player.Player = Player;
    __reflect(Player.prototype, "player.Player");
})(player || (player = {}));
//# sourceMappingURL=Player.js.map