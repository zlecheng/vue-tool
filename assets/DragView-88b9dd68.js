import{d as t,z as e,A as i,aG as s,M as h,B as o,bn as r,L as a,bo as c,b4 as n,g as p,V as l,E as u,I as d,b3 as g,G as f,b5 as m,b6 as w}from"./index-1d39571e.js";import{_ as v}from"./_plugin-vue_export-helper-1b428a4d.js";import{_ as C}from"./Image-1b4de766.js";import{_ as x,a as y}from"./Flex-76ca234e.js";import{_ as b}from"./Button-7a85d9a0.js";import"./utils-37f18a51.js";import"./Scrollbar-60de7495.js";import"./Tooltip-0662bf8c.js";const O={};O.getData=t=>new Promise(((e,i)=>{let s={};(function(t){let e=null;return new Promise(((i,s)=>{if(t.src)if(/^data\:/i.test(t.src))e=function(t,e){e=e||t.match(/^data\:([^\;]+)\;base64,/im)[1]||"",t=t.replace(/^data\:([^\;]+)\;base64,/gim,"");for(var i=atob(t),s=i.length%2==0?i.length:i.length+1,h=new ArrayBuffer(s),o=new Uint16Array(h),r=0;r<s;r++)o[r]=i.charCodeAt(r);return h}(t.src),i(e);else if(/^blob\:/i.test(t.src)){var h=new FileReader;h.onload=function(t){e=t.target.result,i(e)},r=t.src,(a=new XMLHttpRequest).open("GET",r,!0),a.responseType="blob",a.onload=function(t){(200==this.status||0===this.status)&&function(t){h.readAsArrayBuffer(t)}(this.response)},a.send()}else{var o=new XMLHttpRequest;o.onload=function(){if(200!=this.status&&0!==this.status)throw"Could not load image";e=o.response,i(e),o=null},o.open("GET",t.src,!0),o.responseType="arraybuffer",o.send(null)}else s("img error");var r,a}))})(t).then((t=>{s.arrayBuffer=t;try{s.orientation=function(t){var e,i,s,h,o,r,a,c,n,p=new DataView(t),l=p.byteLength;if(255===p.getUint8(0)&&216===p.getUint8(1))for(c=2;c<l;){if(255===p.getUint8(c)&&225===p.getUint8(c+1)){r=c;break}c++}if(r&&(i=r+10,"Exif"===function(t,e,i){var s,h="";for(s=e,i+=e;s<i;s++)h+=String.fromCharCode(t.getUint8(s));return h}(p,r+4,4)&&(((h=18761===(o=p.getUint16(i)))||19789===o)&&42===p.getUint16(i+2,h)&&((s=p.getUint32(i+4,h))>=8&&(a=i+s)))),a)for(l=p.getUint16(a,h),n=0;n<l;n++)if(c=a+12*n+2,274===p.getUint16(c,h)){c+=8,e=p.getUint16(c,h);break}return e}(t)}catch{s.orientation=-1}e(s)})).catch((t=>{i(t)}))}));const X=t({data:function(){return{w:0,h:0,scale:1,x:0,y:0,loading:!0,trueWidth:0,trueHeight:0,move:!0,moveX:0,moveY:0,crop:!1,cropping:!1,cropW:0,cropH:0,cropOldW:0,cropOldH:0,canChangeX:!1,canChangeY:!1,changeCropTypeX:1,changeCropTypeY:1,cropX:0,cropY:0,cropChangeX:0,cropChangeY:0,cropOffsertX:0,cropOffsertY:0,support:"",touches:[],touchNow:!1,rotate:0,isIos:!1,orientation:0,imgs:"",coe:.2,scaling:!1,scalingSet:"",coeStatus:"",isCanShow:!0,imgIsQqualCrop:!1}},props:{img:{type:[String,Blob,null,File],default:""},outputSize:{type:Number,default:1},outputType:{type:String,default:"jpeg"},info:{type:Boolean,default:!0},canScale:{type:Boolean,default:!0},autoCrop:{type:Boolean,default:!1},autoCropWidth:{type:[Number,String],default:0},autoCropHeight:{type:[Number,String],default:0},fixed:{type:Boolean,default:!1},fixedNumber:{type:Array,default:()=>[1,1]},fixedBox:{type:Boolean,default:!1},full:{type:Boolean,default:!1},canMove:{type:Boolean,default:!0},canMoveBox:{type:Boolean,default:!0},original:{type:Boolean,default:!1},centerBox:{type:Boolean,default:!1},high:{type:Boolean,default:!0},infoTrue:{type:Boolean,default:!1},maxImgSize:{type:[Number,String],default:2e3},enlarge:{type:[Number,String],default:1},preW:{type:[Number,String],default:0},mode:{type:String,default:"contain"},limitMinSize:{type:[Number,Array,String],default:()=>10,validator:function(t){return Array.isArray(t)?Number(t[0])>=0&&Number(t[1])>=0:Number(t)>=0}},fillColor:{type:String,default:""}},computed:{cropInfo(){let t={};if(t.top=this.cropOffsertY>21?"-21px":"0px",t.width=this.cropW>0?this.cropW:0,t.height=this.cropH>0?this.cropH:0,this.infoTrue){let e=1;this.high&&!this.full&&(e=window.devicePixelRatio),1!==this.enlarge&!this.full&&(e=Math.abs(Number(this.enlarge))),t.width=t.width*e,t.height=t.height*e,this.full&&(t.width=t.width/this.scale,t.height=t.height/this.scale)}return t.width=t.width.toFixed(0),t.height=t.height.toFixed(0),t},isIE:()=>!!window.ActiveXObject||"ActiveXObject"in window,passive(){return this.isIE?null:{passive:!1}},isRotateRightOrLeft(){return[1,-1,3,-3].includes(this.rotate)}},watch:{img(){this.checkedImg()},imgs(t){""!==t&&this.reload()},cropW(){this.showPreview()},cropH(){this.showPreview()},cropOffsertX(){this.showPreview()},cropOffsertY(){this.showPreview()},scale(t,e){this.showPreview()},x(){this.showPreview()},y(){this.showPreview()},autoCrop(t){t&&this.goAutoCrop()},autoCropWidth(){this.autoCrop&&this.goAutoCrop()},autoCropHeight(){this.autoCrop&&this.goAutoCrop()},mode(){this.checkedImg()},rotate(){this.showPreview(),(this.autoCrop||this.cropW>0||this.cropH>0)&&this.goAutoCrop(this.cropW,this.cropH)}},methods:{getVersion(t){var e=navigator.userAgent.split(" "),i="";let s=0;const h=new RegExp(t,"i");for(var o=0;o<e.length;o++)h.test(e[o])&&(i=e[o]);return s=i?i.split("/")[1].split("."):["0","0","0"],s},checkOrientationImage(t,e,i,s){if(this.getVersion("chrome")[0]>=81)e=-1;else if(this.getVersion("safari")[0]>=605){const t=this.getVersion("version");t[0]>13&&t[1]>1&&(e=-1)}else{const t=navigator.userAgent.toLowerCase().match(/cpu iphone os (.*?) like mac os/);if(t){let i=t[1];i=i.split("_"),(i[0]>13||i[0]>=13&&i[1]>=4)&&(e=-1)}}let h=document.createElement("canvas"),o=h.getContext("2d");switch(o.save(),e){case 2:h.width=i,h.height=s,o.translate(i,0),o.scale(-1,1);break;case 3:h.width=i,h.height=s,o.translate(i/2,s/2),o.rotate(180*Math.PI/180),o.translate(-i/2,-s/2);break;case 4:h.width=i,h.height=s,o.translate(0,s),o.scale(1,-1);break;case 5:h.height=i,h.width=s,o.rotate(.5*Math.PI),o.scale(1,-1);break;case 6:h.width=s,h.height=i,o.translate(s/2,i/2),o.rotate(90*Math.PI/180),o.translate(-i/2,-s/2);break;case 7:h.height=i,h.width=s,o.rotate(.5*Math.PI),o.translate(i,-s),o.scale(-1,1);break;case 8:h.height=i,h.width=s,o.translate(s/2,i/2),o.rotate(-90*Math.PI/180),o.translate(-i/2,-s/2);break;default:h.width=i,h.height=s}o.drawImage(t,0,0,i,s),o.restore(),h.toBlob((t=>{let e=URL.createObjectURL(t);URL.revokeObjectURL(this.imgs),this.imgs=e}),"image/"+this.outputType,1)},checkedImg(){if(null===this.img||""===this.img)return this.imgs="",void this.clearCrop();this.loading=!0,this.scale=1,this.rotate=0,this.imgIsQqualCrop=!1,this.clearCrop();let t=new Image;if(t.onload=()=>{if(""===this.img)return this.$emit("img-load",new Error("图片不能为空")),!1;let e=t.width,i=t.height;O.getData(t).then((s=>{this.orientation=s.orientation||1;let h=Number(this.maxImgSize);!this.orientation&&e<h&i<h?this.imgs=this.img:(e>h&&(i=i/e*h,e=h),i>h&&(e=e/i*h,i=h),this.checkOrientationImage(t,this.orientation,e,i))})).catch((t=>{this.$emit("img-load","error"),this.$emit("img-load-error",t)}))},t.onerror=t=>{this.$emit("img-load","error"),this.$emit("img-load-error",t)},"data"!==this.img.substr(0,4)&&(t.crossOrigin=""),this.isIE){var e=new XMLHttpRequest;e.onload=function(){var e=URL.createObjectURL(this.response);t.src=e},e.open("GET",this.img,!0),e.responseType="blob",e.send()}else t.src=this.img},startMove(t){if(t.preventDefault(),this.move&&!this.crop){if(!this.canMove)return!1;this.moveX=("clientX"in t?t.clientX:t.touches[0].clientX)-this.x,this.moveY=("clientY"in t?t.clientY:t.touches[0].clientY)-this.y,t.touches?(window.addEventListener("touchmove",this.moveImg),window.addEventListener("touchend",this.leaveImg),2==t.touches.length&&(this.touches=t.touches,window.addEventListener("touchmove",this.touchScale),window.addEventListener("touchend",this.cancelTouchScale))):(window.addEventListener("mousemove",this.moveImg),window.addEventListener("mouseup",this.leaveImg)),this.$emit("img-moving",{moving:!0,axis:this.getImgAxis()})}else this.cropping=!0,window.addEventListener("mousemove",this.createCrop),window.addEventListener("mouseup",this.endCrop),window.addEventListener("touchmove",this.createCrop),window.addEventListener("touchend",this.endCrop),this.cropOffsertX=t.offsetX?t.offsetX:t.touches[0].pageX-this.$refs.cropper.offsetLeft,this.cropOffsertY=t.offsetY?t.offsetY:t.touches[0].pageY-this.$refs.cropper.offsetTop,this.cropX="clientX"in t?t.clientX:t.touches[0].clientX,this.cropY="clientY"in t?t.clientY:t.touches[0].clientY,this.cropChangeX=this.cropOffsertX,this.cropChangeY=this.cropOffsertY,this.cropW=0,this.cropH=0},touchScale(t){t.preventDefault();let e=this.scale;var i=this.touches[0].clientX,s=this.touches[0].clientY,h=t.touches[0].clientX,o=t.touches[0].clientY,r=this.touches[1].clientX,a=this.touches[1].clientY,c=t.touches[1].clientX,n=t.touches[1].clientY,p=Math.sqrt(Math.pow(i-r,2)+Math.pow(s-a,2)),l=Math.sqrt(Math.pow(h-c,2)+Math.pow(o-n,2))-p,u=1,d=(u=(u=u/this.trueWidth>u/this.trueHeight?u/this.trueHeight:u/this.trueWidth)>.1?.1:u)*l;if(!this.touchNow){if(this.touchNow=!0,l>0?e+=Math.abs(d):l<0&&e>Math.abs(d)&&(e-=Math.abs(d)),this.touches=t.touches,setTimeout((()=>{this.touchNow=!1}),8),!this.checkoutImgAxis(this.x,this.y,e))return!1;this.scale=e}},cancelTouchScale(t){window.removeEventListener("touchmove",this.touchScale)},moveImg(t){if(t.preventDefault(),t.touches&&2===t.touches.length)return this.touches=t.touches,window.addEventListener("touchmove",this.touchScale),window.addEventListener("touchend",this.cancelTouchScale),window.removeEventListener("touchmove",this.moveImg),!1;let e,i,s="clientX"in t?t.clientX:t.touches[0].clientX,h="clientY"in t?t.clientY:t.touches[0].clientY;e=s-this.moveX,i=h-this.moveY,this.$nextTick((()=>{if(this.centerBox){let t,s,h,o,r=this.getImgAxis(e,i,this.scale),a=this.getCropAxis(),c=this.trueHeight*this.scale,n=this.trueWidth*this.scale;switch(this.rotate){case 1:case-1:case 3:case-3:t=this.cropOffsertX-this.trueWidth*(1-this.scale)/2+(c-n)/2,s=this.cropOffsertY-this.trueHeight*(1-this.scale)/2+(n-c)/2,h=t-c+this.cropW,o=s-n+this.cropH;break;default:t=this.cropOffsertX-this.trueWidth*(1-this.scale)/2,s=this.cropOffsertY-this.trueHeight*(1-this.scale)/2,h=t-n+this.cropW,o=s-c+this.cropH}r.x1>=a.x1&&(e=t),r.y1>=a.y1&&(i=s),r.x2<=a.x2&&(e=h),r.y2<=a.y2&&(i=o)}this.x=e,this.y=i,this.$emit("img-moving",{moving:!0,axis:this.getImgAxis()})}))},leaveImg(t){window.removeEventListener("mousemove",this.moveImg),window.removeEventListener("touchmove",this.moveImg),window.removeEventListener("mouseup",this.leaveImg),window.removeEventListener("touchend",this.leaveImg),this.$emit("img-moving",{moving:!1,axis:this.getImgAxis()})},scaleImg(){this.canScale&&window.addEventListener(this.support,this.changeSize,this.passive)},cancelScale(){this.canScale&&window.removeEventListener(this.support,this.changeSize)},changeSize(t){t.preventDefault();let e=this.scale;var i=t.deltaY||t.wheelDelta;i=navigator.userAgent.indexOf("Firefox")>0?30*i:i,this.isIE&&(i=-i);var s=this.coe,h=(s=s/this.trueWidth>s/this.trueHeight?s/this.trueHeight:s/this.trueWidth)*i;h<0?e+=Math.abs(h):e>Math.abs(h)&&(e-=Math.abs(h));let o=h<0?"add":"reduce";if(o!==this.coeStatus&&(this.coeStatus=o,this.coe=.2),this.scaling||(this.scalingSet=setTimeout((()=>{this.scaling=!1,this.coe=this.coe+=.01}),50)),this.scaling=!0,!this.checkoutImgAxis(this.x,this.y,e))return!1;this.scale=e},changeScale(t){let e=this.scale;t=t||1;var i=20;if((t*=i=i/this.trueWidth>i/this.trueHeight?i/this.trueHeight:i/this.trueWidth)>0?e+=Math.abs(t):e>Math.abs(t)&&(e-=Math.abs(t)),!this.checkoutImgAxis(this.x,this.y,e))return!1;this.scale=e},createCrop(t){t.preventDefault();var e="clientX"in t?t.clientX:t.touches?t.touches[0].clientX:0,i="clientY"in t?t.clientY:t.touches?t.touches[0].clientY:0;this.$nextTick((()=>{var t=e-this.cropX,s=i-this.cropY;if(t>0?(this.cropW=t+this.cropChangeX>this.w?this.w-this.cropChangeX:t,this.cropOffsertX=this.cropChangeX):(this.cropW=this.w-this.cropChangeX+Math.abs(t)>this.w?this.cropChangeX:Math.abs(t),this.cropOffsertX=this.cropChangeX+t>0?this.cropChangeX+t:0),this.fixed){var h=this.cropW/this.fixedNumber[0]*this.fixedNumber[1];h+this.cropOffsertY>this.h?(this.cropH=this.h-this.cropOffsertY,this.cropW=this.cropH/this.fixedNumber[1]*this.fixedNumber[0],this.cropOffsertX=t>0?this.cropChangeX:this.cropChangeX-this.cropW):this.cropH=h,this.cropOffsertY=this.cropOffsertY}else s>0?(this.cropH=s+this.cropChangeY>this.h?this.h-this.cropChangeY:s,this.cropOffsertY=this.cropChangeY):(this.cropH=this.h-this.cropChangeY+Math.abs(s)>this.h?this.cropChangeY:Math.abs(s),this.cropOffsertY=this.cropChangeY+s>0?this.cropChangeY+s:0)}))},changeCropSize(t,e,i,s,h){t.preventDefault(),window.addEventListener("mousemove",this.changeCropNow),window.addEventListener("mouseup",this.changeCropEnd),window.addEventListener("touchmove",this.changeCropNow),window.addEventListener("touchend",this.changeCropEnd),this.canChangeX=e,this.canChangeY=i,this.changeCropTypeX=s,this.changeCropTypeY=h,this.cropX="clientX"in t?t.clientX:t.touches[0].clientX,this.cropY="clientY"in t?t.clientY:t.touches[0].clientY,this.cropOldW=this.cropW,this.cropOldH=this.cropH,this.cropChangeX=this.cropOffsertX,this.cropChangeY=this.cropOffsertY,this.fixed&&this.canChangeX&&this.canChangeY&&(this.canChangeY=0),this.$emit("change-crop-size",{width:this.cropW,height:this.cropH})},changeCropNow(t){t.preventDefault();var e="clientX"in t?t.clientX:t.touches?t.touches[0].clientX:0,i="clientY"in t?t.clientY:t.touches?t.touches[0].clientY:0;let s=this.w,h=this.h,o=0,r=0;if(this.centerBox){let t=this.getImgAxis(),e=t.x2,i=t.y2;o=t.x1>0?t.x1:0,r=t.y1>0?t.y1:0,s>e&&(s=e),h>i&&(h=i)}const[a,c]=this.checkCropLimitSize();this.$nextTick((()=>{var t=e-this.cropX,n=i-this.cropY;if(this.canChangeX&&(1===this.changeCropTypeX?this.cropOldW-t<a?(this.cropW=a,this.cropOffsertX=this.cropOldW+this.cropChangeX-o-a):this.cropOldW-t>0?(this.cropW=s-this.cropChangeX-t<=s-o?this.cropOldW-t:this.cropOldW+this.cropChangeX-o,this.cropOffsertX=s-this.cropChangeX-t<=s-o?this.cropChangeX+t:o):(this.cropW=Math.abs(t)+this.cropChangeX<=s?Math.abs(t)-this.cropOldW:s-this.cropOldW-this.cropChangeX,this.cropOffsertX=this.cropChangeX+this.cropOldW):2===this.changeCropTypeX&&(this.cropOldW+t<a?this.cropW=a:this.cropOldW+t>0?(this.cropW=this.cropOldW+t+this.cropOffsertX<=s?this.cropOldW+t:s-this.cropOffsertX,this.cropOffsertX=this.cropChangeX):(this.cropW=s-this.cropChangeX+Math.abs(t+this.cropOldW)<=s-o?Math.abs(t+this.cropOldW):this.cropChangeX-o,this.cropOffsertX=s-this.cropChangeX+Math.abs(t+this.cropOldW)<=s-o?this.cropChangeX-Math.abs(t+this.cropOldW):o))),this.canChangeY&&(1===this.changeCropTypeY?this.cropOldH-n<c?(this.cropH=c,this.cropOffsertY=this.cropOldH+this.cropChangeY-r-c):this.cropOldH-n>0?(this.cropH=h-this.cropChangeY-n<=h-r?this.cropOldH-n:this.cropOldH+this.cropChangeY-r,this.cropOffsertY=h-this.cropChangeY-n<=h-r?this.cropChangeY+n:r):(this.cropH=Math.abs(n)+this.cropChangeY<=h?Math.abs(n)-this.cropOldH:h-this.cropOldH-this.cropChangeY,this.cropOffsertY=this.cropChangeY+this.cropOldH):2===this.changeCropTypeY&&(this.cropOldH+n<c?this.cropH=c:this.cropOldH+n>0?(this.cropH=this.cropOldH+n+this.cropOffsertY<=h?this.cropOldH+n:h-this.cropOffsertY,this.cropOffsertY=this.cropChangeY):(this.cropH=h-this.cropChangeY+Math.abs(n+this.cropOldH)<=h-r?Math.abs(n+this.cropOldH):this.cropChangeY-r,this.cropOffsertY=h-this.cropChangeY+Math.abs(n+this.cropOldH)<=h-r?this.cropChangeY-Math.abs(n+this.cropOldH):r))),this.canChangeX&&this.fixed){var p=this.cropW/this.fixedNumber[0]*this.fixedNumber[1];p<c?(this.cropH=c,this.cropW=this.fixedNumber[0]*c/this.fixedNumber[1],1===this.changeCropTypeX&&(this.cropOffsertX=this.cropChangeX+(this.cropOldW-this.cropW))):p+this.cropOffsertY>h?(this.cropH=h-this.cropOffsertY,this.cropW=this.cropH/this.fixedNumber[1]*this.fixedNumber[0],1===this.changeCropTypeX&&(this.cropOffsertX=this.cropChangeX+(this.cropOldW-this.cropW))):this.cropH=p}if(this.canChangeY&&this.fixed){var l=this.cropH/this.fixedNumber[1]*this.fixedNumber[0];l<a?(this.cropW=a,this.cropH=this.fixedNumber[1]*a/this.fixedNumber[0],this.cropOffsertY=this.cropOldH+this.cropChangeY-this.cropH):l+this.cropOffsertX>s?(this.cropW=s-this.cropOffsertX,this.cropH=this.cropW/this.fixedNumber[0]*this.fixedNumber[1]):this.cropW=l}}))},checkCropLimitSize(){let{cropW:t,cropH:e,limitMinSize:i}=this,s=new Array;return s=Array.isArray(i)?i:[i,i],t=parseFloat(s[0]),e=parseFloat(s[1]),[t,e]},changeCropEnd(t){window.removeEventListener("mousemove",this.changeCropNow),window.removeEventListener("mouseup",this.changeCropEnd),window.removeEventListener("touchmove",this.changeCropNow),window.removeEventListener("touchend",this.changeCropEnd)},calculateSize(t,e,i,s,h,o){const r=t/e;let a=h,c=o;return a<i&&(a=i,c=Math.ceil(a/r)),c<s&&(c=s,a=Math.ceil(c*r),a<i&&(a=i,c=Math.ceil(a/r))),a<h&&(a=h,c=Math.ceil(a/r)),c<o&&(c=o,a=Math.ceil(c*r)),{width:a,height:c}},endCrop(){0===this.cropW&&0===this.cropH&&(this.cropping=!1);let[t,e]=this.checkCropLimitSize();const{width:i,height:s}=this.fixed?this.calculateSize(this.fixedNumber[0],this.fixedNumber[1],t,e,this.cropW,this.cropH):{width:t,height:e};i>this.cropW&&(this.cropW=i,this.cropOffsertX+i>this.w&&(this.cropOffsertX=this.w-i)),s>this.cropH&&(this.cropH=s,this.cropOffsertY+s>this.h&&(this.cropOffsertY=this.h-s)),window.removeEventListener("mousemove",this.createCrop),window.removeEventListener("mouseup",this.endCrop),window.removeEventListener("touchmove",this.createCrop),window.removeEventListener("touchend",this.endCrop)},startCrop(){this.crop=!0},stopCrop(){this.crop=!1},clearCrop(){this.cropping=!1,this.cropW=0,this.cropH=0},cropMove(t){if(t.preventDefault(),!this.canMoveBox)return this.crop=!1,this.startMove(t),!1;if(t.touches&&2===t.touches.length)return this.crop=!1,this.startMove(t),this.leaveCrop(),!1;window.addEventListener("mousemove",this.moveCrop),window.addEventListener("mouseup",this.leaveCrop),window.addEventListener("touchmove",this.moveCrop),window.addEventListener("touchend",this.leaveCrop);let e,i,s="clientX"in t?t.clientX:t.touches[0].clientX,h="clientY"in t?t.clientY:t.touches[0].clientY;e=s-this.cropOffsertX,i=h-this.cropOffsertY,this.cropX=e,this.cropY=i,this.$emit("crop-moving",{moving:!0,axis:this.getCropAxis()})},moveCrop(t,e){let i=0,s=0;t&&(t.preventDefault(),i="clientX"in t?t.clientX:t.touches[0].clientX,s="clientY"in t?t.clientY:t.touches[0].clientY),this.$nextTick((()=>{let t,h,o=i-this.cropX,r=s-this.cropY;if(e&&(o=this.cropOffsertX,r=this.cropOffsertY),t=o<=0?0:o+this.cropW>this.w?this.w-this.cropW:o,h=r<=0?0:r+this.cropH>this.h?this.h-this.cropH:r,this.centerBox){let e=this.getImgAxis();t<=e.x1&&(t=e.x1),t+this.cropW>e.x2&&(t=e.x2-this.cropW),h<=e.y1&&(h=e.y1),h+this.cropH>e.y2&&(h=e.y2-this.cropH)}this.cropOffsertX=t,this.cropOffsertY=h,this.$emit("crop-moving",{moving:!0,axis:this.getCropAxis()})}))},getImgAxis(t,e,i){t=t||this.x,e=e||this.y,i=i||this.scale;let s={x1:0,x2:0,y1:0,y2:0},h=this.trueWidth*i,o=this.trueHeight*i;switch(this.rotate){case 0:s.x1=t+this.trueWidth*(1-i)/2,s.x2=s.x1+this.trueWidth*i,s.y1=e+this.trueHeight*(1-i)/2,s.y2=s.y1+this.trueHeight*i;break;case 1:case-1:case 3:case-3:s.x1=t+this.trueWidth*(1-i)/2+(h-o)/2,s.x2=s.x1+this.trueHeight*i,s.y1=e+this.trueHeight*(1-i)/2+(o-h)/2,s.y2=s.y1+this.trueWidth*i;break;default:s.x1=t+this.trueWidth*(1-i)/2,s.x2=s.x1+this.trueWidth*i,s.y1=e+this.trueHeight*(1-i)/2,s.y2=s.y1+this.trueHeight*i}return s},getCropAxis(){let t={x1:0,x2:0,y1:0,y2:0};return t.x1=this.cropOffsertX,t.x2=t.x1+this.cropW,t.y1=this.cropOffsertY,t.y2=t.y1+this.cropH,t},leaveCrop(t){window.removeEventListener("mousemove",this.moveCrop),window.removeEventListener("mouseup",this.leaveCrop),window.removeEventListener("touchmove",this.moveCrop),window.removeEventListener("touchend",this.leaveCrop),this.$emit("crop-moving",{moving:!1,axis:this.getCropAxis()})},getCropChecked(t){let e=document.createElement("canvas"),i=e.getContext("2d"),s=new Image,h=this.rotate,o=this.trueWidth,r=this.trueHeight,a=this.cropOffsertX,c=this.cropOffsertY;s.onload=()=>{if(0!==this.cropW){let t=1;this.high&!this.full&&(t=window.devicePixelRatio),1!==this.enlarge&!this.full&&(t=Math.abs(Number(this.enlarge)));let e=this.cropW*t,n=this.cropH*t,l=o*this.scale*t,u=r*this.scale*t,d=(this.x-a+this.trueWidth*(1-this.scale)/2)*t,g=(this.y-c+this.trueHeight*(1-this.scale)/2)*t;switch(p(e,n),i.save(),h){case 0:this.full?(p(e/this.scale,n/this.scale),i.drawImage(s,d/this.scale,g/this.scale,l/this.scale,u/this.scale)):i.drawImage(s,d,g,l,u);break;case 1:case-3:this.full?(p(e/this.scale,n/this.scale),d=d/this.scale+(l/this.scale-u/this.scale)/2,g=g/this.scale+(u/this.scale-l/this.scale)/2,i.rotate(90*h*Math.PI/180),i.drawImage(s,g,-d-u/this.scale,l/this.scale,u/this.scale)):(d+=(l-u)/2,g+=(u-l)/2,i.rotate(90*h*Math.PI/180),i.drawImage(s,g,-d-u,l,u));break;case 2:case-2:this.full?(p(e/this.scale,n/this.scale),i.rotate(90*h*Math.PI/180),d/=this.scale,g/=this.scale,i.drawImage(s,-d-l/this.scale,-g-u/this.scale,l/this.scale,u/this.scale)):(i.rotate(90*h*Math.PI/180),i.drawImage(s,-d-l,-g-u,l,u));break;case 3:case-1:this.full?(p(e/this.scale,n/this.scale),d=d/this.scale+(l/this.scale-u/this.scale)/2,g=g/this.scale+(u/this.scale-l/this.scale)/2,i.rotate(90*h*Math.PI/180),i.drawImage(s,-g-l/this.scale,d,l/this.scale,u/this.scale)):(d+=(l-u)/2,g+=(u-l)/2,i.rotate(90*h*Math.PI/180),i.drawImage(s,-g-l,d,l,u));break;default:this.full?(p(e/this.scale,n/this.scale),i.drawImage(s,d/this.scale,g/this.scale,l/this.scale,u/this.scale)):i.drawImage(s,d,g,l,u)}i.restore()}else{let t=o*this.scale,a=r*this.scale;switch(i.save(),this.fillColor&&(i.fillStyle=this.fillColor,i.fillRect(0,0,e.width,e.height)),h){case 0:p(t,a),i.drawImage(s,0,0,t,a);break;case 1:case-3:p(a,t),i.rotate(90*h*Math.PI/180),i.drawImage(s,0,-a,t,a);break;case 2:case-2:p(t,a),i.rotate(90*h*Math.PI/180),i.drawImage(s,-t,-a,t,a);break;case 3:case-1:p(a,t),i.rotate(90*h*Math.PI/180),i.drawImage(s,-t,0,t,a);break;default:p(t,a),i.drawImage(s,0,0,t,a)}i.restore()}t(e)},"data"!==this.img.substr(0,4)&&(s.crossOrigin="Anonymous"),s.src=this.imgs;const n=this.fillColor;function p(t,s){e.width=Math.round(t),e.height=Math.round(s),n&&(i.fillStyle=n,i.fillRect(0,0,e.width,e.height))}},getCropData(t){this.getCropChecked((e=>{t(e.toDataURL("image/"+this.outputType,this.outputSize))}))},getCropBlob(t){this.getCropChecked((e=>{e.toBlob((e=>t(e)),"image/"+this.outputType,this.outputSize)}))},showPreview(){if(!this.isCanShow)return!1;this.isCanShow=!1,setTimeout((()=>{this.isCanShow=!0}),16);let t=this.cropW,e=this.cropH,i=this.scale;var s={};s.div={width:`${t}px`,height:`${e}px`};let h=(this.x-this.cropOffsertX)/i,o=(this.y-this.cropOffsertY)/i;s.w=t,s.h=e,s.url=this.imgs,s.img={width:`${this.trueWidth}px`,height:`${this.trueHeight}px`,transform:`scale(${i})translate3d(${h}px, ${o}px, 0px)rotateZ(${90*this.rotate}deg)`},s.html=`\n      <div class="show-preview" style="width: ${s.w}px; height: ${s.h}px,; overflow: hidden">\n        <div style="width: ${t}px; height: ${e}px">\n          <img src=${s.url} style="width: ${this.trueWidth}px; height: ${this.trueHeight}px; transform:\n          scale(${i})translate3d(${h}px, ${o}px, 0px)rotateZ(${90*this.rotate}deg)">\n        </div>\n      </div>`,this.$emit("real-time",s)},reload(){let t=new Image;t.onload=()=>{this.w=parseFloat(window.getComputedStyle(this.$refs.cropper).width),this.h=parseFloat(window.getComputedStyle(this.$refs.cropper).height),this.trueWidth=t.width,this.trueHeight=t.height,this.original?this.scale=1:this.scale=this.checkedMode(),this.$nextTick((()=>{this.x=-(this.trueWidth-this.trueWidth*this.scale)/2+(this.w-this.trueWidth*this.scale)/2,this.y=-(this.trueHeight-this.trueHeight*this.scale)/2+(this.h-this.trueHeight*this.scale)/2,this.loading=!1,this.autoCrop&&this.goAutoCrop(),this.$emit("img-load","success"),setTimeout((()=>{this.showPreview()}),20)}))},t.onerror=()=>{this.$emit("img-load","error")},t.src=this.imgs},checkedMode(){let t=1,e=this.trueWidth,i=this.trueHeight;const s=this.mode.split(" ");switch(s[0]){case"contain":this.trueWidth>this.w&&(t=this.w/this.trueWidth),this.trueHeight*t>this.h&&(t=this.h/this.trueHeight);break;case"cover":e=this.w,t=e/this.trueWidth,i*=t,i<this.h&&(i=this.h,t=i/this.trueHeight);break;default:try{let h=s[0];if(-1!==h.search("px")){h=h.replace("px",""),e=parseFloat(h);const o=e/this.trueWidth;let r=1,a=s[1];-1!==a.search("px")&&(a=a.replace("px",""),i=parseFloat(a),r=i/this.trueHeight),t=Math.min(o,r)}if(-1!==h.search("%")&&(h=h.replace("%",""),e=parseFloat(h)/100*this.w,t=e/this.trueWidth),2===s.length&&"auto"===h){let e=s[1];-1!==e.search("px")&&(e=e.replace("px",""),i=parseFloat(e),t=i/this.trueHeight),-1!==e.search("%")&&(e=e.replace("%",""),i=parseFloat(e)/100*this.h,t=i/this.trueHeight)}}catch{t=1}}return t},goAutoCrop(t,e){if(""===this.imgs||null===this.imgs)return;this.clearCrop(),this.cropping=!0;let i=this.w,s=this.h;if(this.centerBox){const t=Math.abs(this.rotate)%2>0;let e=(t?this.trueHeight:this.trueWidth)*this.scale,h=(t?this.trueWidth:this.trueHeight)*this.scale;i=e<i?e:i,s=h<s?h:s}var h=t||parseFloat(this.autoCropWidth),o=e||parseFloat(this.autoCropHeight);(0===h||0===o)&&(h=.8*i,o=.8*s),h=h>i?i:h,o=o>s?s:o,this.fixed&&(o=h/this.fixedNumber[0]*this.fixedNumber[1]),o>this.h&&(h=(o=this.h)/this.fixedNumber[1]*this.fixedNumber[0]),this.changeCrop(h,o)},changeCrop(t,e){if(this.centerBox){let i=this.getImgAxis();t>i.x2-i.x1&&(e=(t=i.x2-i.x1)/this.fixedNumber[0]*this.fixedNumber[1]),e>i.y2-i.y1&&(t=(e=i.y2-i.y1)/this.fixedNumber[1]*this.fixedNumber[0])}this.cropW=t,this.cropH=e,this.checkCropLimitSize(),this.$nextTick((()=>{this.cropOffsertX=(this.w-this.cropW)/2,this.cropOffsertY=(this.h-this.cropH)/2,this.centerBox&&this.moveCrop(null,!0)}))},refresh(){this.img,this.imgs="",this.scale=1,this.crop=!1,this.rotate=0,this.w=0,this.h=0,this.trueWidth=0,this.trueHeight=0,this.imgIsQqualCrop=!1,this.clearCrop(),this.$nextTick((()=>{this.checkedImg()}))},rotateLeft(){this.rotate=this.rotate<=-3?0:this.rotate-1},rotateRight(){this.rotate=this.rotate>=3?0:this.rotate+1},rotateClear(){this.rotate=0},checkoutImgAxis(t,e,i){t=t||this.x,e=e||this.y,i=i||this.scale;let s=!0;if(this.centerBox){let h=this.getImgAxis(t,e,i),o=this.getCropAxis();h.x1>=o.x1&&(s=!1),h.x2<=o.x2&&(s=!1),h.y1>=o.y1&&(s=!1),h.y2<=o.y2&&(s=!1),s||this.changeImgScale(h,o,i)}return s},changeImgScale(t,e,i){let s=this.trueWidth,h=this.trueHeight,o=s*i,r=h*i;if(o>=this.cropW&&r>=this.cropH)this.scale=i;else{const t=this.cropW/s,e=this.cropH/h,i=this.cropH<=h*t?t:e;this.scale=i,o=s*i,r=h*i}this.imgIsQqualCrop||(t.x1>=e.x1&&(this.isRotateRightOrLeft?this.x=e.x1-(s-o)/2-(o-r)/2:this.x=e.x1-(s-o)/2),t.x2<=e.x2&&(this.isRotateRightOrLeft?this.x=e.x1-(s-o)/2-(o-r)/2-r+this.cropW:this.x=e.x2-(s-o)/2-o),t.y1>=e.y1&&(this.isRotateRightOrLeft?this.y=e.y1-(h-r)/2-(r-o)/2:this.y=e.y1-(h-r)/2),t.y2<=e.y2&&(this.isRotateRightOrLeft?this.y=e.y2-(h-r)/2-(r-o)/2-o:this.y=e.y2-(h-r)/2-r)),(o<this.cropW||r<this.cropH)&&(this.imgIsQqualCrop=!0)}},mounted(){this.support="onwheel"in document.createElement("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll";let t=this;var e=navigator.userAgent;this.isIOS=!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),HTMLCanvasElement.prototype.toBlob||Object.defineProperty(HTMLCanvasElement.prototype,"toBlob",{value:function(e,i,s){for(var h=atob(this.toDataURL(i,s).split(",")[1]),o=h.length,r=new Uint8Array(o),a=0;a<o;a++)r[a]=h.charCodeAt(a);e(new Blob([r],{type:t.type||"image/png"}))}}),this.showPreview(),this.checkedImg()},unmounted(){window.removeEventListener("mousemove",this.moveCrop),window.removeEventListener("mouseup",this.leaveCrop),window.removeEventListener("touchmove",this.moveCrop),window.removeEventListener("touchend",this.leaveCrop),this.cancelScale()}}),H={key:0,class:"cropper-box"},W=["src"],Y={class:"cropper-view-box"},M=["src"],I={key:1},S=((t,e)=>{const i=t.__vccOpts||t;for(const[s,h]of e)i[s]=h;return i})(X,[["render",function(t,p,l,u,d,g){return e(),i("div",{class:"vue-cropper",ref:"cropper",onMouseover:p[28]||(p[28]=(...e)=>t.scaleImg&&t.scaleImg(...e)),onMouseout:p[29]||(p[29]=(...e)=>t.cancelScale&&t.cancelScale(...e))},[t.imgs?(e(),i("div",H,[s(o("div",{class:"cropper-box-canvas",style:r({width:t.trueWidth+"px",height:t.trueHeight+"px",transform:"scale("+t.scale+","+t.scale+") translate3d("+t.x/t.scale+"px,"+t.y/t.scale+"px,0)rotateZ("+90*t.rotate+"deg)"})},[o("img",{src:t.imgs,alt:"cropper-img",ref:"cropperImg"},null,8,W)],4),[[h,!t.loading]])])):a("",!0),o("div",{class:c(["cropper-drag-box",{"cropper-move":t.move&&!t.crop,"cropper-crop":t.crop,"cropper-modal":t.cropping}]),onMousedown:p[0]||(p[0]=(...e)=>t.startMove&&t.startMove(...e)),onTouchstart:p[1]||(p[1]=(...e)=>t.startMove&&t.startMove(...e))},null,34),s(o("div",{class:"cropper-crop-box",style:r({width:t.cropW+"px",height:t.cropH+"px",transform:"translate3d("+t.cropOffsertX+"px,"+t.cropOffsertY+"px,0)"})},[o("span",Y,[o("img",{style:r({width:t.trueWidth+"px",height:t.trueHeight+"px",transform:"scale("+t.scale+","+t.scale+") translate3d("+(t.x-t.cropOffsertX)/t.scale+"px,"+(t.y-t.cropOffsertY)/t.scale+"px,0)rotateZ("+90*t.rotate+"deg)"}),src:t.imgs,alt:"cropper-img"},null,12,M)]),o("span",{class:"cropper-face cropper-move",onMousedown:p[2]||(p[2]=(...e)=>t.cropMove&&t.cropMove(...e)),onTouchstart:p[3]||(p[3]=(...e)=>t.cropMove&&t.cropMove(...e))},null,32),t.info?(e(),i("span",{key:0,class:"crop-info",style:r({top:t.cropInfo.top})},n(t.cropInfo.width)+" × "+n(t.cropInfo.height),5)):a("",!0),t.fixedBox?a("",!0):(e(),i("span",I,[o("span",{class:"crop-line line-w",onMousedown:p[4]||(p[4]=e=>t.changeCropSize(e,!1,!0,0,1)),onTouchstart:p[5]||(p[5]=e=>t.changeCropSize(e,!1,!0,0,1))},null,32),o("span",{class:"crop-line line-a",onMousedown:p[6]||(p[6]=e=>t.changeCropSize(e,!0,!1,1,0)),onTouchstart:p[7]||(p[7]=e=>t.changeCropSize(e,!0,!1,1,0))},null,32),o("span",{class:"crop-line line-s",onMousedown:p[8]||(p[8]=e=>t.changeCropSize(e,!1,!0,0,2)),onTouchstart:p[9]||(p[9]=e=>t.changeCropSize(e,!1,!0,0,2))},null,32),o("span",{class:"crop-line line-d",onMousedown:p[10]||(p[10]=e=>t.changeCropSize(e,!0,!1,2,0)),onTouchstart:p[11]||(p[11]=e=>t.changeCropSize(e,!0,!1,2,0))},null,32),o("span",{class:"crop-point point1",onMousedown:p[12]||(p[12]=e=>t.changeCropSize(e,!0,!0,1,1)),onTouchstart:p[13]||(p[13]=e=>t.changeCropSize(e,!0,!0,1,1))},null,32),o("span",{class:"crop-point point2",onMousedown:p[14]||(p[14]=e=>t.changeCropSize(e,!1,!0,0,1)),onTouchstart:p[15]||(p[15]=e=>t.changeCropSize(e,!1,!0,0,1))},null,32),o("span",{class:"crop-point point3",onMousedown:p[16]||(p[16]=e=>t.changeCropSize(e,!0,!0,2,1)),onTouchstart:p[17]||(p[17]=e=>t.changeCropSize(e,!0,!0,2,1))},null,32),o("span",{class:"crop-point point4",onMousedown:p[18]||(p[18]=e=>t.changeCropSize(e,!0,!1,1,0)),onTouchstart:p[19]||(p[19]=e=>t.changeCropSize(e,!0,!1,1,0))},null,32),o("span",{class:"crop-point point5",onMousedown:p[20]||(p[20]=e=>t.changeCropSize(e,!0,!1,2,0)),onTouchstart:p[21]||(p[21]=e=>t.changeCropSize(e,!0,!1,2,0))},null,32),o("span",{class:"crop-point point6",onMousedown:p[22]||(p[22]=e=>t.changeCropSize(e,!0,!0,1,2)),onTouchstart:p[23]||(p[23]=e=>t.changeCropSize(e,!0,!0,1,2))},null,32),o("span",{class:"crop-point point7",onMousedown:p[24]||(p[24]=e=>t.changeCropSize(e,!1,!0,0,2)),onTouchstart:p[25]||(p[25]=e=>t.changeCropSize(e,!1,!0,0,2))},null,32),o("span",{class:"crop-point point8",onMousedown:p[26]||(p[26]=e=>t.changeCropSize(e,!0,!0,2,2)),onTouchstart:p[27]||(p[27]=e=>t.changeCropSize(e,!0,!0,2,2))},null,32)]))],4),[[h,t.cropping]])],544)}],["__scopeId","data-v-c21c565e"]]),L={class:"component-container"},E={class:"crop"},k=["src"],T=(A=()=>o("div",null,"最终图片预览",-1),m("data-v-eda67eff"),A=A(),w(),A),N=v({__name:"DragView",setup(t){const a=p(null),c=p(""),n=p({img:"http://gips0.baidu.com/it/u=1690853528,2506870245&fm=3028&app=3028&f=JPEG&fmt=auto?w=1024&h=1024"}),m=p("contain"),w=p({}),v=()=>{m.value="contain"},O=()=>{a.value.getCropData((t=>{c.value=t}))},X=t=>{c.value="",w.value=t};return l((()=>{a.value.startCrop()})),(t,p)=>{const l=b,H=x,W=C,Y=y;return e(),i("div",L,[u(H,{style:{margin:"8px 0"}},{default:d((()=>[u(l,{type:"primary",onClick:O},{default:d((()=>[g("预览base64")])),_:1}),u(l,{type:"info",onClick:v},{default:d((()=>[g("清空框选")])),_:1})])),_:1}),u(Y,{align:"start"},{default:d((()=>[o("div",E,[u(f(S),{ref_key:"cropperRef",ref:a,img:f(n).img,mode:f(m),onRealTime:X},null,8,["img","mode"])]),o("div",{class:"show-preview",style:r({width:f(w).w+"px",height:f(w).h+"px",overflow:"hidden"})},[o("div",{style:r(f(w).div)},[o("img",{src:f(w).url,style:r(f(w).img)},null,12,k)],4)],4),s(o("div",null,[u(W,{width:"100",height:"auto","object-fit":"contain",src:f(c)},null,8,["src"]),T],512),[[h,f(c)]])])),_:1})])}}},[["__scopeId","data-v-eda67eff"]]);var A;export{N as default};
