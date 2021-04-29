var canvas=new fabric.Canvas("mycanvas")
playerx= 10;
playery= 10;
objh=30;
objw=30;
playerobject="";
Objectimage="";
function player_update()
{
    fabric.Image.fromURL("player.png", function(Img){
        playerobject = Img;
        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(160);
        playerobject.set({
            top:playery,
            left:playerx
        });
        canvas.add(playerobject);
    });

}
function object_update(get_image)
{
fabric.Image.fromURL(get_image,function(Img){
    Objectimage=Img;
    Objectimage.scaleToWidth(objw);
    Objectimage.scaleToHeight(objh);
    Objectimage.set({
        top:playery,
        left:playerx
    });
    canvas.add(Objectimage);
});
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e)
{
    keypressed=e.keyCode;
    if(e.shiftKey==true&&keypressed=="73")
    {
        objh=objh+10;
        objw=objw+10;
        document.getElementById("curwidth").innerHTML=objw;
        document.getElementById("curheight").innerHTML=objh;
    }
    if(e.shiftKey==true&&keypressed=="68")
    {
        objh=objh-10;
        objw=objw-10;
        document.getElementById("curwidth").innerHTML=objw;
        document.getElementById("curheight").innerHTML=objh;
    }
    if (keypressed=="66")
    {
        console.log("b");
        object_update("spb.png");
    }
    if (keypressed=="83")
    {
        console.log("s");
        object_update("sp1.png");
    }
    if (keypressed=="80")
    {
        console.log("p");
        object_update("sp2.png");
    }
    if (keypressed=="70")
    {
        console.log("f");
        object_update("face.png");
    }
    if (keypressed=="87")
    {
        console.log("w");
        object_update("wed.png");
    }
}
