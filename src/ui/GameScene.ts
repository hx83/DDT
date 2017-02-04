module ui 
{
	export class GameScene extends egret.Sprite
	{
		private player:player.Player;
    	private _map:map.Map;

		public constructor() 
		{
			super();

			this._map = new map.Map();
			this.addChild(this._map);
			this.player = new player.Player();
			this._map.addPlayer(this.player);
			
			Camera.setup(this._map);
			Camera.follow(this.player);
		}

		public update():void
		{
			this.player.move();
			//console.log(this._map.isOnMap(this.player.x,this.player.y));
			var grid:map.BaseGrid = this._map.getPlayerGrid();
			if(grid == null)
			{
				console.warn("dead!");
			}
			else
			{
				this._map.mapLevel = grid.info.mapLevel;
			}
		}
	}
}