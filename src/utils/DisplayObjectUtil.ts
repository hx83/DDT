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
	}
}