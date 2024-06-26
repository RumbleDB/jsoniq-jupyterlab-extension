"use strict";(self.webpackChunkjsoniq_jupyterlab_extension=self.webpackChunkjsoniq_jupyterlab_extension||[]).push([[178],{6178:(t,e,a)=>{a.r(e),a.d(e,{default:()=>d});var s=a(8307),i=a(8847);class c{extractorManager;constructor(t){this.extractorManager=t}registerExtractor(){const t=new i.RegExpForeignCodeExtractor({language:"jsoniq",pattern:"^%%(jsoniq)( .*?)?\n([^]*)",foreignCaptureGroups:[3],isStandalone:!0,fileExtension:"jq"});this.extractorManager.register(t,"python")}}var n=a(1948),K=a(4736),l=a(1839),r=a(2084);class o extends K.Lexer{static T__0=1;static T__1=2;static T__2=3;static T__3=4;static T__4=5;static T__5=6;static T__6=7;static T__7=8;static T__8=9;static T__9=10;static T__10=11;static T__11=12;static T__12=13;static T__13=14;static T__14=15;static T__15=16;static T__16=17;static T__17=18;static T__18=19;static T__19=20;static T__20=21;static T__21=22;static T__22=23;static T__23=24;static T__24=25;static T__25=26;static T__26=27;static T__27=28;static T__28=29;static T__29=30;static T__30=31;static T__31=32;static T__32=33;static T__33=34;static T__34=35;static T__35=36;static T__36=37;static T__37=38;static T__38=39;static Kfor=40;static Klet=41;static Kwhere=42;static Kgroup=43;static Kby=44;static Korder=45;static Kreturn=46;static Kif=47;static Kin=48;static Kas=49;static Kat=50;static Kallowing=51;static Kempty=52;static Kcount=53;static Kstable=54;static Kascending=55;static Kdescending=56;static Ksome=57;static Kevery=58;static Ksatisfies=59;static Kcollation=60;static Kgreatest=61;static Kleast=62;static Kswitch=63;static Kcase=64;static Ktry=65;static Kcatch=66;static Kdefault=67;static Kthen=68;static Kelse=69;static Ktypeswitch=70;static Kor=71;static Kand=72;static Knot=73;static Kto=74;static Kinstance=75;static Kof=76;static Kstatically=77;static Kis=78;static Ktreat=79;static Kcast=80;static Kcastable=81;static Kversion=82;static Kjsoniq=83;static Kunordered=84;static Ktrue=85;static Kfalse=86;static Ktype=87;static Kvalidate=88;static Kannotate=89;static Kdeclare=90;static Kcontext=91;static Kitem=92;static Kvariable=93;static Kinsert=94;static Kdelete=95;static Krename=96;static Kreplace=97;static Kcopy=98;static Kmodify=99;static Kappend=100;static Kinto=101;static Kvalue=102;static Kjson=103;static Kwith=104;static Kposition=105;static Kbreak=106;static Kloop=107;static Kcontinue=108;static Kexit=109;static Kreturning=110;static Kwhile=111;static Kmodule=112;static Knamespace=113;static Kimport=114;static Kcontext_dollars=115;static Kexternal=116;static Kfunction=117;static Kassign=118;static Keq=119;static Kne=120;static Kle=121;static Klt=122;static Kge=123;static Kgt=124;static Keq_symbol=125;static Kne_symbol=126;static Kle_symbol=127;static Klt_symbol=128;static Kge_symbol=129;static Kgt_symbol=130;static Kordered=131;static Kordering=132;static Kunordering=133;static STRING=134;static ArgumentPlaceholder=135;static NullLiteral=136;static Literal=137;static NumericLiteral=138;static IntegerLiteral=139;static DecimalLiteral=140;static DoubleLiteral=141;static WS=142;static NCName=143;static XQComment=144;static ContentChar=145;static channelNames=["DEFAULT_TOKEN_CHANNEL","HIDDEN"];static literalNames=[null,"';'","'$'","'{'","'}'","'('","')'","'*'","'|'","'%'","','","'decimal-format'","':'","'decimal-separator'","'grouping-separator'","'infinity'","'minus-sign'","'NaN'","'percent'","'per-mille'","'zero-digit'","'digit'","'pattern-separator'","'jsound'","'compact'","'verbose'","'schema'","'||'","'+'","'-'","'div'","'idiv'","'mod'","'!'","'['","']'","'.'","'#'","'{|'","'|}'","'for'","'let'","'where'","'group'","'by'","'order'","'return'","'if'","'in'","'as'","'at'","'allowing'","'empty'","'count'","'stable'","'ascending'","'descending'","'some'","'every'","'satisfies'","'collation'","'greatest'","'least'","'switch'","'case'","'try'","'catch'","'default'","'then'","'else'","'typeswitch'","'or'","'and'","'not'","'to'","'instance'","'of'","'statically'","'is'","'treat'","'cast'","'castable'","'version'","'jsoniq'","'unordered'","'true'","'false'","'type'","'validate'","'annotate'","'declare'","'context'","'item'","'variable'","'insert'","'delete'","'rename'","'replace'","'copy'","'modify'","'append'","'into'","'value'","'json'","'with'","'position'","'break'","'loop'","'continue'","'exit'","'returning'","'while'","'module'","'namespace'","'import'","'$$'","'external'","'function'","':='","'eq'","'ne'","'le'","'lt'","'ge'","'gt'","'='","'!='","'<'","'<='","'>'","'>='","'ordered'","'ordering'","'unordering'",null,"'?'","'null'"];static symbolicNames=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"Kfor","Klet","Kwhere","Kgroup","Kby","Korder","Kreturn","Kif","Kin","Kas","Kat","Kallowing","Kempty","Kcount","Kstable","Kascending","Kdescending","Ksome","Kevery","Ksatisfies","Kcollation","Kgreatest","Kleast","Kswitch","Kcase","Ktry","Kcatch","Kdefault","Kthen","Kelse","Ktypeswitch","Kor","Kand","Knot","Kto","Kinstance","Kof","Kstatically","Kis","Ktreat","Kcast","Kcastable","Kversion","Kjsoniq","Kunordered","Ktrue","Kfalse","Ktype","Kvalidate","Kannotate","Kdeclare","Kcontext","Kitem","Kvariable","Kinsert","Kdelete","Krename","Kreplace","Kcopy","Kmodify","Kappend","Kinto","Kvalue","Kjson","Kwith","Kposition","Kbreak","Kloop","Kcontinue","Kexit","Kreturning","Kwhile","Kmodule","Knamespace","Kimport","Kcontext_dollars","Kexternal","Kfunction","Kassign","Keq","Kne","Kle","Klt","Kge","Kgt","Keq_symbol","Kne_symbol","Kle_symbol","Klt_symbol","Kge_symbol","Kgt_symbol","Kordered","Kordering","Kunordering","STRING","ArgumentPlaceholder","NullLiteral","Literal","NumericLiteral","IntegerLiteral","DecimalLiteral","DoubleLiteral","WS","NCName","XQComment","ContentChar"];static modeNames=["DEFAULT_MODE"];static ruleNames=["T__0","T__1","T__2","T__3","T__4","T__5","T__6","T__7","T__8","T__9","T__10","T__11","T__12","T__13","T__14","T__15","T__16","T__17","T__18","T__19","T__20","T__21","T__22","T__23","T__24","T__25","T__26","T__27","T__28","T__29","T__30","T__31","T__32","T__33","T__34","T__35","T__36","T__37","T__38","Kfor","Klet","Kwhere","Kgroup","Kby","Korder","Kreturn","Kif","Kin","Kas","Kat","Kallowing","Kempty","Kcount","Kstable","Kascending","Kdescending","Ksome","Kevery","Ksatisfies","Kcollation","Kgreatest","Kleast","Kswitch","Kcase","Ktry","Kcatch","Kdefault","Kthen","Kelse","Ktypeswitch","Kor","Kand","Knot","Kto","Kinstance","Kof","Kstatically","Kis","Ktreat","Kcast","Kcastable","Kversion","Kjsoniq","Kunordered","Ktrue","Kfalse","Ktype","Kvalidate","Kannotate","Kdeclare","Kcontext","Kitem","Kvariable","Kinsert","Kdelete","Krename","Kreplace","Kcopy","Kmodify","Kappend","Kinto","Kvalue","Kjson","Kwith","Kposition","Kbreak","Kloop","Kcontinue","Kexit","Kreturning","Kwhile","Kmodule","Knamespace","Kimport","Kcontext_dollars","Kexternal","Kfunction","Kassign","Keq","Kne","Kle","Klt","Kge","Kgt","Keq_symbol","Kne_symbol","Kle_symbol","Klt_symbol","Kge_symbol","Kgt_symbol","Kordered","Kordering","Kunordering","STRING","ESC","UNICODE","HEX","ArgumentPlaceholder","NullLiteral","Literal","NumericLiteral","IntegerLiteral","DecimalLiteral","DoubleLiteral","Digits","WS","NCName","NameStartChar","NameChar","XQComment","ContentChar"];constructor(t){super(t),this.interpreter=new K.LexerATNSimulator(this,o._ATN,o.decisionsToDFA,new K.PredictionContextCache)}get grammarFileName(){return"jsoniq.g4"}get literalNames(){return o.literalNames}get symbolicNames(){return o.symbolicNames}get ruleNames(){return o.ruleNames}get serializedATN(){return o._serializedATN}get channelNames(){return o.channelNames}get modeNames(){return o.modeNames}static _serializedATN=[4,0,145,1209,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,75,7,75,2,76,7,76,2,77,7,77,2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,7,82,2,83,7,83,2,84,7,84,2,85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,89,2,90,7,90,2,91,7,91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,2,97,7,97,2,98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,2,103,7,103,2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,2,108,7,108,2,109,7,109,2,110,7,110,2,111,7,111,2,112,7,112,2,113,7,113,2,114,7,114,2,115,7,115,2,116,7,116,2,117,7,117,2,118,7,118,2,119,7,119,2,120,7,120,2,121,7,121,2,122,7,122,2,123,7,123,2,124,7,124,2,125,7,125,2,126,7,126,2,127,7,127,2,128,7,128,2,129,7,129,2,130,7,130,2,131,7,131,2,132,7,132,2,133,7,133,2,134,7,134,2,135,7,135,2,136,7,136,2,137,7,137,2,138,7,138,2,139,7,139,2,140,7,140,2,141,7,141,2,142,7,142,2,143,7,143,2,144,7,144,2,145,7,145,2,146,7,146,2,147,7,147,2,148,7,148,2,149,7,149,2,150,7,150,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,20,1,20,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,26,1,26,1,26,1,27,1,27,1,28,1,28,1,29,1,29,1,29,1,29,1,30,1,30,1,30,1,30,1,30,1,31,1,31,1,31,1,31,1,32,1,32,1,33,1,33,1,34,1,34,1,35,1,35,1,36,1,36,1,37,1,37,1,37,1,38,1,38,1,38,1,39,1,39,1,39,1,39,1,40,1,40,1,40,1,40,1,41,1,41,1,41,1,41,1,41,1,41,1,42,1,42,1,42,1,42,1,42,1,42,1,43,1,43,1,43,1,44,1,44,1,44,1,44,1,44,1,44,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,46,1,46,1,46,1,47,1,47,1,47,1,48,1,48,1,48,1,49,1,49,1,49,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,51,1,51,1,51,1,51,1,51,1,51,1,52,1,52,1,52,1,52,1,52,1,52,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,56,1,56,1,56,1,56,1,56,1,57,1,57,1,57,1,57,1,57,1,57,1,58,1,58,1,58,1,58,1,58,1,58,1,58,1,58,1,58,1,58,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,61,1,61,1,61,1,61,1,61,1,61,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,63,1,63,1,63,1,63,1,63,1,64,1,64,1,64,1,64,1,65,1,65,1,65,1,65,1,65,1,65,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,67,1,67,1,67,1,67,1,67,1,68,1,68,1,68,1,68,1,68,1,69,1,69,1,69,1,69,1,69,1,69,1,69,1,69,1,69,1,69,1,69,1,70,1,70,1,70,1,71,1,71,1,71,1,71,1,72,1,72,1,72,1,72,1,73,1,73,1,73,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,75,1,75,1,75,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,77,1,77,1,77,1,78,1,78,1,78,1,78,1,78,1,78,1,79,1,79,1,79,1,79,1,79,1,80,1,80,1,80,1,80,1,80,1,80,1,80,1,80,1,80,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,82,1,82,1,82,1,82,1,82,1,82,1,82,1,83,1,83,1,83,1,83,1,83,1,83,1,83,1,83,1,83,1,83,1,84,1,84,1,84,1,84,1,84,1,85,1,85,1,85,1,85,1,85,1,85,1,86,1,86,1,86,1,86,1,86,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,88,1,88,1,88,1,88,1,88,1,88,1,88,1,88,1,88,1,89,1,89,1,89,1,89,1,89,1,89,1,89,1,89,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,91,1,91,1,91,1,91,1,91,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,93,1,93,1,93,1,93,1,93,1,93,1,93,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,95,1,95,1,95,1,95,1,95,1,95,1,95,1,96,1,96,1,96,1,96,1,96,1,96,1,96,1,96,1,97,1,97,1,97,1,97,1,97,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,100,1,100,1,100,1,100,1,100,1,101,1,101,1,101,1,101,1,101,1,101,1,102,1,102,1,102,1,102,1,102,1,103,1,103,1,103,1,103,1,103,1,104,1,104,1,104,1,104,1,104,1,104,1,104,1,104,1,104,1,105,1,105,1,105,1,105,1,105,1,105,1,106,1,106,1,106,1,106,1,106,1,107,1,107,1,107,1,107,1,107,1,107,1,107,1,107,1,107,1,108,1,108,1,108,1,108,1,108,1,109,1,109,1,109,1,109,1,109,1,109,1,109,1,109,1,109,1,109,1,110,1,110,1,110,1,110,1,110,1,110,1,111,1,111,1,111,1,111,1,111,1,111,1,111,1,112,1,112,1,112,1,112,1,112,1,112,1,112,1,112,1,112,1,112,1,113,1,113,1,113,1,113,1,113,1,113,1,113,1,114,1,114,1,114,1,115,1,115,1,115,1,115,1,115,1,115,1,115,1,115,1,115,1,116,1,116,1,116,1,116,1,116,1,116,1,116,1,116,1,116,1,117,1,117,1,117,1,118,1,118,1,118,1,119,1,119,1,119,1,120,1,120,1,120,1,121,1,121,1,121,1,122,1,122,1,122,1,123,1,123,1,123,1,124,1,124,1,125,1,125,1,125,1,126,1,126,1,127,1,127,1,127,1,128,1,128,1,129,1,129,1,129,1,130,1,130,1,130,1,130,1,130,1,130,1,130,1,130,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,132,1,132,1,132,1,132,1,132,1,132,1,132,1,132,1,132,1,132,1,132,1,133,1,133,1,133,5,133,1095,8,133,10,133,12,133,1098,9,133,1,133,1,133,1,134,1,134,1,134,3,134,1105,8,134,1,135,1,135,1,135,1,135,1,135,1,135,1,136,1,136,1,137,1,137,1,138,1,138,1,138,1,138,1,138,1,139,1,139,1,140,1,140,1,140,3,140,1127,8,140,1,141,1,141,1,142,1,142,1,142,1,142,1,142,5,142,1136,8,142,10,142,12,142,1139,9,142,3,142,1141,8,142,1,143,1,143,1,143,1,143,1,143,5,143,1148,8,143,10,143,12,143,1151,9,143,3,143,1153,8,143,3,143,1155,8,143,1,143,1,143,3,143,1159,8,143,1,143,1,143,1,144,4,144,1164,8,144,11,144,12,144,1165,1,145,1,145,1,145,1,145,1,146,1,146,5,146,1174,8,146,10,146,12,146,1177,9,146,1,147,3,147,1180,8,147,1,148,1,148,3,148,1184,8,148,1,149,1,149,1,149,1,149,1,149,1,149,1,149,1,149,5,149,1194,8,149,10,149,12,149,1197,9,149,1,149,4,149,1200,8,149,11,149,12,149,1201,1,149,1,149,1,149,1,149,1,150,1,150,0,0,151,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,16,33,17,35,18,37,19,39,20,41,21,43,22,45,23,47,24,49,25,51,26,53,27,55,28,57,29,59,30,61,31,63,32,65,33,67,34,69,35,71,36,73,37,75,38,77,39,79,40,81,41,83,42,85,43,87,44,89,45,91,46,93,47,95,48,97,49,99,50,101,51,103,52,105,53,107,54,109,55,111,56,113,57,115,58,117,59,119,60,121,61,123,62,125,63,127,64,129,65,131,66,133,67,135,68,137,69,139,70,141,71,143,72,145,73,147,74,149,75,151,76,153,77,155,78,157,79,159,80,161,81,163,82,165,83,167,84,169,85,171,86,173,87,175,88,177,89,179,90,181,91,183,92,185,93,187,94,189,95,191,96,193,97,195,98,197,99,199,100,201,101,203,102,205,103,207,104,209,105,211,106,213,107,215,108,217,109,219,110,221,111,223,112,225,113,227,114,229,115,231,116,233,117,235,118,237,119,239,120,241,121,243,122,245,123,247,124,249,125,251,126,253,127,255,128,257,129,259,130,261,131,263,132,265,133,267,134,269,0,271,0,273,0,275,135,277,136,279,137,281,138,283,139,285,140,287,141,289,0,291,142,293,143,295,0,297,0,299,144,301,145,1,0,13,2,0,34,34,92,92,8,0,34,34,47,47,92,92,98,98,102,102,110,110,114,114,116,116,3,0,48,57,65,70,97,102,1,0,48,57,2,0,69,69,101,101,2,0,43,43,45,45,3,0,9,10,13,13,32,32,14,0,65,90,95,95,97,122,192,214,216,246,248,767,880,893,895,8191,8204,8205,8304,8591,11264,12271,12289,55295,63744,64975,65008,65533,5,0,45,45,48,57,183,183,768,879,8255,8256,1,0,58,58,1,0,41,41,2,0,40,40,58,58,5,0,34,34,38,39,60,60,123,123,125,125,1221,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,0,49,1,0,0,0,0,51,1,0,0,0,0,53,1,0,0,0,0,55,1,0,0,0,0,57,1,0,0,0,0,59,1,0,0,0,0,61,1,0,0,0,0,63,1,0,0,0,0,65,1,0,0,0,0,67,1,0,0,0,0,69,1,0,0,0,0,71,1,0,0,0,0,73,1,0,0,0,0,75,1,0,0,0,0,77,1,0,0,0,0,79,1,0,0,0,0,81,1,0,0,0,0,83,1,0,0,0,0,85,1,0,0,0,0,87,1,0,0,0,0,89,1,0,0,0,0,91,1,0,0,0,0,93,1,0,0,0,0,95,1,0,0,0,0,97,1,0,0,0,0,99,1,0,0,0,0,101,1,0,0,0,0,103,1,0,0,0,0,105,1,0,0,0,0,107,1,0,0,0,0,109,1,0,0,0,0,111,1,0,0,0,0,113,1,0,0,0,0,115,1,0,0,0,0,117,1,0,0,0,0,119,1,0,0,0,0,121,1,0,0,0,0,123,1,0,0,0,0,125,1,0,0,0,0,127,1,0,0,0,0,129,1,0,0,0,0,131,1,0,0,0,0,133,1,0,0,0,0,135,1,0,0,0,0,137,1,0,0,0,0,139,1,0,0,0,0,141,1,0,0,0,0,143,1,0,0,0,0,145,1,0,0,0,0,147,1,0,0,0,0,149,1,0,0,0,0,151,1,0,0,0,0,153,1,0,0,0,0,155,1,0,0,0,0,157,1,0,0,0,0,159,1,0,0,0,0,161,1,0,0,0,0,163,1,0,0,0,0,165,1,0,0,0,0,167,1,0,0,0,0,169,1,0,0,0,0,171,1,0,0,0,0,173,1,0,0,0,0,175,1,0,0,0,0,177,1,0,0,0,0,179,1,0,0,0,0,181,1,0,0,0,0,183,1,0,0,0,0,185,1,0,0,0,0,187,1,0,0,0,0,189,1,0,0,0,0,191,1,0,0,0,0,193,1,0,0,0,0,195,1,0,0,0,0,197,1,0,0,0,0,199,1,0,0,0,0,201,1,0,0,0,0,203,1,0,0,0,0,205,1,0,0,0,0,207,1,0,0,0,0,209,1,0,0,0,0,211,1,0,0,0,0,213,1,0,0,0,0,215,1,0,0,0,0,217,1,0,0,0,0,219,1,0,0,0,0,221,1,0,0,0,0,223,1,0,0,0,0,225,1,0,0,0,0,227,1,0,0,0,0,229,1,0,0,0,0,231,1,0,0,0,0,233,1,0,0,0,0,235,1,0,0,0,0,237,1,0,0,0,0,239,1,0,0,0,0,241,1,0,0,0,0,243,1,0,0,0,0,245,1,0,0,0,0,247,1,0,0,0,0,249,1,0,0,0,0,251,1,0,0,0,0,253,1,0,0,0,0,255,1,0,0,0,0,257,1,0,0,0,0,259,1,0,0,0,0,261,1,0,0,0,0,263,1,0,0,0,0,265,1,0,0,0,0,267,1,0,0,0,0,275,1,0,0,0,0,277,1,0,0,0,0,279,1,0,0,0,0,281,1,0,0,0,0,283,1,0,0,0,0,285,1,0,0,0,0,287,1,0,0,0,0,291,1,0,0,0,0,293,1,0,0,0,0,299,1,0,0,0,0,301,1,0,0,0,1,303,1,0,0,0,3,305,1,0,0,0,5,307,1,0,0,0,7,309,1,0,0,0,9,311,1,0,0,0,11,313,1,0,0,0,13,315,1,0,0,0,15,317,1,0,0,0,17,319,1,0,0,0,19,321,1,0,0,0,21,323,1,0,0,0,23,338,1,0,0,0,25,340,1,0,0,0,27,358,1,0,0,0,29,377,1,0,0,0,31,386,1,0,0,0,33,397,1,0,0,0,35,401,1,0,0,0,37,409,1,0,0,0,39,419,1,0,0,0,41,430,1,0,0,0,43,436,1,0,0,0,45,454,1,0,0,0,47,461,1,0,0,0,49,469,1,0,0,0,51,477,1,0,0,0,53,484,1,0,0,0,55,487,1,0,0,0,57,489,1,0,0,0,59,491,1,0,0,0,61,495,1,0,0,0,63,500,1,0,0,0,65,504,1,0,0,0,67,506,1,0,0,0,69,508,1,0,0,0,71,510,1,0,0,0,73,512,1,0,0,0,75,514,1,0,0,0,77,517,1,0,0,0,79,520,1,0,0,0,81,524,1,0,0,0,83,528,1,0,0,0,85,534,1,0,0,0,87,540,1,0,0,0,89,543,1,0,0,0,91,549,1,0,0,0,93,556,1,0,0,0,95,559,1,0,0,0,97,562,1,0,0,0,99,565,1,0,0,0,101,568,1,0,0,0,103,577,1,0,0,0,105,583,1,0,0,0,107,589,1,0,0,0,109,596,1,0,0,0,111,606,1,0,0,0,113,617,1,0,0,0,115,622,1,0,0,0,117,628,1,0,0,0,119,638,1,0,0,0,121,648,1,0,0,0,123,657,1,0,0,0,125,663,1,0,0,0,127,670,1,0,0,0,129,675,1,0,0,0,131,679,1,0,0,0,133,685,1,0,0,0,135,693,1,0,0,0,137,698,1,0,0,0,139,703,1,0,0,0,141,714,1,0,0,0,143,717,1,0,0,0,145,721,1,0,0,0,147,725,1,0,0,0,149,728,1,0,0,0,151,737,1,0,0,0,153,740,1,0,0,0,155,751,1,0,0,0,157,754,1,0,0,0,159,760,1,0,0,0,161,765,1,0,0,0,163,774,1,0,0,0,165,782,1,0,0,0,167,789,1,0,0,0,169,799,1,0,0,0,171,804,1,0,0,0,173,810,1,0,0,0,175,815,1,0,0,0,177,824,1,0,0,0,179,833,1,0,0,0,181,841,1,0,0,0,183,849,1,0,0,0,185,854,1,0,0,0,187,863,1,0,0,0,189,870,1,0,0,0,191,877,1,0,0,0,193,884,1,0,0,0,195,892,1,0,0,0,197,897,1,0,0,0,199,904,1,0,0,0,201,911,1,0,0,0,203,916,1,0,0,0,205,922,1,0,0,0,207,927,1,0,0,0,209,932,1,0,0,0,211,941,1,0,0,0,213,947,1,0,0,0,215,952,1,0,0,0,217,961,1,0,0,0,219,966,1,0,0,0,221,976,1,0,0,0,223,982,1,0,0,0,225,989,1,0,0,0,227,999,1,0,0,0,229,1006,1,0,0,0,231,1009,1,0,0,0,233,1018,1,0,0,0,235,1027,1,0,0,0,237,1030,1,0,0,0,239,1033,1,0,0,0,241,1036,1,0,0,0,243,1039,1,0,0,0,245,1042,1,0,0,0,247,1045,1,0,0,0,249,1048,1,0,0,0,251,1050,1,0,0,0,253,1053,1,0,0,0,255,1055,1,0,0,0,257,1058,1,0,0,0,259,1060,1,0,0,0,261,1063,1,0,0,0,263,1071,1,0,0,0,265,1080,1,0,0,0,267,1091,1,0,0,0,269,1101,1,0,0,0,271,1106,1,0,0,0,273,1112,1,0,0,0,275,1114,1,0,0,0,277,1116,1,0,0,0,279,1121,1,0,0,0,281,1126,1,0,0,0,283,1128,1,0,0,0,285,1140,1,0,0,0,287,1154,1,0,0,0,289,1163,1,0,0,0,291,1167,1,0,0,0,293,1171,1,0,0,0,295,1179,1,0,0,0,297,1183,1,0,0,0,299,1185,1,0,0,0,301,1207,1,0,0,0,303,304,5,59,0,0,304,2,1,0,0,0,305,306,5,36,0,0,306,4,1,0,0,0,307,308,5,123,0,0,308,6,1,0,0,0,309,310,5,125,0,0,310,8,1,0,0,0,311,312,5,40,0,0,312,10,1,0,0,0,313,314,5,41,0,0,314,12,1,0,0,0,315,316,5,42,0,0,316,14,1,0,0,0,317,318,5,124,0,0,318,16,1,0,0,0,319,320,5,37,0,0,320,18,1,0,0,0,321,322,5,44,0,0,322,20,1,0,0,0,323,324,5,100,0,0,324,325,5,101,0,0,325,326,5,99,0,0,326,327,5,105,0,0,327,328,5,109,0,0,328,329,5,97,0,0,329,330,5,108,0,0,330,331,5,45,0,0,331,332,5,102,0,0,332,333,5,111,0,0,333,334,5,114,0,0,334,335,5,109,0,0,335,336,5,97,0,0,336,337,5,116,0,0,337,22,1,0,0,0,338,339,5,58,0,0,339,24,1,0,0,0,340,341,5,100,0,0,341,342,5,101,0,0,342,343,5,99,0,0,343,344,5,105,0,0,344,345,5,109,0,0,345,346,5,97,0,0,346,347,5,108,0,0,347,348,5,45,0,0,348,349,5,115,0,0,349,350,5,101,0,0,350,351,5,112,0,0,351,352,5,97,0,0,352,353,5,114,0,0,353,354,5,97,0,0,354,355,5,116,0,0,355,356,5,111,0,0,356,357,5,114,0,0,357,26,1,0,0,0,358,359,5,103,0,0,359,360,5,114,0,0,360,361,5,111,0,0,361,362,5,117,0,0,362,363,5,112,0,0,363,364,5,105,0,0,364,365,5,110,0,0,365,366,5,103,0,0,366,367,5,45,0,0,367,368,5,115,0,0,368,369,5,101,0,0,369,370,5,112,0,0,370,371,5,97,0,0,371,372,5,114,0,0,372,373,5,97,0,0,373,374,5,116,0,0,374,375,5,111,0,0,375,376,5,114,0,0,376,28,1,0,0,0,377,378,5,105,0,0,378,379,5,110,0,0,379,380,5,102,0,0,380,381,5,105,0,0,381,382,5,110,0,0,382,383,5,105,0,0,383,384,5,116,0,0,384,385,5,121,0,0,385,30,1,0,0,0,386,387,5,109,0,0,387,388,5,105,0,0,388,389,5,110,0,0,389,390,5,117,0,0,390,391,5,115,0,0,391,392,5,45,0,0,392,393,5,115,0,0,393,394,5,105,0,0,394,395,5,103,0,0,395,396,5,110,0,0,396,32,1,0,0,0,397,398,5,78,0,0,398,399,5,97,0,0,399,400,5,78,0,0,400,34,1,0,0,0,401,402,5,112,0,0,402,403,5,101,0,0,403,404,5,114,0,0,404,405,5,99,0,0,405,406,5,101,0,0,406,407,5,110,0,0,407,408,5,116,0,0,408,36,1,0,0,0,409,410,5,112,0,0,410,411,5,101,0,0,411,412,5,114,0,0,412,413,5,45,0,0,413,414,5,109,0,0,414,415,5,105,0,0,415,416,5,108,0,0,416,417,5,108,0,0,417,418,5,101,0,0,418,38,1,0,0,0,419,420,5,122,0,0,420,421,5,101,0,0,421,422,5,114,0,0,422,423,5,111,0,0,423,424,5,45,0,0,424,425,5,100,0,0,425,426,5,105,0,0,426,427,5,103,0,0,427,428,5,105,0,0,428,429,5,116,0,0,429,40,1,0,0,0,430,431,5,100,0,0,431,432,5,105,0,0,432,433,5,103,0,0,433,434,5,105,0,0,434,435,5,116,0,0,435,42,1,0,0,0,436,437,5,112,0,0,437,438,5,97,0,0,438,439,5,116,0,0,439,440,5,116,0,0,440,441,5,101,0,0,441,442,5,114,0,0,442,443,5,110,0,0,443,444,5,45,0,0,444,445,5,115,0,0,445,446,5,101,0,0,446,447,5,112,0,0,447,448,5,97,0,0,448,449,5,114,0,0,449,450,5,97,0,0,450,451,5,116,0,0,451,452,5,111,0,0,452,453,5,114,0,0,453,44,1,0,0,0,454,455,5,106,0,0,455,456,5,115,0,0,456,457,5,111,0,0,457,458,5,117,0,0,458,459,5,110,0,0,459,460,5,100,0,0,460,46,1,0,0,0,461,462,5,99,0,0,462,463,5,111,0,0,463,464,5,109,0,0,464,465,5,112,0,0,465,466,5,97,0,0,466,467,5,99,0,0,467,468,5,116,0,0,468,48,1,0,0,0,469,470,5,118,0,0,470,471,5,101,0,0,471,472,5,114,0,0,472,473,5,98,0,0,473,474,5,111,0,0,474,475,5,115,0,0,475,476,5,101,0,0,476,50,1,0,0,0,477,478,5,115,0,0,478,479,5,99,0,0,479,480,5,104,0,0,480,481,5,101,0,0,481,482,5,109,0,0,482,483,5,97,0,0,483,52,1,0,0,0,484,485,5,124,0,0,485,486,5,124,0,0,486,54,1,0,0,0,487,488,5,43,0,0,488,56,1,0,0,0,489,490,5,45,0,0,490,58,1,0,0,0,491,492,5,100,0,0,492,493,5,105,0,0,493,494,5,118,0,0,494,60,1,0,0,0,495,496,5,105,0,0,496,497,5,100,0,0,497,498,5,105,0,0,498,499,5,118,0,0,499,62,1,0,0,0,500,501,5,109,0,0,501,502,5,111,0,0,502,503,5,100,0,0,503,64,1,0,0,0,504,505,5,33,0,0,505,66,1,0,0,0,506,507,5,91,0,0,507,68,1,0,0,0,508,509,5,93,0,0,509,70,1,0,0,0,510,511,5,46,0,0,511,72,1,0,0,0,512,513,5,35,0,0,513,74,1,0,0,0,514,515,5,123,0,0,515,516,5,124,0,0,516,76,1,0,0,0,517,518,5,124,0,0,518,519,5,125,0,0,519,78,1,0,0,0,520,521,5,102,0,0,521,522,5,111,0,0,522,523,5,114,0,0,523,80,1,0,0,0,524,525,5,108,0,0,525,526,5,101,0,0,526,527,5,116,0,0,527,82,1,0,0,0,528,529,5,119,0,0,529,530,5,104,0,0,530,531,5,101,0,0,531,532,5,114,0,0,532,533,5,101,0,0,533,84,1,0,0,0,534,535,5,103,0,0,535,536,5,114,0,0,536,537,5,111,0,0,537,538,5,117,0,0,538,539,5,112,0,0,539,86,1,0,0,0,540,541,5,98,0,0,541,542,5,121,0,0,542,88,1,0,0,0,543,544,5,111,0,0,544,545,5,114,0,0,545,546,5,100,0,0,546,547,5,101,0,0,547,548,5,114,0,0,548,90,1,0,0,0,549,550,5,114,0,0,550,551,5,101,0,0,551,552,5,116,0,0,552,553,5,117,0,0,553,554,5,114,0,0,554,555,5,110,0,0,555,92,1,0,0,0,556,557,5,105,0,0,557,558,5,102,0,0,558,94,1,0,0,0,559,560,5,105,0,0,560,561,5,110,0,0,561,96,1,0,0,0,562,563,5,97,0,0,563,564,5,115,0,0,564,98,1,0,0,0,565,566,5,97,0,0,566,567,5,116,0,0,567,100,1,0,0,0,568,569,5,97,0,0,569,570,5,108,0,0,570,571,5,108,0,0,571,572,5,111,0,0,572,573,5,119,0,0,573,574,5,105,0,0,574,575,5,110,0,0,575,576,5,103,0,0,576,102,1,0,0,0,577,578,5,101,0,0,578,579,5,109,0,0,579,580,5,112,0,0,580,581,5,116,0,0,581,582,5,121,0,0,582,104,1,0,0,0,583,584,5,99,0,0,584,585,5,111,0,0,585,586,5,117,0,0,586,587,5,110,0,0,587,588,5,116,0,0,588,106,1,0,0,0,589,590,5,115,0,0,590,591,5,116,0,0,591,592,5,97,0,0,592,593,5,98,0,0,593,594,5,108,0,0,594,595,5,101,0,0,595,108,1,0,0,0,596,597,5,97,0,0,597,598,5,115,0,0,598,599,5,99,0,0,599,600,5,101,0,0,600,601,5,110,0,0,601,602,5,100,0,0,602,603,5,105,0,0,603,604,5,110,0,0,604,605,5,103,0,0,605,110,1,0,0,0,606,607,5,100,0,0,607,608,5,101,0,0,608,609,5,115,0,0,609,610,5,99,0,0,610,611,5,101,0,0,611,612,5,110,0,0,612,613,5,100,0,0,613,614,5,105,0,0,614,615,5,110,0,0,615,616,5,103,0,0,616,112,1,0,0,0,617,618,5,115,0,0,618,619,5,111,0,0,619,620,5,109,0,0,620,621,5,101,0,0,621,114,1,0,0,0,622,623,5,101,0,0,623,624,5,118,0,0,624,625,5,101,0,0,625,626,5,114,0,0,626,627,5,121,0,0,627,116,1,0,0,0,628,629,5,115,0,0,629,630,5,97,0,0,630,631,5,116,0,0,631,632,5,105,0,0,632,633,5,115,0,0,633,634,5,102,0,0,634,635,5,105,0,0,635,636,5,101,0,0,636,637,5,115,0,0,637,118,1,0,0,0,638,639,5,99,0,0,639,640,5,111,0,0,640,641,5,108,0,0,641,642,5,108,0,0,642,643,5,97,0,0,643,644,5,116,0,0,644,645,5,105,0,0,645,646,5,111,0,0,646,647,5,110,0,0,647,120,1,0,0,0,648,649,5,103,0,0,649,650,5,114,0,0,650,651,5,101,0,0,651,652,5,97,0,0,652,653,5,116,0,0,653,654,5,101,0,0,654,655,5,115,0,0,655,656,5,116,0,0,656,122,1,0,0,0,657,658,5,108,0,0,658,659,5,101,0,0,659,660,5,97,0,0,660,661,5,115,0,0,661,662,5,116,0,0,662,124,1,0,0,0,663,664,5,115,0,0,664,665,5,119,0,0,665,666,5,105,0,0,666,667,5,116,0,0,667,668,5,99,0,0,668,669,5,104,0,0,669,126,1,0,0,0,670,671,5,99,0,0,671,672,5,97,0,0,672,673,5,115,0,0,673,674,5,101,0,0,674,128,1,0,0,0,675,676,5,116,0,0,676,677,5,114,0,0,677,678,5,121,0,0,678,130,1,0,0,0,679,680,5,99,0,0,680,681,5,97,0,0,681,682,5,116,0,0,682,683,5,99,0,0,683,684,5,104,0,0,684,132,1,0,0,0,685,686,5,100,0,0,686,687,5,101,0,0,687,688,5,102,0,0,688,689,5,97,0,0,689,690,5,117,0,0,690,691,5,108,0,0,691,692,5,116,0,0,692,134,1,0,0,0,693,694,5,116,0,0,694,695,5,104,0,0,695,696,5,101,0,0,696,697,5,110,0,0,697,136,1,0,0,0,698,699,5,101,0,0,699,700,5,108,0,0,700,701,5,115,0,0,701,702,5,101,0,0,702,138,1,0,0,0,703,704,5,116,0,0,704,705,5,121,0,0,705,706,5,112,0,0,706,707,5,101,0,0,707,708,5,115,0,0,708,709,5,119,0,0,709,710,5,105,0,0,710,711,5,116,0,0,711,712,5,99,0,0,712,713,5,104,0,0,713,140,1,0,0,0,714,715,5,111,0,0,715,716,5,114,0,0,716,142,1,0,0,0,717,718,5,97,0,0,718,719,5,110,0,0,719,720,5,100,0,0,720,144,1,0,0,0,721,722,5,110,0,0,722,723,5,111,0,0,723,724,5,116,0,0,724,146,1,0,0,0,725,726,5,116,0,0,726,727,5,111,0,0,727,148,1,0,0,0,728,729,5,105,0,0,729,730,5,110,0,0,730,731,5,115,0,0,731,732,5,116,0,0,732,733,5,97,0,0,733,734,5,110,0,0,734,735,5,99,0,0,735,736,5,101,0,0,736,150,1,0,0,0,737,738,5,111,0,0,738,739,5,102,0,0,739,152,1,0,0,0,740,741,5,115,0,0,741,742,5,116,0,0,742,743,5,97,0,0,743,744,5,116,0,0,744,745,5,105,0,0,745,746,5,99,0,0,746,747,5,97,0,0,747,748,5,108,0,0,748,749,5,108,0,0,749,750,5,121,0,0,750,154,1,0,0,0,751,752,5,105,0,0,752,753,5,115,0,0,753,156,1,0,0,0,754,755,5,116,0,0,755,756,5,114,0,0,756,757,5,101,0,0,757,758,5,97,0,0,758,759,5,116,0,0,759,158,1,0,0,0,760,761,5,99,0,0,761,762,5,97,0,0,762,763,5,115,0,0,763,764,5,116,0,0,764,160,1,0,0,0,765,766,5,99,0,0,766,767,5,97,0,0,767,768,5,115,0,0,768,769,5,116,0,0,769,770,5,97,0,0,770,771,5,98,0,0,771,772,5,108,0,0,772,773,5,101,0,0,773,162,1,0,0,0,774,775,5,118,0,0,775,776,5,101,0,0,776,777,5,114,0,0,777,778,5,115,0,0,778,779,5,105,0,0,779,780,5,111,0,0,780,781,5,110,0,0,781,164,1,0,0,0,782,783,5,106,0,0,783,784,5,115,0,0,784,785,5,111,0,0,785,786,5,110,0,0,786,787,5,105,0,0,787,788,5,113,0,0,788,166,1,0,0,0,789,790,5,117,0,0,790,791,5,110,0,0,791,792,5,111,0,0,792,793,5,114,0,0,793,794,5,100,0,0,794,795,5,101,0,0,795,796,5,114,0,0,796,797,5,101,0,0,797,798,5,100,0,0,798,168,1,0,0,0,799,800,5,116,0,0,800,801,5,114,0,0,801,802,5,117,0,0,802,803,5,101,0,0,803,170,1,0,0,0,804,805,5,102,0,0,805,806,5,97,0,0,806,807,5,108,0,0,807,808,5,115,0,0,808,809,5,101,0,0,809,172,1,0,0,0,810,811,5,116,0,0,811,812,5,121,0,0,812,813,5,112,0,0,813,814,5,101,0,0,814,174,1,0,0,0,815,816,5,118,0,0,816,817,5,97,0,0,817,818,5,108,0,0,818,819,5,105,0,0,819,820,5,100,0,0,820,821,5,97,0,0,821,822,5,116,0,0,822,823,5,101,0,0,823,176,1,0,0,0,824,825,5,97,0,0,825,826,5,110,0,0,826,827,5,110,0,0,827,828,5,111,0,0,828,829,5,116,0,0,829,830,5,97,0,0,830,831,5,116,0,0,831,832,5,101,0,0,832,178,1,0,0,0,833,834,5,100,0,0,834,835,5,101,0,0,835,836,5,99,0,0,836,837,5,108,0,0,837,838,5,97,0,0,838,839,5,114,0,0,839,840,5,101,0,0,840,180,1,0,0,0,841,842,5,99,0,0,842,843,5,111,0,0,843,844,5,110,0,0,844,845,5,116,0,0,845,846,5,101,0,0,846,847,5,120,0,0,847,848,5,116,0,0,848,182,1,0,0,0,849,850,5,105,0,0,850,851,5,116,0,0,851,852,5,101,0,0,852,853,5,109,0,0,853,184,1,0,0,0,854,855,5,118,0,0,855,856,5,97,0,0,856,857,5,114,0,0,857,858,5,105,0,0,858,859,5,97,0,0,859,860,5,98,0,0,860,861,5,108,0,0,861,862,5,101,0,0,862,186,1,0,0,0,863,864,5,105,0,0,864,865,5,110,0,0,865,866,5,115,0,0,866,867,5,101,0,0,867,868,5,114,0,0,868,869,5,116,0,0,869,188,1,0,0,0,870,871,5,100,0,0,871,872,5,101,0,0,872,873,5,108,0,0,873,874,5,101,0,0,874,875,5,116,0,0,875,876,5,101,0,0,876,190,1,0,0,0,877,878,5,114,0,0,878,879,5,101,0,0,879,880,5,110,0,0,880,881,5,97,0,0,881,882,5,109,0,0,882,883,5,101,0,0,883,192,1,0,0,0,884,885,5,114,0,0,885,886,5,101,0,0,886,887,5,112,0,0,887,888,5,108,0,0,888,889,5,97,0,0,889,890,5,99,0,0,890,891,5,101,0,0,891,194,1,0,0,0,892,893,5,99,0,0,893,894,5,111,0,0,894,895,5,112,0,0,895,896,5,121,0,0,896,196,1,0,0,0,897,898,5,109,0,0,898,899,5,111,0,0,899,900,5,100,0,0,900,901,5,105,0,0,901,902,5,102,0,0,902,903,5,121,0,0,903,198,1,0,0,0,904,905,5,97,0,0,905,906,5,112,0,0,906,907,5,112,0,0,907,908,5,101,0,0,908,909,5,110,0,0,909,910,5,100,0,0,910,200,1,0,0,0,911,912,5,105,0,0,912,913,5,110,0,0,913,914,5,116,0,0,914,915,5,111,0,0,915,202,1,0,0,0,916,917,5,118,0,0,917,918,5,97,0,0,918,919,5,108,0,0,919,920,5,117,0,0,920,921,5,101,0,0,921,204,1,0,0,0,922,923,5,106,0,0,923,924,5,115,0,0,924,925,5,111,0,0,925,926,5,110,0,0,926,206,1,0,0,0,927,928,5,119,0,0,928,929,5,105,0,0,929,930,5,116,0,0,930,931,5,104,0,0,931,208,1,0,0,0,932,933,5,112,0,0,933,934,5,111,0,0,934,935,5,115,0,0,935,936,5,105,0,0,936,937,5,116,0,0,937,938,5,105,0,0,938,939,5,111,0,0,939,940,5,110,0,0,940,210,1,0,0,0,941,942,5,98,0,0,942,943,5,114,0,0,943,944,5,101,0,0,944,945,5,97,0,0,945,946,5,107,0,0,946,212,1,0,0,0,947,948,5,108,0,0,948,949,5,111,0,0,949,950,5,111,0,0,950,951,5,112,0,0,951,214,1,0,0,0,952,953,5,99,0,0,953,954,5,111,0,0,954,955,5,110,0,0,955,956,5,116,0,0,956,957,5,105,0,0,957,958,5,110,0,0,958,959,5,117,0,0,959,960,5,101,0,0,960,216,1,0,0,0,961,962,5,101,0,0,962,963,5,120,0,0,963,964,5,105,0,0,964,965,5,116,0,0,965,218,1,0,0,0,966,967,5,114,0,0,967,968,5,101,0,0,968,969,5,116,0,0,969,970,5,117,0,0,970,971,5,114,0,0,971,972,5,110,0,0,972,973,5,105,0,0,973,974,5,110,0,0,974,975,5,103,0,0,975,220,1,0,0,0,976,977,5,119,0,0,977,978,5,104,0,0,978,979,5,105,0,0,979,980,5,108,0,0,980,981,5,101,0,0,981,222,1,0,0,0,982,983,5,109,0,0,983,984,5,111,0,0,984,985,5,100,0,0,985,986,5,117,0,0,986,987,5,108,0,0,987,988,5,101,0,0,988,224,1,0,0,0,989,990,5,110,0,0,990,991,5,97,0,0,991,992,5,109,0,0,992,993,5,101,0,0,993,994,5,115,0,0,994,995,5,112,0,0,995,996,5,97,0,0,996,997,5,99,0,0,997,998,5,101,0,0,998,226,1,0,0,0,999,1e3,5,105,0,0,1e3,1001,5,109,0,0,1001,1002,5,112,0,0,1002,1003,5,111,0,0,1003,1004,5,114,0,0,1004,1005,5,116,0,0,1005,228,1,0,0,0,1006,1007,5,36,0,0,1007,1008,5,36,0,0,1008,230,1,0,0,0,1009,1010,5,101,0,0,1010,1011,5,120,0,0,1011,1012,5,116,0,0,1012,1013,5,101,0,0,1013,1014,5,114,0,0,1014,1015,5,110,0,0,1015,1016,5,97,0,0,1016,1017,5,108,0,0,1017,232,1,0,0,0,1018,1019,5,102,0,0,1019,1020,5,117,0,0,1020,1021,5,110,0,0,1021,1022,5,99,0,0,1022,1023,5,116,0,0,1023,1024,5,105,0,0,1024,1025,5,111,0,0,1025,1026,5,110,0,0,1026,234,1,0,0,0,1027,1028,5,58,0,0,1028,1029,5,61,0,0,1029,236,1,0,0,0,1030,1031,5,101,0,0,1031,1032,5,113,0,0,1032,238,1,0,0,0,1033,1034,5,110,0,0,1034,1035,5,101,0,0,1035,240,1,0,0,0,1036,1037,5,108,0,0,1037,1038,5,101,0,0,1038,242,1,0,0,0,1039,1040,5,108,0,0,1040,1041,5,116,0,0,1041,244,1,0,0,0,1042,1043,5,103,0,0,1043,1044,5,101,0,0,1044,246,1,0,0,0,1045,1046,5,103,0,0,1046,1047,5,116,0,0,1047,248,1,0,0,0,1048,1049,5,61,0,0,1049,250,1,0,0,0,1050,1051,5,33,0,0,1051,1052,5,61,0,0,1052,252,1,0,0,0,1053,1054,5,60,0,0,1054,254,1,0,0,0,1055,1056,5,60,0,0,1056,1057,5,61,0,0,1057,256,1,0,0,0,1058,1059,5,62,0,0,1059,258,1,0,0,0,1060,1061,5,62,0,0,1061,1062,5,61,0,0,1062,260,1,0,0,0,1063,1064,5,111,0,0,1064,1065,5,114,0,0,1065,1066,5,100,0,0,1066,1067,5,101,0,0,1067,1068,5,114,0,0,1068,1069,5,101,0,0,1069,1070,5,100,0,0,1070,262,1,0,0,0,1071,1072,5,111,0,0,1072,1073,5,114,0,0,1073,1074,5,100,0,0,1074,1075,5,101,0,0,1075,1076,5,114,0,0,1076,1077,5,105,0,0,1077,1078,5,110,0,0,1078,1079,5,103,0,0,1079,264,1,0,0,0,1080,1081,5,117,0,0,1081,1082,5,110,0,0,1082,1083,5,111,0,0,1083,1084,5,114,0,0,1084,1085,5,100,0,0,1085,1086,5,101,0,0,1086,1087,5,114,0,0,1087,1088,5,105,0,0,1088,1089,5,110,0,0,1089,1090,5,103,0,0,1090,266,1,0,0,0,1091,1096,5,34,0,0,1092,1095,3,269,134,0,1093,1095,8,0,0,0,1094,1092,1,0,0,0,1094,1093,1,0,0,0,1095,1098,1,0,0,0,1096,1094,1,0,0,0,1096,1097,1,0,0,0,1097,1099,1,0,0,0,1098,1096,1,0,0,0,1099,1100,5,34,0,0,1100,268,1,0,0,0,1101,1104,5,92,0,0,1102,1105,7,1,0,0,1103,1105,3,271,135,0,1104,1102,1,0,0,0,1104,1103,1,0,0,0,1105,270,1,0,0,0,1106,1107,5,117,0,0,1107,1108,3,273,136,0,1108,1109,3,273,136,0,1109,1110,3,273,136,0,1110,1111,3,273,136,0,1111,272,1,0,0,0,1112,1113,7,2,0,0,1113,274,1,0,0,0,1114,1115,5,63,0,0,1115,276,1,0,0,0,1116,1117,5,110,0,0,1117,1118,5,117,0,0,1118,1119,5,108,0,0,1119,1120,5,108,0,0,1120,278,1,0,0,0,1121,1122,3,281,140,0,1122,280,1,0,0,0,1123,1127,3,283,141,0,1124,1127,3,285,142,0,1125,1127,3,287,143,0,1126,1123,1,0,0,0,1126,1124,1,0,0,0,1126,1125,1,0,0,0,1127,282,1,0,0,0,1128,1129,3,289,144,0,1129,284,1,0,0,0,1130,1131,5,46,0,0,1131,1141,3,289,144,0,1132,1133,3,289,144,0,1133,1137,5,46,0,0,1134,1136,7,3,0,0,1135,1134,1,0,0,0,1136,1139,1,0,0,0,1137,1135,1,0,0,0,1137,1138,1,0,0,0,1138,1141,1,0,0,0,1139,1137,1,0,0,0,1140,1130,1,0,0,0,1140,1132,1,0,0,0,1141,286,1,0,0,0,1142,1143,5,46,0,0,1143,1155,3,289,144,0,1144,1152,3,289,144,0,1145,1149,5,46,0,0,1146,1148,7,3,0,0,1147,1146,1,0,0,0,1148,1151,1,0,0,0,1149,1147,1,0,0,0,1149,1150,1,0,0,0,1150,1153,1,0,0,0,1151,1149,1,0,0,0,1152,1145,1,0,0,0,1152,1153,1,0,0,0,1153,1155,1,0,0,0,1154,1142,1,0,0,0,1154,1144,1,0,0,0,1155,1156,1,0,0,0,1156,1158,7,4,0,0,1157,1159,7,5,0,0,1158,1157,1,0,0,0,1158,1159,1,0,0,0,1159,1160,1,0,0,0,1160,1161,3,289,144,0,1161,288,1,0,0,0,1162,1164,7,3,0,0,1163,1162,1,0,0,0,1164,1165,1,0,0,0,1165,1163,1,0,0,0,1165,1166,1,0,0,0,1166,290,1,0,0,0,1167,1168,7,6,0,0,1168,1169,1,0,0,0,1169,1170,6,145,0,0,1170,292,1,0,0,0,1171,1175,3,295,147,0,1172,1174,3,297,148,0,1173,1172,1,0,0,0,1174,1177,1,0,0,0,1175,1173,1,0,0,0,1175,1176,1,0,0,0,1176,294,1,0,0,0,1177,1175,1,0,0,0,1178,1180,7,7,0,0,1179,1178,1,0,0,0,1180,296,1,0,0,0,1181,1184,3,295,147,0,1182,1184,7,8,0,0,1183,1181,1,0,0,0,1183,1182,1,0,0,0,1184,298,1,0,0,0,1185,1186,5,40,0,0,1186,1195,5,58,0,0,1187,1194,3,299,149,0,1188,1189,5,40,0,0,1189,1194,8,9,0,0,1190,1191,5,58,0,0,1191,1194,8,10,0,0,1192,1194,8,11,0,0,1193,1187,1,0,0,0,1193,1188,1,0,0,0,1193,1190,1,0,0,0,1193,1192,1,0,0,0,1194,1197,1,0,0,0,1195,1193,1,0,0,0,1195,1196,1,0,0,0,1196,1199,1,0,0,0,1197,1195,1,0,0,0,1198,1200,5,58,0,0,1199,1198,1,0,0,0,1200,1201,1,0,0,0,1201,1199,1,0,0,0,1201,1202,1,0,0,0,1202,1203,1,0,0,0,1203,1204,5,41,0,0,1204,1205,1,0,0,0,1205,1206,6,149,0,0,1206,300,1,0,0,0,1207,1208,8,12,0,0,1208,302,1,0,0,0,18,0,1094,1096,1104,1126,1137,1140,1149,1152,1154,1158,1165,1175,1179,1183,1193,1195,1201,1,0,1,0];static __ATN;static get _ATN(){return o.__ATN||(o.__ATN=(new K.ATNDeserializer).deserialize(o._serializedATN)),o.__ATN}static vocabulary=new K.Vocabulary(o.literalNames,o.symbolicNames,[]);get vocabulary(){return o.vocabulary}static decisionsToDFA=o._ATN.decisionToState.map(((t,e)=>new K.DFA(t,e)))}function _(t){for(let e in o)if(o[e]===t)return e;return""}const u=r.StreamLanguage.define({token:(t,e)=>{const a=(s=t.string,i=K.CharStream.fromString(s),c=new o(i),n=new K.CommonTokenStream(c),n.fill(),n.tokens.map((t=>({tokenName:_(t.type),text:t.text||"",type:t.type,startIndex:t.start,stopIndex:t.stop})))).filter((e=>e.startIndex>=t.pos))[0];var s,i,c,n;if(a.type!==o.EOF&&t.match(a.text)){let t=function(t){for(let e in l.tags)if(l.tags[e]===t)return e;return""}(l.tags.keyword);switch(a.type){case o.Kmodule:case o.Kversion:case o.Kexternal:case o.Kcontext:case o.Ktype:case o.Kfor:case o.Ktypeswitch:case o.Kswitch:case o.Kif:case o.Kthen:case o.Kelse:case o.Ktry:case o.Kcatch:case o.Kwhere:case o.Kgroup:case o.Kby:case o.Korder:case o.Kas:case o.Kat:case o.Kin:case o.Kdeclare:case o.Kimport:case o.Kreplace:case o.Kvalue:case o.Kof:case o.Krename:case o.Kinsert:case o.Kdelete:case o.Kcopy:case o.Kappend:case o.Kwith:case o.Kmodify:case o.Kinto:case o.Kbreak:case o.Kloop:case o.Kcontinue:case o.Kexit:case o.Kreturning:case o.Kwhile:case o.Kannotate:case o.Kvalidate:case o.Kcastable:case o.Kcast:case o.Ktreat:case o.Kis:case o.Kstatically:case o.Kinstance:case o.Kto:case o.Kcollation:case o.Ksatisfies:case o.Kstable:case o.Kempty:case o.Kallowing:case o.Kreturn:case o.Kleast:case o.Kgreatest:case o.Ksome:case o.Kevery:case o.Kascending:case o.Kdescending:case o.Kordering:case o.Kordered:case o.Kcase:case o.Kdefault:case o.Kunordered:case o.Keq:case o.Kne:case o.Klt:case o.Kle:case o.Kgt:case o.Kge:case o.Kand:case o.Kor:case o.Knot:case o.Kcontext_dollars:t="keyword";break;default:t="variable"}return t}return t.next(),null}}),d={id:"davidbuzatu-marian/jsoniq-jupyter-plugin:jsoniq",requires:[s.ILSPCodeExtractorsManager,n.IEditorLanguageRegistry],activate:(t,e,a)=>{new c(e).registerExtractor(),a.addLanguage({name:"jsoniq",displayName:"JSONiq",mime:["application/jsoniq","text/jsoniq","text/x-jsoniq"],extensions:[".jq"],support:new r.LanguageSupport(u)}),console.log("Activated plugin!")},autoStart:!0}}}]);