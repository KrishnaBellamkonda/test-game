gdjs.Level_321Code = {};
gdjs.Level_321Code.GDMonsterObjects1= [];
gdjs.Level_321Code.GDMonsterObjects2= [];
gdjs.Level_321Code.GDNewTiledSpriteObjects1= [];
gdjs.Level_321Code.GDNewTiledSpriteObjects2= [];
gdjs.Level_321Code.GDStarObjects1= [];
gdjs.Level_321Code.GDStarObjects2= [];
gdjs.Level_321Code.GDTargetObjects1= [];
gdjs.Level_321Code.GDTargetObjects2= [];

gdjs.Level_321Code.conditionTrue_0 = {val:false};
gdjs.Level_321Code.condition0IsTrue_0 = {val:false};
gdjs.Level_321Code.condition1IsTrue_0 = {val:false};


gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDStarObjects1Objects = Hashtable.newFrom({"Star": gdjs.Level_321Code.GDStarObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDMonsterObjects1Objects = Hashtable.newFrom({"Monster": gdjs.Level_321Code.GDMonsterObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDTargetObjects1Objects = Hashtable.newFrom({"Target": gdjs.Level_321Code.GDTargetObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDMonsterObjects1Objects = Hashtable.newFrom({"Monster": gdjs.Level_321Code.GDMonsterObjects1});gdjs.Level_321Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.Level_321Code.GDMonsterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Star"), gdjs.Level_321Code.GDStarObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDStarObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDMonsterObjects1Objects, false, runtimeScene, true);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.Level_321Code.GDMonsterObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Level_321Code.GDMonsterObjects1.length !== 0 ? gdjs.Level_321Code.GDMonsterObjects1[0] : null), true, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Monster"), gdjs.Level_321Code.GDMonsterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Target"), gdjs.Level_321Code.GDTargetObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDTargetObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDMonsterObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Win ", false);
}}

}


{


{
}

}


};

gdjs.Level_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_321Code.GDMonsterObjects1.length = 0;
gdjs.Level_321Code.GDMonsterObjects2.length = 0;
gdjs.Level_321Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Level_321Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.Level_321Code.GDStarObjects1.length = 0;
gdjs.Level_321Code.GDStarObjects2.length = 0;
gdjs.Level_321Code.GDTargetObjects1.length = 0;
gdjs.Level_321Code.GDTargetObjects2.length = 0;

gdjs.Level_321Code.eventsList0(runtimeScene);
return;

}

gdjs['Level_321Code'] = gdjs.Level_321Code;
