module map 
{
	export class FirstGrid extends BaseGrid
	{
		public constructor() 
		{
			super();
		}

		protected setGridSkin():void
		{
			//super.setGridSkin();

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
			this.graphics.clear();
			this.graphics.beginFill(c);
			//this.graphics.lineStyle(1,0);
			this.graphics.drawCircle(GridConst.GRId_SIZE/2,0,GridConst.GRId_SIZE*1.5);
			this.graphics.endFill();

		}


	}
}