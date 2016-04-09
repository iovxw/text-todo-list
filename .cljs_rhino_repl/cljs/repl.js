// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27622_27636 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27623_27637 = null;
var count__27624_27638 = (0);
var i__27625_27639 = (0);
while(true){
if((i__27625_27639 < count__27624_27638)){
var f_27640 = cljs.core._nth.call(null,chunk__27623_27637,i__27625_27639);
cljs.core.println.call(null,"  ",f_27640);

var G__27641 = seq__27622_27636;
var G__27642 = chunk__27623_27637;
var G__27643 = count__27624_27638;
var G__27644 = (i__27625_27639 + (1));
seq__27622_27636 = G__27641;
chunk__27623_27637 = G__27642;
count__27624_27638 = G__27643;
i__27625_27639 = G__27644;
continue;
} else {
var temp__4657__auto___27645 = cljs.core.seq.call(null,seq__27622_27636);
if(temp__4657__auto___27645){
var seq__27622_27646__$1 = temp__4657__auto___27645;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27622_27646__$1)){
var c__27269__auto___27647 = cljs.core.chunk_first.call(null,seq__27622_27646__$1);
var G__27648 = cljs.core.chunk_rest.call(null,seq__27622_27646__$1);
var G__27649 = c__27269__auto___27647;
var G__27650 = cljs.core.count.call(null,c__27269__auto___27647);
var G__27651 = (0);
seq__27622_27636 = G__27648;
chunk__27623_27637 = G__27649;
count__27624_27638 = G__27650;
i__27625_27639 = G__27651;
continue;
} else {
var f_27652 = cljs.core.first.call(null,seq__27622_27646__$1);
cljs.core.println.call(null,"  ",f_27652);

var G__27653 = cljs.core.next.call(null,seq__27622_27646__$1);
var G__27654 = null;
var G__27655 = (0);
var G__27656 = (0);
seq__27622_27636 = G__27653;
chunk__27623_27637 = G__27654;
count__27624_27638 = G__27655;
i__27625_27639 = G__27656;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27657 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__26466__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__26466__auto__)){
return or__26466__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_27657);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_27657)))?cljs.core.second.call(null,arglists_27657):arglists_27657));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27626 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27627 = null;
var count__27628 = (0);
var i__27629 = (0);
while(true){
if((i__27629 < count__27628)){
var vec__27630 = cljs.core._nth.call(null,chunk__27627,i__27629);
var name = cljs.core.nth.call(null,vec__27630,(0),null);
var map__27631 = cljs.core.nth.call(null,vec__27630,(1),null);
var map__27631__$1 = ((((!((map__27631 == null)))?((((map__27631.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27631.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27631):map__27631);
var doc = cljs.core.get.call(null,map__27631__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27631__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27658 = seq__27626;
var G__27659 = chunk__27627;
var G__27660 = count__27628;
var G__27661 = (i__27629 + (1));
seq__27626 = G__27658;
chunk__27627 = G__27659;
count__27628 = G__27660;
i__27629 = G__27661;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27626);
if(temp__4657__auto__){
var seq__27626__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27626__$1)){
var c__27269__auto__ = cljs.core.chunk_first.call(null,seq__27626__$1);
var G__27662 = cljs.core.chunk_rest.call(null,seq__27626__$1);
var G__27663 = c__27269__auto__;
var G__27664 = cljs.core.count.call(null,c__27269__auto__);
var G__27665 = (0);
seq__27626 = G__27662;
chunk__27627 = G__27663;
count__27628 = G__27664;
i__27629 = G__27665;
continue;
} else {
var vec__27633 = cljs.core.first.call(null,seq__27626__$1);
var name = cljs.core.nth.call(null,vec__27633,(0),null);
var map__27634 = cljs.core.nth.call(null,vec__27633,(1),null);
var map__27634__$1 = ((((!((map__27634 == null)))?((((map__27634.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27634.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27634):map__27634);
var doc = cljs.core.get.call(null,map__27634__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27634__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27666 = cljs.core.next.call(null,seq__27626__$1);
var G__27667 = null;
var G__27668 = (0);
var G__27669 = (0);
seq__27626 = G__27666;
chunk__27627 = G__27667;
count__27628 = G__27668;
i__27629 = G__27669;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map