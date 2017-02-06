var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var utils;
(function (utils) {
    var DisplayObjectUtil = (function () {
        function DisplayObjectUtil() {
        }
        DisplayObjectUtil.createBitmapByName = function (name) {
            var result = new egret.Bitmap();
            var texture = RES.getRes(name);
            result.texture = texture;
            return result;
        };
        DisplayObjectUtil.removeFromParent = function (dis) {
            if (dis != null) {
                if (dis.parent != null) {
                    dis.parent.removeChild(dis);
                }
            }
        };
        return DisplayObjectUtil;
    }());
    utils.DisplayObjectUtil = DisplayObjectUtil;
    __reflect(DisplayObjectUtil.prototype, "utils.DisplayObjectUtil");
})(utils || (utils = {}));
//# sourceMappingURL=DisplayObjectUtil.js.map