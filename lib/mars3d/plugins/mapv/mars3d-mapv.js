/**
 * Mars3D平台插件,结合mapv可视化功能插件  mars3d-mapv
 *
 * 版本信息：v3.4.5
 * 编译日期：2022-08-21 17:13:54
 * 版权所有：Copyright by 火星科技  http://mars3d.cn
 * 使用单位：免费公开版 ，2022-06-01
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, (window.mapv || require('mapv')), (window.mars3d || require('mars3d'))) :
  typeof define === 'function' && define.amd ? define(['exports', 'mapv', 'mars3d'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["mars3d-mapv"] = {}, global.mapv, global.mars3d));
})(this, (function (exports, mapv, mars3d) { 
'use strict';var _0x114f9a=_0x3a99;(function(_0x18475e,_0x1e2ebf){var _0x4159e6=_0x3a99,_0x56b514=_0x18475e();while(!![]){try{var _0x5d2112=parseInt(_0x4159e6(0x210))/0x1*(-parseInt(_0x4159e6(0x1db))/0x2)+parseInt(_0x4159e6(0x215))/0x3*(parseInt(_0x4159e6(0x1bb))/0x4)+-parseInt(_0x4159e6(0x204))/0x5*(parseInt(_0x4159e6(0x1cb))/0x6)+parseInt(_0x4159e6(0x21f))/0x7*(-parseInt(_0x4159e6(0x1f1))/0x8)+-parseInt(_0x4159e6(0x1dc))/0x9+-parseInt(_0x4159e6(0x219))/0xa*(parseInt(_0x4159e6(0x1f9))/0xb)+parseInt(_0x4159e6(0x20e))/0xc;if(_0x5d2112===_0x1e2ebf)break;else _0x56b514['push'](_0x56b514['shift']());}catch(_0x3644a5){_0x56b514['push'](_0x56b514['shift']());}}}(_0xed95,0x5d79e));function _interopNamespace(_0x48304b){var _0x1f0517=_0x3a99;if(_0x48304b&&_0x48304b[_0x1f0517(0x226)])return _0x48304b;var _0x400bb4=Object['create'](null);return _0x48304b&&Object[_0x1f0517(0x1c3)](_0x48304b)[_0x1f0517(0x23e)](function(_0xab9f48){var _0x1c3f2d=_0x1f0517;if(_0xab9f48!==_0x1c3f2d(0x1c4)){var _0x3edf78=Object['getOwnPropertyDescriptor'](_0x48304b,_0xab9f48);Object[_0x1c3f2d(0x201)](_0x400bb4,_0xab9f48,_0x3edf78[_0x1c3f2d(0x238)]?_0x3edf78:{'enumerable':!![],'get':function(){return _0x48304b[_0xab9f48];}});}}),_0x400bb4['default']=_0x48304b,_0x400bb4;}var mapv__namespace=_interopNamespace(mapv),mars3d__namespace=_interopNamespace(mars3d);function ownKeys(_0x90b886,_0x41dc5a){var _0x16f44d=_0x3a99,_0x4b381d=Object[_0x16f44d(0x1c3)](_0x90b886);if(Object[_0x16f44d(0x240)]){var _0x264a55=Object[_0x16f44d(0x240)](_0x90b886);_0x41dc5a&&(_0x264a55=_0x264a55[_0x16f44d(0x206)](function(_0xdc84cf){var _0x500738=_0x16f44d;return Object['getOwnPropertyDescriptor'](_0x90b886,_0xdc84cf)[_0x500738(0x1ea)];})),_0x4b381d[_0x16f44d(0x1a4)]['apply'](_0x4b381d,_0x264a55);}return _0x4b381d;}function _objectSpread2(_0x4b2d60){var _0x2973e9=_0x3a99;for(var _0x53ae70=0x1;_0x53ae70<arguments['length'];_0x53ae70++){var _0x4a7c6d=null!=arguments[_0x53ae70]?arguments[_0x53ae70]:{};_0x53ae70%0x2?ownKeys(Object(_0x4a7c6d),!0x0)[_0x2973e9(0x23e)](function(_0x2c1cda){_defineProperty(_0x4b2d60,_0x2c1cda,_0x4a7c6d[_0x2c1cda]);}):Object[_0x2973e9(0x24f)]?Object['defineProperties'](_0x4b2d60,Object['getOwnPropertyDescriptors'](_0x4a7c6d)):ownKeys(Object(_0x4a7c6d))['forEach'](function(_0x27013d){var _0x3c5cee=_0x2973e9;Object[_0x3c5cee(0x201)](_0x4b2d60,_0x27013d,Object['getOwnPropertyDescriptor'](_0x4a7c6d,_0x27013d));});}return _0x4b2d60;}function _classCallCheck(_0x2f1391,_0x25c0f8){var _0x353347=_0x3a99;if(!(_0x2f1391 instanceof _0x25c0f8))throw new TypeError(_0x353347(0x24c));}function _defineProperties(_0x4e98a4,_0x37f33a){var _0x21e233=_0x3a99;for(var _0x598046=0x0;_0x598046<_0x37f33a[_0x21e233(0x1ed)];_0x598046++){var _0xcfc827=_0x37f33a[_0x598046];_0xcfc827[_0x21e233(0x1ea)]=_0xcfc827[_0x21e233(0x1ea)]||![],_0xcfc827[_0x21e233(0x1b5)]=!![];if('value'in _0xcfc827)_0xcfc827[_0x21e233(0x1e9)]=!![];Object[_0x21e233(0x201)](_0x4e98a4,_0xcfc827[_0x21e233(0x224)],_0xcfc827);}}function _createClass(_0x5cd597,_0x3ca06d,_0x1c4373){var _0x5b5c1f=_0x3a99;if(_0x3ca06d)_defineProperties(_0x5cd597[_0x5b5c1f(0x20a)],_0x3ca06d);if(_0x1c4373)_defineProperties(_0x5cd597,_0x1c4373);return Object[_0x5b5c1f(0x201)](_0x5cd597,_0x5b5c1f(0x20a),{'writable':![]}),_0x5cd597;}function _defineProperty(_0xd50ad0,_0x50f65d,_0x328186){var _0x4d1ece=_0x3a99;return _0x50f65d in _0xd50ad0?Object[_0x4d1ece(0x201)](_0xd50ad0,_0x50f65d,{'value':_0x328186,'enumerable':!![],'configurable':!![],'writable':!![]}):_0xd50ad0[_0x50f65d]=_0x328186,_0xd50ad0;}function _inherits(_0x3bf2b7,_0x52ac75){var _0x21f043=_0x3a99;if(typeof _0x52ac75!=='function'&&_0x52ac75!==null)throw new TypeError(_0x21f043(0x1cc));_0x3bf2b7[_0x21f043(0x20a)]=Object[_0x21f043(0x205)](_0x52ac75&&_0x52ac75['prototype'],{'constructor':{'value':_0x3bf2b7,'writable':!![],'configurable':!![]}}),Object['defineProperty'](_0x3bf2b7,_0x21f043(0x20a),{'writable':![]});if(_0x52ac75)_setPrototypeOf(_0x3bf2b7,_0x52ac75);}function _getPrototypeOf(_0x5d68b2){var _0x29be26=_0x3a99;return _getPrototypeOf=Object[_0x29be26(0x1dd)]?Object[_0x29be26(0x22f)]:function _0x125b27(_0x316c3d){var _0x3f3dd2=_0x29be26;return _0x316c3d[_0x3f3dd2(0x1de)]||Object[_0x3f3dd2(0x22f)](_0x316c3d);},_getPrototypeOf(_0x5d68b2);}function _setPrototypeOf(_0x36dfb1,_0x33fc5c){return _setPrototypeOf=Object['setPrototypeOf']||function _0x1efa44(_0x544684,_0x12c72){var _0x1aae53=_0x3a99;return _0x544684[_0x1aae53(0x1de)]=_0x12c72,_0x544684;},_setPrototypeOf(_0x36dfb1,_0x33fc5c);}function _isNativeReflectConstruct(){var _0x4d256e=_0x3a99;if(typeof Reflect===_0x4d256e(0x1d4)||!Reflect['construct'])return![];if(Reflect[_0x4d256e(0x1a5)][_0x4d256e(0x1fd)])return![];if(typeof Proxy===_0x4d256e(0x1e1))return!![];try{return Boolean[_0x4d256e(0x20a)][_0x4d256e(0x1d2)][_0x4d256e(0x21e)](Reflect[_0x4d256e(0x1a5)](Boolean,[],function(){})),!![];}catch(_0x3cdc89){return![];}}function _assertThisInitialized(_0x35fcfd){if(_0x35fcfd===void 0x0)throw new ReferenceError('this\x20hasn\x27t\x20been\x20initialised\x20-\x20super()\x20hasn\x27t\x20been\x20called');return _0x35fcfd;}function _possibleConstructorReturn(_0x11c9b6,_0x342b2e){var _0x371669=_0x3a99;if(_0x342b2e&&(typeof _0x342b2e==='object'||typeof _0x342b2e===_0x371669(0x1e1)))return _0x342b2e;else{if(_0x342b2e!==void 0x0)throw new TypeError(_0x371669(0x1df));}return _assertThisInitialized(_0x11c9b6);}function _createSuper(_0x7cfa0b){var _0x189349=_isNativeReflectConstruct();return function _0x3ab46e(){var _0x4d65c8=_0x3a99,_0x2c302a=_getPrototypeOf(_0x7cfa0b),_0x5dc325;if(_0x189349){var _0x4f2cf5=_getPrototypeOf(this)[_0x4d65c8(0x1c8)];_0x5dc325=Reflect['construct'](_0x2c302a,arguments,_0x4f2cf5);}else _0x5dc325=_0x2c302a['apply'](this,arguments);return _possibleConstructorReturn(this,_0x5dc325);};}function _superPropBase(_0x13ce7e,_0x14ba5f){var _0x42b222=_0x3a99;while(!Object['prototype'][_0x42b222(0x1f8)][_0x42b222(0x21e)](_0x13ce7e,_0x14ba5f)){_0x13ce7e=_getPrototypeOf(_0x13ce7e);if(_0x13ce7e===null)break;}return _0x13ce7e;}function _0xed95(){var _0x3b094c=['y2fUDMfZtgf5zxi','AxnqB2LUDfzPC2LIBgu','y2fSBa','nJuZodK4C3nbq1LU','C2v0','C3rLCa','zgvZDgLUyxrPB24TB3v0','z2v0uMvJDgfUz2XL','A2v5','mhb4','x19LC01VzhvSzq','x29UtwfWq2XPy2S','BwfWDKzPEgvKsgvPz2H0','DhjHAwXZ','AgvPz2H0','z2v0rgf0yq','Bw91C2veB3DU','y2XLyxjeyxrH','Bgf5zxi','z2v0uhjVDg90ExbLt2y','z2vVBwv0CNK','x3nLDe9WDgLVBNniB29R','C3rLChm','Dw5IAw5KrxzLBNq','zhjHDW','Bw9Kzq','Dw5PDa','rxzLBNruExbL','z2v0','zgLZCgXHEq','DxbKyxrLrgf0yq','yMLUza','AxngB3jTyxq','x2rHDge','zM9YrwfJAa','yw5PBwf0B3jnB3zLzw5KrxzLBNq','z2v0t3DUuhjVCgvYDhLtEw1IB2XZ','Aw5PDerHDgfsyw5Nzq','y2fUDMfZ','C3rLChnsyw5Nzq','DMfSDwu','yxv0BW','y2XLyxjszwn0','CMvTB3zLq2HPBgq','BM9Uzq','EKLUzgv4','yw5PBwf0B3jnB3zLC3rHCNrfDMvUDa','rg9TvxrPBa','q2fUBM90ignHBgWGysbJBgfZCYbHCYbHigz1BMn0Aw9U','DhjHBNnMzxjdB29YzgLUyxrL','CMvZAxPL','z2v0t3DUuhjVCgvYDhLezxnJCMLWDg9YCW','ChvZAa','y29UC3rYDwn0','C3rVCa','Ew1PBG','Aw5PDerLDMLJzvbPEgvSuMf0Aw8','D2LKDgG','ug9SEwDVBG','z2v0q29UDgv4Da','zhjHD0nVBNrLEhq','yMLUzev2zw50','x2nVB3jKAw5HDgvZ','zNjVBurLz3jLzxm','uMvJDgfUz2XL','Cg9ZDfjLBMrLCG','C2nHBgu','DgLTzq','Aw5PDa','y29UzMLNDxjHyMXL','AxnfBMfIBgvKvgLTzq','C2nLBMu','Bwv0Ag9KCW','6k+35BYv5ywLig1HChyG5BQtia','BwfWDG','ndq1mZjxtevYseG','zgv2AwnLugL4zwXsyxrPBW','q2vZAxvT','y2fYDgvZAwfUvg9dyw52yxndB29YzgLUyxrLCW','DxbKyxrL','C3rVCefUAwfTyxrPB24','BgvMDa','q2fYDgvZAwfUmW','A2v5CW','zgvMyxvSDa','Dg9W','x3nOB3DiB29R','ywXS','y29UC3rYDwn0B3i','tgf5zxjvDgLS','x3jLBw92zwriB29R','nZHRwgHIy2q','u3vWzxiGzxHWCMvZC2LVBIbTDxn0igvPDgHLCIbIzsbUDwXSig9YigeGzNvUy3rPB24','Bw91C2vTB3zL','y2XLyxi','x21HCa','ug9PBNq','C2L6zq','DMfSDwvpzG','B2zM','Dw5KzwzPBMvK','zgf0yvnLDa','rgf0yvnLDa','CMvZDg9Yzq','x29UtwfWtw91C2vnB3zL','rwXSAxbZB2LKywXpy2nSDwrLCG','CMvUzgvY','ogTTqMLlAG','odK4nte1r3bhwNvw','C2v0uhjVDg90ExbLt2y','x19WCM90B19F','rgvYAxzLzcbJB25ZDhj1y3rVCNmGBwf5ig9UBhKGCMv0DxjUig9IAMvJDcbVCIb1BMrLzMLUzwq','CMvTB3zLrgf0yq','zNvUy3rPB24','y2fTzxjHtw92zvn0yxj0','x2nHy2HLx2v2zw50','yMXVy2S','C3rHCNq','C3r5Bgu','ywrKrgf0yq','x3jLC2v0','D3jPDgfIBgu','zw51BwvYywjSzq','x29Utw92zuvUzev2zw50','D2LUzg93ug9ZAxrPB24','BgvUz3rO','x2nHBNzHC1vWzgf0zq','zgvZDhjVEq','z2v0t3DUuhjVCgvYDhLezxnJCMLWDg9Y','ofbHr0fWqG','tgLUzvn0CMLUzW','Ew1HEa','y2fTzxjHtw92zuvUza','y29Uy2f0','DxbKyxrLq2fSBgjHy2S','y29UDgv4Da','AgfZt3DUuhjVCgvYDhK','odCWmvvrwgrUEa','Bw91C2vnB3zL','x21HCfzszw5KzxjLCG','CMDIysGWlcaWlcaWlcaUmsK','C2HHBq','x2nYzwf0zunHBNzHCW','BwfYCZnKlw1HChy','ywjZB2X1Dgu','zgvMAw5LuhjVCgvYDhK','CgfYzw50rwXLBwvUDa','B3b0Aw9UCW','ndC3mZvZAgfUuwC','y3jLyxrL','zMLSDgvY','x3bVAw50zxjfDMvUDhm','Cg9PBNrLCKv2zw50CW','Cg9ZAxrPB24','ChjVDg90ExbL','y2XPy2S','x2fKzgvKsg9VAW','BwfW','mtaZnJu4mJHOrMPfsu0','ChjVy2vZC0rHDge','nZaXnZfTwNnzr0i','z2XVyMfSq29TCg9ZAxrLt3bLCMf0Aw9U','x29Utw92zvn0yxj0rxzLBNq','yw5PBwf0Aw9U','zMLSBfjLy3q','ndj4EvPYwuC','yMfPzhvnyxbmyxLLCG','zMLSBfn0EwXL','u0nftKuZra','ndKWwLDguvLZ','y2fTzxjH','yw5PBwf0B3i'];_0xed95=function(){return _0x3b094c;};return _0xed95();}function _get(){var _0x3c8f85=_0x3a99;return typeof Reflect!==_0x3c8f85(0x1d4)&&Reflect[_0x3c8f85(0x238)]?_get=Reflect[_0x3c8f85(0x238)]:_get=function _0x868a05(_0x30d5ef,_0x23d3be,_0x4d4b0b){var _0x4590cd=_0x3c8f85,_0x1bfc9f=_superPropBase(_0x30d5ef,_0x23d3be);if(!_0x1bfc9f)return;var _0x2d79a6=Object[_0x4590cd(0x1f0)](_0x1bfc9f,_0x23d3be);if(_0x2d79a6['get'])return _0x2d79a6[_0x4590cd(0x238)][_0x4590cd(0x21e)](arguments['length']<0x3?_0x30d5ef:_0x4d4b0b);return _0x2d79a6[_0x4590cd(0x244)];},_get['apply'](this,arguments);}function _0x3a99(_0x366e4f,_0x1a1662){var _0xed9579=_0xed95();return _0x3a99=function(_0x3a9988,_0x340b16){_0x3a9988=_0x3a9988-0x1a4;var _0x1d370f=_0xed9579[_0x3a9988];if(_0x3a99['kbWIZf']===undefined){var _0x943533=function(_0x48304b){var _0x400bb4='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0xab9f48='',_0x3edf78='';for(var _0x90b886=0x0,_0x41dc5a,_0x4b381d,_0x264a55=0x0;_0x4b381d=_0x48304b['charAt'](_0x264a55++);~_0x4b381d&&(_0x41dc5a=_0x90b886%0x4?_0x41dc5a*0x40+_0x4b381d:_0x4b381d,_0x90b886++%0x4)?_0xab9f48+=String['fromCharCode'](0xff&_0x41dc5a>>(-0x2*_0x90b886&0x6)):0x0){_0x4b381d=_0x400bb4['indexOf'](_0x4b381d);}for(var _0xdc84cf=0x0,_0x4b2d60=_0xab9f48['length'];_0xdc84cf<_0x4b2d60;_0xdc84cf++){_0x3edf78+='%'+('00'+_0xab9f48['charCodeAt'](_0xdc84cf)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x3edf78);};_0x3a99['xtGrVH']=_0x943533,_0x366e4f=arguments,_0x3a99['kbWIZf']=!![];}var _0x466241=_0xed9579[0x0],_0x4b68d8=_0x3a9988+_0x466241,_0x4ea24f=_0x366e4f[_0x4b68d8];return!_0x4ea24f?(_0x1d370f=_0x3a99['xtGrVH'](_0x1d370f),_0x366e4f[_0x4b68d8]=_0x1d370f):_0x1d370f=_0x4ea24f,_0x1d370f;},_0x3a99(_0x366e4f,_0x1a1662);}var Cesium$1=mars3d__namespace[_0x114f9a(0x1bd)],baiduMapLayer=mapv__namespace?mapv__namespace[_0x114f9a(0x216)]:null,BaseLayer$1=baiduMapLayer?baiduMapLayer[_0x114f9a(0x1de)]:Function,MapVRenderer=function(_0x4487ce){var _0x1fe60c=_0x114f9a;_inherits(_0x5acf4b,_0x4487ce);var _0xfc7706=_createSuper(_0x5acf4b);function _0x5acf4b(_0x37c2fb,_0x495ce8,_0x265566,_0x36259a){var _0x5966a7=_0x3a99,_0x1a297b;_classCallCheck(this,_0x5acf4b),_0x1a297b=_0xfc7706[_0x5966a7(0x21e)](this,_0x37c2fb,_0x495ce8,_0x265566);if(!BaseLayer$1)return _possibleConstructorReturn(_0x1a297b);return _0x1a297b[_0x5966a7(0x20d)]=_0x37c2fb,_0x1a297b[_0x5966a7(0x1b7)]=_0x37c2fb[_0x5966a7(0x1b7)],_0x1a297b['dataSet']=_0x495ce8,_0x265566=_0x265566||{},_0x1a297b[_0x5966a7(0x1b4)](_0x265566),_0x1a297b['argCheck'](_0x265566),_0x1a297b[_0x5966a7(0x1a8)](),_0x1a297b[_0x5966a7(0x21c)]=_0x36259a,_0x1a297b[_0x5966a7(0x1c0)]=!0x1,_0x1a297b[_0x5966a7(0x213)]=_0x265566[_0x5966a7(0x213)],_0x1a297b;}return _createClass(_0x5acf4b,[{'key':'initDevicePixelRatio','value':function _0x5cbff2(){var _0x13d77b=_0x3a99;this[_0x13d77b(0x1bc)]=window[_0x13d77b(0x1bc)]||0x1;}},{'key':'addAnimatorEvent','value':function _0xacc389(){}},{'key':_0x1fe60c(0x24a),'value':function _0x377d34(){var _0x4b4069=_0x1fe60c,_0x2628d1=this[_0x4b4069(0x203)][_0x4b4069(0x213)];this[_0x4b4069(0x1b6)]()&&this[_0x4b4069(0x21b)]&&(this[_0x4b4069(0x232)][_0x4b4069(0x221)]=_0x2628d1[_0x4b4069(0x243)][_0x4b4069(0x1e5)]);}},{'key':_0x1fe60c(0x23f),'value':function _0x532fda(){var _0x10904e=_0x1fe60c;this[_0x10904e(0x1b6)]()&&this['animator'];}},{'key':_0x1fe60c(0x1ab),'value':function _0x13a1f0(){var _0x53499a=_0x1fe60c;return this['canvasLayer'][_0x53499a(0x242)][_0x53499a(0x1ab)](this[_0x53499a(0x1f7)]);}},{'key':_0x1fe60c(0x1b4),'value':function _0x418ae1(_0x4abd51){var _0x5e7f4c=_0x1fe60c;this[_0x5e7f4c(0x203)]=_0x4abd51,this[_0x5e7f4c(0x241)](_0x4abd51),this[_0x5e7f4c(0x1f7)]=this['options'][_0x5e7f4c(0x1f7)]||'2d',this[_0x5e7f4c(0x203)][_0x5e7f4c(0x249)]&&this[_0x5e7f4c(0x21c)]&&this['canvasLayer']['setZIndex']&&this[_0x5e7f4c(0x21c)]['setZIndex'](this['options'][_0x5e7f4c(0x249)]),this['initAnimator']();}},{'key':_0x1fe60c(0x1ee),'value':function _0x4b9720(_0x43f376){var _0x6cd1e4=_0x1fe60c,_0x166a54=this[_0x6cd1e4(0x1b7)];if(this[_0x6cd1e4(0x21c)]&&!this[_0x6cd1e4(0x1c0)]){var _0x141941=this['options'][_0x6cd1e4(0x213)],_0x1d552f=this[_0x6cd1e4(0x1ab)]();if(this[_0x6cd1e4(0x1b6)]()){if(void 0x0===_0x43f376)return void this['clear'](_0x1d552f);this['context']==='2d'&&(_0x1d552f['save'](),_0x1d552f[_0x6cd1e4(0x211)]=_0x6cd1e4(0x222),_0x1d552f[_0x6cd1e4(0x217)]=_0x6cd1e4(0x1fc),_0x1d552f[_0x6cd1e4(0x214)](0x0,0x0,_0x1d552f['canvas'][_0x6cd1e4(0x1a9)],_0x1d552f[_0x6cd1e4(0x242)]['height']),_0x1d552f[_0x6cd1e4(0x1d7)]());}else this[_0x6cd1e4(0x1ce)](_0x1d552f);if(this[_0x6cd1e4(0x1f7)]==='2d')for(var _0x27f226 in this[_0x6cd1e4(0x203)]){_0x1d552f[_0x27f226]=this[_0x6cd1e4(0x203)][_0x27f226];}else _0x1d552f[_0x6cd1e4(0x1ce)](_0x1d552f['COLOR_BUFFER_BIT']);var _0x14f507={'transferCoordinate':function _0x10825c(_0x1e71a3){var _0x1a5a0b=_0x6cd1e4,_0x4e33ae=null,_0x2c64f9=_0x166a54[_0x1a5a0b(0x228)];_0x166a54['mapvAutoHeight']&&(_0x2c64f9=_0x166a54['globe']['getHeight'](Cesium$1['Cartographic'][_0x1a5a0b(0x1af)](_0x1e71a3[0x0],_0x1e71a3[0x1])));var _0x24a889=Cesium$1[_0x1a5a0b(0x1c2)]['fromDegrees'](_0x1e71a3[0x0],_0x1e71a3[0x1],_0x2c64f9);if(!_0x24a889)return _0x4e33ae;var _0x67d5be=_0x166a54[_0x1a5a0b(0x1be)](_0x24a889);if(!_0x67d5be)return _0x4e33ae;if(_0x166a54['mapvDepthTest']&&_0x166a54[_0x1a5a0b(0x235)]===Cesium$1['SceneMode'][_0x1a5a0b(0x218)]){var _0x244a59=new Cesium$1[(_0x1a5a0b(0x1d9))](_0x166a54['globe']['ellipsoid'],_0x166a54[_0x1a5a0b(0x21a)]['positionWC']),_0x5e599f=_0x244a59[_0x1a5a0b(0x21d)](_0x24a889);if(!_0x5e599f)return _0x4e33ae;}return[_0x67d5be['x'],_0x67d5be['y']];}};void 0x0!==_0x43f376&&(_0x14f507[_0x6cd1e4(0x206)]=function(_0x1b91de){var _0xfb002e=_0x6cd1e4,_0x44f18d=_0x141941[_0xfb002e(0x229)]||0xa;return!!(_0x43f376&&_0x1b91de[_0xfb002e(0x1b3)]>_0x43f376-_0x44f18d&&_0x1b91de[_0xfb002e(0x1b3)]<_0x43f376);});var _0x39774e=this[_0x6cd1e4(0x1d5)][_0x6cd1e4(0x238)](_0x14f507);this[_0x6cd1e4(0x20f)](_0x39774e),this[_0x6cd1e4(0x203)][_0x6cd1e4(0x236)]==='m'&&this[_0x6cd1e4(0x203)][_0x6cd1e4(0x1d1)],this['options']['_size']=this[_0x6cd1e4(0x203)][_0x6cd1e4(0x1d1)];var _0x3ee0d5=_0x166a54[_0x6cd1e4(0x1be)](Cesium$1[_0x6cd1e4(0x1c2)][_0x6cd1e4(0x1af)](0x0,0x0));if(!_0x3ee0d5)return;this[_0x6cd1e4(0x1ac)](_0x1d552f,new mapv__namespace['DataSet'](_0x39774e),this[_0x6cd1e4(0x203)],_0x3ee0d5),this['options'][_0x6cd1e4(0x1f6)]&&this['options'][_0x6cd1e4(0x1f6)](_0x43f376);}}},{'key':_0x1fe60c(0x23a),'value':function _0x1f8e16(_0x2881c1,_0x5d6ce7){var _0x23698e=_0x1fe60c,_0x181652=_0x2881c1;_0x181652&&_0x181652['get']&&(_0x181652=_0x181652['get']()),void 0x0!==_0x181652&&this[_0x23698e(0x1d5)][_0x23698e(0x220)](_0x181652),_get(_getPrototypeOf(_0x5acf4b[_0x23698e(0x20a)]),_0x23698e(0x1bf),this)[_0x23698e(0x21e)](this,{'options':_0x5d6ce7});}},{'key':_0x1fe60c(0x1e7),'value':function _0x39040a(_0x5ed250,_0x1a7ae2){var _0x5890bc=_0x1fe60c,_0x2bd6da=_0x5ed250;_0x5ed250&&_0x5ed250[_0x5890bc(0x238)]&&(_0x2bd6da=_0x5ed250[_0x5890bc(0x238)]()),this[_0x5890bc(0x1d5)]['add'](_0x2bd6da),this[_0x5890bc(0x1bf)]({'options':_0x1a7ae2});}},{'key':_0x1fe60c(0x22b),'value':function _0x4c51f0(){var _0x104a34=_0x1fe60c;return this[_0x104a34(0x1d5)];}},{'key':_0x1fe60c(0x1e0),'value':function _0x11f9a4(_0x480d35){var _0x4c72ba=_0x1fe60c;if(this['dataSet']){var _0x31db85=this[_0x4c72ba(0x1d5)][_0x4c72ba(0x238)]({'filter':function _0x29e9fd(_0xb94a22){var _0x12034e=_0x4c72ba;return _0x480d35==null||typeof _0x480d35!==_0x12034e(0x1e1)||!_0x480d35(_0xb94a22);}});this[_0x4c72ba(0x1d5)][_0x4c72ba(0x220)](_0x31db85),this[_0x4c72ba(0x1bf)]({'options':null});}}},{'key':_0x1fe60c(0x22d),'value':function _0x3706b5(){var _0x45046e=_0x1fe60c;this['dataSet']&&this['dataSet'][_0x45046e(0x1ce)](),this[_0x45046e(0x1bf)]({'options':null});}},{'key':_0x1fe60c(0x234),'value':function _0x2dc2ba(){var _0x4281cf=_0x1fe60c;this['canvasLayer'][_0x4281cf(0x234)]();}},{'key':_0x1fe60c(0x1ce),'value':function _0x3f72b3(_0x471a8a){var _0x1d581b=_0x1fe60c;_0x471a8a&&_0x471a8a[_0x1d581b(0x246)]&&_0x471a8a['clearRect'](0x0,0x0,_0x471a8a[_0x1d581b(0x242)][_0x1d581b(0x1a9)],_0x471a8a[_0x1d581b(0x242)]['height']);}},{'key':_0x1fe60c(0x1ef),'value':function _0x5a8bf0(){var _0x30feac=_0x1fe60c;this[_0x30feac(0x1ce)](this['getContext']()),this[_0x30feac(0x22d)](),this[_0x30feac(0x21b)]&&this[_0x30feac(0x21b)][_0x30feac(0x1a6)](),this[_0x30feac(0x21b)]=null,this[_0x30feac(0x21c)]=null;}}]),_0x5acf4b;}(BaseLayer$1);if(mapv__namespace!==null&&mapv__namespace!==void 0x0&&mapv__namespace['DataSet'])mapv__namespace[_0x114f9a(0x1d6)][_0x114f9a(0x20a)][_0x114f9a(0x24d)]=function(_0x46e204,_0xe4220e,_0x1da6f0,_0x5e7b9c){var _0x38d4e0=_0x114f9a;_0x5e7b9c=_0x5e7b9c||_0x38d4e0(0x1ae),_0x1da6f0=_0x1da6f0||'coordinates';for(var _0x32e5d4=0x0;_0x32e5d4<_0x46e204[_0x38d4e0(0x1ed)];_0x32e5d4++){var _0x13ed17=_0x46e204[_0x32e5d4][_0x38d4e0(0x230)],_0x179c26=_0x13ed17[_0x1da6f0];switch(_0x13ed17['type']){case _0x38d4e0(0x1d0):{var _0x1674cd=_0xe4220e(_0x179c26);_0x1674cd?_0x13ed17[_0x5e7b9c]=_0x1674cd:_0x13ed17[_0x5e7b9c]=[-0x3e7,-0x3e7];}break;case _0x38d4e0(0x1f2):{var _0x3e9109=[];for(var _0x49d09f=0x0;_0x49d09f<_0x179c26['length'];_0x49d09f++){var _0xe22f46=_0xe4220e(_0x179c26[_0x49d09f]);_0xe22f46&&_0x3e9109[_0x38d4e0(0x1a4)](_0xe22f46);}_0x13ed17[_0x5e7b9c]=_0x3e9109;}break;case'MultiLineString':case _0x38d4e0(0x1aa):{var _0x56aa29=_0x37e947(_0x179c26);_0x13ed17[_0x5e7b9c]=_0x56aa29;}break;case'MultiPolygon':{var _0x361199=[];for(var _0x3efbab=0x0;_0x3efbab<_0x179c26[_0x38d4e0(0x1ed)];_0x3efbab++){var _0x266d94=_0x37e947(_0x179c26[_0x3efbab]);_0x266d94[_0x38d4e0(0x1ed)]>0x0&&_0x361199['push'](_0x266d94);}_0x13ed17[_0x5e7b9c]=_0x361199;}break;}}function _0x37e947(_0xf869ff){var _0x395ea9=_0x38d4e0,_0xa685de=[];for(var _0x548de4=0x0;_0x548de4<_0xf869ff[_0x395ea9(0x1ed)];_0x548de4++){var _0x18d5f8=_0xf869ff[_0x548de4],_0x26f134=[];for(var _0x2d8e61=0x0;_0x2d8e61<_0x18d5f8[_0x395ea9(0x1ed)];_0x2d8e61++){var _0xd5aea4=_0xe4220e(_0x18d5f8[_0x2d8e61]);_0xd5aea4&&_0x26f134[_0x395ea9(0x1a4)](_0xd5aea4);}_0x26f134['length']>0x0&&_0xa685de[_0x395ea9(0x1a4)](_0x26f134);}return _0xa685de;}return _0x46e204;};else throw new Error(_0x114f9a(0x1b9));var Cesium=mars3d__namespace['Cesium'],BaseLayer=mars3d__namespace['layer']['BaseLayer'],divId=0x0,MapVLayer=function(_0x1f4fd8){var _0x2146f6=_0x114f9a;_inherits(_0x285654,_0x1f4fd8);var _0x18df06=_createSuper(_0x285654);function _0x285654(_0x345253,_0x329ee3){var _0x50f9d4=_0x3a99,_0x4ade8f;return _classCallCheck(this,_0x285654),_0x4ade8f=_0x18df06[_0x50f9d4(0x21e)](this,_0x345253),_0x4ade8f['_pointerEvents']=_0x4ade8f[_0x50f9d4(0x203)]['pointerEvents'],_0x4ade8f[_0x50f9d4(0x1d5)]=_0x329ee3||new mapv__namespace[(_0x50f9d4(0x1d6))](_0x345253['data']),_0x4ade8f[_0x50f9d4(0x242)]=null,_0x4ade8f;}return _createClass(_0x285654,[{'key':_0x2146f6(0x208),'get':function _0x1f2bd2(){var _0x1e81c0=_0x2146f6;return this[_0x1e81c0(0x207)];},'set':function _0x5723e1(_0xa04813){var _0x560b14=_0x2146f6;this[_0x560b14(0x207)]=_0xa04813,this[_0x560b14(0x242)]&&(_0xa04813?this['canvas'][_0x560b14(0x1e6)]['pointerEvents']=_0x560b14(0x1c7):this[_0x560b14(0x242)][_0x560b14(0x1e6)][_0x560b14(0x208)]=_0x560b14(0x248));}},{'key':_0x2146f6(0x1c6),'value':function _0x7ce0de(_0x5032b7){var _0x4746a3=_0x2146f6;_0x5032b7?this[_0x4746a3(0x242)][_0x4746a3(0x1e6)][_0x4746a3(0x239)]=_0x4746a3(0x1e4):this[_0x4746a3(0x242)][_0x4746a3(0x1e6)][_0x4746a3(0x239)]=_0x4746a3(0x248);}},{'key':'_mountedHook','value':function _0x15806e(){var _0x25d0a0=_0x2146f6,_0x34b8c0,_0x70374d,_0x23aad7;this[_0x25d0a0(0x1cf)][_0x25d0a0(0x1b7)]['mapvDepthTest']=(_0x34b8c0=this[_0x25d0a0(0x203)]['depthTest'])!==null&&_0x34b8c0!==void 0x0?_0x34b8c0:!![],this['_map'][_0x25d0a0(0x1b7)]['mapvAutoHeight']=(_0x70374d=this[_0x25d0a0(0x203)]['clampToGround'])!==null&&_0x70374d!==void 0x0?_0x70374d:![],this[_0x25d0a0(0x1cf)][_0x25d0a0(0x1b7)][_0x25d0a0(0x228)]=(_0x23aad7=this[_0x25d0a0(0x203)]['fixedHeight'])!==null&&_0x23aad7!==void 0x0?_0x23aad7:0x0;}},{'key':_0x2146f6(0x20c),'value':function _0x5b98c1(){var _0x169636=_0x2146f6;this['dataSet']&&(!this['dataSet']['_data']||this[_0x169636(0x1d5)][_0x169636(0x23d)]['length']===0x0)&&(this[_0x169636(0x1d5)][_0x169636(0x23d)]=[][_0x169636(0x1f5)](this[_0x169636(0x1d5)]['_dataCache'])),this[_0x169636(0x1fb)]=new MapVRenderer(this[_0x169636(0x1cf)],this[_0x169636(0x1d5)],this[_0x169636(0x203)],this),this[_0x169636(0x1a8)](),this[_0x169636(0x242)]=this[_0x169636(0x1fe)](),this['render']=this[_0x169636(0x1da)][_0x169636(0x23b)](this),this[_0x169636(0x1ad)](),this[_0x169636(0x1e8)]();}},{'key':'_removedHook','value':function _0xc0e4b5(){var _0x2cbe40=_0x2146f6;this[_0x2cbe40(0x233)](),this[_0x2cbe40(0x1fb)]&&(this['_mapVRenderer'][_0x2cbe40(0x1ef)](),this[_0x2cbe40(0x1fb)]=null),this['canvas'][_0x2cbe40(0x202)][_0x2cbe40(0x247)](this[_0x2cbe40(0x242)]);}},{'key':_0x2146f6(0x1a8),'value':function _0xc48887(){var _0x1b0fd1=_0x2146f6;this[_0x1b0fd1(0x1bc)]=window[_0x1b0fd1(0x1bc)]||0x1;}},{'key':_0x2146f6(0x1ad),'value':function _0xe85809(){var _0x34a728=_0x2146f6,_0x574728,_0x3dae93,_0x5363b4,_0x4e0fc6;this[_0x34a728(0x1cf)]['on'](mars3d__namespace['EventType'][_0x34a728(0x22c)],this[_0x34a728(0x212)],this),this['_map']['on'](mars3d__namespace['EventType'][_0x34a728(0x1e2)],this[_0x34a728(0x212)],this),this[_0x34a728(0x1cf)]['on'](mars3d__namespace['EventType'][_0x34a728(0x1f4)],this['_onMoveEndEvent'],this),(_0x574728=this[_0x34a728(0x203)])!==null&&_0x574728!==void 0x0&&(_0x3dae93=_0x574728[_0x34a728(0x1b8)])!==null&&_0x3dae93!==void 0x0&&_0x3dae93[_0x34a728(0x20b)]&&this[_0x34a728(0x1cf)]['on'](mars3d__namespace[_0x34a728(0x237)][_0x34a728(0x20b)],this[_0x34a728(0x227)],this),(_0x5363b4=this['options'])!==null&&_0x5363b4!==void 0x0&&(_0x4e0fc6=_0x5363b4['methods'])!==null&&_0x4e0fc6!==void 0x0&&_0x4e0fc6[_0x34a728(0x1cd)]&&this['_map']['on'](mars3d__namespace[_0x34a728(0x237)][_0x34a728(0x1fa)],this[_0x34a728(0x1d8)],this);}},{'key':_0x2146f6(0x233),'value':function _0x2372de(){var _0x3d75f0=_0x2146f6,_0x4df13a,_0x3d8650,_0x4dc133,_0x57ecb6;this['_map'][_0x3d75f0(0x1d3)](mars3d__namespace[_0x3d75f0(0x237)][_0x3d75f0(0x22c)],this[_0x3d75f0(0x212)],this),this[_0x3d75f0(0x1cf)][_0x3d75f0(0x1d3)](mars3d__namespace[_0x3d75f0(0x237)][_0x3d75f0(0x1e2)],this[_0x3d75f0(0x212)],this),this[_0x3d75f0(0x1cf)][_0x3d75f0(0x1d3)](mars3d__namespace[_0x3d75f0(0x237)][_0x3d75f0(0x1f4)],this[_0x3d75f0(0x1eb)],this),this[_0x3d75f0(0x1cf)]['off'](mars3d__namespace[_0x3d75f0(0x237)][_0x3d75f0(0x1b1)],this[_0x3d75f0(0x1e8)],this),(_0x4df13a=this[_0x3d75f0(0x203)])!==null&&_0x4df13a!==void 0x0&&(_0x3d8650=_0x4df13a[_0x3d75f0(0x1b8)])!==null&&_0x3d8650!==void 0x0&&_0x3d8650[_0x3d75f0(0x20b)]&&this[_0x3d75f0(0x1cf)][_0x3d75f0(0x1d3)](mars3d__namespace[_0x3d75f0(0x237)]['click'],this['_onMapClick'],this),(_0x4dc133=this['options'])!==null&&_0x4dc133!==void 0x0&&(_0x57ecb6=_0x4dc133['methods'])!==null&&_0x57ecb6!==void 0x0&&_0x57ecb6[_0x3d75f0(0x1cd)]&&this[_0x3d75f0(0x1cf)][_0x3d75f0(0x1d3)](mars3d__namespace[_0x3d75f0(0x237)]['mouseMove'],this[_0x3d75f0(0x1d8)],this);}},{'key':_0x2146f6(0x212),'value':function _0x6d694b(){var _0xd35e0d=_0x2146f6;this[_0xd35e0d(0x1fb)]&&(this[_0xd35e0d(0x1fb)][_0xd35e0d(0x24a)](),this[_0xd35e0d(0x1cf)][_0xd35e0d(0x1d3)](mars3d__namespace[_0xd35e0d(0x237)]['postRender'],this[_0xd35e0d(0x1e8)],this),this['_map']['on'](mars3d__namespace[_0xd35e0d(0x237)][_0xd35e0d(0x1b1)],this[_0xd35e0d(0x1e8)],this));}},{'key':_0x2146f6(0x1eb),'value':function _0x2bf2ef(){var _0x5197a3=_0x2146f6;this['_mapVRenderer']&&(this[_0x5197a3(0x1cf)][_0x5197a3(0x1d3)](mars3d__namespace['EventType'][_0x5197a3(0x1b1)],this[_0x5197a3(0x1e8)],this),this[_0x5197a3(0x1fb)]['animatorMoveendEvent'](),this[_0x5197a3(0x1e8)]());}},{'key':_0x2146f6(0x231),'value':function _0x5cfa49(_0x5d65ad){var _0x235db8=_0x2146f6;this[_0x235db8(0x1ca)](),this['_addedHook']();}},{'key':'addData','value':function _0x13bf6c(_0x3f981a){var _0x5dc346=_0x2146f6;this[_0x5dc346(0x1fb)]&&this[_0x5dc346(0x1fb)][_0x5dc346(0x1e7)](_0x3f981a,this[_0x5dc346(0x203)]);}},{'key':_0x2146f6(0x23a),'value':function _0x138cb7(_0x116ed5){var _0x12b2f3=_0x2146f6;this['_mapVRenderer']&&this[_0x12b2f3(0x1fb)][_0x12b2f3(0x23a)](_0x116ed5,this[_0x12b2f3(0x203)]);}},{'key':'getData','value':function _0xf802ae(){var _0x4ad3a8=_0x2146f6;return this[_0x4ad3a8(0x1fb)]&&(this[_0x4ad3a8(0x1d5)]=this[_0x4ad3a8(0x1fb)][_0x4ad3a8(0x22b)]()),this[_0x4ad3a8(0x1d5)];}},{'key':'removeData','value':function _0x12056a(_0x14dd01){var _0x53daf5=_0x2146f6;this[_0x53daf5(0x1fb)]&&this[_0x53daf5(0x1fb)][_0x53daf5(0x1e0)](_0x14dd01);}},{'key':'removeAllData','value':function _0x194bc7(){var _0x5bd0b1=_0x2146f6;this['_mapVRenderer']&&this['_mapVRenderer'][_0x5bd0b1(0x22d)]();}},{'key':'_createCanvas','value':function _0x5109ad(){var _0x11ae8e=_0x2146f6,_0x29f502=mars3d__namespace[_0x11ae8e(0x24b)][_0x11ae8e(0x205)](_0x11ae8e(0x242),_0x11ae8e(0x1ff),this[_0x11ae8e(0x1cf)]['container']);_0x29f502['id']=this['options']['layerid']||_0x11ae8e(0x1ba)+divId++,_0x29f502[_0x11ae8e(0x1e6)]['position']=_0x11ae8e(0x200),_0x29f502[_0x11ae8e(0x1e6)][_0x11ae8e(0x1c5)]=_0x11ae8e(0x225),_0x29f502[_0x11ae8e(0x1e6)][_0x11ae8e(0x1c1)]=_0x11ae8e(0x225),_0x29f502[_0x11ae8e(0x1e6)]['pointerEvents']=this[_0x11ae8e(0x207)]?_0x11ae8e(0x245):_0x11ae8e(0x248),_0x29f502[_0x11ae8e(0x1e6)][_0x11ae8e(0x249)]=this[_0x11ae8e(0x203)][_0x11ae8e(0x249)]||0x64,_0x29f502[_0x11ae8e(0x1a9)]=parseInt(this[_0x11ae8e(0x1cf)]['canvas'][_0x11ae8e(0x1a9)]),_0x29f502[_0x11ae8e(0x22a)]=parseInt(this[_0x11ae8e(0x1cf)][_0x11ae8e(0x242)]['height']),_0x29f502[_0x11ae8e(0x1e6)][_0x11ae8e(0x1a9)]=this[_0x11ae8e(0x1cf)]['canvas'][_0x11ae8e(0x1e6)]['width'],_0x29f502['style']['height']=this[_0x11ae8e(0x1cf)]['canvas'][_0x11ae8e(0x1e6)][_0x11ae8e(0x22a)];if(this[_0x11ae8e(0x203)][_0x11ae8e(0x1f7)]==='2d'){var _0x43bc62=this[_0x11ae8e(0x1bc)];_0x29f502[_0x11ae8e(0x1ab)](this[_0x11ae8e(0x203)][_0x11ae8e(0x1f7)])[_0x11ae8e(0x1b2)](_0x43bc62,_0x43bc62);}return _0x29f502;}},{'key':'_reset','value':function _0x506d9a(){var _0xa533d2=_0x2146f6;this[_0xa533d2(0x24e)](),this[_0xa533d2(0x1da)]();}},{'key':_0x2146f6(0x234),'value':function _0x130fcd(){var _0xc69ce1=_0x2146f6;this[_0xc69ce1(0x1e8)]();}},{'key':'remove','value':function _0x2cba29(){var _0xa115c6=_0x2146f6;this[_0xa115c6(0x1fb)]&&(this[_0xa115c6(0x1fb)][_0xa115c6(0x1ef)](),this['_mapVRenderer']=null),this[_0xa115c6(0x242)]['parentElement'][_0xa115c6(0x247)](this[_0xa115c6(0x242)]);}},{'key':'render','value':function _0x1d5f1b(){var _0x3647f7=_0x2146f6;this[_0x3647f7(0x1fb)][_0x3647f7(0x1ee)]();}},{'key':_0x2146f6(0x24e),'value':function _0x3f24a3(){var _0x26e8d0=_0x2146f6;if(this['canvas']){var _0x4ae172=this[_0x26e8d0(0x242)];_0x4ae172[_0x26e8d0(0x1e6)][_0x26e8d0(0x209)]=_0x26e8d0(0x200),_0x4ae172[_0x26e8d0(0x1e6)][_0x26e8d0(0x1c5)]=_0x26e8d0(0x225),_0x4ae172[_0x26e8d0(0x1e6)][_0x26e8d0(0x1c1)]=_0x26e8d0(0x225),_0x4ae172['width']=parseInt(this[_0x26e8d0(0x1cf)][_0x26e8d0(0x242)][_0x26e8d0(0x1a9)]),_0x4ae172['height']=parseInt(this[_0x26e8d0(0x1cf)]['canvas'][_0x26e8d0(0x22a)]),_0x4ae172[_0x26e8d0(0x1e6)][_0x26e8d0(0x1a9)]=this[_0x26e8d0(0x1cf)]['canvas'][_0x26e8d0(0x1e6)][_0x26e8d0(0x1a9)],_0x4ae172['style']['height']=this['_map'][_0x26e8d0(0x242)]['style'][_0x26e8d0(0x22a)];}}},{'key':_0x2146f6(0x223),'value':function _0x22f1d8(_0xa3bf21){var _0x4c52ce=_0x2146f6;if(!this[_0x4c52ce(0x1d5)]||!this[_0x4c52ce(0x1d5)][_0x4c52ce(0x23d)])return;var _0x3a11cb=mars3d__namespace['Util']['getExtentByGeoJSON']({'type':'FeatureCollection','features':this[_0x4c52ce(0x1d5)][_0x4c52ce(0x23d)]});if(!_0x3a11cb)return;return _0xa3bf21!==null&&_0xa3bf21!==void 0x0&&_0xa3bf21[_0x4c52ce(0x23c)]?_0x3a11cb:Cesium[_0x4c52ce(0x1b0)]['fromDegrees'](_0x3a11cb['xmin'],_0x3a11cb[_0x4c52ce(0x1a7)],_0x3a11cb['xmax'],_0x3a11cb[_0x4c52ce(0x1f3)]);}},{'key':_0x2146f6(0x227),'value':function _0x29b218(_0x293d15){var _0x45f666=_0x2146f6;this['_cache_event']=_0x293d15,this[_0x45f666(0x1fb)]&&this[_0x45f666(0x1fb)]['clickEvent'](_0x293d15[_0x45f666(0x1ec)],_0x293d15);}},{'key':_0x2146f6(0x1d8),'value':function _0x56e20d(_0x73db89){var _0x2aa79a=_0x2146f6;this[_0x2aa79a(0x1e3)]=_0x73db89,this[_0x2aa79a(0x1fb)]&&this['_mapVRenderer']['mousemoveEvent'](_0x73db89[_0x2aa79a(0x1ec)],_0x73db89);}},{'key':'on','value':function _0x597b9a(_0x3aa059,_0x5c2d8f,_0x392f29){var _0x2be350=_0x2146f6,_0x21bcbb=this;this[_0x2be350(0x203)][_0x2be350(0x1b8)]=this[_0x2be350(0x203)][_0x2be350(0x1b8)]||{};if(_0x3aa059===mars3d__namespace['EventType'][_0x2be350(0x20b)])this[_0x2be350(0x203)][_0x2be350(0x1b8)][_0x2be350(0x20b)]=function(_0x373a29){var _0x11e713=_0x2be350;_0x373a29&&_0x5c2d8f[_0x11e713(0x23b)](_0x392f29)(_objectSpread2(_objectSpread2({},_0x21bcbb['_cache_event']),{},{'layer':_0x21bcbb,'data':_0x373a29}));},this[_0x2be350(0x1cf)]['on'](mars3d__namespace[_0x2be350(0x237)][_0x2be350(0x20b)],this[_0x2be350(0x227)],this);else _0x3aa059===mars3d__namespace[_0x2be350(0x237)][_0x2be350(0x1fa)]&&(this[_0x2be350(0x203)][_0x2be350(0x1b8)][_0x2be350(0x1cd)]=function(_0x4db481){var _0x199545=_0x2be350;_0x4db481&&_0x5c2d8f[_0x199545(0x23b)](_0x392f29)(_objectSpread2(_objectSpread2({},_0x21bcbb[_0x199545(0x1e3)]),{},{'layer':_0x21bcbb,'data':_0x4db481}));},this[_0x2be350(0x1cf)]['on'](mars3d__namespace['EventType'][_0x2be350(0x1fa)],this[_0x2be350(0x1d8)],this));return this;}},{'key':_0x2146f6(0x1d3),'value':function _0x48d978(_0x38f6c6,_0x14abc6){var _0x1a8034=_0x2146f6;if(_0x38f6c6===_0x1a8034(0x20b)){var _0x1ecfee;this[_0x1a8034(0x1cf)][_0x1a8034(0x1d3)](_0x38f6c6,this[_0x1a8034(0x227)],this),(_0x1ecfee=this['options'][_0x1a8034(0x1b8)])!==null&&_0x1ecfee!==void 0x0&&_0x1ecfee[_0x1a8034(0x1cd)]&&delete this[_0x1a8034(0x203)][_0x1a8034(0x1b8)][_0x1a8034(0x20b)];}else{if(_0x38f6c6===_0x1a8034(0x1fa)){var _0x2a11df;this[_0x1a8034(0x1cf)][_0x1a8034(0x1d3)](_0x38f6c6,this[_0x1a8034(0x1d8)],this),(_0x2a11df=this['options'][_0x1a8034(0x1b8)])!==null&&_0x2a11df!==void 0x0&&_0x2a11df['mousemove']&&delete this['options']['methods'][_0x1a8034(0x1cd)];}}return this;}}]),_0x285654;}(BaseLayer);mars3d__namespace[_0x114f9a(0x1c9)]['register'](_0x114f9a(0x1ba),MapVLayer),mars3d__namespace[_0x114f9a(0x22e)]['MapVLayer']=MapVLayer,exports['MapVLayer']=MapVLayer,Object['keys'](mapv)['forEach'](function(_0x44c850){var _0x449662=_0x114f9a;if(_0x44c850!=='default'&&!exports[_0x449662(0x1f8)](_0x44c850))Object[_0x449662(0x201)](exports,_0x44c850,{'enumerable':!![],'get':function(){return mapv[_0x44c850];}});}),Object[_0x114f9a(0x201)](exports,'__esModule',{'value':!![]});
}));