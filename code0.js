gdjs.OpeningCode = {};
gdjs.OpeningCode.GDHeaderObjects1= [];
gdjs.OpeningCode.GDHeaderObjects2= [];
gdjs.OpeningCode.GDNewTiledSpriteObjects1= [];
gdjs.OpeningCode.GDNewTiledSpriteObjects2= [];
gdjs.OpeningCode.GDStartObjects1= [];
gdjs.OpeningCode.GDStartObjects2= [];

gdjs.OpeningCode.conditionTrue_0 = {val:false};
gdjs.OpeningCode.condition0IsTrue_0 = {val:false};
gdjs.OpeningCode.condition1IsTrue_0 = {val:false};


gdjs.OpeningCode.mapOfGDgdjs_46OpeningCode_46GDStartObjects1Objects = Hashtable.newFrom({"Start": gdjs.OpeningCode.GDStartObjects1});gdjs.OpeningCode.eventsList0 = function(runtimeScene) {

{


gdjs.OpeningCode.condition0IsTrue_0.val = false;
{
gdjs.OpeningCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.OpeningCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


};gdjs.OpeningCode.mapOfGDgdjs_46OpeningCode_46GDStartObjects1Objects = Hashtable.newFrom({"Start": gdjs.OpeningCode.GDStartObjects1});gdjs.OpeningCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.OpeningCode.GDStartObjects1);

gdjs.OpeningCode.condition0IsTrue_0.val = false;
{
gdjs.OpeningCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.OpeningCode.mapOfGDgdjs_46OpeningCode_46GDStartObjects1Objects, runtimeScene, true, false);
}if (gdjs.OpeningCode.condition0IsTrue_0.val) {
/* Reuse gdjs.OpeningCode.GDStartObjects1 */
{for(var i = 0, len = gdjs.OpeningCode.GDStartObjects1.length ;i < len;++i) {
    gdjs.OpeningCode.GDStartObjects1[i].setCharacterSize(56);
}
}
{ //Subevents
gdjs.OpeningCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.OpeningCode.GDStartObjects1);

gdjs.OpeningCode.condition0IsTrue_0.val = false;
{
gdjs.OpeningCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.OpeningCode.mapOfGDgdjs_46OpeningCode_46GDStartObjects1Objects, runtimeScene, true, true);
}if (gdjs.OpeningCode.condition0IsTrue_0.val) {
/* Reuse gdjs.OpeningCode.GDStartObjects1 */
{for(var i = 0, len = gdjs.OpeningCode.GDStartObjects1.length ;i < len;++i) {
    gdjs.OpeningCode.GDStartObjects1[i].setCharacterSize(48);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Header"), gdjs.OpeningCode.GDHeaderObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.OpeningCode.GDNewTiledSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.OpeningCode.GDStartObjects1);
{for(var i = 0, len = gdjs.OpeningCode.GDHeaderObjects1.length ;i < len;++i) {
    gdjs.OpeningCode.GDHeaderObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.OpeningCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.OpeningCode.GDNewTiledSpriteObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.OpeningCode.GDStartObjects1.length ;i < len;++i) {
    gdjs.OpeningCode.GDStartObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}}

}


{


{
}

}


};

gdjs.OpeningCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.OpeningCode.GDHeaderObjects1.length = 0;
gdjs.OpeningCode.GDHeaderObjects2.length = 0;
gdjs.OpeningCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.OpeningCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.OpeningCode.GDStartObjects1.length = 0;
gdjs.OpeningCode.GDStartObjects2.length = 0;

gdjs.OpeningCode.eventsList1(runtimeScene);
return;

}

gdjs['OpeningCode'] = gdjs.OpeningCode;
