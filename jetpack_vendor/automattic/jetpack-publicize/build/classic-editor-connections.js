(()=>{"use strict";var e={428:e=>{e.exports=window.jQuery},455:e=>{e.exports=window.wp.apiFetch},723:e=>{e.exports=window.wp.i18n}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)if(n.o(t,a)&&!n.o(e,a))Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var a=n(455),r=n.n(a),o=n(723),i=n(428),s=n.n(i);const _n=o._n,__=o.__,{ajaxUrl:c,connectionsUrl:p,isEnhancedPublishingEnabled:l,resharePath:d,isReshareSupported:u}=window.jetpackSocialClassicEditorOptions,h=["instagram-business"],f=(e,t)=>{const n=window.wp.media.featuredImage.get(),a=n&&-1!==n,r=e("#pub-connection-needs-media"),o=!!r.html();if(a!==o)return;if(t.forEach((t=>{e(".wpas-submit-"+t).each(((t,n)=>{const r=e(n);if(!r.prop("disabled")&&!a)r.data("checkedVal",r.prop("checked"));r.prop("checked",a&&r.data("checkedVal")),r.prop("disabled",!a)}))})),a)return void r.removeClass().html("");const i=l?/* translators: %s is the link to the media upload best practices. */__('You need a featured image to share to Instagram. Use the block editor for more advanced media features! <a href="%s" rel="noopener noreferrer" target="_blank">Learn more</a>.',"jetpack-publicize-pkg"):/* translators: %s is the link to the media upload best practices. */__('You need a featured image to share to Instagram. <a href="%s" rel="noopener noreferrer" target="_blank">Learn more</a>.',"jetpack-publicize-pkg",0);r.addClass("notice-warning publicize__notice-media-warning publicize__notice-warning").append(i.replace("%s","https://jetpack.com/support/jetpack-social/sharing-to-instagram-with-jetpack-social"))};s()((function(e){const t=h.filter((t=>e(".wpas-submit-"+t).length));if(t.length>0){f(e,t);const n=window.wp.media.featuredImage.set;window.wp.media.featuredImage.set=function(a){n(a),f(e,t)}}let n=!1;const a=function(){if(!n)e.post(c,{action:"test_publicize_conns"},s),n=!0};let o;window.addEventListener("focus",(()=>{if(o)clearTimeout(o);o=setTimeout(a,2e3)}));const i=(t,n)=>!n.data?0:n.data.reduce(((n,a)=>{if(!a.connectionTestPassed&&t===(a.connectionTestErrorCode??"broken"))return e("#wpas-submit-"+a.id).prop("checked",!1).prop("disabled",!0),n+1;else return n}),0),s=function(t){n=!1;const a=e("#pub-connection-tests");a.removeClass("test-in-progress").removeClass("below-h2").removeClass("error").removeClass("publicize-token-refresh-message").html("");const r=i("broken",t),o=i("unsupported",t);if(r){
/* translators: %s is the link to the connections page in Calypso */
const e=_n('One of your social connections is broken. Reconnect it on the <a href="%s" rel="noopener noreferrer" target="_blank">connection management</a> page.','Some of your social connections are broken. Reconnect them on the <a href="%s" rel="noopener noreferrer" target="_blank">connection management</a> page.',r,"jetpack-publicize-pkg");a.addClass("below-h2").addClass("error").addClass("publicize-token-refresh-message").append(e.replace("%s",p))}if(o){
/* translators: %s is the link to the connections page in Calypso */
const e=__('Twitter is not supported anymore. <a href="%s" rel="noopener noreferrer" target="_blank">Learn more</a>.',"jetpack-publicize-pkg");if(r)a.append("<hr />");else a.addClass("below-h2").addClass("error").addClass("publicize-token-refresh-message");a.append(e.replace("%s",p))}};if(e("#pub-connection-tests").length)a();const l=e("#publicize-share-now"),b=e("#publicize-share-now-notice"),m=e("#publicize-form").find('li input[type="checkbox"]'),g=(e,t="warning")=>{b.removeClass("notice-warning notice-success hidden").addClass("publicize__notice-warning notice-"+t).text(e)};l.on("click",(function(t){if(t.preventDefault(),!u)return;if(b.removeClass("publicize__notice-warning").addClass("hidden").text(""),!m.filter(((t,n)=>e(n).prop("checked"))).length)return void g(__("Please select at least one connection to share with.","jetpack-publicize-pkg"));const n=e('input[name="post_ID"]').val(),a=d.replace("{postId}",n),o=m.filter(((t,n)=>!e(n).prop("checked"))).map(((t,n)=>e(n).data("id"))).toArray(),i=e('textarea[name="wpas_title"]').val();l.prop("disabled",!0).text(__("Sharing…","jetpack-publicize-pkg")),r()({path:a,method:"POST",data:{message:i,skipped_connections:o}}).then((()=>{g(__("Your post has been shared!","jetpack-publicize-pkg"),"success")})).catch((()=>{g(__("An error occurred while sharing your post.","jetpack-publicize-pkg"))})).finally((()=>{l.prop("disabled",!1).text(__("Share now","jetpack-publicize-pkg"))}))}))}))})();