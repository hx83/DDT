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
    var FirstGrid = (function (_super) {
        __extends(FirstGrid, _super);
        function FirstGrid() {
            return _super.call(this) || this;
        }
        FirstGrid.prototype.setGridSkin = function () {
            //super.setGridSkin();
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
            this.graphics.clear();
            this.graphics.beginFill(c);
            this.graphics.lineStyle(1, 0);
            this.graphics.drawCircle(map.GridConst.GRId_SIZE / 2, 0, map.GridConst.GRId_SIZE * 2);
            this.graphics.endFill();
        };
        return FirstGrid;
    }(map.BaseGrid));
    map.FirstGrid = FirstGrid;
    __reflect(FirstGrid.prototype, "map.FirstGrid");
})(map || (map = {}));
//# sourceMappingURL=FirstGrid.js.map