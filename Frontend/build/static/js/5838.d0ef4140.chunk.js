"use strict";(self.webpackChunkyourplaces=self.webpackChunkyourplaces||[]).push([[5838],{66576:function(e,t,r){r.d(t,{B:function(){return I}});var n=r(74165),i=r(15861),o=r(1413),a=r(37762),s=r(92026),l=r(80292),u=r(35995),p=r(71907),c=r(33397),d=r(25265),y=r(49861);function f(e){return h[function(e){return e instanceof Blob?e.type:function(e){var t=(0,u.Ml)(e);return m[t]||v}(e.url)}(e)]||g}var h={},v="text/plain",g=h[v],m={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip"};for(var b in m)h[m[b]]=b;var w=r(53283);function I(e){var t=(0,s.pC)(e)&&e.origins?e.origins:[void 0];return function(r,n){var i,p=function(e,t,r){if((0,s.pC)(e)&&"resource"===e.type)return function(e,t,r){var n=(0,c.VZ)(t,r);return{type:String,read:function(e,t,r){var i=(0,w.r)(e,t,r);return n.type===String?i:"function"==typeof n.type?new n.type({url:i}):void 0},write:{writer:function(t,i,a,p){if(!p||!p.resources)return"string"==typeof t?void(i[a]=(0,w.t)(t,p)):void(i[a]=t.write({},p));var c=function(e){return(0,s.Wi)(e)?null:"string"==typeof e?e:e.url}(t),y=c?(0,w.t)(c,(0,o.Z)((0,o.Z)({},p),{},{verifyItemRelativeUrls:p&&p.verifyItemRelativeUrls?{writtenUrls:p.verifyItemRelativeUrls.writtenUrls,rootPath:null}:null}),w.M.NO):null,h=n.type!==String&&(!(0,l.l)(this)||p&&p.origin&&this.originIdOf(r)>(0,d.M9)(p.origin));p&&p.portalItem&&(0,s.pC)(y)&&!(0,u.YP)(y)?h?function(e,t,r,n,i,o,a,s){var l=a.portalItem.resourceFromPath(n),p=k(r,n,a);f(p)===(0,u.Ml)(l.path)?(Z(e,t,l,p,a.resources.toUpdate),i[o]=n):_(e,t,r,n,i,o,a,s)}(this,r,t,y,i,a,p,e):function(e,t,r,n){n.resources.toKeep.push({resource:n.portalItem.resourceFromPath(e)}),t[r]=e}(y,i,a,p):p&&p.portalItem&&((0,s.Wi)(y)||(0,s.pC)((0,w.i)(y))||(0,u.jc)(y)||h)?_(this,r,t,y,i,a,p,e):i[a]=y}}}}(e,t,r);switch((0,s.pC)(e)&&e.type?e.type:"other"){case"other":return{read:!0,write:!0};case"url":return{read:w.p.read,write:w.p.write}}}(e,r,n),h=(0,a.Z)(t);try{for(h.s();!(i=h.n()).done;){var v=i.value,g=(0,y.CJ)(r,v,n);for(var m in p)g[m]=p[m]}}catch(b){h.e(b)}finally{h.f()}}}function _(e,t,r,n,i,o,a,l){var c=(0,p.D)(),d=k(r,n,a),y=(0,u.v_)((0,s.U2)(l,"prefix"),c),h="".concat(y,".").concat(f(d)),v=a.portalItem.resourceFromPath(h);(0,u.jc)(n)&&a.resources.pendingOperations.push(function(e){return C.apply(this,arguments)}(n).then((function(e){v.path="".concat(y,".").concat(f(e)),i[o]=v.itemRelativeUrl})).catch((function(){}))),Z(e,t,v,d,a.resources.toAdd),i[o]=v.itemRelativeUrl}function Z(e,t,r,n,i){i.push({resource:r,content:n,finish:function(r){!function(e,t,r){"string"==typeof e[t]?e[t]=r.url:e[t].url=r.url}(e,t,r)}})}function k(e,t,r){return"string"==typeof e?{url:t}:new Blob([JSON.stringify(e.toJSON(r))],{type:"application/json"})}function C(){return C=(0,i.Z)((0,n.Z)().mark((function e(t){var i,o,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(r.bind(r,76200));case 2:return i=e.sent.default,e.next=5,i(t,{responseType:"blob"});case 5:return o=e.sent,a=o.data,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)}))),C.apply(this,arguments)}},5838:function(e,t,r){r.r(t),r.d(t,{default:function(){return we}});var n=r(37762),i=r(74165),o=r(15861),a=r(1413),s=r(15671),l=r(43144),u=r(11752),p=r(61120),c=r(60136),d=r(54062),y=r(27366),f=r(44055),h=(r(94931),r(78451),r(98689),r(57823),r(32066),r(49018),r(34999),r(79850),r(9014),r(40464)),v=r(76200),g=r(40281),m=r(10064),b=r(32718),w=r(92026),I=r(97642),_=r(66978),Z=r(94172),k=r(35995),C=r(49861),x=(r(63780),r(93169),r(23879)),S=(r(25243),r(38511)),L=r(69912),j=r(25265),F=r(30651),O=r(27961),E=r(11936),T=r(6061),R=r(29598),P=r(56811),A=r(95731),N=r(96978),D=r(45948),U=r(87562),q=r(10536),Q=r(34785),V=r(25610),G=r(52410),W=r(80031),J=r(34207),M=r(77748),z=r(85116),K=r(71065),B=r(46784),Y=function(e){(0,c.Z)(r,e);var t=(0,d.Z)(r);function r(){var e;return(0,s.Z)(this,r),(e=t.apply(this,arguments)).name=null,e.field=null,e.currentRangeExtent=null,e.fullRangeExtent=null,e.type="rangeInfo",e}return(0,l.Z)(r)}(B.wq);(0,y._)([(0,C.Cb)({type:String,json:{read:!0,write:!0}})],Y.prototype,"name",void 0),(0,y._)([(0,C.Cb)({type:String,json:{read:!0,write:!0}})],Y.prototype,"field",void 0),(0,y._)([(0,C.Cb)({type:[Number],json:{read:!0,write:!0}})],Y.prototype,"currentRangeExtent",void 0),(0,y._)([(0,C.Cb)({type:[Number],json:{read:!0,write:!0}})],Y.prototype,"fullRangeExtent",void 0),(0,y._)([(0,C.Cb)({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],Y.prototype,"type",void 0),Y=(0,y._)([(0,L.j)("esri.layers.support.RangeInfo")],Y);var H,X,$=r(100),ee=r(84652),te=r(66576),re=r(51370),ne=(r(75366),r(80885)),ie=r(52587),oe=H=function(e){(0,c.Z)(r,e);var t=(0,d.Z)(r);function r(e){return(0,s.Z)(this,r),t.call(this,e)}return(0,l.Z)(r,[{key:"clone",value:function(){return new H(this.items.map((function(e){return e.clone()})))}},{key:"write",value:function(e,t){return this.toJSON(t)}},{key:"toJSON",value:function(e){var t,r=this,n=null===e||void 0===e||null===(t=e.layer)||void 0===t?void 0:t.spatialReference;return n?this.toArray().map((function(t){if(!n.equals(t.spatialReference)){if(!(0,ie.Up)(t.spatialReference,n))return e&&e.messages&&e.messages.push(new re.Z("scenefilter:unsupported","Scene filters with incompatible spatial references are not supported",{modification:r,spatialReference:e.layer.spatialReference,context:e})),null;var i=new ne.Z;(0,ie.Wt)(t,i,n),t=i}var o=t.toJSON(e);return delete o.spatialReference,o})).filter((function(e){return null!=e})):(null!==e&&void 0!==e&&e.messages&&e.messages.push(new re.Z("scenefilter:unsupported","Writing Scene filters without context layer is not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),this.toArray().map((function(t){return t.toJSON(e)})))}}],[{key:"fromJSON",value:function(e,t){var r=new H;return e.forEach((function(e){return r.add(ne.Z.fromJSON(e,t))})),r}}]),r}((0,B.eC)(g.Z.ofType(ne.Z))),ae=oe=H=(0,y._)([(0,L.j)("esri.layers.support.PolygonCollection")],oe),se=r(53283),le=X=function(e){(0,c.Z)(r,e);var t=(0,d.Z)(r);function r(e){var n;return(0,s.Z)(this,r),(n=t.call(this,e)).spatialRelationship="disjoint",n.geometries=new ae,n._geometriesSource=null,n._handles=new $.Z,n}return(0,l.Z)(r,[{key:"initialize",value:function(){var e=this;this._handles.add((0,Z.on)((function(){return e.geometries}),"after-changes",(function(){return e.geometries=e.geometries}),Z.Z_))}},{key:"destroy",value:function(){this._handles.destroy()}},{key:"readGeometries",value:function(e,t,r){this._geometriesSource={url:(0,se.f)(e,r),context:r}}},{key:"loadGeometries",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){var n,o,s,l,u,p;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0,w.Wi)(this._geometriesSource)){e.next=2;break}return e.abrupt("return");case 2:return n=this._geometriesSource,o=n.url,s=n.context,e.next=7,(0,v.default)(o,{responseType:"json",signal:(0,w.U2)(r,"signal")});case 7:l=e.sent,u=t.toJSON(),p=l.data.map((function(e){return(0,a.Z)((0,a.Z)({},e),{},{spatialReference:u})})),this.geometries=ae.fromJSON(p,s),this._geometriesSource=null;case 11:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"clone",value:function(){return new X({geometries:(0,ee.d9)(this.geometries),spatialRelationship:this.spatialRelationship})}}]),r}(B.wq);(0,y._)([(0,C.Cb)({type:["disjoint","contains"],nonNullable:!0,json:{write:!0}})],le.prototype,"spatialRelationship",void 0),(0,y._)([(0,C.Cb)({type:ae,nonNullable:!0,json:{write:!0}}),(0,te.B)({origins:["web-scene","portal-item"],type:"resource",prefix:"geometries"})],le.prototype,"geometries",void 0),(0,y._)([(0,S.r)(["web-scene","portal-item"],"geometries")],le.prototype,"readGeometries",null);var ue=le=X=(0,y._)([(0,L.j)("esri.layers.support.SceneFilter")],le),pe=r(21371),ce=r(21149),de=r(81085),ye=r(81219),fe=["3DObject","Point"],he=b.Z.getLogger("esri.layers.SceneLayer"),ve=(0,V.v)(),ge=function(e){(0,c.Z)(y,e);var t=(0,d.Z)(y);function y(){var e;(0,s.Z)(this,y);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).featureReduction=null,e.rangeInfos=null,e.operationalLayerType="ArcGISSceneServiceLayer",e.type="scene",e.fields=null,e.floorInfo=null,e.outFields=null,e.nodePages=null,e.materialDefinitions=null,e.textureSetDefinitions=null,e.geometryDefinitions=null,e.serviceUpdateTimeStamp=null,e.excludeObjectIds=new g.Z,e.definitionExpression=null,e.filter=null,e.path=null,e.labelsVisible=!0,e.labelingInfo=null,e.legendEnabled=!0,e.priority=null,e.semantic=null,e.cachedDrawingInfo={color:!1},e.popupEnabled=!0,e.popupTemplate=null,e.objectIdField=null,e.globalIdField=null,e._fieldUsageInfo={},e.screenSizePerspectiveEnabled=!0,e}return(0,l.Z)(y,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?(0,a.Z)({url:e},t):e}},{key:"getField",value:function(e){return this.fieldsIndex.get(e)}},{key:"getFieldDomain",value:function(e,t){var r,n,i,o,a=null===(r=this.getFeatureType(null===t||void 0===t?void 0:t.feature))||void 0===r||null===(n=r.domains)||void 0===n?void 0:n[e];return a&&"inherited"!==a.type?a:null!==(i=null===(o=this.getField(e))||void 0===o?void 0:o.domain)&&void 0!==i?i:null}},{key:"getFeatureType",value:function(e){return e&&(0,w.pC)(this.associatedLayer)?this.associatedLayer.getFeatureType(e):null}},{key:"types",get:function(){return(0,w.pC)(this.associatedLayer)?this.associatedLayer.types:[]}},{key:"typeIdField",get:function(){return(0,w.pC)(this.associatedLayer)?this.associatedLayer.typeIdField:null}},{key:"formTemplate",get:function(){return(0,w.pC)(this.associatedLayer)?this.associatedLayer.formTemplate:null}},{key:"fieldsIndex",get:function(){return new G.Z(this.fields)}},{key:"readNodePages",value:function(e,t,r){return"Point"===t.layerType&&(e=t.pointNodePages),null==e||"object"!=typeof e?null:J.U4.fromJSON(e,r)}},{key:"elevationInfo",set:function(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()}},{key:"geometryType",get:function(){return be[this.profile]||"mesh"}},{key:"renderer",set:function(e){(0,W.YN)(e,this.fieldsIndex),this._set("renderer",e)}},{key:"readCachedDrawingInfo",value:function(e){return null!=e&&"object"==typeof e||(e={}),null==e.color&&(e.color=!1),e}},{key:"capabilities",get:function(){var e=(0,w.pC)(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:N.C,t=e.query,r=e.editing,n=r.supportsGlobalId,i=r.supportsRollbackOnFailure,o=r.supportsUploadWithItemId,a=r.supportsReturnServiceEditsInSourceSpatialReference,s=e.data,l=s.supportsZ,u=s.supportsM,p=s.isVersioned,c=s.supportsAttachment,d=e.operations,y=d.supportsEditing,f=d.supportsUpdate,h=d.supportsQuery,v=d.supportsQueryAttachments,g=e.operations.supportsChangeTracking;return{query:t,editing:{supportsGlobalId:n,supportsReturnServiceEditsInSourceSpatialReference:a,supportsRollbackOnFailure:i,supportsGeometryUpdate:!1,supportsUploadWithItemId:o},data:{supportsAttachment:c,supportsZ:l,supportsM:u,isVersioned:p},operations:{supportsQuery:h,supportsQueryAttachments:v,supportsEditing:y&&g,supportsAdd:!1,supportsDelete:!1,supportsUpdate:f&&g}}}},{key:"editingEnabled",get:function(){return this._isOverridden("editingEnabled")?this._get("editingEnabled"):this.userHasEditingPrivileges},set:function(e){null!=e?this._override("editingEnabled",e):this._clearOverride("editingEnabled")}},{key:"defaultPopupTemplate",get:function(){return(0,w.pC)(this.associatedLayer)||this.attributeStorageInfo?this.createPopupTemplate():null}},{key:"readObjectIdField",value:function(e,t){return!e&&t.fields&&t.fields.some((function(t){return"esriFieldTypeOID"===t.type&&(e=t.name),!!e})),e||void 0}},{key:"readGlobalIdField",value:function(e,t){return!e&&t.fields&&t.fields.some((function(t){return"esriFieldTypeGlobalID"===t.type&&(e=t.name),!!e})),e||void 0}},{key:"displayField",get:function(){return(0,w.pC)(this.associatedLayer)?this.associatedLayer.displayField:null}},{key:"readProfile",value:function(e,t){var r=t.store.profile;return null!=r&&me[r]?me[r]:(he.error("Unknown or missing profile",{profile:r,layer:this}),"mesh-pyramids")}},{key:"load",value:function(e){var t=this,r=(0,w.pC)(e)?e.signal:null,n=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(_.r9).then((function(){return t._fetchService(r)})).then((function(){return Promise.all([t._fetchIndexAndUpdateExtent(t.nodePages,r),t._setAssociatedFeatureLayer(r),(0,w.pC)(t.filter)?t.filter.loadGeometries(t.spatialReference):null])})).then((function(){return t._validateElevationInfo()})).then((function(){return t._applyAssociatedLayerOverrides()})).then((function(){return t._populateFieldUsageInfo()})).then((function(){return(0,pe.y)(t,{origin:"service"},r)})).then((function(){return(0,W.YN)(t.renderer,t.fieldsIndex)})).then((function(){return t.finishLoadEditablePortalLayer(e)}));return this.addResolvingPromise(n),Promise.resolve(this)}},{key:"beforeSave",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=(0,w.pC)(this.filter),!e.t0){e.next=4;break}return e.next=4,this.load();case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"createQuery",value:function(){var e=new ce.Z;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}},{key:"queryExtent",value:function(e,t){var r=this;return this._getAssociatedLayerForQuery().then((function(n){return n.queryExtent(e||r.createQuery(),t)}))}},{key:"queryFeatureCount",value:function(e,t){var r=this;return this._getAssociatedLayerForQuery().then((function(n){return n.queryFeatureCount(e||r.createQuery(),t)}))}},{key:"queryFeatures",value:function(e,t){var r=this;return this._getAssociatedLayerForQuery().then((function(n){return n.queryFeatures(e||r.createQuery(),t)})).then((function(e){if(null!==e&&void 0!==e&&e.features){var t,i=(0,n.Z)(e.features);try{for(i.s();!(t=i.n()).done;){var o=t.value;o.layer=r,o.sourceLayer=r}}catch(a){i.e(a)}finally{i.f()}}return e}))}},{key:"queryObjectIds",value:function(e,t){var r=this;return this._getAssociatedLayerForQuery().then((function(n){return n.queryObjectIds(e||r.createQuery(),t)}))}},{key:"queryAttachments",value:function(e,t){return this._getAssociatedLayerForQuery().then((function(r){return r.queryAttachments(e,t)}))}},{key:"getFieldUsageInfo",value:function(e){var t={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||t:(he.error("#getFieldUsageInfo()","Unavailable until layer is loaded"),t)}},{key:"createPopupTemplate",value:function(e){return(0,de.eZ)(this,e)}},{key:"_getAssociatedLayerForQuery",value:function(){var e=this.associatedLayer;return(0,w.pC)(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}},{key:"_loadAssociatedLayerForQuery",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:if(!(0,w.Wi)(this.associatedLayer)){e.next=4;break}throw new m.Z("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});case 4:return e.prev=4,e.next=7,this.associatedLayer.load();case 7:e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(4),new m.Z("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:this,error:e.t0});case 12:return e.abrupt("return",this.associatedLayer);case 13:case"end":return e.stop()}}),e,this,[[4,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"hasCachedStatistics",value:function(e){return null!=this.statisticsInfo&&this.statisticsInfo.some((function(t){return t.name===e}))}},{key:"queryCachedStatistics",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){var o,a,s,l,u;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load(r);case 2:if(this.statisticsInfo){e.next=4;break}throw new m.Z("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");case 4:if(o=this.fieldsIndex.get(t)){e.next=7;break}throw new m.Z("scenelayer:field-unexisting","Field '".concat(t,"' does not exist on the layer"));case 7:a=(0,n.Z)(this.statisticsInfo),e.prev=8,a.s();case 10:if((s=a.n()).done){e.next=17;break}if((l=s.value).name!==o.name){e.next=15;break}return u=(0,k.v_)(this.parsedUrl.path,l.href),e.abrupt("return",(0,v.default)(u,{query:{f:"json",token:this.apiKey},responseType:"json",signal:r?r.signal:null}).then((function(e){return e.data})));case 15:e.next=10;break;case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(8),a.e(e.t0);case 22:return e.prev=22,a.f(),e.finish(22);case 25:throw new m.Z("scenelayer:no-cached-statistics","Cached statistics for this attribute are not available");case 26:case"end":return e.stop()}}),e,this,[[8,19,22,25]])})));return function(t,r){return e.apply(this,arguments)}}()},{key:"saveAs",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,r){var n=this;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._debouncedSaveOperations(A.xp.SAVE_AS,(0,a.Z)((0,a.Z)({},r),{},{getTypeKeywords:function(){return n._getTypeKeywords()},portalItemLayerType:"scene"}),t));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"save",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(){var t,r=this;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={getTypeKeywords:function(){return r._getTypeKeywords()},portalItemLayerType:"scene"},e.abrupt("return",this._debouncedSaveOperations(A.xp.SAVE,t));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"applyEdits",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,n){var o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.e(9887).then(r.bind(r,29887));case 2:return o=e.sent,e.next=5,this.load();case 5:if(!(0,w.Wi)(this.associatedLayer)){e.next=7;break}throw new m.Z("".concat(this.type,"-layer:not-editable"),"Service is not editable");case 7:return e.next=9,this.associatedLayer.load();case 9:return e.abrupt("return",o.applyEdits(this,this.associatedLayer.source,t,n));case 10:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"on",value:function(e,t){return(0,u.Z)((0,p.Z)(y.prototype),"on",this).call(this,e,t)}},{key:"validateLayer",value:function(e){if(e.layerType&&!fe.includes(e.layerType))throw new m.Z("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new m.Z("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});if(this.version.major>2)throw new m.Z("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});!function(e,t){var r=!1,n=!1;if(null==e)r=!0,n=!0;else{var i=t&&t.isGeographic;switch(e){case"east-north-up":case"earth-centered":r=!0,n=i;break;case"vertex-reference-frame":r=!0,n=!i;break;default:r=!1}}if(!r)throw new m.Z("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!n)throw new m.Z("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}(this.normalReferenceFrame,this.spatialReference)}},{key:"_getTypeKeywords",value:function(){var e=[];if("points"===this.profile)e.push("Point");else{if("mesh-pyramids"!==this.profile)throw new m.Z("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject")}return e}},{key:"_populateFieldUsageInfo",value:function(){var e=this;if(this._fieldUsageInfo={},this.fields){var t,r=(0,n.Z)(this.fields);try{var i=function(){var r=t.value,n=!(!e.attributeStorageInfo||!e.attributeStorageInfo.some((function(e){return e.name===r.name}))),i=!!((0,w.pC)(e.associatedLayer)&&e.associatedLayer.fields&&e.associatedLayer.fields.some((function(e){return e&&r.name===e.name}))),o={supportsLabelingInfo:n,supportsRenderer:n,supportsPopupTemplate:n||i,supportsLayerQuery:i};e._fieldUsageInfo[r.name]=o};for(r.s();!(t=r.n()).done;)i()}catch(o){r.e(o)}finally{r.f()}}}},{key:"_applyAssociatedLayerOverrides",value:function(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides()}},{key:"_applyAssociatedLayerFieldsOverrides",value:function(){if(!(0,w.Wi)(this.associatedLayer)&&this.associatedLayer.fields){var e,t=null,r=(0,n.Z)(this.associatedLayer.fields);try{for(r.s();!(e=r.n()).done;){var i=e.value,o=this.getField(i.name);o?(!o.domain&&i.domain&&(o.domain=i.domain.clone()),o.editable=i.editable,o.nullable=i.nullable,o.length=i.length):(t||(t=this.fields?this.fields.slice():[]),t.push(i.clone()))}}catch(a){r.e(a)}finally{r.f()}t&&this._set("fields",t)}}},{key:"_applyAssociatedLayerPopupOverrides",value:function(){if(!(0,w.Wi)(this.associatedLayer))for(var e=["popupTemplate","popupEnabled"],t=(0,x.vw)(this),r=0;r<e.length;r++){var n=e[r],i=this.originIdOf(n),o=this.associatedLayer.originIdOf(n);i<o&&(o===j.s3.SERVICE||o===j.s3.PORTAL_ITEM)&&t.setAtOrigin(n,this.associatedLayer[n],o)}}},{key:"_setAssociatedFeatureLayer",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t){var r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(["mesh-pyramids","points"].includes(this.profile)){e.next=2;break}return e.abrupt("return");case 2:return r=new Q.W(this.parsedUrl,this.portalItem,this.apiKey,t),e.prev=3,e.next=6,r.fetch();case 6:this.associatedLayer=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),(0,_.D_)(e.t0)||this._logWarningOnPopupEnabled();case 12:case"end":return e.stop()}}),e,this,[[3,9]])})));return function(t){return e.apply(this,arguments)}}()},{key:"_logWarningOnPopupEnabled",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(){var t,r=this;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,Z.N1)((function(){return r.popupEnabled&&null!=r.popupTemplate}));case 2:t="this SceneLayer: ".concat(this.title),null==this.attributeStorageInfo?he.warn("Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ".concat(t)):he.info("Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ".concat(t));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_validateElevationInfo",value:function(){var e=this.elevationInfo;e&&("mesh-pyramids"===this.profile&&"relative-to-scene"===e.mode&&he.warn(".elevationInfo=","Mesh scene layers don't support relative-to-scene elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&he.warn(".elevationInfo=","Scene layers do not support featureExpressionInfo"))}}]),y}((0,A.Vt)((0,E.Y)((0,T.q)((0,R.I)((0,P.M)((0,I.R)((0,O.V)(F.Z))))))));(0,y._)([(0,C.Cb)({types:{key:"type",base:U.B,typeMap:{selection:q.Z}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],ge.prototype,"featureReduction",void 0),(0,y._)([(0,C.Cb)({type:[Y],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],ge.prototype,"rangeInfos",void 0),(0,y._)([(0,C.Cb)({json:{read:!1}})],ge.prototype,"associatedLayer",void 0),(0,y._)([(0,C.Cb)({type:["show","hide"]})],ge.prototype,"listMode",void 0),(0,y._)([(0,C.Cb)({type:["ArcGISSceneServiceLayer"]})],ge.prototype,"operationalLayerType",void 0),(0,y._)([(0,C.Cb)({json:{read:!1},readOnly:!0})],ge.prototype,"type",void 0),(0,y._)([(0,C.Cb)((0,a.Z)((0,a.Z)({},ve.fields),{},{readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}}))],ge.prototype,"fields",void 0),(0,y._)([(0,C.Cb)()],ge.prototype,"types",null),(0,y._)([(0,C.Cb)()],ge.prototype,"typeIdField",null),(0,y._)([(0,C.Cb)()],ge.prototype,"formTemplate",null),(0,y._)([(0,C.Cb)({readOnly:!0})],ge.prototype,"fieldsIndex",null),(0,y._)([(0,C.Cb)({type:K.Z,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],ge.prototype,"floorInfo",void 0),(0,y._)([(0,C.Cb)(ve.outFields)],ge.prototype,"outFields",void 0),(0,y._)([(0,C.Cb)({type:J.U4,readOnly:!0,json:{read:!1}})],ge.prototype,"nodePages",void 0),(0,y._)([(0,S.r)("service","nodePages",["nodePages","pointNodePages"])],ge.prototype,"readNodePages",null),(0,y._)([(0,C.Cb)({type:[J.QI],readOnly:!0})],ge.prototype,"materialDefinitions",void 0),(0,y._)([(0,C.Cb)({type:[J.Yh],readOnly:!0})],ge.prototype,"textureSetDefinitions",void 0),(0,y._)([(0,C.Cb)({type:[J.H3],readOnly:!0})],ge.prototype,"geometryDefinitions",void 0),(0,y._)([(0,C.Cb)({readOnly:!0})],ge.prototype,"serviceUpdateTimeStamp",void 0),(0,y._)([(0,C.Cb)({readOnly:!0})],ge.prototype,"attributeStorageInfo",void 0),(0,y._)([(0,C.Cb)({readOnly:!0})],ge.prototype,"statisticsInfo",void 0),(0,y._)([(0,C.Cb)({type:g.Z.ofType(Number),nonNullable:!0,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.excludeObjectIds",write:{enabled:!0}}})],ge.prototype,"excludeObjectIds",void 0),(0,y._)([(0,C.Cb)({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],ge.prototype,"definitionExpression",void 0),(0,y._)([(0,C.Cb)({type:ue,json:{name:"layerDefinition.polygonFilter",write:!0}})],ge.prototype,"filter",void 0),(0,y._)([(0,C.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],ge.prototype,"path",void 0),(0,y._)([(0,C.Cb)(D.PV)],ge.prototype,"elevationInfo",null),(0,y._)([(0,C.Cb)({type:String})],ge.prototype,"geometryType",null),(0,y._)([(0,C.Cb)(D.iR)],ge.prototype,"labelsVisible",void 0),(0,y._)([(0,C.Cb)({type:[M.Z],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:z.r},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:z.r},write:!0}})],ge.prototype,"labelingInfo",void 0),(0,y._)([(0,C.Cb)(D.rn)],ge.prototype,"legendEnabled",void 0),(0,y._)([(0,C.Cb)({type:Number,json:{origins:{"web-document":{default:1,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}},read:{source:["opacity","layerDefinition.drawingInfo.transparency"],reader:function(e,t){var r,n;if("number"==typeof e&&e>=0&&e<=1)return e;var i=null===(r=t.layerDefinition)||void 0===r||null===(n=r.drawingInfo)||void 0===n?void 0:n.transparency;return void 0!==i?(0,ye.b)(i):void 0}}},"portal-item":{write:!0},service:{read:!1}}}})],ge.prototype,"opacity",void 0),(0,y._)([(0,C.Cb)({type:["Low","High"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],ge.prototype,"priority",void 0),(0,y._)([(0,C.Cb)({type:["Labels"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],ge.prototype,"semantic",void 0),(0,y._)([(0,C.Cb)({types:h.o,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],ge.prototype,"renderer",null),(0,y._)([(0,C.Cb)({json:{read:!1}})],ge.prototype,"cachedDrawingInfo",void 0),(0,y._)([(0,S.r)("service","cachedDrawingInfo")],ge.prototype,"readCachedDrawingInfo",null),(0,y._)([(0,C.Cb)({readOnly:!0,json:{read:!1}})],ge.prototype,"capabilities",null),(0,y._)([(0,C.Cb)({type:Boolean,json:{read:!1}})],ge.prototype,"editingEnabled",null),(0,y._)([(0,C.Cb)(D.C_)],ge.prototype,"popupEnabled",void 0),(0,y._)([(0,C.Cb)({type:f.Z,json:{name:"popupInfo",write:!0}})],ge.prototype,"popupTemplate",void 0),(0,y._)([(0,C.Cb)({readOnly:!0,json:{read:!1}})],ge.prototype,"defaultPopupTemplate",null),(0,y._)([(0,C.Cb)({type:String,json:{read:!1}})],ge.prototype,"objectIdField",void 0),(0,y._)([(0,S.r)("service","objectIdField",["objectIdField","fields"])],ge.prototype,"readObjectIdField",null),(0,y._)([(0,C.Cb)({type:String,json:{read:!1}})],ge.prototype,"globalIdField",void 0),(0,y._)([(0,S.r)("service","globalIdField",["globalIdField","fields"])],ge.prototype,"readGlobalIdField",null),(0,y._)([(0,C.Cb)({readOnly:!0,type:String,json:{read:!1}})],ge.prototype,"displayField",null),(0,y._)([(0,C.Cb)({type:String,json:{read:!1}})],ge.prototype,"profile",void 0),(0,y._)([(0,S.r)("service","profile",["store.profile"])],ge.prototype,"readProfile",null),(0,y._)([(0,C.Cb)({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],ge.prototype,"normalReferenceFrame",void 0),(0,y._)([(0,C.Cb)(D.YI)],ge.prototype,"screenSizePerspectiveEnabled",void 0),ge=(0,y._)([(0,L.j)("esri.layers.SceneLayer")],ge);var me={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},be={"mesh-pyramids":"mesh",points:"point",lines:"polyline",polygons:"polygon"},we=ge}}]);
//# sourceMappingURL=5838.d0ef4140.chunk.js.map