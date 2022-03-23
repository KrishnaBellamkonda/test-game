gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.GDHeaderObjects1= [];
gdjs.Game_32OverCode.GDHeaderObjects2= [];
gdjs.Game_32OverCode.GDPlayAgainObjects1= [];
gdjs.Game_32OverCode.GDPlayAgainObjects2= [];

gdjs.Game_32OverCode.conditionTrue_0 = {val:false};
gdjs.Game_32OverCode.condition0IsTrue_0 = {val:false};
gdjs.Game_32OverCode.condition1IsTrue_0 = {val:false};


gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDPlayAgainObjects1Objects = Hashtable.newFrom({"PlayAgain": gdjs.Game_32OverCode.GDPlayAgainObjects1});gdjs.Game_32OverCode.eventsList0 = function(runtimeScene) {

{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


};gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDPlayAgainObjects1Objects = Hashtable.newFrom({"PlayAgain": gdjs.Game_32OverCode.GDPlayAgainObjects1});gdjs.Game_32OverCode.eventsList1 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Header"), gdjs.Game_32OverCode.GDHeaderObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayAgain"), gdjs.Game_32OverCode.GDPlayAgainObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDPlayAgainObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDPlayAgainObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.Game_32OverCode.GDHeaderObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDHeaderObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayAgain"), gdjs.Game_32OverCode.GDPlayAgainObjects1);

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDPlayAgainObjects1Objects, runtimeScene, true, false);
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_32OverCode.GDPlayAgainObjects1 */
{for(var i = 0, len = gdjs.Game_32OverCode.GDPlayAgainObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDPlayAgainObjects1[i].setScale(0.7);
}
}
{ //Subevents
gdjs.Game_32OverCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayAgain"), gdjs.Game_32OverCode.GDPlayAgainObjects1);

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDPlayAgainObjects1Objects, runtimeScene, true, true);
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_32OverCode.GDPlayAgainObjects1 */
{for(var i = 0, len = gdjs.Game_32OverCode.GDPlayAgainObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDPlayAgainObjects1[i].setScale(0.5);
}
}}

}


{


{
}

}


};

gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32OverCode.GDHeaderObjects1.length = 0;
gdjs.Game_32OverCode.GDHeaderObjects2.length = 0;
gdjs.Game_32OverCode.GDPlayAgainObjects1.length = 0;
gdjs.Game_32OverCode.GDPlayAgainObjects2.length = 0;

gdjs.Game_32OverCode.eventsList1(runtimeScene);
return;

}

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
