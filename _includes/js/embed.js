/*! MyGovBar — 0.0.1 — 2013-01-04 15:16 */
(function(){var t,e,o=function(t,e){return function(){return t.apply(e,arguments)}};e={interval_id:void 0,last_hash:void 0,cache_bust:1,attached_callback:void 0,window:this,postMessage:function(t,e,o){return e?(o=o||parent,window.postMessage?o.postMessage(t,e.replace(/([^:]+:\/\/[^\/]+).*/,"$1")):e?o.location=e.replace(/#.*$/,"")+"#"+ +new Date+cache_bust++ +"&"+t:void 0):void 0},receiveMessage:function(t,e){var o,r;return window.postMessage?(t&&(o=function(o){return"string"==typeof e&&o.origin!==e||"[object Function]"===Object.prototype.toString.call(e)&&e(o.origin)===!1?(console.log("cross iframe request blocked. Domains "+o.origin+" and "+e+" must match."),!1):t(o)}),window.addEventListener?window[t?"addEventListener":"removeEventListener"]("message",o,!1):window[t?"attachEvent":"detachEvent"]("onmessage",o)):(r&&clearInterval(r),r=null,t?r=setInterval(function(){var e,o,r;return e=document.location.hash,r=/^#?\d+&/,e!==o&&r.test(e)?(o=e,t({data:e.replace(r,"")})):void 0},100):void 0)}},t=function(){function t(){this.recieve=o(this.recieve,this),this.show=o(this.show,this),this.onResize=o(this.onResize,this),this.onScroll=o(this.onScroll,this),this.addEvent(document,"scroll",this.onScroll),this.addEvent(window,"resize",this.onResize),this.onResize()}return t.prototype.rootUrl="{{ site.url }}",t.prototype.scrollTrigger="{{ site.trigger }}",t.prototype.widthMinimized="{{ site.widthMinimized }}",t.prototype.minWidth="{{ site.minWidth }}",t.prototype.animationSpeed="{{ site.animation_speed }}",t.prototype.style={position:"fixed",bottom:0,left:0,background:"transparent",width:"{{ site.widthMinimized }}",display:"none",height:"268px",border:0,"z-index":9999999,overflow:"hidden"},t.prototype.isLoaded=!1,t.prototype.id="myGovBar",t.prototype.el=!1,t.prototype.state="hidden",t.prototype.addEvent=function(t,e,o){return t.addEventListener?t.addEventListener(e,o,!1):t.attachEvent?t.attachEvent("on"+e,o):void 0},t.prototype.onScroll=function(){return this.offsetBottom()>this.scrollTrigger?this.show():this.offsetBottom()<this.scrollTrigger?this.hide():void 0},t.prototype.onResize=function(){return window.innerWidth<this.minWidth&&"shown"===this.state?(this.maximize(),this.send("expanded")):void 0},t.prototype.positionTop=function(){return null!=window.pageYOffset?window.pageYOffset:null!=html.scrollTop?html.scrollTop:null!=body.scrollTop?body.scrollTop:0},t.prototype.pageHeight=function(){return Math.max(Math.max(document.body.scrollHeight,document.documentElement.scrollHeight),Math.max(document.body.offsetHeight,document.documentElement.offsetHeight),Math.max(document.body.clientHeight,document.documentElement.clientHeight))},t.prototype.windowHeight=function(){return window.innerHeight||html.clientHeight||body.clientHeight||screen.availHeight},t.prototype.offsetBottom=function(){return 100*(this.positionTop()+this.windowHeight())/this.pageHeight()},t.prototype.load=function(t){var o,r,n;this.el=document.createElement("iframe"),this.el.name=this.id,this.el.id=this.id,this.el.src=this.rootUrl+"/mygov-bar.html#"+encodeURIComponent(document.location.href),n=this.style;for(o in n)r=n[o],this.el.style[o]=r;return document.body.appendChild(this.el),e.receiveMessage(this.recieve,this.rootUrl.match(/([^:]+:\/\/.[^/]+)/)[1]),this.isLoaded=!0,null!=t?t():void 0},t.prototype.setWidth=function(t){return this.el.style.width=t},t.prototype.setHeight=function(t){return this.el.style.height=t},t.prototype.show=function(){return"shown"!==this.state?this.isLoaded?(this.el.style.display="block",this.setState("shown")):this.load(this.show):void 0},t.prototype.hide=function(){var t=this;if("hidden"!==this.state)return this.setState("hidden"),setTimeout(function(){return(t.state="hidden")?t.el.style.display="none":void 0},this.animationSpeed)},t.prototype.maximize=function(){return this.setWidth("100%")},t.prototype.minimize=function(){return this.setWidth(this.widthMinimized)},t.prototype.send=function(t){var o;return o=document.getElementById(this.id),e.postMessage(t,o.src,frames.myGovBar)},t.prototype.recieve=function(t){switch(t=t.data.split("-"),t[0]){case"mini":return this.minimize();case"expanded":return this.maximize();case"height":return this.setHeight(t[1])}},t.prototype.setState=function(t){return this.state=t,this.send(t)},t}(),window.MyGovLoader=new t}).call(this);