/**
 * Mars3D平台插件,结合heatmap可视化功能插件  mars3d-heatmap
 *
 * 版本信息：v3.4.5
 * 编译日期：2022-08-21 17:13:54
 * 版权所有：Copyright by 火星科技  http://mars3d.cn
 * 使用单位：免费公开版 ，2022-06-01
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, (window.mars3d || require('mars3d')), (window.h337 || require('@mars3d/heatmap.js'))) :
  typeof define === 'function' && define.amd ? define(['exports', 'mars3d', '@mars3d/heatmap.js'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["mars3d-heatmap"] = {}, global.mars3d, global.h337));
})(this, (function (exports, mars3d, h337) { 
'use strict';var _0xd6a3c2=_0x4c40;(function(_0x5255cd,_0x31054d){var _0x4dba9f=_0x4c40,_0x29e8a9=_0x5255cd();while(!![]){try{var _0x319a97=parseInt(_0x4dba9f(0x1b7))/0x1+parseInt(_0x4dba9f(0x198))/0x2*(parseInt(_0x4dba9f(0x155))/0x3)+parseInt(_0x4dba9f(0x19a))/0x4+-parseInt(_0x4dba9f(0x180))/0x5*(parseInt(_0x4dba9f(0x141))/0x6)+-parseInt(_0x4dba9f(0x150))/0x7+parseInt(_0x4dba9f(0x181))/0x8+-parseInt(_0x4dba9f(0x1b6))/0x9;if(_0x319a97===_0x31054d)break;else _0x29e8a9['push'](_0x29e8a9['shift']());}catch(_0x19ebb1){_0x29e8a9['push'](_0x29e8a9['shift']());}}}(_0xcd4a,0xbcfa6));function _interopNamespace(_0x4cf054){var _0x12561f=_0x4c40;if(_0x4cf054&&_0x4cf054['__esModule'])return _0x4cf054;var _0x49073f=Object['create'](null);return _0x4cf054&&Object[_0x12561f(0x1bd)](_0x4cf054)[_0x12561f(0x152)](function(_0x201df8){var _0x44c5d0=_0x12561f;if(_0x201df8!=='default'){var _0x34f102=Object[_0x44c5d0(0x16b)](_0x4cf054,_0x201df8);Object[_0x44c5d0(0x16f)](_0x49073f,_0x201df8,_0x34f102['get']?_0x34f102:{'enumerable':!![],'get':function(){return _0x4cf054[_0x201df8];}});}}),_0x49073f[_0x12561f(0x144)]=_0x4cf054,_0x49073f;}function _0xcd4a(){var _0x2e6e31=['zgf0yq','y29UDgfPBMvY','z3jHBNvSyxjPDhK','x3bVC2L0Aw9UCW','yxjJuMfKAxvZu2nHBgu','yxjJqMX1CLnJywXL','u3vWzxiGzxHWCMvZC2LVBIbTDxn0igvPDgHLCIbIzsbUDwXSig9YigeGzNvUy3rPB24','AxngB3jTyxq','u3rLBMnPBez1BMn0Aw9U','Bwf4','yMX1zq','rg9TvxrPBa','CMDIkdi1nsWYntuSmJu1kq','CMfKAxvZ','Bgf5zxi','z2v0uhjVDg90ExbLt2y','zgL2','zgvMAw5LuhjVCgvYDgLLCW','DMfSDwu','yxr0CMLIDxrLihzLyZmGCg9ZAxrPB24ZreHPz2G7cIaGicaGicaGicbHDhrYAwj1DguGDMvJmYbWB3nPDgLVBJnetg93oWOGicaGicaGicaGyxr0CMLIDxrLihzLyZiGC3q7cIaGicaGicaGicbHDhrYAwj1DguGzMXVyxqGyMf0y2HjzdSkicaGicaGicaGihvUAwzVCM0GC2fTCgXLCJjeigj1BxbnyxbFmZSkicaGicaGicaGihzHCNLPBMCGDMvJmYb2x3bVC2L0Aw9Utum7cIaGicaGicaGicb2yxj5Aw5NihzLyZmGDL9WB3nPDgLVBKvdoWOGicaGicaGicaGDMfYEwLUzYb2zwmYihzFC3q7cGOGicaGicaGicaGDM9PzcbTywLUkcKkicaGicaGicaGihSkicaGicaGicaGicaGDMvJncbWid0Gy3PTx2nVBxb1DgvqB3nPDgLVBIGPoWOGicaGicaGicaGicb2x3bVC2L0Aw9UtumGpsbWB3nPDgLVBJnesgLNAcaRihbVC2L0Aw9Um0rmB3C7cIaGicaGicaGicaGihzFCg9ZAxrPB25fqYa9icHJEM1FBw9KzwXwAwv3uMvSyxrPDMvuB0v5zsaQihaPlNH5EJSkicaGicaGicaGicaGDL9ZDca9ihn0oWOGicaGicaGicaGicb2zwm0ignVBg9Yid0GDgv4DhvYztjekgj1BxbnyxbFmYWGDL9ZDcK7cIaGicaGicaGicaGigzSB2f0ignLBNrLCKj1BxaGpsbKAxn0yw5JzsH2zwmZkdaUmcKSy29SB3iUCMDIktSkicaGicaGicaGicaGDMvJmYb1CerPCIa9ig5VCM1HBgL6zsH2x3bVC2L0Aw9UtumUEhL6ktSkicaGicaGicaGicaGDMvJmYbKAxnqB3mGpsb1CerPCIaQignLBNrLCKj1BxaGkIa','z2v0t3DUuhjVCgvYDhLezxnJCMLWDg9Y','q2fYDgvZAwfUmG','x21cB3vUzhnnyxG','x19WCM90B19F','zgvMAw5LuhjVCgvYDhK','Bg5N','BwvYy2f0B3iYBg9UBgf0','CgfYC2u','zNvUy3rPB24','x2HLyxq','x2DYyxbOAwm','CMvJDgfUz2XL','C3bSAxroDw0','EwvSBg93','Aw1Hz2u','zw51BwvYywjSzq','B2jQzwn0','CMvK','Ew1PBG','AgvPz2H0','uMvJDgfUz2XL','mtmWotC5nvz2EejzCG','mJq2otq4menzzNLZqq','x21HCa','rwXSAxbZB2LKu3vYzMfJzufWCgvHCMfUy2u','CM91BMq','D3jPDgfIBgu','q2vZAxvT','z3jHzgLLBNrbCMm','B3b0Aw9UCW','y2XLyxi','yxjJ','rgvYAxzLzcbJB25ZDhj1y3rVCNmGBwf5ig9UBhKGCMv0DxjUig9IAMvJDcbVCIb1BMrLzMLUzwq','Cg9ZAxrPB25Z','x2nYzwf0zufYy0DYyxbOAwm','CMDIysG','z2v0t3DUuhjVCgvYDhLtEw1IB2XZ','Bwf4q2fUDMfZu2L6zq','BgvUz3rO','Eg1PBG','ChjVDg90ExbL','q2fUBM90ignHBgWGysbJBgfZCYbHCYbHigz1BMn0Aw9U','yMX1CG','x3vWzgf0zvbVC2L0Aw9UC0HVB2S','C3r5Bgu','mtiXnZK3ogXNvgzkzW','z3jHCgHPyW','nZK0odb1BLPUseC','ug9SEvv0AwW','yNvTCe1HCa','C2v0ug9ZAxrPB25Z','D2LKDgG6','uMvUzgvYu3rHDgu','Bgf0','Dw5PzM9YBsbZyw1WBgvYmKqGAw1Hz2u7cGPJEM1FBwf0zxjPywWGy3PTx2DLDe1HDgvYAwfSkgn6Bv9TyxrLCMLHBeLUChv0ig1HDgvYAwfSsw5WDxqPihSkicbJEM1FBwf0zxjPywWGBwf0zxjPywWGpsbJEM1Fz2v0rgvMyxvSDe1HDgvYAwfSkg1HDgvYAwfSsw5WDxqPoWOGihzLyZiGC3qGpsbTyxrLCMLHBeLUChv0lNn0oWOGihzLyZqGy29SB3jjBwfNzsa9ihrLEhr1CMuYrcHPBwfNzsWGC3qPoWOGigLMkgnVBg9Ysw1Hz2uUCMDIid09ihzLyZmOms4Wksb8FcbJB2XVCKLTywDLlNjNyIa9psb2zwmZkdaUmcKPihSkicaGigrPC2nHCMq7cIaGFqOGig1HDgvYAwfSlMrPzMz1C2uGpsbJB2XVCKLTywDLlNjNyJSkicbTyxrLCMLHBc5HBhbOysa9ignVBg9Ysw1Hz2uUytSkicbYzxr1CM4GBwf0zxjPywW7cN0k','ChvZAa','x2XHC3rFAgvHDerHDge','s0vfua','Dw5KzwzPBMvK','zMX5vg9cEufUAw1HDgLVBKvUza','A2v5','y29UC3rYDwn0','y29UzMLNDxjL','AgvHDfn0EwXL','tgf5zxjvDgLS','C2v0uhjVDg90ExbLt2y','y2fUDMfZ','ywjZ','BwvYz2u','zMX5vg8','CMvTB3zL','Dw5PzM9YBxm','twf0zxjPywW','CMDIkdiXnIWYmtySmJe2kq','Bg9UBgf0mM1LCMnHDg9Y','mJuZodqYm05Nsgvdwa','mti4mtCWnwrhy3HVyq','zNjVBurLz3jLzxm','sgvHDeXHEwvY','y29UzMLNDxjHyMXL','DgHPCYbOyxnUj3qGyMvLBIbPBML0AwfSAxnLzcaTihn1CgvYkcKGAgfZBID0igjLzw4Gy2fSBgvK','Eg1HEa','A2v5CW','x21VDw50zwriB29R','y3nZvgv4Da','C2HHBq','CMDIkde0mcWXndaSmtqWkq','x2DLDefYy0HLyxrdyw52yxm','zgLMzKHLAwDODa','x2nYzwf0zuDYyxbOAwm','qMXLBMrPBMDtDgf0zq','tg5Ntgf0ug9PBNq','vxrPBa','uMvJDgfUz2XLuhjPBwL0AxzL','z2v0t3DUuhjVCgvYDhLezxnJCMLWDg9YCW','x3jLy3rHBMDSzq','BwLUq2fUDMfZu2L6zq','u3rLBMnPBe9WzxjHDgLVBG','Ew1HEa','zMXVB3i','uKvqtefdrq','zNjVBunHy2HL','ChG7','y2fSBa','z2v0uMvJDgfUz2XL','x2XHEwvY','x19LC01VzhvSzq','CMDIkdaSmcWWkq','ug9PBNruCMfUCW','ChG7AgvPz2H0oG','Dg9bCNjHEq','q29SB3i','x3nJywXL','CMvTB3zLr3jHCgHPyW','ywrKr3jHCgHPyW','nNrKweLPAa','y29WEunHBNzHCW','quXqsefFqKXftKq','zgvMyxvSDa','C2v0rgf0yq','AgvHDa','yxbWBhK','x2XHC3rFBujVDw5KCW','D2LKDgG','z3jLzw4','z2v0sw1Hz2veyxrH','BwLU','y3jLyxrL','ywrKtgf5zxi','y29UC3rYDwn0B3i','nJmWodmYm0z3DhjyCW','y29VCMrPBMf0zxm','zM9YrwfJAa','x3jLBMrLCMvY','oWOGicaGicaGicaGicbWicS9DMvJncHKAxnqB3mSmc4WktSkicaGicaGicaGicaGz2XFug9ZAxrPB24GpsbJEM1FBw9KzwXwAwv3uhjVAMvJDgLVBLjLBgf0AxzLvg9fEwuGkIbWoWOGicaGicaGicaGFqOGicaGicaGia','m05wrxnvyG','x2DLDeHLyxrdyw52yxm'];_0xcd4a=function(){return _0x2e6e31;};return _0xcd4a();}var mars3d__namespace=_interopNamespace(mars3d),h337__namespace=_interopNamespace(h337);function ownKeys(_0x176e31,_0x567083){var _0x519cd0=_0x4c40,_0x4799d0=Object['keys'](_0x176e31);if(Object[_0x519cd0(0x18f)]){var _0x1a073a=Object[_0x519cd0(0x18f)](_0x176e31);_0x567083&&(_0x1a073a=_0x1a073a['filter'](function(_0x53d8fd){var _0x91e533=_0x519cd0;return Object[_0x91e533(0x16b)](_0x176e31,_0x53d8fd)['enumerable'];})),_0x4799d0[_0x519cd0(0x1a2)][_0x519cd0(0x147)](_0x4799d0,_0x1a073a);}return _0x4799d0;}function _objectSpread2(_0x3a4a58){var _0x2f5f3b=_0x4c40;for(var _0x565c2b=0x1;_0x565c2b<arguments[_0x2f5f3b(0x191)];_0x565c2b++){var _0x2c7060=null!=arguments[_0x565c2b]?arguments[_0x565c2b]:{};_0x565c2b%0x2?ownKeys(Object(_0x2c7060),!0x0)[_0x2f5f3b(0x152)](function(_0x109114){_defineProperty(_0x3a4a58,_0x109114,_0x2c7060[_0x109114]);}):Object['getOwnPropertyDescriptors']?Object[_0x2f5f3b(0x168)](_0x3a4a58,Object[_0x2f5f3b(0x1c9)](_0x2c7060)):ownKeys(Object(_0x2c7060))[_0x2f5f3b(0x152)](function(_0x3cd31a){var _0x5c3175=_0x2f5f3b;Object['defineProperty'](_0x3a4a58,_0x3cd31a,Object[_0x5c3175(0x16b)](_0x2c7060,_0x3cd31a));});}return _0x3a4a58;}function _classCallCheck(_0x233ee5,_0x14d2ce){var _0x389173=_0x4c40;if(!(_0x233ee5 instanceof _0x14d2ce))throw new TypeError(_0x389173(0x194));}function _defineProperties(_0x5f3ff4,_0x18c285){var _0x313901=_0x4c40;for(var _0x14bc70=0x0;_0x14bc70<_0x18c285[_0x313901(0x191)];_0x14bc70++){var _0xf47cac=_0x18c285[_0x14bc70];_0xf47cac['enumerable']=_0xf47cac[_0x313901(0x17a)]||![],_0xf47cac[_0x313901(0x1ba)]=!![];if('value'in _0xf47cac)_0xf47cac[_0x313901(0x185)]=!![];Object[_0x313901(0x16f)](_0x5f3ff4,_0xf47cac[_0x313901(0x1a7)],_0xf47cac);}}function _createClass(_0x6de0af,_0x52dac3,_0x263321){var _0xd0882a=_0x4c40;if(_0x52dac3)_defineProperties(_0x6de0af[_0xd0882a(0x193)],_0x52dac3);if(_0x263321)_defineProperties(_0x6de0af,_0x263321);return Object[_0xd0882a(0x16f)](_0x6de0af,_0xd0882a(0x193),{'writable':![]}),_0x6de0af;}function _defineProperty(_0x26bdfd,_0x311f33,_0x38c2b7){return _0x311f33 in _0x26bdfd?Object['defineProperty'](_0x26bdfd,_0x311f33,{'value':_0x38c2b7,'enumerable':!![],'configurable':!![],'writable':!![]}):_0x26bdfd[_0x311f33]=_0x38c2b7,_0x26bdfd;}function _inherits(_0x46b05e,_0x3cff2d){var _0x4dabcb=_0x4c40;if(typeof _0x3cff2d!==_0x4dabcb(0x173)&&_0x3cff2d!==null)throw new TypeError(_0x4dabcb(0x15d));_0x46b05e[_0x4dabcb(0x193)]=Object[_0x4dabcb(0x14d)](_0x3cff2d&&_0x3cff2d[_0x4dabcb(0x193)],{'constructor':{'value':_0x46b05e,'writable':!![],'configurable':!![]}}),Object[_0x4dabcb(0x16f)](_0x46b05e,_0x4dabcb(0x193),{'writable':![]});if(_0x3cff2d)_setPrototypeOf(_0x46b05e,_0x3cff2d);}function _getPrototypeOf(_0x5e844c){var _0x26d1c4=_0x4c40;return _getPrototypeOf=Object[_0x26d1c4(0x1ac)]?Object[_0x26d1c4(0x166)]:function _0x286a72(_0x352f70){var _0x3e36a6=_0x26d1c4;return _0x352f70[_0x3e36a6(0x16e)]||Object[_0x3e36a6(0x166)](_0x352f70);},_getPrototypeOf(_0x5e844c);}function _setPrototypeOf(_0x3ea4af,_0x5d0fcb){var _0x4e15ab=_0x4c40;return _setPrototypeOf=Object[_0x4e15ab(0x1ac)]||function _0x4fd393(_0x1a3367,_0x43e1d3){var _0x12de5b=_0x4e15ab;return _0x1a3367[_0x12de5b(0x16e)]=_0x43e1d3,_0x1a3367;},_setPrototypeOf(_0x3ea4af,_0x5d0fcb);}function _isNativeReflectConstruct(){var _0x2d2376=_0x4c40;if(typeof Reflect===_0x2d2376(0x1a5)||!Reflect[_0x2d2376(0x1a8)])return![];if(Reflect[_0x2d2376(0x1a8)][_0x2d2376(0x1c0)])return![];if(typeof Proxy===_0x2d2376(0x173))return!![];try{return Boolean[_0x2d2376(0x193)]['valueOf']['call'](Reflect[_0x2d2376(0x1a8)](Boolean,[],function(){})),!![];}catch(_0x5206a9){return![];}}function _assertThisInitialized(_0xd41393){var _0x1dc20a=_0x4c40;if(_0xd41393===void 0x0)throw new ReferenceError(_0x1dc20a(0x1bb));return _0xd41393;}function _possibleConstructorReturn(_0x5f101b,_0xcd61a8){var _0x38b7c1=_0x4c40;if(_0xcd61a8&&(typeof _0xcd61a8===_0x38b7c1(0x17b)||typeof _0xcd61a8==='function'))return _0xcd61a8;else{if(_0xcd61a8!==void 0x0)throw new TypeError(_0x38b7c1(0x18b));}return _assertThisInitialized(_0x5f101b);}function _createSuper(_0x306857){var _0x37db37=_isNativeReflectConstruct();return function _0x5edc34(){var _0x3d8223=_0x4c40,_0x40d48f=_getPrototypeOf(_0x306857),_0x5c28ba;if(_0x37db37){var _0x9a4dcc=_getPrototypeOf(this)[_0x3d8223(0x14f)];_0x5c28ba=Reflect[_0x3d8223(0x1a8)](_0x40d48f,arguments,_0x9a4dcc);}else _0x5c28ba=_0x40d48f[_0x3d8223(0x147)](this,arguments);return _possibleConstructorReturn(this,_0x5c28ba);};}var HeatMaterial=_0xd6a3c2(0x1a1);function _0x4c40(_0x167699,_0x538c4e){var _0xcd4a9a=_0xcd4a();return _0x4c40=function(_0x4c40da,_0xab0947){_0x4c40da=_0x4c40da-0x141;var _0x4f0257=_0xcd4a9a[_0x4c40da];if(_0x4c40['IOHkqM']===undefined){var _0x53d5f8=function(_0x4cf054){var _0x49073f='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x201df8='',_0x34f102='';for(var _0x176e31=0x0,_0x567083,_0x4799d0,_0x1a073a=0x0;_0x4799d0=_0x4cf054['charAt'](_0x1a073a++);~_0x4799d0&&(_0x567083=_0x176e31%0x4?_0x567083*0x40+_0x4799d0:_0x4799d0,_0x176e31++%0x4)?_0x201df8+=String['fromCharCode'](0xff&_0x567083>>(-0x2*_0x176e31&0x6)):0x0){_0x4799d0=_0x49073f['indexOf'](_0x4799d0);}for(var _0x53d8fd=0x0,_0x3a4a58=_0x201df8['length'];_0x53d8fd<_0x3a4a58;_0x53d8fd++){_0x34f102+='%'+('00'+_0x201df8['charCodeAt'](_0x53d8fd)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x34f102);};_0x4c40['LCrUYe']=_0x53d5f8,_0x167699=arguments,_0x4c40['IOHkqM']=!![];}var _0x2c8c28=_0xcd4a9a[0x0],_0x3cc474=_0x4c40da+_0x2c8c28,_0x5ca6ba=_0x167699[_0x3cc474];return!_0x5ca6ba?(_0x4f0257=_0x4c40['LCrUYe'](_0x4f0257),_0x167699[_0x3cc474]=_0x4f0257):_0x4f0257=_0x5ca6ba,_0x4f0257;},_0x4c40(_0x167699,_0x538c4e);}if(!h337__namespace[_0xd6a3c2(0x14d)])throw new Error('请引入\x20heatmap.js\x20库\x20');var Cesium=mars3d__namespace[_0xd6a3c2(0x186)],BaseLayer=mars3d__namespace['layer']['BaseLayer'],DEF_HEATSTYLE={'maxOpacity':0.8,'minOpacity':0.1,'blur':0.85,'radius':0x19,'gradient':{0.4:_0xd6a3c2(0x161),0.6:_0xd6a3c2(0x14a),0.8:_0xd6a3c2(0x178),0.9:_0xd6a3c2(0x17c)}},DEF_STYLE={'arcRadiusScale':1.5,'arcBlurScale':1.5,'vertexFormat':Cesium[_0xd6a3c2(0x183)]['VERTEX_FORMAT']},HeatLayer=function(_0xd70a2e){var _0x3022b0=_0xd6a3c2;_inherits(_0x31ef28,_0xd70a2e);var _0x3e1653=_createSuper(_0x31ef28);function _0x31ef28(){var _0x13234c=_0x4c40,_0x312e51,_0xea8001,_0x1104d3,_0x7fdbda=arguments[_0x13234c(0x191)]>0x0&&arguments[0x0]!==undefined?arguments[0x0]:{};return _classCallCheck(this,_0x31ef28),_0x1104d3=_0x3e1653[_0x13234c(0x1d2)](this,_0x7fdbda),_0x1104d3[_0x13234c(0x188)][_0x13234c(0x190)]=(_0x312e51=_0x1104d3[_0x13234c(0x188)][_0x13234c(0x190)])!==null&&_0x312e51!==void 0x0?_0x312e51:document['body']['clientWidth'],_0x1104d3[_0x13234c(0x188)]['maxCanvasSize']=Math[_0x13234c(0x14c)](_0x1104d3[_0x13234c(0x188)][_0x13234c(0x190)],0x1388),_0x1104d3[_0x13234c(0x188)][_0x13234c(0x1cb)]=(_0xea8001=_0x1104d3[_0x13234c(0x188)][_0x13234c(0x1cb)])!==null&&_0xea8001!==void 0x0?_0xea8001:document['body']['clientHeight'],_0x1104d3[_0x13234c(0x188)][_0x13234c(0x1cb)]=Math[_0x13234c(0x160)](_0x1104d3[_0x13234c(0x188)]['minCanvasSize'],0x2bc),_0x1104d3[_0x13234c(0x188)]['heatStyle']=_objectSpread2(_objectSpread2({},DEF_HEATSTYLE),_0x1104d3[_0x13234c(0x188)][_0x13234c(0x1aa)]||{}),_0x1104d3['options'][_0x13234c(0x197)]=_objectSpread2(_objectSpread2({},DEF_STYLE),_0x1104d3[_0x13234c(0x188)][_0x13234c(0x197)]||{}),_0x1104d3;}return _createClass(_0x31ef28,[{'key':_0x3022b0(0x165),'get':function _0x5e1605(){return this['_layer'];}},{'key':_0x3022b0(0x1aa),'get':function _0x2118bc(){var _0x271917=_0x3022b0;return this[_0x271917(0x188)]['heatStyle'];},'set':function _0x2c62d2(_0x259e32){var _0x5d3d6c=_0x3022b0;this[_0x5d3d6c(0x188)][_0x5d3d6c(0x1aa)]=mars3d__namespace[_0x5d3d6c(0x1c7)][_0x5d3d6c(0x1af)](this[_0x5d3d6c(0x188)][_0x5d3d6c(0x1aa)],_0x259e32),this['_heat']&&(this[_0x5d3d6c(0x174)][_0x5d3d6c(0x1a9)](this[_0x5d3d6c(0x188)][_0x5d3d6c(0x1aa)]),this[_0x5d3d6c(0x196)](!![]));}},{'key':_0x3022b0(0x197),'get':function _0x464eb5(){var _0x23958b=_0x3022b0;return this['options'][_0x23958b(0x197)];},'set':function _0x8ce576(_0x22ba89){var _0xfdcd2=_0x3022b0;this[_0xfdcd2(0x188)][_0xfdcd2(0x197)]=mars3d__namespace['Util'][_0xfdcd2(0x1af)](this[_0xfdcd2(0x188)]['style'],_0x22ba89);}},{'key':_0x3022b0(0x18c),'get':function _0x5d065f(){return this['_positions'];},'set':function _0x451c0d(_0x24b884){this['setPositions'](_0x24b884);}},{'key':_0x3022b0(0x151),'get':function _0x3b709b(){var _0x441e2c=_0x3022b0,_0x13311e=[];return this['points'][_0x441e2c(0x152)](function(_0x114d8c){var _0x44e795=_0x441e2c;_0x13311e[_0x44e795(0x1a2)](_0x114d8c[_0x44e795(0x1d9)]());}),_0x13311e;}},{'key':_0x3022b0(0x176),'get':function _0xe40245(){var _0x252335=_0x3022b0;return this[_0x252335(0x1ca)];}},{'key':'_setOptionsHook','value':function _0x350a03(_0x4aa58b){var _0x5317cf=_0x3022b0;_0x4aa58b[_0x5317cf(0x18c)]&&(this[_0x5317cf(0x18c)]=_0x4aa58b[_0x5317cf(0x18c)]);}},{'key':_0x3022b0(0x1be),'value':function _0x48d1cc(){var _0xbb1230=_0x3022b0;this[_0xbb1230(0x1d4)]=new mars3d__namespace[(_0xbb1230(0x165))]['GraphicLayer']({'private':!![]});}},{'key':'_addedHook','value':function _0x4bcac2(){var _0xe6e869=_0x3022b0;this[_0xe6e869(0x182)][_0xe6e869(0x14e)](this['_layer']),this[_0xe6e869(0x188)][_0xe6e869(0x18c)]&&(this[_0xe6e869(0x18c)]=this[_0xe6e869(0x188)][_0xe6e869(0x18c)]),this[_0xe6e869(0x188)][_0xe6e869(0x1b0)]&&this[_0xe6e869(0x1a6)]();}},{'key':'_removedHook','value':function _0x29752b(){var _0x5dd1d5=_0x3022b0;this[_0x5dd1d5(0x1aa)][_0x5dd1d5(0x158)]&&(mars3d__namespace[_0x5dd1d5(0x162)][_0x5dd1d5(0x1b1)](this[_0x5dd1d5(0x1aa)][_0x5dd1d5(0x158)]),delete this[_0x5dd1d5(0x1aa)][_0x5dd1d5(0x158)]),this[_0x5dd1d5(0x189)](),this['_map']['removeLayer'](this['_layer']);}},{'key':'addPosition','value':function _0x268568(_0x5eff20,_0x562962){var _0x360a10=_0x3022b0;this[_0x360a10(0x15a)]=this[_0x360a10(0x15a)]||[],this['_positions'][_0x360a10(0x1a2)](_0x5eff20),this[_0x360a10(0x196)](_0x562962);}},{'key':_0x3022b0(0x19d),'value':function _0x4b9b09(_0x548575,_0x2bb86b){var _0x2f81ba=_0x3022b0;this[_0x2f81ba(0x15a)]=_0x548575,this[_0x2f81ba(0x196)](_0x2bb86b);}},{'key':_0x3022b0(0x189),'value':function _0x4d57bf(){var _0x573762=_0x3022b0;this[_0x573762(0x175)]&&(this['_layer'][_0x573762(0x1dc)](this[_0x573762(0x175)],!![]),delete this['_graphic']);}},{'key':'_updatePositionsHook','value':function _0x490c84(_0x36acf6){var _0x17c143=_0x3022b0;if(!this['show']||!this[_0x17c143(0x182)]||!this[_0x17c143(0x18c)]||this[_0x17c143(0x18c)]['length']===0x0)return this;var _0x274ad8=this[_0x17c143(0x156)]();return this['style'][_0x17c143(0x18a)]?this[_0x17c143(0x175)]&&_0x36acf6?(this[_0x17c143(0x175)][_0x17c143(0x1b2)]['image']=_0x274ad8,this[_0x17c143(0x175)]['uniforms'][_0x17c143(0x19c)]=this[_0x17c143(0x1c2)]()):this[_0x17c143(0x18d)](_0x274ad8):this['_graphic']&&_0x36acf6?this[_0x17c143(0x175)][_0x17c143(0x1b2)][_0x17c143(0x179)]=_0x274ad8:this[_0x17c143(0x1c4)](_0x274ad8),this;}},{'key':_0x3022b0(0x1c4),'value':function _0x286f11(_0x235de2){var _0x18924f=_0x3022b0;this['clear'](),this[_0x18924f(0x175)]=new mars3d__namespace[(_0x18924f(0x199))][(_0x18924f(0x1c8))](_objectSpread2(_objectSpread2({},this['options']),{},{'rectangle':this[_0x18924f(0x1ca)],'appearance':new Cesium['EllipsoidSurfaceAppearance']({'material':new Cesium[(_0x18924f(0x1b3))]({'fabric':{'uniforms':{'image':_0x235de2},'source':HeatMaterial},'translucent':!![]}),'flat':!![]})})),this[_0x18924f(0x1d4)][_0x18924f(0x1dd)](this['_graphic']);}},{'key':_0x3022b0(0x18d),'value':function _0x22e13f(_0x592a57){var _0x54ae2e=_0x3022b0,_0x165ff4;this[_0x54ae2e(0x189)]();var _0x573e72=Cesium[_0x54ae2e(0x19f)][_0x54ae2e(0x1d0)]({'cull':{'enabled':!![]},'depthTest':{'enabled':!![]},'stencilTest':{'enabled':!![],'frontFunction':Cesium[_0x54ae2e(0x15f)]['ALWAYS'],'frontOperation':{'fail':Cesium[_0x54ae2e(0x1cc)][_0x54ae2e(0x1a4)],'zFail':Cesium['StencilOperation'][_0x54ae2e(0x1a4)],'zPass':Cesium[_0x54ae2e(0x1cc)][_0x54ae2e(0x1cf)]},'backFunction':Cesium[_0x54ae2e(0x15f)]['ALWAYS'],'backOperation':{'fail':Cesium[_0x54ae2e(0x1cc)][_0x54ae2e(0x1a4)],'zFail':Cesium['StencilOperation'][_0x54ae2e(0x1a4)],'zPass':Cesium[_0x54ae2e(0x1cc)][_0x54ae2e(0x1cf)]},'reference':0x2,'mask':0x2},'blending':Cesium[_0x54ae2e(0x1c5)][_0x54ae2e(0x143)]}),_0x4a9c1d=Math[_0x54ae2e(0x1ce)]((_0x165ff4=this[_0x54ae2e(0x197)][_0x54ae2e(0x1c3)])!==null&&_0x165ff4!==void 0x0?_0x165ff4:this[_0x54ae2e(0x16d)]*0.02)+0.1;this[_0x54ae2e(0x197)][_0x54ae2e(0x1c3)]&&delete this[_0x54ae2e(0x197)][_0x54ae2e(0x1c3)];var _0x3d28c0=(this['style'][_0x54ae2e(0x177)],0x64),_0x327585=Math['max'](this['_rectangle'][_0x54ae2e(0x17e)],this[_0x54ae2e(0x1ca)][_0x54ae2e(0x149)]);this[_0x54ae2e(0x197)][_0x54ae2e(0x159)]=_0x327585/=_0x3d28c0,this[_0x54ae2e(0x175)]=new mars3d__namespace[(_0x54ae2e(0x199))][(_0x54ae2e(0x1c8))](_objectSpread2(_objectSpread2({},this['options']),{},{'rectangle':this['_rectangle'],'appearance':new Cesium[(_0x54ae2e(0x183))]({'aboveGround':!![],'renderState':_0x573e72,'material':new Cesium[(_0x54ae2e(0x1b3))]({'fabric':{'uniforms':{'image':_0x592a57,'repeat':new Cesium[(_0x54ae2e(0x16c))](0x1,0x1),'color':new Cesium[(_0x54ae2e(0x1da))](0x1,0x1,0x1,0.01),'bumpMap':this[_0x54ae2e(0x1c2)]()},'source':HeatMaterial},'translucent':!![]}),'vertexShaderSource':_0x54ae2e(0x16a)['concat'](_0x4a9c1d,_0x54ae2e(0x154)),'flat':!![]})})),this[_0x54ae2e(0x1d4)][_0x54ae2e(0x1dd)](this[_0x54ae2e(0x175)]);}},{'key':_0x3022b0(0x1d3),'value':function _0xf288f7(_0x4abe83){var _0x451b75=_0x3022b0;return _0x4abe83!==null&&_0x4abe83!==void 0x0&&_0x4abe83[_0x451b75(0x15e)]&&this[_0x451b75(0x1ca)]?mars3d__namespace[_0x451b75(0x19b)]['formatRectangle'](this[_0x451b75(0x1ca)]):this['_rectangle'];}},{'key':'_getHeatCanvas','value':function _0x130369(){var _0x4b2e89=_0x3022b0,_0x349c96=this,_0x40a912,_0xc418ed,_0x353435,_0x2750df,_0x36c0c3=this['_positions'],_0x2d9e59=[],_0x115807,_0x558040,_0x2045db,_0x9c62e7;_0x36c0c3[_0x4b2e89(0x152)](function(_0xdee83f){var _0x23ce10=_0x4b2e89,_0x17427f=mars3d__namespace[_0x23ce10(0x1c6)][_0x23ce10(0x172)](_0xdee83f);if(!_0x17427f)return;_0x17427f[_0x23ce10(0x169)]=_0xdee83f[_0x23ce10(0x169)]||0x1,!_0x349c96['options'][_0x23ce10(0x176)]&&(_0x115807===undefined?(_0x115807=_0x17427f['lng'],_0x558040=_0x17427f[_0x23ce10(0x170)],_0x2045db=_0x17427f['lat'],_0x9c62e7=_0x17427f[_0x23ce10(0x1a0)]):(_0x115807=Math[_0x23ce10(0x14c)](_0x115807,_0x17427f[_0x23ce10(0x170)]),_0x558040=Math[_0x23ce10(0x160)](_0x558040,_0x17427f[_0x23ce10(0x170)]),_0x2045db=Math[_0x23ce10(0x14c)](_0x2045db,_0x17427f[_0x23ce10(0x1a0)]),_0x9c62e7=Math[_0x23ce10(0x160)](_0x9c62e7,_0x17427f['lat']))),_0x2d9e59[_0x23ce10(0x1a2)](_0x17427f);});var _0x20bda7=this[_0x4b2e89(0x188)]['rectangle']||{'xmin':_0x115807,'xmax':_0x558040,'ymin':_0x2045db,'ymax':_0x9c62e7},_0x832e9d=getMercatorBounds(_0x20bda7),_0x617f92=Math[_0x4b2e89(0x1ae)](_0x832e9d['xmax']-_0x832e9d[_0x4b2e89(0x192)]),_0x3b2a52=Math[_0x4b2e89(0x1ae)](_0x832e9d[_0x4b2e89(0x1cd)]-_0x832e9d['ymin']),_0x288405=Math[_0x4b2e89(0x160)](_0x617f92,_0x3b2a52),_0x154e40=Math[_0x4b2e89(0x14c)](_0x617f92,_0x3b2a52);this['_mBoundsMax']=_0x288405;var _0xc87c83=0x1;if(_0x288405>this[_0x4b2e89(0x188)]['maxCanvasSize'])_0xc87c83=_0x288405/this[_0x4b2e89(0x188)][_0x4b2e89(0x190)],_0x154e40/_0xc87c83<this['options'][_0x4b2e89(0x1cb)]&&(_0xc87c83=_0x154e40/this['options']['minCanvasSize']);else _0x154e40<this[_0x4b2e89(0x188)][_0x4b2e89(0x1cb)]&&(_0xc87c83=_0x154e40/this[_0x4b2e89(0x188)][_0x4b2e89(0x1cb)],_0x288405/_0xc87c83>this[_0x4b2e89(0x188)]['maxCanvasSize']&&(_0xc87c83=_0x288405/this[_0x4b2e89(0x188)]['maxCanvasSize']));var _0x4ed8b4=this[_0x4b2e89(0x1aa)][_0x4b2e89(0x164)]*1.5,_0x14a842=_0x617f92/_0xc87c83+_0x4ed8b4*0x2,_0x37e462=_0x3b2a52/_0xc87c83+_0x4ed8b4*0x2,_0x109288=_0x4ed8b4*_0xc87c83;_0x832e9d['xmin']-=_0x109288,_0x832e9d['ymin']-=_0x109288,_0x832e9d[_0x4b2e89(0x1bc)]+=_0x109288,_0x832e9d[_0x4b2e89(0x1cd)]+=_0x109288,this[_0x4b2e89(0x1db)]=_0xc87c83,_0x20bda7=geLatLngBounds(_0x832e9d),this[_0x4b2e89(0x1ca)]=Cesium[_0x4b2e89(0x17f)][_0x4b2e89(0x1b8)](_0x20bda7[_0x4b2e89(0x192)],_0x20bda7[_0x4b2e89(0x17d)],_0x20bda7[_0x4b2e89(0x1bc)],_0x20bda7[_0x4b2e89(0x1cd)]);var _0x445315=(_0x40a912=_0x2d9e59[0x0][_0x4b2e89(0x169)])!==null&&_0x40a912!==void 0x0?_0x40a912:0x1,_0x3b7105=(_0xc418ed=_0x2d9e59[0x0][_0x4b2e89(0x169)])!==null&&_0xc418ed!==void 0x0?_0xc418ed:0x0,_0x1156d6=[];_0x2d9e59[_0x4b2e89(0x152)](function(_0x332ba4){var _0x2c3863=_0x4b2e89,_0x327247=mars3d__namespace['PointTrans']['lonlat2mercator']([_0x332ba4[_0x2c3863(0x170)],_0x332ba4['lat']]),_0x1d03ed=_0x332ba4[_0x2c3863(0x169)]||0x1,_0x20b394=Math[_0x2c3863(0x184)]((_0x327247[0x0]-_0x832e9d['xmin'])/_0xc87c83),_0xa45b6=Math[_0x2c3863(0x184)]((_0x832e9d[_0x2c3863(0x1cd)]-_0x327247[0x1])/_0xc87c83);_0x445315=Math['max'](_0x445315,_0x1d03ed),_0x3b7105=Math[_0x2c3863(0x14c)](_0x3b7105,_0x1d03ed),_0x1156d6[_0x2c3863(0x1a2)]({'x':_0x20b394,'y':_0xa45b6,'value':_0x1d03ed});});var _0x4fda1f={'min':(_0x353435=this[_0x4b2e89(0x188)]['min'])!==null&&_0x353435!==void 0x0?_0x353435:_0x3b7105,'max':(_0x2750df=this[_0x4b2e89(0x188)][_0x4b2e89(0x160)])!==null&&_0x2750df!==void 0x0?_0x2750df:_0x445315,'data':_0x1156d6};this[_0x4b2e89(0x1a3)]=_0x4fda1f;(!this['_last_mBounds']||_0x832e9d[_0x4b2e89(0x192)]!==this['_last_mBounds'][_0x4b2e89(0x192)]||_0x832e9d[_0x4b2e89(0x17d)]!==this['_last_mBounds']['ymin']||_0x832e9d[_0x4b2e89(0x1bc)]!==this['_last_mBounds'][_0x4b2e89(0x1bc)]||_0x832e9d[_0x4b2e89(0x1cd)]!==this['_last_mBounds']['ymax'])&&(this['_last_mBounds']=_0x832e9d,!this[_0x4b2e89(0x1aa)][_0x4b2e89(0x158)]&&(this['heatStyle'][_0x4b2e89(0x158)]=mars3d__namespace[_0x4b2e89(0x162)][_0x4b2e89(0x14d)](_0x4b2e89(0x167),'mars3d-heatmap\x20mars3d-hideDiv',this[_0x4b2e89(0x182)][_0x4b2e89(0x158)])),this[_0x4b2e89(0x1aa)][_0x4b2e89(0x158)][_0x4b2e89(0x197)][_0x4b2e89(0x1bf)]=_0x4b2e89(0x19e)['concat'](_0x14a842,_0x4b2e89(0x1d8))['concat'](_0x37e462,_0x4b2e89(0x1d1)),!this[_0x4b2e89(0x174)]?this['_heat']=h337__namespace[_0x4b2e89(0x14d)](this[_0x4b2e89(0x1aa)]):this[_0x4b2e89(0x174)][_0x4b2e89(0x1a9)](this['heatStyle']));this[_0x4b2e89(0x174)][_0x4b2e89(0x145)](_0x4fda1f);var _0x462b7d=mars3d__namespace[_0x4b2e89(0x162)][_0x4b2e89(0x142)](this[_0x4b2e89(0x174)][_0x4b2e89(0x153)][_0x4b2e89(0x1ad)]);return _0x462b7d;}},{'key':_0x3022b0(0x1c2),'value':function _0x4f95f2(){var _0x10ad79=_0x3022b0;this[_0x10ad79(0x174)][_0x10ad79(0x1a9)]({'radius':this['heatStyle'][_0x10ad79(0x164)]*this[_0x10ad79(0x197)][_0x10ad79(0x15b)],'blur':this[_0x10ad79(0x1aa)][_0x10ad79(0x195)]*this['style'][_0x10ad79(0x15c)],'gradient':this[_0x10ad79(0x1aa)][_0x10ad79(0x187)]||{0.25:_0x10ad79(0x1d6),0.55:_0x10ad79(0x1c1),0.85:_0x10ad79(0x1b4),0x1:_0x10ad79(0x163)}});var _0x497a5d=mars3d__namespace[_0x10ad79(0x162)][_0x10ad79(0x142)](this[_0x10ad79(0x174)][_0x10ad79(0x153)][_0x10ad79(0x1ad)]);return this[_0x10ad79(0x174)][_0x10ad79(0x1a9)](this[_0x10ad79(0x188)]['heatStyle']),_0x497a5d;}},{'key':'getPointData','value':function _0x2c6942(_0x22a095){var _0x5c2294=_0x3022b0,_0x200b85=mars3d__namespace[_0x5c2294(0x1c6)]['parse'](_0x22a095);if(!_0x200b85)return{};var _0x1fdb43=mars3d__namespace['PointTrans'][_0x5c2294(0x1b5)]([_0x200b85[_0x5c2294(0x170)],_0x200b85['lat']]),_0x23065=this[_0x5c2294(0x148)],_0x1edf1f=Math[_0x5c2294(0x184)]((_0x1fdb43[0x0]-_0x23065['xmin'])/this[_0x5c2294(0x1db)]),_0x1b8992=Math[_0x5c2294(0x184)]((_0x23065[_0x5c2294(0x1cd)]-_0x1fdb43[0x1])/this['_scale']),_0x212645=this[_0x5c2294(0x174)]['getValueAt']({'x':_0x1edf1f,'y':_0x1b8992}),_0x1c7b5f=this[_0x5c2294(0x174)][_0x5c2294(0x153)]['ctx'][_0x5c2294(0x14b)](_0x1edf1f-0x1,_0x1b8992-0x1,0x1,0x1)[_0x5c2294(0x157)];return{'x':_0x1edf1f,'y':_0x1b8992,'value':_0x212645,'color':_0x5c2294(0x18e)+_0x1c7b5f[0x0]+','+_0x1c7b5f[0x1]+','+_0x1c7b5f[0x2]+','+_0x1c7b5f[0x3]+')'};}}]),_0x31ef28;}(BaseLayer);mars3d__namespace['layer'][_0xd6a3c2(0x1b9)]=HeatLayer,mars3d__namespace[_0xd6a3c2(0x1ab)]['register'](_0xd6a3c2(0x146),HeatLayer);function getMercatorBounds(_0x38fa7f){var _0x40a32e=_0xd6a3c2,_0x3668f4=mars3d__namespace[_0x40a32e(0x1d7)][_0x40a32e(0x1b5)]([_0x38fa7f[_0x40a32e(0x192)],_0x38fa7f[_0x40a32e(0x17d)]]),_0x53e12d=mars3d__namespace['PointTrans']['lonlat2mercator']([_0x38fa7f[_0x40a32e(0x1bc)],_0x38fa7f['ymax']]);return{'xmin':_0x3668f4[0x0],'ymin':_0x3668f4[0x1],'xmax':_0x53e12d[0x0],'ymax':_0x53e12d[0x1]};}function geLatLngBounds(_0x5a7f8b){var _0x5e8f4a=_0xd6a3c2,_0x5aa7ad=mars3d__namespace[_0x5e8f4a(0x1d7)][_0x5e8f4a(0x171)]([_0x5a7f8b['xmin'],_0x5a7f8b[_0x5e8f4a(0x17d)]]),_0x349bd1=mars3d__namespace[_0x5e8f4a(0x1d7)][_0x5e8f4a(0x171)]([_0x5a7f8b[_0x5e8f4a(0x1bc)],_0x5a7f8b['ymax']]);return{'xmin':_0x5aa7ad[0x0],'ymin':_0x5aa7ad[0x1],'xmax':_0x349bd1[0x0],'ymax':_0x349bd1[0x1]};}exports[_0xd6a3c2(0x1b9)]=HeatLayer,Object[_0xd6a3c2(0x16f)](exports,_0xd6a3c2(0x1d5),{'value':!![]});
}));