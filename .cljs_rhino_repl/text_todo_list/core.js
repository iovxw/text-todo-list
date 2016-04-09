// Compiled by ClojureScript 1.7.228 {}
goog.provide('text_todo_list.core');
goog.require('cljs.core');
goog.require('markdown.core');
goog.require('clojure.string');
goog.require('hiccups.runtime');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof text_todo_list.core.app_state !== 'undefined'){
} else {
text_todo_list.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
text_todo_list.core.parse_title = (function text_todo_list$core$parse_title(lines){
var line = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__39674_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__39674_SHARP_),"-");
}),lines));
if(cljs.core.truth_(line)){
return cljs.core.second.call(null,cljs.core.re_matches.call(null,/^-\s*(.+)$/,line));
} else {
return null;
}
});
text_todo_list.core.parse_body = (function text_todo_list$core$parse_body(lines){
return markdown.core.md__GT_html.call(null,clojure.string.join.call(null,"\n",cljs.core.map.call(null,(function (p1__39676_SHARP_){
return cljs.core.second.call(null,cljs.core.re_matches.call(null,/^\|\s{0,1}(.*)$/,p1__39676_SHARP_));
}),cljs.core.filter.call(null,(function (p1__39675_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__39675_SHARP_),"|");
}),lines))));
});
text_todo_list.core.parse_tags = (function text_todo_list$core$parse_tags(lines){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,(function (p1__39679_SHARP_){
return clojure.string.split.call(null,p1__39679_SHARP_," ");
}),cljs.core.map.call(null,(function (p1__39678_SHARP_){
return cljs.core.second.call(null,cljs.core.re_matches.call(null,/^\+\s*(.*)$/,p1__39678_SHARP_));
}),cljs.core.filter.call(null,(function (p1__39677_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__39677_SHARP_),"+");
}),lines))));
});
text_todo_list.core.parse = (function text_todo_list$core$parse(text){
var lines = clojure.string.split_lines.call(null,text);
var title = text_todo_list.core.parse_title.call(null,lines);
var body = text_todo_list.core.parse_body.call(null,lines);
var tags = text_todo_list.core.parse_tags.call(null,lines);
return [cljs.core.str("<div"),cljs.core.str(" class=\"paper\""),cljs.core.str(">"),cljs.core.str((function (){var attrs39683 = title;
if(cljs.core.map_QMARK_.call(null,attrs39683)){
return [cljs.core.str("<p"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"title"], null),attrs39683))),cljs.core.str(" />")].join('');
} else {
return [cljs.core.str("<p class=\"title\">"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs39683)),cljs.core.str("</p>")].join('');
}
})()),cljs.core.str((function (){var attrs39684 = body;
if(cljs.core.map_QMARK_.call(null,attrs39684)){
return [cljs.core.str("<div"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"content"], null),attrs39684))),cljs.core.str(">"),cljs.core.str("</div>")].join('');
} else {
return [cljs.core.str("<div class=\"content\">"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs39684)),cljs.core.str("</div>")].join('');
}
})()),cljs.core.str((function (){var attrs39685 = cljs.core.map.call(null,((function (lines,title,body,tags){
return (function (tag){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),tag], null);
});})(lines,title,body,tags))
,tags);
if(cljs.core.map_QMARK_.call(null,attrs39685)){
return [cljs.core.str("<div"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"tag"], null),attrs39685))),cljs.core.str(">"),cljs.core.str("</div>")].join('');
} else {
return [cljs.core.str("<div class=\"tag\">"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs39685)),cljs.core.str("</div>")].join('');
}
})()),cljs.core.str("</div>")].join('');
});
text_todo_list.core.on_js_reload = (function text_todo_list$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map