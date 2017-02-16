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
    //结算界面
    var ResultPanel = (function (_super) {
        __extends(ResultPanel, _super);
        function ResultPanel() {
            var _this = _super.call(this) || this;
            _this.bg = utils.DisplayObjectUtil.createBitmapByName("result_panel_bg_png");
            _this.addChild(_this.bg);
            _this.width = _this.bg.width;
            _this.height = _this.bg.height;
            _this.restartBtn = utils.DisplayObjectUtil.createBitmapByName("result_panel_restart_btn_png");
            _this.shareIcon = utils.DisplayObjectUtil.createBitmapByName("share_icon_png");
            _this.homeIcon = utils.DisplayObjectUtil.createBitmapByName("home_icon_png");
            _this.shopIcon = utils.DisplayObjectUtil.createBitmapByName("shop_icon_png");
            var iconList = [_this.shareIcon, _this.homeIcon, _this.shopIcon];
            var gap = 95;
            var allIconWidth = _this.shareIcon.width + _this.homeIcon.width + _this.shopIcon.width + 95 * 2;
            var ox = (_this.width - allIconWidth) / 2;
            for (var index = 0; index < iconList.length; index++) {
                var icon = iconList[index];
                icon.x = ox + (icon.width + gap) * index;
                icon.y = _this.height - 136;
                _this.addChild(icon);
            }
            //
            utils.DisplayObjectUtil.centerObj(_this.restartBtn, _this);
            _this.restartBtn.y += 30;
            _this.addChild(_this.restartBtn);
            return _this;
        }
        return ResultPanel;
    }(egret.Sprite));
    ui.ResultPanel = ResultPanel;
    __reflect(ResultPanel.prototype, "ui.ResultPanel");
})(ui || (ui = {}));
//# sourceMappingURL=ResultPanel.js.map