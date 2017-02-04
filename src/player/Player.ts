module player 
{
	//地图上奔跑的玩家
	export class Player extends egret.Sprite
	{
		protected SKIN_NAME:string = "player_skin_";
		protected _skinID:number = 0;
		protected _speed:number = 0;
		protected _dir:Direction;

		protected _playerImg:egret.Bitmap;

		protected _xPower:number;
		protected _yPower:number;
		protected skinSprite:egret.Sprite;

		public constructor() 
		{
			super();
			this.skinSprite = new egret.Sprite();
			this.addChild(this.skinSprite);

			this.skinID = 0;
			this.speed = 5;
			this.direction = Direction.TOP;

			
		}
		//设置皮肤
		public set skinID(v:number)
		{
			this._skinID = v;
			this._playerImg = utils.DisplayObjectUtil.createBitmapByName(this.SKIN_NAME + this.skinID + "_png");
			this.skinSprite.addChild(this._playerImg);
			this._playerImg.x = -this._playerImg.width/2;
			this._playerImg.y = -this._playerImg.height/2;
		}
		
		public set pos(v : egret.Point) 
		{
			this.x = v.x;
			this.y = v.y;
		}
		

		public get skinID():number
		{
			return this._skinID;
		}

		public set speed(v:number)
		{
			this._speed = v;
		}

		public get speed():number
		{
			return this._speed;
		}
		//改变奔跑方向
		public set direction(dir:Direction)
		{
			this._dir = dir;
			if(dir == Direction.LEFT)
			{
				this._xPower = -1;
				this._yPower = 0;
				this.skinSprite.rotation = -90;
			}
			else if(dir == Direction.TOP)
			{
				this._xPower = 0;
				this._yPower = -1;
				this.skinSprite.rotation = 0;
			}
			else if(dir == Direction.RIGHT)
			{
				this._xPower = 1;
				this._yPower = 0;
				this.skinSprite.rotation = 90;
			}
			else if(dir == Direction.BOTTOM)
			{
				this._xPower = 0;
				this._yPower = 1;
				this.skinSprite.rotation = 180;
			}
		}

		public get direction():Direction
		{
			return this._dir;
		}
		//跳跃
		public jump():void
		{
			console.log("player jump.......");
		}
		//人物移动
		public move():void
		{
			this.x += this._xPower*this.speed;
			this.y += this._yPower*this.speed;
		}
	}
}