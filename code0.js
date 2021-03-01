gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.GDBackgroundObjects1= [];
gdjs.Main_32MenuCode.GDBackgroundObjects2= [];
gdjs.Main_32MenuCode.GDNewObjectObjects1= [];
gdjs.Main_32MenuCode.GDNewObjectObjects2= [];
gdjs.Main_32MenuCode.GDTitleObjects1= [];
gdjs.Main_32MenuCode.GDTitleObjects2= [];
gdjs.Main_32MenuCode.GDTitleControlsObjects1= [];
gdjs.Main_32MenuCode.GDTitleControlsObjects2= [];
gdjs.Main_32MenuCode.GDControlsObjects1= [];
gdjs.Main_32MenuCode.GDControlsObjects2= [];
gdjs.Main_32MenuCode.GDContinueObjects1= [];
gdjs.Main_32MenuCode.GDContinueObjects2= [];
gdjs.Main_32MenuCode.GDSubtitleObjects1= [];
gdjs.Main_32MenuCode.GDSubtitleObjects2= [];

gdjs.Main_32MenuCode.conditionTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition0IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition1IsTrue_0 = {val:false};


gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Base scene", false);
}}

}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDBackgroundObjects1.length = 0;
gdjs.Main_32MenuCode.GDBackgroundObjects2.length = 0;
gdjs.Main_32MenuCode.GDNewObjectObjects1.length = 0;
gdjs.Main_32MenuCode.GDNewObjectObjects2.length = 0;
gdjs.Main_32MenuCode.GDTitleObjects1.length = 0;
gdjs.Main_32MenuCode.GDTitleObjects2.length = 0;
gdjs.Main_32MenuCode.GDTitleControlsObjects1.length = 0;
gdjs.Main_32MenuCode.GDTitleControlsObjects2.length = 0;
gdjs.Main_32MenuCode.GDControlsObjects1.length = 0;
gdjs.Main_32MenuCode.GDControlsObjects2.length = 0;
gdjs.Main_32MenuCode.GDContinueObjects1.length = 0;
gdjs.Main_32MenuCode.GDContinueObjects2.length = 0;
gdjs.Main_32MenuCode.GDSubtitleObjects1.length = 0;
gdjs.Main_32MenuCode.GDSubtitleObjects2.length = 0;

gdjs.Main_32MenuCode.eventsList0(runtimeScene);
return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
