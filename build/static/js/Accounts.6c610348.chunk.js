webpackJsonp([30],{1904:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){function n(r,l){try{var c=t[r](l),s=c.value}catch(e){return void a(e)}if(!c.done)return Promise.resolve(s).then(function(e){n("next",e)},function(e){n("throw",e)});e(s)}return n("next")})}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e){return{accounts:e.app.accounts}}Object.defineProperty(t,"__esModule",{value:!0});var u=a(120),i=n(u),d=a(9),f=n(d),m=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();a(145);var p=a(0),h=n(p),b=a(15),v=a(78),E=a(13),g=a(10),y=a(14),_=a(18),N=a(20),w=a(35),k=a(48),x=n(k),O=a(19),C=a(29),F=n(C),T=(a(11),function(e){function t(){var e=this;l(this,t);var a=c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.loadAccounts=function(){var t=r(f.default.mark(function t(){var n,r,l,c,s,o,u,i,d,m,p,h,b,v,E,g,y,_,N=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,w=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({loading:!0}),n={from:(N-1)*w,size:w,sort:{balance:"desc"}},e.next=4,F.default.post("https://apilist.tronscan.org/accounts/accounts/_search",n);case 4:r=e.sent,l=r.data,c=[],s=l.hits.total,o=!0,u=!1,i=void 0,e.prev=11,d=l.hits.hits[Symbol.iterator]();case 13:if(o=(m=d.next()).done){e.next=40;break}if(p=m.value,h=0,!p._source.frozen){e.next=36;break}for(b=!0,v=!1,E=void 0,e.prev=20,g=p._source.frozen[Symbol.iterator]();!(b=(y=g.next()).done);b=!0)_=y.value,h+=_.frozen_balance;e.next=28;break;case 24:e.prev=24,e.t0=e.catch(20),v=!0,E=e.t0;case 28:e.prev=28,e.prev=29,!b&&g.return&&g.return();case 31:if(e.prev=31,!v){e.next=34;break}throw E;case 34:return e.finish(31);case 35:return e.finish(28);case 36:c.push({address:p._source.address,balance:p._source.balance?p._source.balance:0,dateCreated:p._source.date_created,power:h});case 37:o=!0,e.next=13;break;case 40:e.next=46;break;case 42:e.prev=42,e.t1=e.catch(11),u=!0,i=e.t1;case 46:e.prev=46,e.prev=47,!o&&d.return&&d.return();case 49:if(e.prev=49,!u){e.next=52;break}throw i;case 52:return e.finish(49);case 53:return e.finish(46);case 54:a.setState({loading:!1,accounts:c,total:s});case 55:case"end":return e.stop()}},t,e,[[11,42,46,54],[20,24,28,36],[29,,31,35],[47,,49,53]])}));return function(){return t.apply(this,arguments)}}(),a.onChange=function(e,t){a.loadAccounts(e,t)},a.onSearchFieldChangeHandler=function(e){a.setState({searchString:e.target.value})},a.customizedColumn=function(){var e=a.props.intl;return[{title:(0,y.upperFirst)(e.formatMessage({id:"address"})),dataIndex:"address",key:"address",align:"left",className:"ant_table",width:"40%",render:function(t,a,n){return 2==a.accountType?h.default.createElement("span",{className:"d-flex"},h.default.createElement(i.default,{placement:"top",title:e.formatMessage({id:"contracts"})},h.default.createElement("span",null,h.default.createElement("i",{className:"far fa-file mr-1"}))),h.default.createElement(_.AddressLink,{address:t,isContract:2==a.toAddressType})):h.default.createElement(_.AddressLink,{address:t})}},{title:(0,y.upperFirst)(e.formatMessage({id:"supply"})),dataIndex:"balance",key:"supply",align:"left",className:"ant_table",render:function(e,t,a){return h.default.createElement("div",null,h.default.createElement(g.FormattedNumber,{value:parseInt(e)/N.ONE_TRX/N.CIRCULATING_SUPPLY*100,minimumFractionDigits:8,maximumFractionDigits:8})," %")}},{title:(0,y.upperFirst)(e.formatMessage({id:"power"})),dataIndex:"power",key:"power",align:"center",render:function(e,t,a){return h.default.createElement(g.FormattedNumber,{value:parseInt(e)/N.ONE_TRX})}},{title:(0,y.upperFirst)(e.formatMessage({id:"balance"})),dataIndex:"balance",key:"balance",align:"right",className:"ant_table",render:function(e,t,a){return h.default.createElement(w.TRXPrice,{amount:parseInt(e)/N.ONE_TRX})}}]},a.state={loading:!0,searchString:"",accounts:[],total:0},a}return s(t,e),m(t,[{key:"componentDidMount",value:function(){this.loadAccounts()}},{key:"componentDidUpdate",value:function(){}},{key:"filteredAccounts",value:function(){var e=this.props.accounts,t=this.state.searchString;return t=t.toUpperCase(),t.length>0&&(e=(0,y.filter)(e,function(e){return-1!==e.address.toUpperCase().indexOf(t)})),e}},{key:"renderAccounts",value:function(){var e=this.state.accounts;if(0!==e.length)return h.default.createElement(p.Fragment,null,h.default.createElement("div",{className:"table-responsive"},h.default.createElement("table",{className:"table table-striped m-0"},h.default.createElement("thead",{className:"thead-dark"},h.default.createElement("tr",null,h.default.createElement("th",null,(0,E.tu)("address")),h.default.createElement("th",{className:"d-md-table-cell"},(0,E.tu)("supply")),h.default.createElement("th",{className:"d-md-table-cell"},(0,E.tu)("power")),h.default.createElement("th",null,(0,E.tu)("balance")))),h.default.createElement("tbody",null,e.map(function(e,t){return h.default.createElement("tr",{key:e.address},h.default.createElement("th",null,h.default.createElement(_.AddressLink,{address:e.address})),h.default.createElement("td",{className:"d-md-table-cell text-nowrap"},h.default.createElement(g.FormattedNumber,{value:e.balance/N.ONE_TRX/N.CIRCULATING_SUPPLY*100,minimumFractionDigits:8,maximumFractionDigits:8})," %"),h.default.createElement("td",{className:"text-nowrap d-md-table-cell"},h.default.createElement(g.FormattedNumber,{value:e.power/N.ONE_TRX})),h.default.createElement("td",{className:"text-nowrap"},h.default.createElement(w.TRXPrice,{amount:e.balance/N.ONE_TRX})))})))))}},{key:"render",value:function(){var e=this,t=this.props,a=(t.match,t.intl),n=this.state,r=n.total,l=n.loading,c=n.accounts,s=this.customizedColumn(),o=a.formatMessage({id:"view_total"})+" "+r+" "+a.formatMessage({id:"account_unit"});return h.default.createElement("main",{className:"container header-overlap pb-3 token_black"},h.default.createElement("div",{className:"row"},h.default.createElement("div",{className:"col-md-12"},h.default.createElement("div",{className:"card h-100 text-center widget-icon accout_unit"},h.default.createElement("div",{className:"card-body"},h.default.createElement("h3",{className:"text-primary"},h.default.createElement(g.FormattedNumber,{value:r})),(0,E.tu)("total_accounts"))))),l&&h.default.createElement("div",{className:"loading-style"},h.default.createElement(O.TronLoader,null)),h.default.createElement("div",{className:"row mt-2"},h.default.createElement("div",{className:"col-md-12 table_pos"},r?h.default.createElement("div",{className:"table_pos_info d-none d-md-block",style:{left:"auto"}},o):"",h.default.createElement(x.default,{bordered:!0,loading:l,column:s,data:c,total:r,onPageChange:function(t,a){e.loadAccounts(t,a)}}))))}}]),t}(p.Component)),A={loadAccounts:v.loadAccounts};t.default=(0,b.connect)(o,A)((0,g.injectIntl)(T))}});