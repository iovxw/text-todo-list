// Compiled by ClojureScript 1.7.228 {}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__28094){
var map__28101 = p__28094;
var map__28101__$1 = ((((!((map__28101 == null)))?((((map__28101.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28101.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28101):map__28101);
var replacement_transformers = cljs.core.get.call(null,map__28101__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.call(null,map__28101__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
return ((function (map__28101,map__28101__$1,replacement_transformers,custom_transformers){
return (function (html,line,next_line,state){
var _STAR_next_line_STAR_28103 = markdown.transformers._STAR_next_line_STAR_;
markdown.transformers._STAR_next_line_STAR_ = next_line;

try{var vec__28104 = cljs.core.reduce.call(null,((function (_STAR_next_line_STAR_28103,map__28101,map__28101__$1,replacement_transformers,custom_transformers){
return (function (p__28105,transformer){
var vec__28106 = p__28105;
var text = cljs.core.nth.call(null,vec__28106,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__28106,(1),null);
return transformer.call(null,text,state__$1);
});})(_STAR_next_line_STAR_28103,map__28101,map__28101__$1,replacement_transformers,custom_transformers))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__26466__auto__ = replacement_transformers;
if(cljs.core.truth_(or__26466__auto__)){
return or__26466__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__28104,(0),null);
var new_state = cljs.core.nth.call(null,vec__28104,(1),null);
html.append(text);

return new_state;
}finally {markdown.transformers._STAR_next_line_STAR_ = _STAR_next_line_STAR_28103;
}});
;})(map__28101,map__28101__$1,replacement_transformers,custom_transformers))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__27531__auto__ = [];
var len__27524__auto___28109 = arguments.length;
var i__27525__auto___28110 = (0);
while(true){
if((i__27525__auto___28110 < len__27524__auto___28109)){
args__27531__auto__.push((arguments[i__27525__auto___28110]));

var G__28111 = (i__27525__auto___28110 + (1));
i__27525__auto___28110 = G__28111;
continue;
} else {
}
break;
}

var argseq__27532__auto__ = ((((1) < args__27531__auto__.length))?(new cljs.core.IndexedSeq(args__27531__auto__.slice((1)),(0))):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27532__auto__);
});

markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

markdown.core.format.cljs$lang$maxFixedArity = (1);

markdown.core.format.cljs$lang$applyTo = (function (seq28107){
var G__28108 = cljs.core.first.call(null,seq28107);
var seq28107__$1 = cljs.core.next.call(null,seq28107);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic(G__28108,seq28107__$1);
});
markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__28116_28120 = cljs.core.seq.call(null,lines);
var chunk__28117_28121 = null;
var count__28118_28122 = (0);
var i__28119_28123 = (0);
while(true){
if((i__28119_28123 < count__28118_28122)){
var line_28124 = cljs.core._nth.call(null,chunk__28117_28121,i__28119_28123);
markdown.links.parse_reference_link.call(null,line_28124,references);

var G__28125 = seq__28116_28120;
var G__28126 = chunk__28117_28121;
var G__28127 = count__28118_28122;
var G__28128 = (i__28119_28123 + (1));
seq__28116_28120 = G__28125;
chunk__28117_28121 = G__28126;
count__28118_28122 = G__28127;
i__28119_28123 = G__28128;
continue;
} else {
var temp__4657__auto___28129 = cljs.core.seq.call(null,seq__28116_28120);
if(temp__4657__auto___28129){
var seq__28116_28130__$1 = temp__4657__auto___28129;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28116_28130__$1)){
var c__27269__auto___28131 = cljs.core.chunk_first.call(null,seq__28116_28130__$1);
var G__28132 = cljs.core.chunk_rest.call(null,seq__28116_28130__$1);
var G__28133 = c__27269__auto___28131;
var G__28134 = cljs.core.count.call(null,c__27269__auto___28131);
var G__28135 = (0);
seq__28116_28120 = G__28132;
chunk__28117_28121 = G__28133;
count__28118_28122 = G__28134;
i__28119_28123 = G__28135;
continue;
} else {
var line_28136 = cljs.core.first.call(null,seq__28116_28130__$1);
markdown.links.parse_reference_link.call(null,line_28136,references);

var G__28137 = cljs.core.next.call(null,seq__28116_28130__$1);
var G__28138 = null;
var G__28139 = (0);
var G__28140 = (0);
seq__28116_28120 = G__28137;
chunk__28117_28121 = G__28138;
count__28118_28122 = G__28139;
i__28119_28123 = G__28140;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,references);
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636),(1),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.PersistentArrayMap.EMPTY], null));
var seq__28145_28149 = cljs.core.seq.call(null,lines);
var chunk__28146_28150 = null;
var count__28147_28151 = (0);
var i__28148_28152 = (0);
while(true){
if((i__28148_28152 < count__28147_28151)){
var line_28153 = cljs.core._nth.call(null,chunk__28146_28150,i__28148_28152);
markdown.links.parse_footnote_link.call(null,line_28153,footnotes);

var G__28154 = seq__28145_28149;
var G__28155 = chunk__28146_28150;
var G__28156 = count__28147_28151;
var G__28157 = (i__28148_28152 + (1));
seq__28145_28149 = G__28154;
chunk__28146_28150 = G__28155;
count__28147_28151 = G__28156;
i__28148_28152 = G__28157;
continue;
} else {
var temp__4657__auto___28158 = cljs.core.seq.call(null,seq__28145_28149);
if(temp__4657__auto___28158){
var seq__28145_28159__$1 = temp__4657__auto___28158;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28145_28159__$1)){
var c__27269__auto___28160 = cljs.core.chunk_first.call(null,seq__28145_28159__$1);
var G__28161 = cljs.core.chunk_rest.call(null,seq__28145_28159__$1);
var G__28162 = c__27269__auto___28160;
var G__28163 = cljs.core.count.call(null,c__27269__auto___28160);
var G__28164 = (0);
seq__28145_28149 = G__28161;
chunk__28146_28150 = G__28162;
count__28147_28151 = G__28163;
i__28148_28152 = G__28164;
continue;
} else {
var line_28165 = cljs.core.first.call(null,seq__28145_28159__$1);
markdown.links.parse_footnote_link.call(null,line_28165,footnotes);

var G__28166 = cljs.core.next.call(null,seq__28145_28159__$1);
var G__28167 = null;
var G__28168 = (0);
var G__28169 = (0);
seq__28145_28149 = G__28166;
chunk__28146_28150 = G__28167;
count__28147_28151 = G__28168;
i__28148_28152 = G__28169;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,footnotes);
});
markdown.core.parse_metadata = (function markdown$core$parse_metadata(lines){
var vec__28172 = cljs.core.split_with.call(null,(function (p1__28170_SHARP_){
return cljs.core.not_empty.call(null,p1__28170_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.call(null,vec__28172,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__28172,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers.call(null,metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR_28180 = markdown.common._STAR_substring_STAR_;
var formatter28181 = markdown.transformers.formatter;
markdown.common._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_28180,formatter28181){
return (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});})(_STAR_substring_STAR_28180,formatter28181))
;

markdown.transformers.formatter = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str(text),cljs.core.str("\n")].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references.call(null,lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes.call(null,lines):null);
var vec__28182 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata.call(null,lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.call(null,vec__28182,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__28182,(1),null);
var transformer = markdown.core.init_transformer.call(null,params__$1);
var G__28184_28187 = lines__$1;
var vec__28185_28188 = G__28184_28187;
var line_28189 = cljs.core.nth.call(null,vec__28185_28188,(0),null);
var more_28190 = cljs.core.nthnext.call(null,vec__28185_28188,(1));
var state_28191 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1);
var G__28184_28192__$1 = G__28184_28187;
var state_28193__$1 = state_28191;
while(true){
var vec__28186_28194 = G__28184_28192__$1;
var line_28195__$1 = cljs.core.nth.call(null,vec__28186_28194,(0),null);
var more_28196__$1 = cljs.core.nthnext.call(null,vec__28186_28194,(1));
var state_28197__$2 = state_28193__$1;
var state_28198__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_28197__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_28197__$2),cljs.core.first.call(null,more_28196__$1),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_28197__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_28197__$2);
if(cljs.core.truth_(cljs.core.not_empty.call(null,more_28196__$1))){
var G__28199 = more_28196__$1;
var G__28200 = cljs.core.assoc.call(null,transformer.call(null,html,line_28195__$1,cljs.core.first.call(null,more_28196__$1),state_28198__$3),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_28195__$1));
G__28184_28192__$1 = G__28199;
state_28193__$1 = G__28200;
continue;
} else {
transformer.call(null,html.append(markdown.transformers.footer.call(null,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_28198__$3))),line_28195__$1,"",cljs.core.assoc.call(null,state_28198__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {markdown.transformers.formatter = formatter28181;

markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR_28180;
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__27531__auto__ = [];
var len__27524__auto___28203 = arguments.length;
var i__27525__auto___28204 = (0);
while(true){
if((i__27525__auto___28204 < len__27524__auto___28203)){
args__27531__auto__.push((arguments[i__27525__auto___28204]));

var G__28205 = (i__27525__auto___28204 + (1));
i__27525__auto___28204 = G__28205;
continue;
} else {
}
break;
}

var argseq__27532__auto__ = ((((1) < args__27531__auto__.length))?(new cljs.core.IndexedSeq(args__27531__auto__.slice((1)),(0))):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27532__auto__);
});

markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_.call(null,text,params));
});

markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq28201){
var G__28202 = cljs.core.first.call(null,seq28201);
var seq28201__$1 = cljs.core.next.call(null,seq28201);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(G__28202,seq28201__$1);
});
markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__27531__auto__ = [];
var len__27524__auto___28208 = arguments.length;
var i__27525__auto___28209 = (0);
while(true){
if((i__27525__auto___28209 < len__27524__auto___28208)){
args__27531__auto__.push((arguments[i__27525__auto___28209]));

var G__28210 = (i__27525__auto___28209 + (1));
i__27525__auto___28209 = G__28210;
continue;
} else {
}
break;
}

var argseq__27532__auto__ = ((((1) < args__27531__auto__.length))?(new cljs.core.IndexedSeq(args__27531__auto__.slice((1)),(0))):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27532__auto__);
});

markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_.call(null,text,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742),true], null),params));
});

markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq28206){
var G__28207 = cljs.core.first.call(null,seq28206);
var seq28206__$1 = cljs.core.next.call(null,seq28206);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic(G__28207,seq28206__$1);
});
/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__27531__auto__ = [];
var len__27524__auto___28212 = arguments.length;
var i__27525__auto___28213 = (0);
while(true){
if((i__27525__auto___28213 < len__27524__auto___28212)){
args__27531__auto__.push((arguments[i__27525__auto___28213]));

var G__28214 = (i__27525__auto___28213 + (1));
i__27525__auto___28213 = G__28214;
continue;
} else {
}
break;
}

var argseq__27532__auto__ = ((((0) < args__27531__auto__.length))?(new cljs.core.IndexedSeq(args__27531__auto__.slice((0)),(0))):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__27532__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html,params);
});

markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq28211){
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28211));
});
/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__27531__auto__ = [];
var len__27524__auto___28216 = arguments.length;
var i__27525__auto___28217 = (0);
while(true){
if((i__27525__auto___28217 < len__27524__auto___28216)){
args__27531__auto__.push((arguments[i__27525__auto___28217]));

var G__28218 = (i__27525__auto___28217 + (1));
i__27525__auto___28217 = G__28218;
continue;
} else {
}
break;
}

var argseq__27532__auto__ = ((((0) < args__27531__auto__.length))?(new cljs.core.IndexedSeq(args__27531__auto__.slice((0)),(0))):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__27532__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html_with_meta,params);
});

markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq28215){
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28215));
});

//# sourceMappingURL=core.js.map