module map 
{
	//地图上的格子基类
	export class BaseGrid extends egret.Sprite
	{
		//protected _type:number;
		protected _info:MapNode;
		public prevGrid:BaseGrid;
		public nextGrid:BaseGrid;
		

		public constructor() 
		{
			super();
			

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
		public checkIsOnRoad(p:egret.Point):boolean
		{
			return true;
		}
		//生成食物的点
		public get foodPoint():egret.Point
		{
			return new egret.Point(GridConst.GRId_SIZE/2,GridConst.GRId_SIZE/2);
		}


		public set info(v:MapNode)
		{
			this._info = v;
			this.x = v.xIndex*GridConst.GRId_SIZE;
			this.y = v.yIndex*GridConst.GRId_SIZE;

			this.setGridSkin();

			if(v.isShowArrow)
			{
				var bmp = utils.DisplayObjectUtil.createBitmapByName("arrow_" + v.nextNode.dir + "_png");
				this.addChild(bmp);
			}
		}

		public get info():MapNode
		{
			return this._info;
		}


		protected setGridSkin():void
		{
			var c:number = 0xffffff;
			if(this._info.mapLevel == 2)
			{
				c = 0xffff00;
			}
			else if(this._info.mapLevel == 3)
			{
				c = 0xff0000;
			}
			else if(this._info.mapLevel == 4)
			{
				c = 0xff00ff;
			}
			this.graphics.beginFill(c);
			this.graphics.lineStyle(1,0);
			this.graphics.drawRect(0,0,GridConst.GRId_SIZE,GridConst.GRId_SIZE);
			this.graphics.endFill();
		}
	}

	
}