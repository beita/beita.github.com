// Created by iWeb 3.0.4 local-build-20120105

function createMediaStream_id4()
{return IWCreateMediaCollection("http://zhoudeming.com/Beta_de_zhu_ye/wo_de_xiang_bu/wo_de_xiang_bu_files/rss.xml",true,255,["暂时没有照片","%d 张照片","%d 张照片"],["","%d 个剪辑","%d 个剪辑"]);}
function initializeMediaStream_id4()
{createMediaStream_id4().load('http://zhoudeming.com/Beta_de_zhu_ye/wo_de_xiang_bu',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget4'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id4',{pageIndex:0}));});}
function layoutMediaGrid_id4(range)
{createMediaStream_id4().load('http://zhoudeming.com/Beta_de_zhu_ye/wo_de_xiang_bu',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id4',new IWPhotoGridLayout(2,new IWSize(287,215),new IWSize(287,41),new IWSize(344,271),27,27,0,new IWSize(81,71)),new IWPhotoFrame([IWCreateImage('wo_de_xiang_bu_files/kids-blue_ul.png'),IWCreateImage('wo_de_xiang_bu_files/kids-blue_top.jpg'),IWCreateImage('wo_de_xiang_bu_files/kids-blue_ur.png'),IWCreateImage('wo_de_xiang_bu_files/kids-blue_right.png'),IWCreateImage('wo_de_xiang_bu_files/kids-blue_lr.png'),IWCreateImage('wo_de_xiang_bu_files/kids-blue_bottom.png'),IWCreateImage('wo_de_xiang_bu_files/kids-blue_ll.png'),IWCreateImage('wo_de_xiang_bu_files/kids-blue_left.png')],null,0,0.697368,0.000000,0.000000,0.000000,0.000000,71.000000,43.000000,44.000000,58.000000,100.000000,105.000000,100.000000,105.000000,null,null,null,0.300000),imageStream,range,(null),null,1.000000,null,'../Media/slideshow.html','widget4',null,'widget5',{showTitle:true,showMetric:true})});}
function relayoutMediaGrid_id4(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id4(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id4(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:1,offset:new IWPoint(1.2856,1.5321),color:'#ffffff',opacity:1.000000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('wo_de_xiang_bu_files/wo_de_xiang_buMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');NotificationCenter.addObserver(null,relayoutMediaGrid_id4,'RangeChanged','id4')
adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('../Media/transparent.gif');fixupIECSS3Opacity('id6');applyEffects()
initializeMediaStream_id4()}
function onPageUnload()
{Widget.onunload();}
