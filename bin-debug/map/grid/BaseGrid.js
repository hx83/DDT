var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var map;
(function (map) {
    //地图上的格子基类
    var BaseGrid = (function (_super) {
        __extends(BaseGrid, _super);
        function BaseGrid() {
            return _super.call(this) || this;
            //this.type = GridType.NORMAL;
        }
        // public get type() : number 
        // {
        // 	return GridType.NORMAL;
        // }
        // public set type(v : number) 
        // {
        // 	this._type = v;
        // }
        //检查某个点是否在格子里
        BaseGrid.prototype.checkIsOnRoad = function (p) {
            return true;
        };
        Object.defineProperty(BaseGrid.prototype, "foodPoint", {
            //生成食物的点
            get: function () {
                return new egret.Point(map.GridConst.GRId_SIZE / 2, map.GridConst.GRId_SIZE / 2);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseGrid.prototype, "info", {
            get: function () {
                return this._info;
            },
            set: function (v) {
                this._info = v;
                this.x = v.xIndex * map.GridConst.GRId_SIZE;
                this.y = v.yIndex * map.GridConst.GRId_SIZE;
                this.setGridSkin();
                if (v.isShowArrow) {
                    var bmp = utils.DisplayObjectUtil.createBitmapByName("arrow_" + v.nextNode.dir + "_png");
                    this.addChild(bmp);
                }
            },
            enumerable: true,
            configurable: true
        });
        BaseGrid.prototype.setGridSkin = function () {
            var c = 0xffffff;
            if (this._info.mapLevel == 2) {
                c = 0xffff00;
            }
            else if (this._info.mapLevel == 3) {
                c = 0xff0000;
            }
            else if (this._info.mapLevel == 4) {
                c = 0xff00ff;
            }
            this.graphics.beginFill(c);
            this.graphics.lineStyle(1, 0);
            this.graphics.drawRect(0, 0, map.GridConst.GRId_SIZE, map.GridConst.GRId_SIZE);
            this.graphics.endFill();
        };
        return BaseGrid;
    }(egret.Sprite));
    map.BaseGrid = BaseGrid;
    __reflect(BaseGrid.prototype, "map.BaseGrid");
})(map || (map = {}));
//# sourceMappingURL=BaseGrid.js.map