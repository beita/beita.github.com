// Created by iWeb 3.0.4 local-build-20120503

function createMediaStream_id5()
{return IWCreatePhotocast("http://zhoudeming.com/Beta_de_zhu_ye/wo_de_xiang_bu/ye_mian/zhou_sui_zhao_files/rss.xml",true);}
function initializeMediaStream_id5()
{createMediaStream_id5().load('http://zhoudeming.com/Beta_de_zhu_ye/wo_de_xiang_bu/ye_mian',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id5',{pageIndex:0}));});}
function layoutMediaGrid_id5(range)
{createMediaStream_id5().load('http://zhoudeming.com/Beta_de_zhu_ye/wo_de_xiang_bu/ye_mian',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id5',new IWPhotoGridLayout(3,new IWSize(183,183),new IWSize(183,30),new IWSize(219,228),27,27,0,new IWSize(24,30)),new IWPhotoFrame([IWCreateImage('zhou_sui_zhao_files/dots_ul.png'),IWCreateImage('zhou_sui_zhao_files/dots_top.png'),IWCreateImage('zhou_sui_zhao_files/dots_ur.png'),IWCreateImage('zhou_sui_zhao_files/dots_right.png'),IWCreateImage('zhou_sui_zhao_files/dots_lr.png'),IWCreateImage('zhou_sui_zhao_files/dots_bottom.png'),IWCreateImage('zhou_sui_zhao_files/dots_ll.png'),IWCreateImage('zhou_sui_zhao_files/dots_left.png')],null,0,0.666667,74.000000,7.000000,74.000000,18.000000,92.000000,25.000000,92.000000,44.000000,438.000000,316.000000,438.000000,316.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'../../Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id5(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id5(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id5(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('zhou_sui_zhao_files/zhou_sui_zhaoMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');NotificationCenter.addObserver(null,relayoutMediaGrid_id5,'RangeChanged','id5')
fixAllIEPNGs('../../Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();fixupIECSS3Opacity('id6');initializeMediaStream_id5()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
