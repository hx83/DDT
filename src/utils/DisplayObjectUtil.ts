module utils 
{
	export class DisplayObjectUtil 
	{
		public constructor() {
		}

		public static createBitmapByName(name:string):egret.Bitmap 
		{
			let result = new egret.Bitmap();
			let texture:egret.Texture = RES.getRes(name);
			result.texture = texture;
			return result;
		}

		public static removeFromParent(dis:egret.DisplayObject)
		{
			if(dis != null)
			{
				if(dis.parent != null)
				{
					dis.parent.removeChild(dis);
				}
			}
		}
	}
}