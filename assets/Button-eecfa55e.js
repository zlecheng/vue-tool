import{i as e,p as o,f as r,Q as t,e as n,bE as a,bF as i,bG as l,bH as s,bl as d,l as c,d as u,aE as h,v as b,g as m,aQ as p,h as f,k as x,aI as g,W as y,aA as v,a as C,m as P,n as S,o as w,aV as T,t as $,u as D,s as M,aF as F,x as W,j as z,aS as H,aT as k,aD as E,b as I}from"./index-46d46401.js";import{a as B,i as G,c as R}from"./Scrollbar-4317abfb.js";function O(e){return"string"==typeof e?e.endsWith("px")?Number(e.slice(0,e.length-2)):Number(e):e}function j(e){if(null!=e)return"number"==typeof e?`${e}px`:e.endsWith("px")?e:`${e}px`}function A(e,o){const r=e.trim().split(/\s+/g),t={top:r[0]};switch(r.length){case 1:t.right=r[0],t.bottom=r[0],t.left=r[0];break;case 2:t.right=r[1],t.left=r[1],t.bottom=r[0];break;case 3:t.right=r[1],t.bottom=r[2],t.left=r[1];break;case 4:t.right=r[1],t.bottom=r[2],t.left=r[3];break;default:throw new Error("[seemly/getMargin]:"+e+" is not a valid value.")}return void 0===o?t:t[o]}function N(e,o){const[r,t]=e.split(" ");return o?"row"===o?r:t:{row:r,col:t||r}}function q(e){return e.replace(/#|\(|\)|,|\s|\./g,"_")}const L=n("n-form-item");function Q(n,{defaultSize:a="medium",mergedSize:i,mergedDisabled:l}={}){const s=e(L,null);o(L,null);const d=r(i?()=>i(s):()=>{const{size:e}=n;if(e)return e;if(s){const{mergedSize:e}=s;if(void 0!==e.value)return e.value}return a}),c=r(l?()=>l(s):()=>{const{disabled:e}=n;return void 0!==e?e:!!s&&s.disabled.value}),u=r((()=>{const{status:e}=n;return e||(null==s?void 0:s.mergedValidationStatus.value)}));return t((()=>{s&&s.restoreValidation()})),{mergedSizeRef:d,mergedDisabledRef:c,mergedStatusRef:u,nTriggerFormBlur(){s&&s.handleContentBlur()},nTriggerFormChange(){s&&s.handleContentChange()},nTriggerFormFocus(){s&&s.handleContentFocus()},nTriggerFormInput(){s&&s.handleContentInput()}}}const V={name:"en-US",global:{undo:"Undo",redo:"Redo",confirm:"Confirm",clear:"Clear"},Popconfirm:{positiveText:"Confirm",negativeText:"Cancel"},Cascader:{placeholder:"Please Select",loading:"Loading",loadingRequiredMessage:e=>`Please load all ${e}'s descendants before checking it.`},Time:{dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss"},DatePicker:{yearFormat:"yyyy",monthFormat:"MMM",dayFormat:"eeeeee",yearTypeFormat:"yyyy",monthTypeFormat:"yyyy-MM",dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss",quarterFormat:"yyyy-qqq",weekFormat:"yyyy-w",clear:"Clear",now:"Now",confirm:"Confirm",selectTime:"Select Time",selectDate:"Select Date",datePlaceholder:"Select Date",datetimePlaceholder:"Select Date and Time",monthPlaceholder:"Select Month",yearPlaceholder:"Select Year",quarterPlaceholder:"Select Quarter",weekPlaceholder:"Select Week",startDatePlaceholder:"Start Date",endDatePlaceholder:"End Date",startDatetimePlaceholder:"Start Date and Time",endDatetimePlaceholder:"End Date and Time",startMonthPlaceholder:"Start Month",endMonthPlaceholder:"End Month",monthBeforeYear:!0,firstDayOfWeek:6,today:"Today"},DataTable:{checkTableAll:"Select all in the table",uncheckTableAll:"Unselect all in the table",confirm:"Confirm",clear:"Clear"},LegacyTransfer:{sourceTitle:"Source",targetTitle:"Target"},Transfer:{selectAll:"Select all",unselectAll:"Unselect all",clearAll:"Clear",total:e=>`Total ${e} items`,selected:e=>`${e} items selected`},Empty:{description:"No Data"},Select:{placeholder:"Please Select"},TimePicker:{placeholder:"Select Time",positiveText:"OK",negativeText:"Cancel",now:"Now",clear:"Clear"},Pagination:{goto:"Goto",selectionSuffix:"page"},DynamicTags:{add:"Add"},Log:{loading:"Loading"},Input:{placeholder:"Please Input"},InputNumber:{placeholder:"Please Input"},DynamicInput:{create:"Create"},ThemeEditor:{title:"Theme Editor",clearAllVars:"Clear All Variables",clearSearch:"Clear Search",filterCompName:"Filter Component Name",filterVarName:"Filter Variable Name",import:"Import",export:"Export",restore:"Reset to Default"},Image:{tipPrevious:"Previous picture (←)",tipNext:"Next picture (→)",tipCounterclockwise:"Counterclockwise",tipClockwise:"Clockwise",tipZoomOut:"Zoom out",tipZoomIn:"Zoom in",tipDownload:"Download",tipClose:"Close (Esc)",tipOriginalSize:"Zoom to original size"}};var _={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};var J={date:a({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:a({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:a({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},X={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};const Y={name:"en-US",locale:{code:"en-US",formatDistance:function(e,o,r){var t,n=_[e];return t="string"==typeof n?n:1===o?n.one:n.other.replace("{{count}}",o.toString()),null!=r&&r.addSuffix?r.comparison&&r.comparison>0?"in "+t:t+" ago":t},formatLong:J,formatRelative:function(e,o,r,t){return X[e]},localize:{ordinalNumber:function(e,o){var r=Number(e),t=r%100;if(t>20||t<10)switch(t%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},era:i({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:i({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:i({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:i({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:i({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:l({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:s({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:s({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:s({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:s({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:s({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}}};function K(o){const{mergedLocaleRef:t,mergedDateLocaleRef:n}=e(d,null)||{},a=r((()=>{var e,r;return null!==(r=null===(e=null==t?void 0:t.value)||void 0===e?void 0:e[o])&&void 0!==r?r:V[o]}));return{dateLocaleRef:r((()=>{var e;return null!==(e=null==n?void 0:n.value)&&void 0!==e?e:Y})),localeRef:a}}const U=c("base-wave","\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n border-radius: inherit;\n"),Z=u({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(e){h("-base-wave",U,b(e,"clsPrefix"));const o=m(null),r=m(!1);let n=null;return t((()=>{null!==n&&window.clearTimeout(n)})),{active:r,selfRef:o,play(){null!==n&&(window.clearTimeout(n),r.value=!1,n=null),p((()=>{var e;null===(e=o.value)||void 0===e||e.offsetHeight,r.value=!0,n=window.setTimeout((()=>{r.value=!1,n=null}),1e3)}))}}},render(){const{clsPrefix:e}=this;return f("div",{ref:"selfRef","aria-hidden":!0,class:[`${e}-base-wave`,this.active&&`${e}-base-wave--active`]})}}),{cubicBezierEaseInOut:ee}=g,oe=y&&"chrome"in window;y&&navigator.userAgent.includes("Firefox");const re=y&&navigator.userAgent.includes("Safari")&&!oe;function te(e){return v(e,[255,255,255,.16])}function ne(e){return v(e,[0,0,0,.12])}const ae=n("n-button-group"),ie={paddingTiny:"0 6px",paddingSmall:"0 10px",paddingMedium:"0 14px",paddingLarge:"0 18px",paddingRoundTiny:"0 10px",paddingRoundSmall:"0 14px",paddingRoundMedium:"0 18px",paddingRoundLarge:"0 22px",iconMarginTiny:"6px",iconMarginSmall:"6px",iconMarginMedium:"6px",iconMarginLarge:"6px",iconSizeTiny:"14px",iconSizeSmall:"18px",iconSizeMedium:"18px",iconSizeLarge:"20px",rippleDuration:".6s"},le={name:"Button",common:C,self:e=>{const{heightTiny:o,heightSmall:r,heightMedium:t,heightLarge:n,borderRadius:a,fontSizeTiny:i,fontSizeSmall:l,fontSizeMedium:s,fontSizeLarge:d,opacityDisabled:c,textColor2:u,textColor3:h,primaryColorHover:b,primaryColorPressed:m,borderColor:p,primaryColor:f,baseColor:x,infoColor:g,infoColorHover:y,infoColorPressed:v,successColor:C,successColorHover:P,successColorPressed:S,warningColor:w,warningColorHover:T,warningColorPressed:$,errorColor:D,errorColorHover:M,errorColorPressed:F,fontWeight:W,buttonColor2:z,buttonColor2Hover:H,buttonColor2Pressed:k,fontWeightStrong:E}=e;return Object.assign(Object.assign({},ie),{heightTiny:o,heightSmall:r,heightMedium:t,heightLarge:n,borderRadiusTiny:a,borderRadiusSmall:a,borderRadiusMedium:a,borderRadiusLarge:a,fontSizeTiny:i,fontSizeSmall:l,fontSizeMedium:s,fontSizeLarge:d,opacityDisabled:c,colorOpacitySecondary:"0.16",colorOpacitySecondaryHover:"0.22",colorOpacitySecondaryPressed:"0.28",colorSecondary:z,colorSecondaryHover:H,colorSecondaryPressed:k,colorTertiary:z,colorTertiaryHover:H,colorTertiaryPressed:k,colorQuaternary:"#0000",colorQuaternaryHover:H,colorQuaternaryPressed:k,color:"#0000",colorHover:"#0000",colorPressed:"#0000",colorFocus:"#0000",colorDisabled:"#0000",textColor:u,textColorTertiary:h,textColorHover:b,textColorPressed:m,textColorFocus:b,textColorDisabled:u,textColorText:u,textColorTextHover:b,textColorTextPressed:m,textColorTextFocus:b,textColorTextDisabled:u,textColorGhost:u,textColorGhostHover:b,textColorGhostPressed:m,textColorGhostFocus:b,textColorGhostDisabled:u,border:`1px solid ${p}`,borderHover:`1px solid ${b}`,borderPressed:`1px solid ${m}`,borderFocus:`1px solid ${b}`,borderDisabled:`1px solid ${p}`,rippleColor:f,colorPrimary:f,colorHoverPrimary:b,colorPressedPrimary:m,colorFocusPrimary:b,colorDisabledPrimary:f,textColorPrimary:x,textColorHoverPrimary:x,textColorPressedPrimary:x,textColorFocusPrimary:x,textColorDisabledPrimary:x,textColorTextPrimary:f,textColorTextHoverPrimary:b,textColorTextPressedPrimary:m,textColorTextFocusPrimary:b,textColorTextDisabledPrimary:u,textColorGhostPrimary:f,textColorGhostHoverPrimary:b,textColorGhostPressedPrimary:m,textColorGhostFocusPrimary:b,textColorGhostDisabledPrimary:f,borderPrimary:`1px solid ${f}`,borderHoverPrimary:`1px solid ${b}`,borderPressedPrimary:`1px solid ${m}`,borderFocusPrimary:`1px solid ${b}`,borderDisabledPrimary:`1px solid ${f}`,rippleColorPrimary:f,colorInfo:g,colorHoverInfo:y,colorPressedInfo:v,colorFocusInfo:y,colorDisabledInfo:g,textColorInfo:x,textColorHoverInfo:x,textColorPressedInfo:x,textColorFocusInfo:x,textColorDisabledInfo:x,textColorTextInfo:g,textColorTextHoverInfo:y,textColorTextPressedInfo:v,textColorTextFocusInfo:y,textColorTextDisabledInfo:u,textColorGhostInfo:g,textColorGhostHoverInfo:y,textColorGhostPressedInfo:v,textColorGhostFocusInfo:y,textColorGhostDisabledInfo:g,borderInfo:`1px solid ${g}`,borderHoverInfo:`1px solid ${y}`,borderPressedInfo:`1px solid ${v}`,borderFocusInfo:`1px solid ${y}`,borderDisabledInfo:`1px solid ${g}`,rippleColorInfo:g,colorSuccess:C,colorHoverSuccess:P,colorPressedSuccess:S,colorFocusSuccess:P,colorDisabledSuccess:C,textColorSuccess:x,textColorHoverSuccess:x,textColorPressedSuccess:x,textColorFocusSuccess:x,textColorDisabledSuccess:x,textColorTextSuccess:C,textColorTextHoverSuccess:P,textColorTextPressedSuccess:S,textColorTextFocusSuccess:P,textColorTextDisabledSuccess:u,textColorGhostSuccess:C,textColorGhostHoverSuccess:P,textColorGhostPressedSuccess:S,textColorGhostFocusSuccess:P,textColorGhostDisabledSuccess:C,borderSuccess:`1px solid ${C}`,borderHoverSuccess:`1px solid ${P}`,borderPressedSuccess:`1px solid ${S}`,borderFocusSuccess:`1px solid ${P}`,borderDisabledSuccess:`1px solid ${C}`,rippleColorSuccess:C,colorWarning:w,colorHoverWarning:T,colorPressedWarning:$,colorFocusWarning:T,colorDisabledWarning:w,textColorWarning:x,textColorHoverWarning:x,textColorPressedWarning:x,textColorFocusWarning:x,textColorDisabledWarning:x,textColorTextWarning:w,textColorTextHoverWarning:T,textColorTextPressedWarning:$,textColorTextFocusWarning:T,textColorTextDisabledWarning:u,textColorGhostWarning:w,textColorGhostHoverWarning:T,textColorGhostPressedWarning:$,textColorGhostFocusWarning:T,textColorGhostDisabledWarning:w,borderWarning:`1px solid ${w}`,borderHoverWarning:`1px solid ${T}`,borderPressedWarning:`1px solid ${$}`,borderFocusWarning:`1px solid ${T}`,borderDisabledWarning:`1px solid ${w}`,rippleColorWarning:w,colorError:D,colorHoverError:M,colorPressedError:F,colorFocusError:M,colorDisabledError:D,textColorError:x,textColorHoverError:x,textColorPressedError:x,textColorFocusError:x,textColorDisabledError:x,textColorTextError:D,textColorTextHoverError:M,textColorTextPressedError:F,textColorTextFocusError:M,textColorTextDisabledError:u,textColorGhostError:D,textColorGhostHoverError:M,textColorGhostPressedError:F,textColorGhostFocusError:M,textColorGhostDisabledError:D,borderError:`1px solid ${D}`,borderHoverError:`1px solid ${M}`,borderPressedError:`1px solid ${F}`,borderFocusError:`1px solid ${M}`,borderDisabledError:`1px solid ${D}`,rippleColorError:D,waveOpacity:"0.6",fontWeight:W,fontWeightStrong:E})}},se=x([c("button","\n margin: 0;\n font-weight: var(--n-font-weight);\n line-height: 1;\n font-family: inherit;\n padding: var(--n-padding);\n height: var(--n-height);\n font-size: var(--n-font-size);\n border-radius: var(--n-border-radius);\n color: var(--n-text-color);\n background-color: var(--n-color);\n width: var(--n-width);\n white-space: nowrap;\n outline: none;\n position: relative;\n z-index: auto;\n border: none;\n display: inline-flex;\n flex-wrap: nowrap;\n flex-shrink: 0;\n align-items: center;\n justify-content: center;\n user-select: none;\n -webkit-user-select: none;\n text-align: center;\n cursor: pointer;\n text-decoration: none;\n transition:\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n opacity .3s var(--n-bezier),\n border-color .3s var(--n-bezier);\n ",[P("color",[S("border",{borderColor:"var(--n-border-color)"}),P("disabled",[S("border",{borderColor:"var(--n-border-color-disabled)"})]),w("disabled",[x("&:focus",[S("state-border",{borderColor:"var(--n-border-color-focus)"})]),x("&:hover",[S("state-border",{borderColor:"var(--n-border-color-hover)"})]),x("&:active",[S("state-border",{borderColor:"var(--n-border-color-pressed)"})]),P("pressed",[S("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),P("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[S("border",{border:"var(--n-border-disabled)"})]),w("disabled",[x("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[S("state-border",{border:"var(--n-border-focus)"})]),x("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[S("state-border",{border:"var(--n-border-hover)"})]),x("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[S("state-border",{border:"var(--n-border-pressed)"})]),P("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[S("state-border",{border:"var(--n-border-pressed)"})])]),P("loading","cursor: wait;"),c("base-wave","\n pointer-events: none;\n top: 0;\n right: 0;\n bottom: 0;\n left: 0;\n animation-iteration-count: 1;\n animation-duration: var(--n-ripple-duration);\n animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);\n ",[P("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),y&&"MozBoxSizing"in document.createElement("div").style?x("&::moz-focus-inner",{border:0}):null,S("border, state-border","\n position: absolute;\n left: 0;\n top: 0;\n right: 0;\n bottom: 0;\n border-radius: inherit;\n transition: border-color .3s var(--n-bezier);\n pointer-events: none;\n "),S("border",{border:"var(--n-border)"}),S("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),S("icon","\n margin: var(--n-icon-margin);\n margin-left: 0;\n height: var(--n-icon-size);\n width: var(--n-icon-size);\n max-width: var(--n-icon-size);\n font-size: var(--n-icon-size);\n position: relative;\n flex-shrink: 0;\n ",[c("icon-slot","\n height: var(--n-icon-size);\n width: var(--n-icon-size);\n position: absolute;\n left: 0;\n top: 50%;\n transform: translateY(-50%);\n display: flex;\n align-items: center;\n justify-content: center;\n ",[T({top:"50%",originalTransform:"translateY(-50%)"})]),function({duration:e=".2s",delay:o=".1s"}={}){return[x("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),x("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from","\n opacity: 0!important;\n margin-left: 0!important;\n margin-right: 0!important;\n "),x("&.fade-in-width-expand-transition-leave-active",`\n overflow: hidden;\n transition:\n opacity ${e} ${ee},\n max-width ${e} ${ee} ${o},\n margin-left ${e} ${ee} ${o},\n margin-right ${e} ${ee} ${o};\n `),x("&.fade-in-width-expand-transition-enter-active",`\n overflow: hidden;\n transition:\n opacity ${e} ${ee} ${o},\n max-width ${e} ${ee},\n margin-left ${e} ${ee},\n margin-right ${e} ${ee};\n `)]}()]),S("content","\n display: flex;\n align-items: center;\n flex-wrap: nowrap;\n min-width: 0;\n ",[x("~",[S("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),P("block","\n display: flex;\n width: 100%;\n "),P("dashed",[S("border, state-border",{borderStyle:"dashed !important"})]),P("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),x("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),x("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),de=u({name:"Button",props:Object.assign(Object.assign({},$.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!re}}),setup(o){const t=m(null),n=m(null),a=m(!1),i=D((()=>!o.quaternary&&!o.tertiary&&!o.secondary&&!o.text&&(!o.color||o.ghost||o.dashed)&&o.bordered)),l=e(ae,{}),{mergedSizeRef:s}=Q({},{defaultSize:"medium",mergedSize:e=>{const{size:r}=o;if(r)return r;const{size:t}=l;if(t)return t;const{mergedSize:n}=e||{};return n?n.value:"medium"}}),d=r((()=>o.focusable&&!o.disabled)),{inlineThemeDisabled:c,mergedClsPrefixRef:u,mergedRtlRef:h}=M(o),b=$("Button","-button",se,le,o,u),p=F("Button",h,u),f=r((()=>{const e=b.value,{common:{cubicBezierEaseInOut:r,cubicBezierEaseOut:t},self:n}=e,{rippleDuration:a,opacityDisabled:i,fontWeight:l,fontWeightStrong:d}=n,c=s.value,{dashed:u,type:h,ghost:m,text:p,color:f,round:x,circle:g,textColor:y,secondary:v,tertiary:C,quaternary:P,strong:S}=o,w={"font-weight":S?d:l};let T={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const $="tertiary"===h,D="default"===h,M=$?"default":h;if(p){const e=y||f;T={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":e||n[E("textColorText",M)],"--n-text-color-hover":e?te(e):n[E("textColorTextHover",M)],"--n-text-color-pressed":e?ne(e):n[E("textColorTextPressed",M)],"--n-text-color-focus":e?te(e):n[E("textColorTextHover",M)],"--n-text-color-disabled":e||n[E("textColorTextDisabled",M)]}}else if(m||u){const e=y||f;T={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":f||n[E("rippleColor",M)],"--n-text-color":e||n[E("textColorGhost",M)],"--n-text-color-hover":e?te(e):n[E("textColorGhostHover",M)],"--n-text-color-pressed":e?ne(e):n[E("textColorGhostPressed",M)],"--n-text-color-focus":e?te(e):n[E("textColorGhostHover",M)],"--n-text-color-disabled":e||n[E("textColorGhostDisabled",M)]}}else if(v){const e=D?n.textColor:$?n.textColorTertiary:n[E("color",M)],o=f||e,r="default"!==h&&"tertiary"!==h;T={"--n-color":r?I(o,{alpha:Number(n.colorOpacitySecondary)}):n.colorSecondary,"--n-color-hover":r?I(o,{alpha:Number(n.colorOpacitySecondaryHover)}):n.colorSecondaryHover,"--n-color-pressed":r?I(o,{alpha:Number(n.colorOpacitySecondaryPressed)}):n.colorSecondaryPressed,"--n-color-focus":r?I(o,{alpha:Number(n.colorOpacitySecondaryHover)}):n.colorSecondaryHover,"--n-color-disabled":n.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":o,"--n-text-color-hover":o,"--n-text-color-pressed":o,"--n-text-color-focus":o,"--n-text-color-disabled":o}}else if(C||P){const e=D?n.textColor:$?n.textColorTertiary:n[E("color",M)],o=f||e;C?(T["--n-color"]=n.colorTertiary,T["--n-color-hover"]=n.colorTertiaryHover,T["--n-color-pressed"]=n.colorTertiaryPressed,T["--n-color-focus"]=n.colorSecondaryHover,T["--n-color-disabled"]=n.colorTertiary):(T["--n-color"]=n.colorQuaternary,T["--n-color-hover"]=n.colorQuaternaryHover,T["--n-color-pressed"]=n.colorQuaternaryPressed,T["--n-color-focus"]=n.colorQuaternaryHover,T["--n-color-disabled"]=n.colorQuaternary),T["--n-ripple-color"]="#0000",T["--n-text-color"]=o,T["--n-text-color-hover"]=o,T["--n-text-color-pressed"]=o,T["--n-text-color-focus"]=o,T["--n-text-color-disabled"]=o}else T={"--n-color":f||n[E("color",M)],"--n-color-hover":f?te(f):n[E("colorHover",M)],"--n-color-pressed":f?ne(f):n[E("colorPressed",M)],"--n-color-focus":f?te(f):n[E("colorFocus",M)],"--n-color-disabled":f||n[E("colorDisabled",M)],"--n-ripple-color":f||n[E("rippleColor",M)],"--n-text-color":y||(f?n.textColorPrimary:$?n.textColorTertiary:n[E("textColor",M)]),"--n-text-color-hover":y||(f?n.textColorHoverPrimary:n[E("textColorHover",M)]),"--n-text-color-pressed":y||(f?n.textColorPressedPrimary:n[E("textColorPressed",M)]),"--n-text-color-focus":y||(f?n.textColorFocusPrimary:n[E("textColorFocus",M)]),"--n-text-color-disabled":y||(f?n.textColorDisabledPrimary:n[E("textColorDisabled",M)])};let F={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};F=p?{"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:{"--n-border":n[E("border",M)],"--n-border-hover":n[E("borderHover",M)],"--n-border-pressed":n[E("borderPressed",M)],"--n-border-focus":n[E("borderFocus",M)],"--n-border-disabled":n[E("borderDisabled",M)]};const{[E("height",c)]:W,[E("fontSize",c)]:z,[E("padding",c)]:H,[E("paddingRound",c)]:k,[E("iconSize",c)]:B,[E("borderRadius",c)]:G,[E("iconMargin",c)]:R,waveOpacity:O}=n,j={"--n-width":g&&!p?W:"initial","--n-height":p?"initial":W,"--n-font-size":z,"--n-padding":g||p?"initial":x?k:H,"--n-icon-size":B,"--n-icon-margin":R,"--n-border-radius":p?"initial":g||x?W:G};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":r,"--n-bezier-ease-out":t,"--n-ripple-duration":a,"--n-opacity-disabled":i,"--n-wave-opacity":O},w),T),F),j)})),x=c?W("button",r((()=>{let e="";const{dashed:r,type:t,ghost:n,text:a,color:i,round:l,circle:d,textColor:c,secondary:u,tertiary:h,quaternary:b,strong:m}=o;r&&(e+="a"),n&&(e+="b"),a&&(e+="c"),l&&(e+="d"),d&&(e+="e"),u&&(e+="f"),h&&(e+="g"),b&&(e+="h"),m&&(e+="i"),i&&(e+="j"+q(i)),c&&(e+="k"+q(c));const{value:p}=s;return e+="l"+p[0],e+="m"+t[0],e})),f,o):void 0;return{selfElRef:t,waveElRef:n,mergedClsPrefix:u,mergedFocusable:d,mergedSize:s,showBorder:i,enterPressed:a,rtlEnabled:p,handleMousedown:e=>{var r;d.value||e.preventDefault(),o.nativeFocusBehavior||(e.preventDefault(),o.disabled||d.value&&(null===(r=t.value)||void 0===r||r.focus({preventScroll:!0})))},handleKeydown:e=>{if("Enter"===e.key){if(!o.keyboard||o.loading)return void e.preventDefault();a.value=!0}},handleBlur:()=>{a.value=!1},handleKeyup:e=>{if("Enter"===e.key){if(!o.keyboard)return;a.value=!1}},handleClick:e=>{var r;if(!o.disabled&&!o.loading){const{onClick:t}=o;t&&R(t,e),o.text||null===(r=n.value)||void 0===r||r.play()}},customColorCssVars:r((()=>{const{color:e}=o;if(!e)return null;const r=te(e);return{"--n-border-color":e,"--n-border-color-hover":r,"--n-border-color-pressed":ne(e),"--n-border-color-focus":r,"--n-border-color-disabled":e}})),cssVars:c?void 0:f,themeClass:null==x?void 0:x.themeClass,onRender:null==x?void 0:x.onRender}},render(){const{mergedClsPrefix:e,tag:o,onRender:r}=this;null==r||r();const t=B(this.$slots.default,(o=>o&&f("span",{class:`${e}-button__content`},o)));return f(o,{ref:"selfElRef",class:[this.themeClass,`${e}-button`,`${e}-button--${this.type}-type`,`${e}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${e}-button--rtl`,this.disabled&&`${e}-button--disabled`,this.block&&`${e}-button--block`,this.enterPressed&&`${e}-button--pressed`,!this.text&&this.dashed&&`${e}-button--dashed`,this.color&&`${e}-button--color`,this.secondary&&`${e}-button--secondary`,this.loading&&`${e}-button--loading`,this.ghost&&`${e}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},"right"===this.iconPlacement&&t,f(z,{width:!0},{default:()=>B(this.$slots.icon,(o=>(this.loading||this.renderIcon||o)&&f("span",{class:`${e}-button__icon`,style:{margin:G(this.$slots.default)?"0":""}},f(H,null,{default:()=>this.loading?f(k,{clsPrefix:e,key:"loading",class:`${e}-icon-slot`,strokeWidth:20}):f("div",{key:"icon",class:`${e}-icon-slot`,role:"none"},this.renderIcon?this.renderIcon():o)}))))}),"left"===this.iconPlacement&&t,this.text?null:f(Z,{ref:"waveElRef",clsPrefix:e}),this.showBorder?f("div",{"aria-hidden":!0,class:`${e}-button__border`,style:this.customColorCssVars}):null,this.showBorder?f("div",{"aria-hidden":!0,class:`${e}-button__state-border`,style:this.customColorCssVars}):null)}});export{de as _,le as a,ae as b,q as c,O as d,Q as e,L as f,A as g,N as h,re as i,j as p,K as u};
