module ui 
{
	//结算界面
	export class ResultPanel extends egret.Sprite
	{
		private bg:egret.Bitmap;

		private restartBtn:egret.Bitmap;
		private shareIcon:egret.Bitmap;
		private homeIcon:egret.Bitmap;
		private shopIcon:egret.Bitmap;

		public constructor() 
		{
			super();
			this.bg = utils.DisplayObjectUtil.createBitmapByName("result_panel_bg_png");
			this.addChild(this.bg);
			this.width = this.bg.width;
			this.height = this.bg.height;

			this.restartBtn = utils.DisplayObjectUtil.createBitmapByName("result_panel_restart_btn_png");

			this.shareIcon = utils.DisplayObjectUtil.createBitmapByName("share_icon_png");
			this.homeIcon = utils.DisplayObjectUtil.createBitmapByName("home_icon_png");
			this.shopIcon = utils.DisplayObjectUtil.createBitmapByName("shop_icon_png");


			var iconList:egret.Bitmap[] = [this.shareIcon,this.homeIcon,this.shopIcon];
			var gap = 95;
			
			var allIconWidth = this.shareIcon.width + this.homeIcon.width + this.shopIcon.width + 95*2;
			var ox = (this.width - allIconWidth)/2;

			for (var index = 0; index < iconList.length; index++) 
			{
				var icon:egret.Bitmap = iconList[index];
				icon.x = ox + (icon.width + gap)*index;
				icon.y = this.height - 136;

				this.addChild(icon);
			}
			//
			utils.DisplayObjectUtil.centerObj(this.restartBtn,this);
			this.restartBtn.y += 30;
			this.addChild(this.restartBtn);
		}
	}
}