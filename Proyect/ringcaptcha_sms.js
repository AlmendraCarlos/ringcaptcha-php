//<script>
var Ringcaptcha = (function() {
    var RingcaptchaTemplates = {};
    RingcaptchaTemplates.PhoneHtml = '<div id="ringcaptcha"> <span id="ringcaptcha_brand_logo"></span> <span id="ringcaptcha_title"></span> <div id="ringcaptcha_phone_container"> <div id="ringcaptcha_country_selector"> <div id="ringcaptcha_country_flag"></div> <div id="ringcaptcha_country_code"></div><input type="hidden" id="ringcaptcha_country_code_o" value=""> </div> <div id="ringcaptcha_country_dropdown"></div> <input id="ringcaptcha_user_phone" name="ringcaptcha_user_phone" type="text" autocomplete="off" autocorrect="off" autocapitalize="off" /> </div> <a id="ringcaptcha_verify_button" href="#"></a> <span id="ringcaptcha_instruction"></span> </div>';
    RingcaptchaTemplates.PinHtml = '<div id="ringcaptcha"> <span id="ringcaptcha_brand_logo"></span> <span id="ringcaptcha_title"></span> <div id="ringcaptcha_pin_container"> <input id="ringcaptcha_pin_code" name="ringcaptcha_pin_code" type="text" autocomplete="off" autocorrect="off" autocapitalize="off" /> </div> <div id="ringcaptcha_toolbar"> <a id="ringcaptcha_help_button" href="javascript:void(0)"></a> <a id="ringcaptcha_reload_button" href="#"></a> <div id="ringcaptcha_timer"></div> </div> <div class="clear"></div> <div id="ringcaptcha_pin_instruction"><div id="ringcaptcha_enterpin"></div></div><span id="ringcaptcha_help_text"></span> </div>';
    RingcaptchaTemplates.ErrorHtml = '<div id="ringcaptcha"><span id="ringcaptcha_brand_logo"></span><div id="ringcaptcha_err_icon"><span id="ringcaptcha_err_message"></span></div></div>';
    RingcaptchaTemplates.AllCss = '.ringcaptcha_reload_disabled{background-image:url(IMGROOT/refresh-disabled.png) !important; background-color:#E7E7E7 !important; border:1px solid DADADA !important; } /* Mini Css Reset */ html body #ringcaptcha div, html body #ringcaptcha span, html body #ringcaptcha applet, html body #ringcaptcha object, html body #ringcaptcha p, html body #ringcaptcha a, html body #ringcaptcha em, html body #ringcaptcha img, html body #ringcaptcha label, html body #ringcaptcha embed {-webkit-box-sizing:content-box; -moz-box-sizing:content-box; box-sizing:content-box; margin:0; padding:0; border:0; font-size:12px; font-weight:normal; font-family:arial,helvetica,sans-serif; vertical-align:baseline; line-height:1.2; background:transparent; -moz-border-radius: 4px; -webkit-border-radius: 4px; -khtml-border-radius: 4px; border-radius: 4px; } html body #ringcaptcha :focus {outline:none; } html body #ringcaptcha input {-webkit-box-sizing:content-box; -moz-box-sizing:content-box; box-sizing:content-box; } #ringcaptcha {float:left; border:1px solid #EAEAEA; margin:0; padding:0; background:#FFF; width:400px; height:146px; font-family:arial,helvetica,sans-serif; text-align:left; -moz-border-radius: 4px; -webkit-border-radius: 4px; -khtml-border-radius: 4px; border-radius: 4px; -moz-box-shadow: inset 0px 1px 0px #d5d5d5; box-shadow: inset 0px 1px 0px #d5d5d5; -webkit-box-shadow: inset 0px 1px 0px #d5d5d5; } #ringcaptcha_brand_logo {display:block; margin:7px 0 0 295px !important; width:96px; height:21px; background:url(IMGLABEL/ringcaptcha_logo.gif) no-repeat !important; } #ringcaptcha_title {display:block; font-size:13px !important; font-weight:bold !important; margin-left:10px !important; margin-top: 7px !important; color:#2F2F2F; } /*- modificaciones Ale -*/ #ringcaptcha_title a.helptxt{display: inline-block; text-decoration: none; color:#a7a7a7; font-size:10px; font-weight:normal; margin:0 0 3px 7px; vertical-align: middle !important;} #ringcaptcha_title a.helptxt:hover{color:#333 } #ringcaptcha_title a.helptxtex{margin:1px 0 0 0; width:125px; text-align:right;} #ringcaptcha_title a.helptxterr{color: red; }/*-----*/ #ringcaptcha_instruction {float:left; display:block; margin:11px 0 0 10px !important; width:315px; color:#2F2F2F; font-size:11px !important; } #ringcaptcha_phone_container {float:left; display:inline-block; height:28px; width:308px; margin:4px 0 0 10px !important; background:white !important; border:1px solid #C0C0C0 !important; } #ringcaptcha_country_selector {float:left; display:inline-block; padding:2px 0 0 5px !important; height:26px; width:75px; background:url(IMGROOT/arrow-down-icon.png) center right no-repeat !important; cursor:pointer; } #ringcaptcha_country_flag {display:inline-block; float:left; height:24px; width:24px; background-image:url(IMGROOT/ringcaptcha-country-flag-24.png) !important; } #ringcaptcha #ringcaptcha_country_code {display:inline-block; float:left; padding:4px 3px; height:17px; width:29px; font-size:14px; } #ringcaptcha_phone_container input[type="text"]:hover {width:222px; height:28px; -moz-box-shadow:inset 0px 0px 5px rgba(0,0,0,0.20); box-shadow:inset 0px 0px 5px rgba(0,0,0,0.20); -webkit-box-shadow:inset 0px 0px 5px rgba(0,0,0,0.20); } #ringcaptcha_phone_container input[type="text"]:focus {outline:none; border:1px solid #4D90FE !important; width:221px; height:26px; -moz-box-shadow:inset 0px 0px 5px rgba(0,0,0,0.20); box-shadow:inset 0px 0px 5px rgba(0,0,0,0.20); -webkit-box-shadow:inset 0px 0px 5px rgba(0,0,0,0.20); } #ringcaptcha_phone_container input[type="text"] {margin:0; padding:0; border:none; width:222px; height:28px; padding-left:5px; font-size:13px; background:#FFF; -moz-border-radius:0 4px 4px 0; -webkit-border-radius:0 4px 4px 0; -khtml-border-radius:0 4px 4px 0; border-radius:0 4px 4px 0; border-left: 1px solid #C0C0C0 !important;} #ringcaptcha_user_phone.error {border:1px solid #DD4B39; height:28px !important; color:#DD4B39; } #ringcaptcha_country_selector:hover {background-color:#EEE !important; } #ringcaptcha_verify_button {float:left; display:inline-block; background:#5F5F5F !important; border:1px solid #393939 !important; color:#FFF; text-decoration:none; height:21px; width:62px; font-weight:bold !important; padding:7px 0 0 0 !important; text-align:center; margin:4px 0 0 7px !important; text-shadow:1px 1px 0px #393939; filter:dropshadow(color=#393939, offx=1, offy=1); } #ringcaptcha_verify_button:hover {border:1px #CECECE solid !important; background-color: #E1E1E1 !important; color:#3282E6 !important; text-shadow:1px 1px 0px white; filter:dropshadow(color=#fff, offx=1, offy=1); } #ringcaptcha_verify_button:active {text-decoration:underline; } #ringcaptcha_help_text {float:left; display:block; margin:5px 0 0 10px !important; color:#2F2F2F; font-size:10px !important; width:360px; }  #ringcaptcha #ringcaptcha_pin_container {float:left; display:inline-block; height:40px; width:344px; margin:4px 0 0 10px !important; background:#E7E7E7 !important; -moz-border-radius: 0; -webkit-border-radius: 0; -khtml-border-radius: 0; border-radius: 0; } #ringcaptcha_pin_container input[type="text"]{margin:6px 10px; padding:0 0 0 5px; width:317px; height:26px; background:#FFF; border:1px #c0c0c0 solid; -moz-border-radius:4px; -webkit-border-radius:4px; -khtml-border-radius:4px; border-radius:4px; } #ringcaptcha_pin_container input[type="text"]:hover {width:317px; height:26px; border:1px #c0c0c0 solid; -moz-box-shadow:inset 0px 0px 5px rgba(0,0,0,0.20); box-shadow:inset 0px 0px 5px rgba(0,0,0,0.20); -webkit-box-shadow:inset 0px 0px 5px rgba(0,0,0,0.20); } #ringcaptcha_pin_container input[type="text"]:focus {outline:none; border:1px solid #4D90FE; width:317px; height:26px; -moz-box-shadow:inset 0px 0px 5px rgba(0,0,0,0.20); box-shadow:inset 0px 0px 5px rgba(0,0,0,0.20); -webkit-box-shadow:inset 0px 0px 5px rgba(0,0,0,0.20); } #ringcaptcha_toolbar {float:left; height:40px; width:20px; margin:7px 0 0 10px !important; } #ringcaptcha_help_button {display:block; width:17px; height:17px; border:1px #414141 solid !important; margin:0 0 2px 0 !important; background:#5F5F5F url(IMGROOT/help.png) center center no-repeat !important; } #ringcaptcha_reload_button {display:none; width:17px; height:17px; border:1px #414141 solid !important; margin:0 0 2px 0 !important; background:#5F5F5F url(IMGROOT/refresh.png) center center no-repeat !important; } #ringcaptcha_reload_button.ringcaptcha_reload_disabled {background-image:url(IMGROOT/refresh-disabled.png) !important; background-color:#E7E7E7 !important; border:1px solid #DADADA !important; } #ringcaptcha_reload_bubble {position:absolute; display:none; -moz-border-radius:5px; -webkit-border-radius:5px; -khtml-border-radius:5px; border-radius:5px; border:1px solid #CCC !important; padding:5px !important; width:70px; box-shadow:2px 2px 5px rgba(0,0,0,0.10); -moz-box-shadow:2px 2px 5px rgba(0,0,0,0.10); -webkit-box-shadow:2px 2px 5px rgba(0,0,0,0.10); background:#FFF !important; margin:-15px 0 0 15px !important; text-align:center; z-index:99999; } #ringcaptcha_timer {display:block; width:17px; height:14px; border:1px #DADADA solid !important; margin:0 0 2px 0 !important; padding:3px 0 0 0 !important; font-size:11px !important; text-align:center; line-height:1 !important; background:#E7E7E7 !important; } #ringcaptcha_help_button:hover, #ringcaptcha_reload_button:hover {background-color:#323232; border:1px #000 solid; } #ringcaptcha_country_dropdown {position:absolute; display:none; margin:28px 0 0 -1px !important; padding:0; border:1px solid #CCC !important; width:308px; height:150px; background:#FFF !important; overflow:auto; } #ringcaptcha #ringcaptcha_country_dropdown input[type="text"] {border: 1px solid #CCCCCC; border-radius: 4px 4px 4px 4px; color: #666666; display:block; float:none; height:27px; margin:7px auto; padding:0 5px; width: 90%; } #ringcaptcha #ringcaptcha_country_dropdown input[type="text"]:focus {outline:none; border:1px solid #4D90FE; -moz-box-shadow:inset 0px 0px 5px rgba(0,0,0,0.20); box-shadow:inset 0px 0px 5px rgba(0,0,0,0.20); -webkit-box-shadow:inset 0px 0px 5px rgba(0,0,0,0.20); } #ringcaptcha #ringcaptcha_country_dropdown a:focus{background-color: #eee;} #ringcaptcha_err_icon {float:left; width:26px; height:26px; margin:20px 0 0 50px !important; background-image:url(IMGROOT/widget_errors.gif) !important; background-repeat:no-repeat !important; } #ringcaptcha_err_message {float:left; display:block; margin:0 0 0 40px !important; width:300px; font-size:13px !important; font-weight:bold !important; } #ringcaptcha_err_try_again {float:left; display:block; margin:0 0 0 40px !important; min-width:60px; color:#000; text-decoration:none; } #ringcaptcha_err_try_again:hover {text-decoration:underline; } .ringcaptcha_country {display:block; height:24px; margin:2px 0 !important; padding:0 0 0 10px !important; text-decoration:none; } .ringcaptcha_country:hover {background-color:#EEE !important; text-decoration:none !important; } .ringcaptcha_iso_code {display:none; } .ringcaptcha_country_name {display:inline-block; height:24px; padding:0 0 0 30px !important; font-size:13px !important; color:#444; line-height:2 !important; background-image:url(IMGROOT/ringcaptcha-country-flag-24.png) !important; background-repeat:no-repeat !important; } .ringcaptcha_country_code {font-size:13px !important; margin:0 0 0 5px !important; padding: 6px 0 0 0 !important; color:#666; } .ringcaptcha_country_separator {border-top:1px solid #EBEBEB !important; margin:4px 0 5px 0 !important; } .ringcaptcha-err-invalid_site {background-position:-0px -0px !important; } .ringcaptcha-err-invalid_session {background-position:-0px -26px !important; } /* Estilos para thin-scroll similar chrome */ #ringcaptcha ::-webkit-scrollbar {width: 15px; } #ringcaptcha ::-webkit-scrollbar-thumb {-webkit-box-shadow:inset 0 0 99px rgba(0,0,0,.2); border:solid transparent; border-width:6px 4px; } #ringcaptcha ::-webkit-scrollbar-thumb:vertical{min-height:40px; } #ringcaptcha ::-webkit-scrollbar-thumb:hover {-webkit-box-shadow:inset 0 0 99px rgba(0,0,0,.4); } #ringcaptcha #ringcaptcha_pin_instruction{width: 344px; display: block; margin: -3px 0px 0px 10px; text-align:center; padding:0px;} #ringcaptcha #ringcaptcha_enterpin{ margin:auto; color:#FFF; background:#777777; -moz-border-radius: 0 0 4px 4px; -webkit-border-radius: 0 0 4px 4px; -khtml-border-radius: 0 0 4px 4px; border-radius: 0 0 4px 4px; width:280px; padding:3px 7px; font-size:11px; position:relative; background: -moz-linear-gradient(top, #777777 0%, #616161 100%); /* FF3.6+ */ background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #777777), color-stop(100%, #616161)); /* Chrome,Safari4+ */ background: -webkit-linear-gradient(top, #777777 0%, #616161 100%); /* Chrome10+,Safari5.1+ */ background: -o-linear-gradient(top, #777777 0%, #616161 100%); /* Opera 11.10+ */ background: -ms-linear-gradient(top, #777777 0%, #616161 100%); /* IE10+ */ background: linear-gradient(top, #777777 0%, #616161 100%); /* W3C */ filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#777777", endColorstr="#616161", GradientType=0 ); /* IE6-9 */ } .clear{clear:both;}',
    RingcaptchaTemplates.CountryCSS = '.ringcaptcha-country-flag-zw{background-position:0px 0px !important;}.ringcaptcha-country-flag-zm{background-position:0px -24px !important;}.ringcaptcha-country-flag-za{background-position:0px -48px !important;}.ringcaptcha-country-flag-yt{background-position:0px -72px !important;}.ringcaptcha-country-flag-ye{background-position:0px -96px !important;}.ringcaptcha-country-flag-ws{background-position:0px -120px !important;}.ringcaptcha-country-flag-wf{background-position:0px -144px !important;}.ringcaptcha-country-flag-vu{background-position:0px -168px !important;}.ringcaptcha-country-flag-vn{background-position:0px -192px !important;}.ringcaptcha-country-flag-vi{background-position:0px -216px !important;}.ringcaptcha-country-flag-vg{background-position:0px -240px !important;}.ringcaptcha-country-flag-ve{background-position:0px -264px !important;}.ringcaptcha-country-flag-vc{background-position:0px -288px !important;}.ringcaptcha-country-flag-va{background-position:0px -312px !important;}.ringcaptcha-country-flag-uz{background-position:0px -336px !important;}.ringcaptcha-country-flag-uy{background-position:0px -360px !important;}.ringcaptcha-country-flag-us{background-position:0px -384px !important;}.ringcaptcha-country-flag-um{background-position:0px -408px !important;}.ringcaptcha-country-flag-ug{background-position:0px -432px !important;}.ringcaptcha-country-flag-ua{background-position:0px -456px !important;}.ringcaptcha-country-flag-tz{background-position:0px -480px !important;}.ringcaptcha-country-flag-tw{background-position:0px -504px !important;}.ringcaptcha-country-flag-tv{background-position:0px -528px !important;}.ringcaptcha-country-flag-tt{background-position:0px -552px !important;}.ringcaptcha-country-flag-tr{background-position:0px -576px !important;}.ringcaptcha-country-flag-to{background-position:0px -600px !important;}.ringcaptcha-country-flag-tn{background-position:0px -624px !important;}.ringcaptcha-country-flag-tm{background-position:0px -648px !important;}.ringcaptcha-country-flag-tl{background-position:0px -672px !important;}.ringcaptcha-country-flag-tk{background-position:0px -696px !important;}.ringcaptcha-country-flag-tj{background-position:0px -720px !important;}.ringcaptcha-country-flag-th{background-position:0px -744px !important;}.ringcaptcha-country-flag-tg{background-position:0px -768px !important;}.ringcaptcha-country-flag-tf{background-position:0px -792px !important;}.ringcaptcha-country-flag-td{background-position:0px -816px !important;}.ringcaptcha-country-flag-tc{background-position:0px -840px !important;}.ringcaptcha-country-flag-sz{background-position:0px -864px !important;}.ringcaptcha-country-flag-sy{background-position:0px -888px !important;}.ringcaptcha-country-flag-sw{background-position:0px -912px !important;}.ringcaptcha-country-flag-sv{background-position:0px -936px !important;}.ringcaptcha-country-flag-st{background-position:0px -960px !important;}.ringcaptcha-country-flag-ss{background-position:0px -984px !important;}.ringcaptcha-country-flag-sr{background-position:0px -1008px !important;}.ringcaptcha-country-flag-so{background-position:0px -1032px !important;}.ringcaptcha-country-flag-sn{background-position:0px -1056px !important;}.ringcaptcha-country-flag-sm{background-position:0px -1080px !important;}.ringcaptcha-country-flag-sl{background-position:0px -1104px !important;}.ringcaptcha-country-flag-sk{background-position:0px -1128px !important;}.ringcaptcha-country-flag-sj{background-position:0px -1152px !important;}.ringcaptcha-country-flag-si{background-position:0px -1176px !important;}.ringcaptcha-country-flag-sh{background-position:0px -1200px !important;}.ringcaptcha-country-flag-sg{background-position:0px -1224px !important;}.ringcaptcha-country-flag-se{background-position:0px -1248px !important;}.ringcaptcha-country-flag-sd{background-position:0px -1272px !important;}.ringcaptcha-country-flag-sc{background-position:0px -1296px !important;}.ringcaptcha-country-flag-sb{background-position:0px -1320px !important;}.ringcaptcha-country-flag-sa{background-position:0px -1344px !important;}.ringcaptcha-country-flag-rw{background-position:0px -1368px !important;}.ringcaptcha-country-flag-ru{background-position:0px -1392px !important;}.ringcaptcha-country-flag-rs{background-position:0px -1416px !important;}.ringcaptcha-country-flag-ro{background-position:0px -1440px !important;}.ringcaptcha-country-flag-re{background-position:0px -1464px !important;}.ringcaptcha-country-flag-qa{background-position:0px -1488px !important;}.ringcaptcha-country-flag-py{background-position:0px -1512px !important;}.ringcaptcha-country-flag-pw{background-position:0px -1536px !important;}.ringcaptcha-country-flag-pt{background-position:0px -1560px !important;}.ringcaptcha-country-flag-ps{background-position:0px -1584px !important;}.ringcaptcha-country-flag-pr{background-position:0px -1608px !important;}.ringcaptcha-country-flag-pn{background-position:0px -1632px !important;}.ringcaptcha-country-flag-pm{background-position:0px -1656px !important;}.ringcaptcha-country-flag-pl{background-position:0px -1680px !important;}.ringcaptcha-country-flag-pk{background-position:0px -1704px !important;}.ringcaptcha-country-flag-ph{background-position:0px -1728px !important;}.ringcaptcha-country-flag-pg{background-position:0px -1752px !important;}.ringcaptcha-country-flag-pf{background-position:0px -1776px !important;}.ringcaptcha-country-flag-pe{background-position:0px -1800px !important;}.ringcaptcha-country-flag-pa{background-position:0px -1824px !important;}.ringcaptcha-country-flag-om{background-position:0px -1848px !important;}.ringcaptcha-country-flag-nz{background-position:0px -1872px !important;}.ringcaptcha-country-flag-nu{background-position:0px -1896px !important;}.ringcaptcha-country-flag-nr{background-position:0px -1920px !important;}.ringcaptcha-country-flag-np{background-position:0px -1944px !important;}.ringcaptcha-country-flag-no{background-position:0px -1968px !important;}.ringcaptcha-country-flag-nl{background-position:0px -1992px !important;}.ringcaptcha-country-flag-ni{background-position:0px -2016px !important;}.ringcaptcha-country-flag-ng{background-position:0px -2040px !important;}.ringcaptcha-country-flag-nf{background-position:0px -2064px !important;}.ringcaptcha-country-flag-ne{background-position:0px -2088px !important;}.ringcaptcha-country-flag-nc{background-position:0px -2112px !important;}.ringcaptcha-country-flag-na{background-position:0px -2136px !important;}.ringcaptcha-country-flag-mz{background-position:0px -2160px !important;}.ringcaptcha-country-flag-my{background-position:0px -2184px !important;}.ringcaptcha-country-flag-mx{background-position:0px -2208px !important;}.ringcaptcha-country-flag-mw{background-position:0px -2232px !important;}.ringcaptcha-country-flag-mv{background-position:0px -2256px !important;}.ringcaptcha-country-flag-mu{background-position:0px -2280px !important;}.ringcaptcha-country-flag-mt{background-position:0px -2304px !important;}.ringcaptcha-country-flag-ms{background-position:0px -2328px !important;}.ringcaptcha-country-flag-mr{background-position:0px -2352px !important;}.ringcaptcha-country-flag-mq{background-position:0px -2376px !important;}.ringcaptcha-country-flag-mp{background-position:0px -2400px !important;}.ringcaptcha-country-flag-mo{background-position:0px -2424px !important;}.ringcaptcha-country-flag-mn{background-position:0px -2448px !important;}.ringcaptcha-country-flag-mm{background-position:0px -2472px !important;}.ringcaptcha-country-flag-ml{background-position:0px -2496px !important;}.ringcaptcha-country-flag-mk{background-position:0px -2520px !important;}.ringcaptcha-country-flag-mh{background-position:0px -2544px !important;}.ringcaptcha-country-flag-mg{background-position:0px -2568px !important;}.ringcaptcha-country-flag-mf{background-position:0px -2592px !important;}.ringcaptcha-country-flag-me{background-position:0px -2616px !important;}.ringcaptcha-country-flag-md{background-position:0px -2640px !important;}.ringcaptcha-country-flag-mc{background-position:0px -2664px !important;}.ringcaptcha-country-flag-ma{background-position:0px -2688px !important;}.ringcaptcha-country-flag-ly{background-position:0px -2712px !important;}.ringcaptcha-country-flag-lv{background-position:0px -2736px !important;}.ringcaptcha-country-flag-lu{background-position:0px -2760px !important;}.ringcaptcha-country-flag-lt{background-position:0px -2784px !important;}.ringcaptcha-country-flag-ls{background-position:0px -2808px !important;}.ringcaptcha-country-flag-lr{background-position:0px -2832px !important;}.ringcaptcha-country-flag-lk{background-position:0px -2856px !important;}.ringcaptcha-country-flag-li{background-position:0px -2880px !important;}.ringcaptcha-country-flag-lc{background-position:0px -2904px !important;}.ringcaptcha-country-flag-lb{background-position:0px -2928px !important;}.ringcaptcha-country-flag-la{background-position:0px -2952px !important;}.ringcaptcha-country-flag-kz{background-position:0px -2976px !important;}.ringcaptcha-country-flag-ky{background-position:0px -3000px !important;}.ringcaptcha-country-flag-kw{background-position:0px -3024px !important;}.ringcaptcha-country-flag-kr{background-position:0px -3048px !important;}.ringcaptcha-country-flag-kp{background-position:0px -3072px !important;}.ringcaptcha-country-flag-kn{background-position:0px -3096px !important;}.ringcaptcha-country-flag-km{background-position:0px -3120px !important;}.ringcaptcha-country-flag-ki{background-position:0px -3144px !important;}.ringcaptcha-country-flag-kh{background-position:0px -3168px !important;}.ringcaptcha-country-flag-kg{background-position:0px -3192px !important;}.ringcaptcha-country-flag-ke{background-position:0px -3216px !important;}.ringcaptcha-country-flag-jp{background-position:0px -3240px !important;}.ringcaptcha-country-flag-jo{background-position:0px -3264px !important;}.ringcaptcha-country-flag-jm{background-position:0px -3288px !important;}.ringcaptcha-country-flag-je{background-position:0px -3312px !important;}.ringcaptcha-country-flag-it{background-position:0px -3336px !important;}.ringcaptcha-country-flag-is{background-position:0px -3360px !important;}.ringcaptcha-country-flag-ir{background-position:0px -3384px !important;}.ringcaptcha-country-flag-iq{background-position:0px -3408px !important;}.ringcaptcha-country-flag-io{background-position:0px -3432px !important;}.ringcaptcha-country-flag-in{background-position:0px -3456px !important;}.ringcaptcha-country-flag-im{background-position:0px -3480px !important;}.ringcaptcha-country-flag-il{background-position:0px -3504px !important;}.ringcaptcha-country-flag-ie{background-position:0px -3528px !important;}.ringcaptcha-country-flag-id{background-position:0px -3552px !important;}.ringcaptcha-country-flag-hu{background-position:0px -3576px !important;}.ringcaptcha-country-flag-ht{background-position:0px -3600px !important;}.ringcaptcha-country-flag-hr{background-position:0px -3624px !important;}.ringcaptcha-country-flag-hn{background-position:0px -3648px !important;}.ringcaptcha-country-flag-hm{background-position:0px -3672px !important;}.ringcaptcha-country-flag-hk{background-position:0px -3696px !important;}.ringcaptcha-country-flag-gy{background-position:0px -3720px !important;}.ringcaptcha-country-flag-gw{background-position:0px -3744px !important;}.ringcaptcha-country-flag-gu{background-position:0px -3768px !important;}.ringcaptcha-country-flag-gt{background-position:0px -3792px !important;}.ringcaptcha-country-flag-gs{background-position:0px -3816px !important;}.ringcaptcha-country-flag-gr{background-position:0px -3840px !important;}.ringcaptcha-country-flag-gq{background-position:0px -3864px !important;}.ringcaptcha-country-flag-gp{background-position:0px -3888px !important;}.ringcaptcha-country-flag-gn{background-position:0px -3912px !important;}.ringcaptcha-country-flag-gm{background-position:0px -3936px !important;}.ringcaptcha-country-flag-gl{background-position:0px -3960px !important;}.ringcaptcha-country-flag-gi{background-position:0px -3984px !important;}.ringcaptcha-country-flag-gh{background-position:0px -4008px !important;}.ringcaptcha-country-flag-gg{background-position:0px -4032px !important;}.ringcaptcha-country-flag-gf{background-position:0px -4056px !important;}.ringcaptcha-country-flag-ge{background-position:0px -4080px !important;}.ringcaptcha-country-flag-gd{background-position:0px -4104px !important;}.ringcaptcha-country-flag-gb{background-position:0px -4128px !important;}.ringcaptcha-country-flag-ga{background-position:0px -4152px !important;}.ringcaptcha-country-flag-fr{background-position:0px -4176px !important;}.ringcaptcha-country-flag-fo{background-position:0px -4200px !important;}.ringcaptcha-country-flag-fm{background-position:0px -4224px !important;}.ringcaptcha-country-flag-fk{background-position:0px -4248px !important;}.ringcaptcha-country-flag-fj{background-position:0px -4272px !important;}.ringcaptcha-country-flag-fi{background-position:0px -4296px !important;}.ringcaptcha-country-flag-et{background-position:0px -4320px !important;}.ringcaptcha-country-flag-es{background-position:0px -4344px !important;}.ringcaptcha-country-flag-er{background-position:0px -4368px !important;}.ringcaptcha-country-flag-eh{background-position:0px -4392px !important;}.ringcaptcha-country-flag-eg{background-position:0px -4416px !important;}.ringcaptcha-country-flag-ee{background-position:0px -4440px !important;}.ringcaptcha-country-flag-ec{background-position:0px -4464px !important;}.ringcaptcha-country-flag-dz{background-position:0px -4488px !important;}.ringcaptcha-country-flag-do{background-position:0px -4512px !important;}.ringcaptcha-country-flag-dm{background-position:0px -4536px !important;}.ringcaptcha-country-flag-dk{background-position:0px -4560px !important;}.ringcaptcha-country-flag-dj{background-position:0px -4584px !important;}.ringcaptcha-country-flag-de{background-position:0px -4608px !important;}.ringcaptcha-country-flag-cz{background-position:0px -4632px !important;}.ringcaptcha-country-flag-cy{background-position:0px -4656px !important;}.ringcaptcha-country-flag-cx{background-position:0px -4680px !important;}.ringcaptcha-country-flag-cw{background-position:0px -4704px !important;}.ringcaptcha-country-flag-cv{background-position:0px -4728px !important;}.ringcaptcha-country-flag-cu{background-position:0px -4752px !important;}.ringcaptcha-country-flag-cr{background-position:0px -4776px !important;}.ringcaptcha-country-flag-co{background-position:0px -4800px !important;}.ringcaptcha-country-flag-cn{background-position:0px -4824px !important;}.ringcaptcha-country-flag-cm{background-position:0px -4848px !important;}.ringcaptcha-country-flag-cl{background-position:0px -4872px !important;}.ringcaptcha-country-flag-ck{background-position:0px -4896px !important;}.ringcaptcha-country-flag-ci{background-position:0px -4920px !important;}.ringcaptcha-country-flag-ch{background-position:0px -4944px !important;}.ringcaptcha-country-flag-cg{background-position:0px -4968px !important;}.ringcaptcha-country-flag-cf{background-position:0px -4992px !important;}.ringcaptcha-country-flag-cd{background-position:0px -5016px !important;}.ringcaptcha-country-flag-cc{background-position:0px -5040px !important;}.ringcaptcha-country-flag-ca{background-position:0px -5064px !important;}.ringcaptcha-country-flag-bz{background-position:0px -5088px !important;}.ringcaptcha-country-flag-by{background-position:0px -5112px !important;}.ringcaptcha-country-flag-bw{background-position:0px -5136px !important;}.ringcaptcha-country-flag-bv{background-position:0px -5160px !important;}.ringcaptcha-country-flag-bt{background-position:0px -5184px !important;}.ringcaptcha-country-flag-bs{background-position:0px -5208px !important;}.ringcaptcha-country-flag-br{background-position:0px -5232px !important;}.ringcaptcha-country-flag-bo{background-position:0px -5256px !important;}.ringcaptcha-country-flag-bn{background-position:0px -5280px !important;}.ringcaptcha-country-flag-bm{background-position:0px -5304px !important;}.ringcaptcha-country-flag-bl{background-position:0px -5328px !important;}.ringcaptcha-country-flag-bj{background-position:0px -5352px !important;}.ringcaptcha-country-flag-bi{background-position:0px -5376px !important;}.ringcaptcha-country-flag-bh{background-position:0px -5400px !important;}.ringcaptcha-country-flag-bg{background-position:0px -5424px !important;}.ringcaptcha-country-flag-bf{background-position:0px -5448px !important;}.ringcaptcha-country-flag-be{background-position:0px -5472px !important;}.ringcaptcha-country-flag-bd{background-position:0px -5496px !important;}.ringcaptcha-country-flag-bb{background-position:0px -5520px !important;}.ringcaptcha-country-flag-ba{background-position:0px -5544px !important;}.ringcaptcha-country-flag-az{background-position:0px -5568px !important;}.ringcaptcha-country-flag-ax{background-position:0px -5592px !important;}.ringcaptcha-country-flag-aw{background-position:0px -5616px !important;}.ringcaptcha-country-flag-au{background-position:0px -5640px !important;}.ringcaptcha-country-flag-at{background-position:0px -5664px !important;}.ringcaptcha-country-flag-as{background-position:0px -5688px !important;}.ringcaptcha-country-flag-ar{background-position:0px -5712px !important;}.ringcaptcha-country-flag-aq{background-position:0px -5736px !important;}.ringcaptcha-country-flag-ao{background-position:0px -5760px !important;}.ringcaptcha-country-flag-an{background-position:0px -5784px !important;}.ringcaptcha-country-flag-am{background-position:0px -5808px !important;}.ringcaptcha-country-flag-al{background-position:0px -5832px !important;}.ringcaptcha-country-flag-ai{background-position:0px -5856px !important;}.ringcaptcha-country-flag-ag{background-position:0px -5880px !important;}.ringcaptcha-country-flag-af{background-position:0px -5904px !important;}.ringcaptcha-country-flag-ae{background-position:0px -5928px !important;}.ringcaptcha-country-flag-ad{background-position:0px -5952px !important;}',
    RingcaptchaCountries = [{
        name: 'Afghanistan', 
        code: '+93', 
        iso: 'AF'
    },{
        name: 'Albania', 
        code: '+355', 
        iso: 'AL'
    },{
        name: 'Algeria', 
        code: '+213', 
        iso: 'DZ'
    },{
        name: 'American Samoa', 
        code: '+1684', 
        iso: 'AS'
    },{
        name: 'Andorra', 
        code: '+376', 
        iso: 'AD'
    },{
        name: 'Angola', 
        code: '+244', 
        iso: 'AO'
    },{
        name: 'Anguilla', 
        code: '+1264', 
        iso: 'AI'
    },{
        name: 'Antarctic Territories', 
        code: '+672', 
        iso: 'AQ'
    },{
        name: 'Antigua &amp; Barbuda', 
        code: '+1268', 
        iso: 'AG'
    },{
        name: 'Antilles', 
        code: '+599', 
        iso: 'AN'
    },{
        name: 'Argentina', 
        code: '+54', 
        iso: 'AR'
    },{
        name: 'Armenia', 
        code: '+374', 
        iso: 'AM'
    },{
        name: 'Aruba', 
        code: '+297', 
        iso: 'AW'
    },{
        name: 'Australia', 
        code: '+61', 
        iso: 'AU'
    },{
        name: 'Austria', 
        code: '+43', 
        iso: 'AT'
    },{
        name: 'Azerbaijan', 
        code: '+994', 
        iso: 'AZ'
    },{
        name: 'Bahamas', 
        code: '+1242', 
        iso: 'BS'
    },{
        name: 'Bahrain', 
        code: '+973', 
        iso: 'BH'
    },{
        name: 'Bangladesh', 
        code: '+880', 
        iso: 'BD'
    },{
        name: 'Barbados', 
        code: '+1246', 
        iso: 'BB'
    },{
        name: 'Belarus', 
        code: '+375', 
        iso: 'BY'
    },{
        name: 'Belgium', 
        code: '+32', 
        iso: 'BE'
    },{
        name: 'Belize', 
        code: '+501', 
        iso: 'BZ'
    },{
        name: 'Benin', 
        code: '+229', 
        iso: 'BJ'
    },{
        name: 'Bermuda', 
        code: '+1441', 
        iso: 'BM'
    },{
        name: 'Bhutan', 
        code: '+975', 
        iso: 'BT'
    },{
        name: 'Bolivia', 
        code: '+591', 
        iso: 'BO'
    },{
        name: 'Bosnia &amp; H.', 
        code: '+387', 
        iso: 'BA'
    },{
        name: 'Botswana', 
        code: '+267', 
        iso: 'BW'
    },{
        name: 'Brazil', 
        code: '+55', 
        iso: 'BR'
    },{
        name: 'Brunei', 
        code: '+673', 
        iso: 'BN'
    },{
        name: 'Bulgaria', 
        code: '+359', 
        iso: 'BG'
    },{
        name: 'Burkina Faso', 
        code: '+226', 
        iso: 'BF'
    },{
        name: 'Burundi', 
        code: '+257', 
        iso: 'BI'
    },{
        name: 'Cambodia', 
        code: '+855', 
        iso: 'KH'
    },{
        name: 'Cameroon', 
        code: '+237', 
        iso: 'CM'
    },{
        name: 'Canada', 
        code: '+1', 
        iso: 'CA'
    },{
        name: 'Cape Verde Island', 
        code: '+238', 
        iso: 'CV'
    },{
        name: 'Cayman Islands', 
        code: '+1345', 
        iso: 'KY'
    },{
        name: 'Central African Rep.', 
        code: '+236', 
        iso: 'CF'
    },{
        name: 'Chad', 
        code: '+235', 
        iso: 'TD'
    },{
        name: 'Chile', 
        code: '+56', 
        iso: 'CL'
    },{
        name: 'China', 
        code: '+86', 
        iso: 'CN'
    },{
        name: 'Colombia', 
        code: '+57', 
        iso: 'CO'
    },{
        name: 'Comoros', 
        code: '+269', 
        iso: 'KM'
    },{
        name: 'Cook Islands', 
        code: '+682', 
        iso: 'CK'
    },{
        name: 'Costa Rica', 
        code: '+506', 
        iso: 'CR'
    },{
        name: 'Cote D&#039;Ivoire', 
        code: '+225', 
        iso: 'CI'
    },{
        name: 'Croatia', 
        code: '+385', 
        iso: 'HR'
    },{
        name: 'Cuba', 
        code: '+53', 
        iso: 'CU'
    },{
        name: 'Cyprus South', 
        code: '+357', 
        iso: 'CY'
    },{
        name: 'Czech Republic', 
        code: '+420', 
        iso: 'CZ'
    },{
        name: 'Dem Rep Congo', 
        code: '+243', 
        iso: 'CD'
    },{
        name: 'Denmark', 
        code: '+45', 
        iso: 'DK'
    },{
        name: 'Diego Garcia', 
        code: '+246', 
        iso: 'IO'
    },{
        name: 'Djibouti', 
        code: '+253', 
        iso: 'DJ'
    },{
        name: 'Dominica', 
        code: '+1767', 
        iso: 'DM'
    },{
        name: 'Ecuador', 
        code: '+593', 
        iso: 'EC'
    },{
        name: 'Egypt', 
        code: '+20', 
        iso: 'EG'
    },{
        name: 'El Salvador', 
        code: '+503', 
        iso: 'SV'
    },{
        name: 'Equatorial Guinea', 
        code: '+240', 
        iso: 'GQ'
    },{
        name: 'Eritrea', 
        code: '+291', 
        iso: 'ER'
    },{
        name: 'Estonia', 
        code: '+372', 
        iso: 'EE'
    },{
        name: 'Ethiopia', 
        code: '+251', 
        iso: 'ET'
    },{
        name: 'Faeroe Islands', 
        code: '+298', 
        iso: 'FO'
    },{
        name: 'Falkland Islands', 
        code: '+500', 
        iso: 'FK'
    },{
        name: 'Fiji', 
        code: '+679', 
        iso: 'FJ'
    },{
        name: 'Finland', 
        code: '+358', 
        iso: 'FI'
    },{
        name: 'France', 
        code: '+33', 
        iso: 'FR'
    },{
        name: 'French Guiana', 
        code: '+594', 
        iso: 'GF'
    },{
        name: 'French Polynesia', 
        code: '+689', 
        iso: 'PF'
    },{
        name: 'Gabon', 
        code: '+241', 
        iso: 'GA'
    },{
        name: 'Gambia', 
        code: '+220', 
        iso: 'GM'
    },{
        name: 'Georgia', 
        code: '+995', 
        iso: 'GE'
    },{
        name: 'Germany', 
        code: '+49', 
        iso: 'DE'
    },{
        name: 'Ghana', 
        code: '+233', 
        iso: 'GH'
    },{
        name: 'Gibraltar', 
        code: '+350', 
        iso: 'GI'
    },{
        name: 'Greece', 
        code: '+30', 
        iso: 'GR'
    },{
        name: 'Greenland', 
        code: '+299', 
        iso: 'GL'
    },{
        name: 'Grenada', 
        code: '+1473', 
        iso: 'GD'
    },{
        name: 'Guam', 
        code: '+1671', 
        iso: 'GU'
    },{
        name: 'Guatemala', 
        code: '+502', 
        iso: 'GT'
    },{
        name: 'Guinea', 
        code: '+224', 
        iso: 'GN'
    },{
        name: 'Guyana', 
        code: '+592', 
        iso: 'GY'
    },{
        name: 'Haiti', 
        code: '+509', 
        iso: 'HT'
    },{
        name: 'Honduras', 
        code: '+504', 
        iso: 'HN'
    },{
        name: 'Hong Kong', 
        code: '+852', 
        iso: 'HK'
    },{
        name: 'Hungary', 
        code: '+36', 
        iso: 'HU'
    },{
        name: 'Iceland', 
        code: '+354', 
        iso: 'IS'
    },{
        name: 'India', 
        code: '+91', 
        iso: 'IN'
    },{
        name: 'Indonesia', 
        code: '+62', 
        iso: 'ID'
    },{
        name: 'Iran', 
        code: '+98', 
        iso: 'IR'
    },{
        name: 'Iraq', 
        code: '+964', 
        iso: 'IQ'
    },{
        name: 'Ireland', 
        code: '+353', 
        iso: 'IE'
    },{
        name: 'Israel', 
        code: '+972', 
        iso: 'IL'
    },{
        name: 'Italy', 
        code: '+39', 
        iso: 'IT'
    },{
        name: 'Jamaica', 
        code: '+1876', 
        iso: 'JM'
    },{
        name: 'Japan', 
        code: '+81', 
        iso: 'JP'
    },{
        name: 'Jordan', 
        code: '+962', 
        iso: 'JO'
    },{
        name: 'Kazakhstan', 
        code: '+77', 
        iso: 'KZ'
    },{
        name: 'Kenya', 
        code: '+254', 
        iso: 'KE'
    },{
        name: 'Kiribati', 
        code: '+686', 
        iso: 'KI'
    },{
        name: 'Korea North', 
        code: '+850', 
        iso: 'KP'
    },{
        name: 'Korea South', 
        code: '+82', 
        iso: 'KR'
    },{
        name: 'Kuwait', 
        code: '+965', 
        iso: 'KW'
    },{
        name: 'Laos', 
        code: '+856', 
        iso: 'LA'
    },{
        name: 'Latvia', 
        code: '+371', 
        iso: 'LV'
    },{
        name: 'Lebanon', 
        code: '+961', 
        iso: 'LB'
    },{
        name: 'Lesotho', 
        code: '+266', 
        iso: 'LS'
    },{
        name: 'Liberia', 
        code: '+231', 
        iso: 'LR'
    },{
        name: 'Libya', 
        code: '+218', 
        iso: 'LY'
    },{
        name: 'Liechtenstein', 
        code: '+423', 
        iso: 'LI'
    },{
        name: 'Lithuania', 
        code: '+370', 
        iso: 'LT'
    },{
        name: 'Luxembourg', 
        code: '+352', 
        iso: 'LU'
    },{
        name: 'Macao', 
        code: '+853', 
        iso: 'MO'
    },{
        name: 'Macedonia', 
        code: '+389', 
        iso: 'MK'
    },{
        name: 'Madagascar', 
        code: '+261', 
        iso: 'MG'
    },{
        name: 'Malawi', 
        code: '+265', 
        iso: 'MW'
    },{
        name: 'Malaysia', 
        code: '+60', 
        iso: 'MY'
    },{
        name: 'Maldives', 
        code: '+960', 
        iso: 'MV'
    },{
        name: 'Mali', 
        code: '+223', 
        iso: 'ML'
    },{
        name: 'Malta', 
        code: '+356', 
        iso: 'MT'
    },{
        name: 'Marshall Islands', 
        code: '+692', 
        iso: 'MH'
    },{
        name: 'Martinique', 
        code: '+596', 
        iso: 'MQ'
    },{
        name: 'Mauritania', 
        code: '+222', 
        iso: 'MR'
    },{
        name: 'Mauritius', 
        code: '+230', 
        iso: 'MU'
    },{
        name: 'Mayotte', 
        code: '+262', 
        iso: 'YT'
    },{
        name: 'Mexico', 
        code: '+52', 
        iso: 'MX'
    },{
        name: 'Micronesia', 
        code: '+691', 
        iso: 'FM'
    },{
        name: 'Moldova', 
        code: '+373', 
        iso: 'MD'
    },{
        name: 'Monaco', 
        code: '+377', 
        iso: 'MC'
    },{
        name: 'Mongolia', 
        code: '+976', 
        iso: 'MN'
    },{
        name: 'Montserrat', 
        code: '+1664', 
        iso: 'MS'
    },{
        name: 'Morocco', 
        code: '+212', 
        iso: 'MA'
    },{
        name: 'Mozambique', 
        code: '+258', 
        iso: 'MZ'
    },{
        name: 'Myanmar', 
        code: '+95', 
        iso: 'MM'
    },{
        name: 'Namibia', 
        code: '+264', 
        iso: 'NA'
    },{
        name: 'Nauru', 
        code: '+674', 
        iso: 'NR'
    },{
        name: 'Nepal', 
        code: '+977', 
        iso: 'NP'
    },{
        name: 'Netherlands', 
        code: '+31', 
        iso: 'NL'
    },{
        name: 'New Caledonia', 
        code: '+687', 
        iso: 'NC'
    },{
        name: 'New Zealand', 
        code: '+64', 
        iso: 'NZ'
    },{
        name: 'Nicaragua', 
        code: '+505', 
        iso: 'NI'
    },{
        name: 'Niger', 
        code: '+227', 
        iso: 'NE'
    },{
        name: 'Niue', 
        code: '+683', 
        iso: 'NU'
    },{
        name: 'Norfolk Islands', 
        code: '+6723', 
        iso: 'NF'
    },{
        name: 'Northern Marianas', 
        code: '+1670', 
        iso: 'MP'
    },{
        name: 'Norway', 
        code: '+47', 
        iso: 'NO'
    },{
        name: 'Oman', 
        code: '+968', 
        iso: 'OM'
    },{
        name: 'Pakistan', 
        code: '+92', 
        iso: 'PK'
    },{
        name: 'Palau', 
        code: '+680', 
        iso: 'PW'
    },{
        name: 'Palestine', 
        code: '+970', 
        iso: 'PS'
    },{
        name: 'Panama', 
        code: '+507', 
        iso: 'PA'
    },{
        name: 'Papua New Guinea', 
        code: '+675', 
        iso: 'PG'
    },{
        name: 'Paraguay', 
        code: '+595', 
        iso: 'PY'
    },{
        name: 'Peru', 
        code: '+51', 
        iso: 'PE'
    },{
        name: 'Philippines', 
        code: '+63', 
        iso: 'PH'
    },{
        name: 'Poland', 
        code: '+48', 
        iso: 'PL'
    },{
        name: 'Portugal', 
        code: '+351', 
        iso: 'PT'
    },{
        name: 'Puerto Rico', 
        code: '+1787', 
        iso: 'PR'
    },{
        name: 'Qatar', 
        code: '+974', 
        iso: 'QA'
    },{
        name: 'Reunion', 
        code: '+262', 
        iso: 'RE'
    },{
        name: 'Romania', 
        code: '+40', 
        iso: 'RO'
    },{
        name: 'Russia', 
        code: '+7', 
        iso: 'RU'
    },{
        name: 'Rwanda', 
        code: '+250', 
        iso: 'RW'
    },{
        name: 'San Marino', 
        code: '+378', 
        iso: 'SM'
    },{
        name: 'Sao Tome &amp; Principe', 
        code: '+239', 
        iso: 'ST'
    },{
        name: 'Saudi Arabia', 
        code: '+966', 
        iso: 'SA'
    },{
        name: 'Senegal', 
        code: '+221', 
        iso: 'SN'
    },{
        name: 'Serbia', 
        code: '+381', 
        iso: 'RS'
    },{
        name: 'Seychelles', 
        code: '+248', 
        iso: 'SC'
    },{
        name: 'Sierra Leone', 
        code: '+232', 
        iso: 'SL'
    },{
        name: 'Singapore', 
        code: '+65', 
        iso: 'SG'
    },{
        name: 'Slovak Rep', 
        code: '+421', 
        iso: 'SK'
    },{
        name: 'Slovenia', 
        code: '+386', 
        iso: 'SI'
    },{
        name: 'Solomon Islands', 
        code: '+677', 
        iso: 'SB'
    },{
        name: 'Somalia', 
        code: '+252', 
        iso: 'SO'
    },{
        name: 'South Africa', 
        code: '+27', 
        iso: 'ZA'
    },{
        name: 'Spain', 
        code: '+34', 
        iso: 'ES'
    },{
        name: 'Sri Lanka', 
        code: '+94', 
        iso: 'LK'
    },{
        name: 'St. Helena', 
        code: '+290', 
        iso: 'SH'
    },{
        name: 'St. Kitts &amp; Nevis', 
        code: '+1869', 
        iso: 'KN'
    },{
        name: 'St. Lucia', 
        code: '+1758', 
        iso: 'LC'
    },{
        name: 'St. Pierre &amp; Miquelon', 
        code: '+508', 
        iso: 'PM'
    },{
        name: 'Sudan', 
        code: '+249', 
        iso: 'SD'
    },{
        name: 'Suriname', 
        code: '+597', 
        iso: 'SR'
    },{
        name: 'Swaziland', 
        code: '+268', 
        iso: 'SZ'
    },{
        name: 'Sweden', 
        code: '+46', 
        iso: 'SE'
    },{
        name: 'Switzerland', 
        code: '+41', 
        iso: 'CH'
    },{
        name: 'Syria', 
        code: '+963', 
        iso: 'SY'
    },{
        name: 'Taiwan', 
        code: '+886', 
        iso: 'TW'
    },{
        name: 'Tajikstan', 
        code: '+992', 
        iso: 'TJ'
    },{
        name: 'Tanzania', 
        code: '+255', 
        iso: 'TZ'
    },{
        name: 'Thailand', 
        code: '+66', 
        iso: 'TH'
    },{
        name: 'Togo', 
        code: '+228', 
        iso: 'TG'
    },{
        name: 'Tokelau', 
        code: '+690', 
        iso: 'TK'
    },{
        name: 'Tonga', 
        code: '+676', 
        iso: 'TO'
    },{
        name: 'Trinidad &amp; Tobago', 
        code: '+1868', 
        iso: 'TT'
    },{
        name: 'Tunisia', 
        code: '+216', 
        iso: 'TN'
    },{
        name: 'Turkey', 
        code: '+90', 
        iso: 'TR'
    },{
        name: 'Turkmenistan', 
        code: '+993', 
        iso: 'TM'
    },{
        name: 'Turks &amp; Caicos', 
        code: '+1649', 
        iso: 'TC'
    },{
        name: 'Tuvalu', 
        code: '+688', 
        iso: 'TV'
    },{
        name: 'Uganda', 
        code: '+256', 
        iso: 'UG'
    },{
        name: 'UK', 
        code: '+44', 
        iso: 'GB'
    },{
        name: 'Ukraine', 
        code: '+380', 
        iso: 'UA'
    },{
        name: 'United Arab Emirates', 
        code: '+971', 
        iso: 'AE'
    },{
        name: 'Uruguay', 
        code: '+598', 
        iso: 'UY'
    },{
        name: 'USA', 
        code: '+1', 
        iso: 'US'
    },{
        name: 'Uzbekistan', 
        code: '+998', 
        iso: 'UZ'
    },{
        name: 'Vanuatu', 
        code: '+678', 
        iso: 'VU'
    },{
        name: 'Venezuela', 
        code: '+58', 
        iso: 'VE'
    },{
        name: 'Vietnam', 
        code: '+84', 
        iso: 'VN'
    },{
        name: 'Virgin Islands GB', 
        code: '+1284', 
        iso: 'VG'
    },{
        name: 'Virgin Islands USA', 
        code: '+1340', 
        iso: 'VI'
    },{
        name: 'Wallis &amp; Futuna', 
        code: '+681', 
        iso: 'WF'
    },{
        name: 'Western Samoa', 
        code: '+685', 
        iso: 'WS'
    },{
        name: 'Yemen', 
        code: '+967', 
        iso: 'YE'
    },{
        name: 'Zambia', 
        code: '+260', 
        iso: 'ZM'
    },{
        name: 'Zimbabwe', 
        code: '+263', 
        iso: 'ZW'
    }];
    var exampleArray = {
        'AF': '023 456 7890', 
        'AX': '018 12345678', 
        'AL': '022 345 678', 
        'DZ': '012 34 56 78', 
        'AS': '(684) 622-1234', 
        'AD': '712 345', 
        'AO': '222 123 456', 
        'AI': '(264) 461-2345', 
        'AG': '(268) 460-1234', 
        'AR': '011 2345-6789', 
        'AM': '(010) 123456', 
        'AW': '521 2345', 
        'AC': '6889', 
        'AU': '(02) 1234 5678', 
        'AT': '01 234567890', 
        'AZ': '(012) 312 34 56', 
        'BS': '(242) 345-6789', 
        'BH': '1700 1234', 
        'BD': '02-7111234', 
        'BB': '(246) 234-5678', 
        'BY': '8 015 245 0911', 
        'BE': '012 34 56 78', 
        'BZ': '222-1234', 
        'BJ': '20 21 12 34', 
        'BM': '(441) 234-5678', 
        'BT': '2 345 678', 
        'BO': '2 2123456', 
        'BA': '030 123-456', 
        'BW': '240 1234', 
        'BR': '(11) 2345-6789', 
        'IO': '370 9100', 
        'VG': '(284) 229-1234', 
        'BN': '234 5678', 
        'BG': '02 123 456', 
        'BF': '20 49 12 34', 
        'BI': '22 20 12 34', 
        'KH': '023 456 789', 
        'CM': '22 12 34 56', 
        'CA': '(204) 234-5678', 
        'CV': '221 12 34', 
        'BQ': '715 1234', 
        'KY': '(345) 222-1234', 
        'CF': '21 61 23 45', 
        'TD': '22 50 12 34', 
        'CL': '(2) 2123 4567', 
        'CN': '010 1234 5678', 
        'CX': '(08) 9164 1234', 
        'CC': '(08) 9162 1234', 
        'CO': '(1) 2345678', 
        'KM': '771 23 45', 
        'CD': '012 34567', 
        'CG': '22 212 3456', 
        'CK': '21 234', 
        'CR': '2212 3456', 
        'CI': '21 23 45 67', 
        'HR': '01 2345 678', 
        'CU': '(07) 1234567', 
        'CW': '9 415 1234', 
        'CY': '22 345678', 
        'CZ': '212 345 678', 
        'DK': '32 12 34 56', 
        'DJ': '21 36 00 03', 
        'DM': '(767) 420-1234', 
        'DO': '(809) 234-5678', 
        'EC': '(02) 212-3456', 
        'EG': '02 34567890', 
        'SV': '2123 4567', 
        'GQ': '333 091 234', 
        'ER': '08 370 362', 
        'EE': '321 2345', 
        'ET': '011 111 2345', 
        'FK': '31234', 
        'FO': '201234', 
        'FJ': '321 2345', 
        'FI': '013 12345678', 
        'FR': '01 23 45 67 89', 
        'GF': '0594 10 12 34', 
        'PF': '40 12 34', 
        'GA': '01 44 12 34', 
        'GM': '566 1234', 
        'GE': '8 322 12 34 56', 
        'DE': '030 123456', 
        'GH': '030 234 5678', 
        'GI': '20012345', 
        'GR': '21 2345 6789', 
        'GL': '32 10 00', 
        'GD': '(473) 269-1234', 
        'GP': '0590 20-1234', 
        'GU': '(671) 300-1234', 
        'GT': '2245 6789', 
        'GG': '01481 456789', 
        'GN': '30 24 12 34', 
        'GW': '320 1234', 
        'GY': '220 1234', 
        'HT': '22 45 3300', 
        'HN': '2212-3456', 
        'HK': '2123 4567', 
        'HU': '(1) 234 5678', 
        'IS': '410 1234', 
        'IN': '011 2345 6789', 
        'ID': '(061) 2345678', 
        'IR': '021 2345 6789', 
        'IQ': '01 234 5678', 
        'IE': '(022) 12345', 
        'IM': '01624 456789', 
        'IL': '02-123-4567', 
        'IT': '02 1234 5678', 
        'JM': '(876) 512-3456', 
        'JE': '01534 456789', 
        'JO': '(06) 200 1234', 
        'KZ': '8 (712) 345 6789', 
        'KE': '020 2012345', 
        'KI': '31234', 
        'KW': '2234 5678', 
        'KG': '0312 123 456', 
        'LA': '021 212 862', 
        'LV': '63 123 456', 
        'LB': '01 123 456', 
        'LS': '2212 3456', 
        'LR': '021 234 567', 
        'LY': '021-2345678', 
        'LI': '234 56 78', 
        'LT': '(8-312) 34567', 
        'LU': '27 12 34 56', 
        'MO': '2821 2345', 
        'MK': '02 221 2345', 
        'MG': '020 21 234 56', 
        'MW': '01 234 567', 
        'MY': '03-2345 6789', 
        'MV': '670-1234', 
        'ML': '20 21 23 45', 
        'MT': '2100 1234', 
        'MH': '247-1234', 
        'MQ': '0596 30 12 34', 
        'MR': '35 12 34 56', 
        'MU': '201 2345', 
        'YT': '0269 60 12 34', 
        'MX': '01 222 123 4567', 
        'FM': '320 1234', 
        'MD': '022 212 345', 
        'MC': '99 12 34 56', 
        'MN': '5012 3456', 
        'ME': '030 234 567', 
        'MS': '(664) 491-2345', 
        'MA': '0520-123456', 
        'MZ': '21 123 456', 
        'MM': '01 234 567', 
        'NA': '061 201 2345', 
        'NR': '444 1234', 
        'NP': '01-4567890', 
        'NL': '010 123 4567', 
        'NC': '20.12.34', 
        'NZ': '03-234 5678', 
        'NI': '2123 4567', 
        'NE': '20 20 12 34', 
        'NG': '01 234 5678', 
        'NU': '4002', 
        'NF': '10 6609', 
        'MP': '(670) 234-5678', 
        'KP': '02 123 4567', 
        'NO': '21 23 45 67', 
        'OM': '23 123456', 
        'PK': '(021) 23456789', 
        'PW': '277 1234', 
        'PS': '02 223 4567', 
        'PA': '200-1234', 
        'PG': '312 3456', 
        'PY': '(21) 2345678', 
        'PE': '(01) 1234567', 
        'PH': '(02) 123 4567', 
        'PL': '12 345 67 89', 
        'PT': '212 345 678', 
        'PR': '(787) 234-5678', 
        'QA': '4412 3456', 
        'RE': '0262 16 12 34', 
        'RO': '021 123 4567', 
        'RU': '8 (301) 123-45-67', 
        'RW': '250 123 456', 
        'BL': '0590 27-1234', 
        'SH': '2158', 
        'KN': '(869) 236-1234', 
        'LC': '(758) 234-5678', 
        'MF': '0590 27-1234', 
        'PM': '041 12 34', 
        'VC': '(784) 266-1234', 
        'WS': '22123', 
        'SM': '0549 886377', 
        'ST': '222 1234', 
        'SA': '01 234 5678', 
        'SN': '30 101 23 45', 
        'RS': '010 234567', 
        'SC': '4 217 123', 
        'SL': '(022) 221234', 
        'SG': '6123 4567', 
        'SX': '(721) 542-5678', 
        'SK': '02\x2F123 456 78', 
        'SI': '(01) 123 45 67', 
        'SB': '40123', 
        'SO': '5 522010', 
        'ZA': '010 123 4567', 
        'KR': '02-212-3456', 
        'SS': '0181 234 567', 
        'ES': '810 12 34 56', 
        'LK': '011 2 345678', 
        'SD': '012 123 1234', 
        'SR': '211-234', 
        'SJ': '79 12 34 56', 
        'SZ': '2217 1234', 
        'SE': '08-12 34 56', 
        'CH': '021 234 56 78', 
        'SY': '011 234 5678', 
        'TW': '02 123 4567', 
        'TJ': '(8) 372 12 3456', 
        'TZ': '022 234 5678', 
        'TH': '02 123 4567', 
        'TL': '211 2345', 
        'TG': '22 21 23 45', 
        'TK': '3010', 
        'TO': '20-123', 
        'TT': '(868) 221-1234', 
        'TN': '71 234 567', 
        'TR': '(0212) 345 6789', 
        'TM': '(8 12) 34-56-78', 
        'TC': '(649) 712-1234', 
        'TV': '20123', 
        'VI': '(340) 642-1234', 
        'UG': '031 2345678', 
        'UA': '03112 34567', 
        'AE': '02 234 5678', 
        'GB': '0121 234 5678', 
        'US': '(201) 555-0123', 
        'UY': '2123 1234', 
        'UZ': '8 66 234 56 78', 
        'VU': '22123', 
        'VA': '06 6981 2345', 
        'VE': '0212-1234567', 
        'VN': '0210 1234 567', 
        'WF': '50 12 34', 
        'EH': '05288-12345', 
        'YE': '01 234 567', 
        'ZM': '021 1234567', 
        'ZW': '013 12345'
    };  var RingcaptchaStr_en = {
        title: 'Confirm your mobile phone',
        description: 'Please select your country code (e.g. 1 for US/Canada) and enter your mobile number without any special characters ( - \'/ #).',
        invalid_phone: 'Please type a valid phone number',
        invalid_phone_length: 'Your phone number length is invalid',
        invalid_country: 'Invalid country code not supported',
        verify_button: 'Verify',
        search_text: 'Type to search',
        title2: 'Enter a PIN code below to confirm your mobile phone',
        description2: 'A PIN code was sent to: ',
        help_text: 'If you entered a wrong number or need a new pin code please try again',
        help_button: 'Show help',
        try_again_button: 'Try again',
        pin_instruction: 'Enter this PIN code above to confirm your mobile phone.',
        error_invalid_site_key: 'Error. Invalid site key.',
        error_invalid_service: 'Error. Invalid service.',
        error_invalid_session: 'Error. Your sessión has expired.',
        error_invalid_domain: 'Error. Invalid domain.',
        error_max_attempts_reached: 'Error. You\'ve reached the max attempts for verifying a phone number',
        session_failed: 'Opps.. We couldn´t verify your mobile phone, please try again later.',
        error_out_of_credit: 'Opps.. We couldn´t verify your mobile phone, please try again later.',
        duplicated_number: 'The phone number you have entered is already in use'
    },
    RingcaptchaStr_es = {
        title: 'Confirma tu tel\u00E9fono m\u00F3vil',    
        description: 'Selecciona tu c\u00F3digo de pa\u00EDs (por ej. 1 para USA/Canad\u00E1) e ingresa tu n\u00FAmero sin ning\u00FAn caracter especial ( - \'/ #).',
        invalid_phone: 'Ingresa un n\u00FAmero v\u00E1lido',
        invalid_phone_length: 'Your phone number length is invalid',
        invalid_country: 'Invalid country code not supported',
        verify_button: 'Verificar',
        search_text: 'Buscar pa\u00EDs',
        title2: 'Ingresa el PIN debajo para confirmar tu n\u00FAmero',
        description2: 'Recibir\u00E1s un SMS con un PIN al: ',
        help_text: 'Si ingresaste un n\u00FAmero equivocado o necesitas otro c\u00F3digo, por favor intenta nuevamente',
        help_button: 'Ayuda',
        try_again_button: 'Reintentar',
        pin_instruction: 'Ingresa el c\u00F3digo arriba para verificar tu tel\u00E9fono m\u00F3vil.',
        error_invalid_site_key: 'Error. Site key inv\u00E1lida.',
        error_invalid_service: 'Error. Servicio no v\u00E1lido.',
        error_invalid_session: 'Error. Tu sesi\u00F3n ha expirado.',
        error_invalid_domain: 'Error. Dominio no v\u00E1lido.',
        error_max_attempts_reached: 'Error. You\'ve reached the max attempts for verifying a phone number',
        session_failed: 'Opps.. No hemos podido verificar tu n\u00FAmero, por favor intenta m\u00E1s tarde.',
        error_out_of_credit: 'Opps.. No hemos podido verificar tu n\u00FAmero, por favor intenta m\u00E1s tarde.',
        duplicated_number: 'El n\u00FAmero que has ingresado ya fue utilizado previamente'
    },
    RingcaptchaStr_fr = {
        title: 'Confirmez votre téléphone mobile',
        description: 'S\'il vous plaît sélectionner votre code du pays (par exemple 1 pour US / Canada) et entrez votre numéro de téléphone mobile sans caractères spéciaux (- \'/ #).',
        invalid_phone: 'S\'il vous plaît entrez un numéro de téléphone valide',
        invalid_phone_length: 'Votre téléphone longueur du numéro est invalide',
        invalid_country: 'Invalide code pays non pris en charge',
        verify_button: 'vérifier',
        search_text: 'Tapez à la recherche',
        title2: 'Entrez un code PIN ci-dessous pour valider votre téléphone mobile',
        description2: 'Un code PIN a été envoyé à: ',
        help_text: 'Si vous avez entré un mauvais numéro ou besoin d\'un nouveau code PIN veuillez réessayer plus',
        help_button: 'Afficher l\'aide',
        try_again_button: 'Essayez à nouveau',
        pin_instruction: 'Entrez ce code PIN ci-dessus pour confirmer votre téléphone mobile.',
        error_invalid_site_key: 'Erreur. Clé du site invalide.',
        error_invalid_service: 'Erreur. service non valide.',
        error_invalid_session: 'Erreur. Votre session a expiré',
        error_invalid_domain: 'Erreur. domaine non valide.',
        error_max_attempts_reached: 'Erreur. Vous avez atteint le nombre maximum d\'essais pour vérifier un numéro de téléphone',
        session_failed: 'Oops .. Nous n\'avons pas pu vérifier votre téléphone mobile, veuillez réessayer plus tard.',
        error_out_of_credit: 'Oops .. Nous n\'avons pas pu vérifier votre téléphone mobile, veuillez réessayer plus tard.',
        duplicated_number: 'Le numéro de téléphone que vous avez entré est déjà utilisé'
    },
     RingcaptchaStr_pt = {
        title: 'Confirme o seu telemóvel',
        description: 'Selecione o código do país (por exemplo, 1 para EUA / Canadá) e digite o número do seu celular sem quaisquer caracteres especiais (- \'/ #).',
        invalid_phone: 'Por favor, digite um número de telefone válido',
        invalid_phone_length: 'O seu telefone comprimento número é inválido',
        invalid_country: 'Inválido código de país não são suportados',
        verify_button: 'verificar',
        search_text: 'Tipo para pesquisar',
        title2: 'Introduza um código PIN abaixo para confirmar seu telemóvel',
        description2: 'Um código PIN foi enviado para: ',
        help_text: 'Se você digitou o número errado ou precisa de um novo código PIN, por favor tente novamente',
        help_button: 'Mostrar ajuda',
        try_again_button: 'tente novamente',
        pin_instruction: 'Digite o código PIN acima para confirmar o seu celular.',
        error_invalid_site_key: 'Erro. Chave do site inválido.',
        error_invalid_service: 'Erro. Inválido serviço.',
        error_invalid_session: 'Erro. Sua sessão expirou.',
        error_invalid_domain: 'Erro. domínio inválido.',
        error_max_attempts_reached: 'Erro. You \'ve chegou às tentativas máximo para a verificação de um número de telefone',
        session_failed: 'Opps .. Nós não poderia verificar o seu telemóvel, por favor, tente novamente mais tarde.',
        error_out_of_credit: 'Opps .. Nós não poderia verificar o seu telemóvel, por favor, tente novamente mais tarde.',
        duplicated_number: 'O número de telefone que você digitou já está em uso'
    },
    RingcaptchaStr_it = {
        title: 'Conferma il tuo cellulare',
        description: 'Si prega di selezionare il codice del paese (ad esempio, 1 per USA / Canada) e inserire il numero di cellulare senza caratteri speciali ( - \'/ #).',
        invalid_phone: 'Si prega di digitare un numero di telefono valido',
        invalid_phone_length: 'Il telefono lunghezza numero non è valido',
        invalid_country: 'Non valido codice del paese non supportato',
        verify_button: 'Verifica',
        search_text: 'Tipo da cercare',
        title2: 'Inserire un codice PIN di seguito per confermare il tuo cellulare',
        description2: 'Un codice PIN è stato inviato a: ',
        help_text: 'Se è stato immesso un numero sbagliato o bisogno di un nuovo codice pin riprova',
        help_button: 'Mostra help',
        try_again_button: 'riprovare',
        pin_instruction: 'Inserisci questo codice PIN sopra per confermare il tuo cellulare.',
        error_invalid_site_key: 'Errore. Chiave del sito non valido.',
        error_invalid_service: 'Errore. Non valido servizio.',
        error_invalid_session: 'Errore. La sessione è scaduta.',
        error_invalid_domain: 'Errore. dominio non valido.',
        error_max_attempts_reached: 'Errore. Si \'ve raggiunto i tentativi massimi per la verifica di un numero di telefono',
        session_failed: 'Opps .. Non abbiamo potuto verificare il tuo telefono cellulare, si prega di riprovare più tardi.',
        error_out_of_credit: 'Opps .. Non abbiamo potuto verificare il tuo telefono cellulare, si prega di riprovare più tardi.',
        duplicated_number: 'Il numero di telefono che hai inserito è già in uso'
    },
    RingcaptchaStr_de = {
        title: 'Bestätigen Sie Ihre Handy',
        description: 'Bitte wählen Sie Ihr Land Code (z. B. 1 für USA / Kanada), und geben Sie Ihre Handy-Nummer ohne Sonderzeichen ( - \'/ #).',
        invalid_phone: 'Bitte geben Sie eine gültige Telefonnummer ein',
        invalid_phone_length: 'Ihre Telefonnummer Länge ist ungültig',
        invalid_country: 'Ungültiger Ländercode nicht unterstützt',
        verify_button: 'Stellen Sie sicher,',
        search_text: 'Geben Sie zur Suche',
        title2: 'Geben Sie einen PIN-Code können Sie Ihr Handy bestätigen',
        description2: 'Ein PIN-Code wurde gesendet: ',
        help_text: 'Wenn Sie eine falsche Nummer eingegeben oder benötigen einen neuen PIN-Code bitte versuchen Sie es erneut',
        help_button: 'Hilfe anzeigen',
        try_again_button: 'versuchen Sie es erneut',
        pin_instruction: 'Geben Sie diesen PIN-Code oben auf dein Handy bestätigen.',
        error_invalid_site_key: 'Fehler. Ungültige Site-Schlüssel.',
        error_invalid_service: 'Fehler. Ungültige Service.',
        error_invalid_session: 'Fehler. Ihre Sitzung ist abgelaufen.',
        error_invalid_domain: 'Fehler. Ungültige Domain.',
        error_max_attempts_reached: 'Fehler. Sie \'ve erreicht die max Versuche zur Überprüfung einer Telefonnummer',
        session_failed: 'Upps .. Wir konnten nicht überprüfen Ihr Handy, bitte versuchen Sie es später erneut.',
        error_out_of_credit: 'Upps .. Wir konnten nicht überprüfen Ihr Handy, bitte versuchen Sie es später erneut.',
        duplicated_number: 'Die Telefonnummer, die Sie eingegeben haben, ist bereits im Einsatz'
    },
    RingcaptchaStr_kr = {
        title: '귀하의 휴대 전화를 확인',
        description: '국가 코드 (미국 / 캐나다 예 : 1)를 선택하고 특수 문자없이 휴대 전화 번호를 입력하세요 ( - \'/ #).',
        invalid_phone: '유효한 전화 번호를 입력하세요',
        invalid_phone_length: '전화 번호의 길이가 올바르지 않습니다',
        invalid_country: '지원되지 않는 잘못된 국가 코드',
        verify_button: '확인',
        search_text: '검색 입력',
        title2: '귀하의 휴대 전화를 확인하기 위해 아래의 PIN 코드를 입력',
        description2: 'PIN 번호가 전송되었습니다 ',
        help_text: '당신이 번호를 잘못 입력하거나 필요한 경우 새 PIN 코드를 다시 시도하십시오',
        help_button: '보기 도움말',
        try_again_button: '다시 시도',
        pin_instruction: '귀하의 휴대 전화를 확인하는 이상이 PIN 코드를 입력.',
        error_invalid_site_key: '오류가 발생했습니다. 잘못된 사이트 키.',
        error_invalid_service: '오류가 발생했습니다. 잘못된 서비스.',
        error_invalid_session: '오류가 발생했습니다. 세션이 만료되었습니다.',
        error_invalid_domain: '오류가 발생했습니다. 잘못된 도메인.',
        error_max_attempts_reached: '오류가 발생했습니다. 당신은 \'는 적 전화 번호를 확인하기위한 최대 시도에 도달',
        session_failed: 'OPPS .. 우리는 당신의 휴대 전화를 확인할 수 없습니다, ​​나중에 다시 시도해주세요.',
        error_out_of_credit: 'OPPS .. 우리는 당신의 휴대 전화를 확인할 수 없습니다, ​​나중에 다시 시도해주세요.',
        duplicated_number: '입력 한 전화 번호가 이미 사용 중입니다'
    },
    RingcaptchaStr_jp = {
        title: 'あなたの携帯電話を確認してください',
        description: 'あなたの国コード（米国/カナダのために例えば、1）を選択し、任意の特殊文字がなくてもあなたの携帯電話番号を入力してください ( - \'/ #).',
        invalid_phone: '有効な電話番号を入力してください',
        invalid_phone_length: 'あなたの電話番号の長さが無効です',
        invalid_country: 'サポートされていない無効な国コード',
        verify_button: '確認する',
        search_text: '検索するために入力',
        title2: 'あなたの携帯電話を確認するには、以下のPINコードを入力してください',
        description2: 'PINコードは、次のアドレスに送信されました： ',
        help_text: '間違った番号を入力するか、必要がある場合は、新しいPINコードがもう一度試してください',
        help_button: 'ヘルプを表示',
        try_again_button: '再試行する',
        pin_instruction: 'あなたの携帯電話を確認するために、上記のこのPINコードを入力してください.',
        error_invalid_site_key: 'エラーが発生しました。無効なサイトの鍵.',
        error_invalid_service: 'エラーが発生しました。無効なサービス.',
        error_invalid_session: 'エラーが発生しました。セッションが期限切れになった.',
        error_invalid_domain: 'エラーが発生しました。無効なドメイン.',
        error_max_attempts_reached: 'エラーが発生しました。あなた\'はVEの電話番号を確認するための最大の試みに達し',
        session_failed: 'OPPS..私たちは、あなたの携帯電話を確認できませんでした、後でもう一度試してください.',
        error_out_of_credit: 'OPPS..私たちは、あなたの携帯電話を確認できませんでした、後でもう一度試してください.',
        duplicated_number: '入力した電話番号がすでに使用されている'
    },
    RingcaptchaLangMap = {
        en: RingcaptchaStr_en,
        es: RingcaptchaStr_es,
        fr: RingcaptchaStr_fr,
        pt: RingcaptchaStr_pt,
        de: RingcaptchaStr_de,
        it: RingcaptchaStr_it,
        jp: RingcaptchaStr_jp,
        kr: RingcaptchaStr_kr
    }; 
    var RingcaptchaStr = RingcaptchaStr_en,
    RingcaptchaOptions, RingcaptchaDefaultOptions = {
        tabindex: 0,
        callback: null,
        lang: null
    };

    /**
     *   PluginDetect v0.8.1
     *   www.pinlady.net/PluginDetect/license/
     *   [ getVersion isMinVersion hasMimeType onWindowLoaded onDetectionDone ]
     *   [ Flash Java(OTF & NOTF) QuickTime Shockwave Silverlight WMP ]
     */
    var PluginDetect={
        version:"0.8.1",
        name:"PluginDetect",
        openTag:"<",
        isDefined:function(b){
            return typeof b!="undefined"
            },
        isArray:function(b){
            return(/array/i).test(Object.prototype.toString.call(b))
            },
        isFunc:function(b){
            return typeof b=="function"
            },
        isString:function(b){
            return typeof b=="string"
            },
        isNum:function(b){
            return typeof b=="number"
            },
        isStrNum:function(b){
            return(typeof b=="string"&&(/\d/).test(b))
            },
        getNumRegx:/[\d][\d\.\_,\-]*/,
        splitNumRegx:/[\.\_,\-]/g,
        getNum:function(b,c){
            var d=this,a=d.isStrNum(b)?(d.isDefined(c)?new RegExp(c):d.getNumRegx).exec(b):null;
            return a?a[0]:null
            },
        compareNums:function(h,f,d){
            var e=this,c,b,a,g=parseInt;
            if(e.isStrNum(h)&&e.isStrNum(f)){
                if(e.isDefined(d)&&d.compareNums){
                    return d.compareNums(h,f)
                    }
                    c=h.split(e.splitNumRegx);
                b=f.split(e.splitNumRegx);
                for(a=0;a<Math.min(c.length,b.length);a++){
                    if(g(c[a],10)>g(b[a],10)){
                        return 1
                        }
                        if(g(c[a],10)<g(b[a],10)){
                        return -1
                        }
                    }
                }
            return 0
    },
formatNum:function(b,c){
    var d=this,a,e;
    if(!d.isStrNum(b)){
        return null
        }
        if(!d.isNum(c)){
        c=4
        }
        c--;
    e=b.replace(/\s/g,"").split(d.splitNumRegx).concat(["0","0","0","0"]);
    for(a=0;a<4;a++){
        if(/^(0+)(.+)$/.test(e[a])){
            e[a]=RegExp.$2
            }
            if(a>c||!(/\d/).test(e[a])){
            e[a]="0"
            }
        }
    return e.slice(0,4).join(",")
    },
getPROP:function(d,b,a){
    var c;
    try{
        if(d){
            a=d[b]
            }
        }catch(c){}
return a
},
findNavPlugin:function(l,e,c){
    var j=this,h=new RegExp(l,"i"),d=(!j.isDefined(e)||e)?/\d/:0,k=c?new RegExp(c,"i"):0,a=navigator.plugins,g="",f,b,m;
    for(f=0;f<a.length;f++){
        m=a[f].description||g;
        b=a[f].name||g;
        if((h.test(m)&&(!d||d.test(RegExp.leftContext+RegExp.rightContext)))||(h.test(b)&&(!d||d.test(RegExp.leftContext+RegExp.rightContext)))){
            if(!k||!(k.test(m)||k.test(b))){
                return a[f]
                }
            }
    }
    return null
},
getMimeEnabledPlugin:function(k,m,c){
    var e=this,f,b=new RegExp(m,"i"),h="",g=c?new RegExp(c,"i"):0,a,l,d,j=e.isString(k)?[k]:k;
    for(d=0;d<j.length;d++){
        if((f=e.hasMimeType(j[d]))&&(f=f.enabledPlugin)){
            l=f.description||h;
            a=f.name||h;
            if(b.test(l)||b.test(a)){
                if(!g||!(g.test(l)||g.test(a))){
                    return f
                    }
                }
        }
    }
return 0
},
getVersionDelimiter:",",
findPlugin:function(d){
    var c=this,b,d,a={
        status:-3,
        plugin:0
    };
    
    if(!c.isString(d)){
        return a
        }
        if(d.length==1){
        c.getVersionDelimiter=d;
        return a
        }
        d=d.toLowerCase().replace(/\s/g,"");
    b=c.Plugins[d];
    if(!b||!b.getVersion){
        return a
        }
        a.plugin=b;
    a.status=1;
    return a
    },
getPluginFileVersion:function(f,b){
    var h=this,e,d,g,a,c=-1;
    if(h.OS>2||!f||!f.version||!(e=h.getNum(f.version))){
        return b
        }
        if(!b){
        return e
        }
        e=h.formatNum(e);
    b=h.formatNum(b);
    d=b.split(h.splitNumRegx);
    g=e.split(h.splitNumRegx);
    for(a=0;a<d.length;a++){
        if(c>-1&&a>c&&d[a]!="0"){
            return b
            }
            if(g[a]!=d[a]){
            if(c==-1){
                c=a
                }
                if(d[a]!="0"){
                return b
                }
            }
    }
    return e
},
AXO:window.ActiveXObject,
getAXO:function(a){
    var d=null,c,b=this;
    try{
        d=new b.AXO(a)
        }catch(c){};
    
    return d
    },
INIT:function(){
    this.init.library(this)
    },
init:{
    $:1,
    hasRun:0,
    objProperties:function(d,e,b){
        var a,c={};
        
        if(e&&b){
            if(e[b[0]]===1&&!d.isArray(e)&&!d.isFunc(e)&&!d.isString(e)&&!d.isNum(e)){
                for(a=0;a<b.length;a=a+2){
                    e[b[a]]=b[a+1];
                    c[b[a]]=1
                    }
                }
                for(a in e){
            if(!c[a]&&e[a]&&e[a][b[0]]===1){
                this.objProperties(d,e[a],b)
                }
            }
        }
    },
publicMethods:function(c,f){
    var g=this,b=g.$,a,d;
    if(c&&f){
        for(a in c){
            try{
                if(b.isFunc(c[a])){
                    f[a]=c[a](f)
                    }
                }catch(d){}
            }
        }
},
plugin:function(a,c){
    var d=this,b=d.$;
    if(a){
        d.objProperties(b,a,["$",b,"$$",a]);
        if(!b.isDefined(a.getVersionDone)){
            a.installed=null;
            a.version=null;
            a.version0=null;
            a.getVersionDone=null;
            a.pluginName=c
            }
        }
},
detectIE:function(){
    var init=this,$=init.$,doc=document,e,x,userAgent=navigator.userAgent||"",progid,progid1,progid2;
    $.isIE=eval("/*@cc_on!@*/!1");
    $.verIE=$.isIE?((/MSIE\s*(\d+\.?\d*)/i).test(userAgent)?parseFloat(RegExp.$1,10):7):null;
    $.ActiveXEnabled=!1;
    $.ActiveXFilteringEnabled=!1;
    if($.isIE){
        try{
            $.ActiveXFilteringEnabled=window.external.msActiveXFilteringEnabled()
            }catch(e){}
        progid1=["Msxml2.XMLHTTP","Msxml2.DOMDocument","Microsoft.XMLDOM","TDCCtl.TDCCtl","Shell.UIHelper","HtmlDlgSafeHelper.HtmlDlgSafeHelper","Scripting.Dictionary"];
        progid2=["WMPlayer.OCX","ShockwaveFlash.ShockwaveFlash","AgControl.AgControl",];
        progid=progid1.concat(progid2);
        for(x=0;x<progid.length;x++){
            if($.getAXO(progid[x])){
                $.ActiveXEnabled=!0;
                if(!$.dbug){
                    break
                }
            }
        }
        if($.ActiveXEnabled&&$.ActiveXFilteringEnabled){
    for(x=0;x<progid2.length;x++){
        if($.getAXO(progid2[x])){
            $.ActiveXFilteringEnabled=!1;
            break
        }
    }
    }
}
},
detectNonIE:function(){
    var e=this,c=this.$,d=navigator,b=c.isIE?"":d.userAgent||"",f=d.vendor||"",a=d.product||"";
    c.isGecko=(/Gecko/i).test(a)&&(/Gecko\s*\/\s*\d/i).test(b);
    c.verGecko=c.isGecko?c.formatNum((/rv\s*\:\s*([\.\,\d]+)/i).test(b)?RegExp.$1:"0.9"):null;
    c.isChrome=(/(Chrome|CriOS)\s*\/\s*(\d[\d\.]*)/i).test(b);
    c.verChrome=c.isChrome?c.formatNum(RegExp.$2):null;
    c.isSafari=!c.isChrome&&((/Apple/i).test(f)||!f)&&(/Safari\s*\/\s*(\d[\d\.]*)/i).test(b);
    c.verSafari=c.isSafari&&(/Version\s*\/\s*(\d[\d\.]*)/i).test(b)?c.formatNum(RegExp.$1):null;
    c.isOpera=(/Opera\s*[\/]?\s*(\d+\.?\d*)/i).test(b);
    c.verOpera=c.isOpera&&((/Version\s*\/\s*(\d+\.?\d*)/i).test(b)||1)?parseFloat(RegExp.$1,10):null
    },
detectPlatform:function(){
    var e=this,d=e.$,b,a=navigator.platform||"";
    d.OS=100;
    if(a){
        var c=["Win",1,"Mac",2,"Linux",3,"FreeBSD",4,"iPhone",21.1,"iPod",21.2,"iPad",21.3,"Win.*CE",22.1,"Win.*Mobile",22.2,"Pocket\\s*PC",22.3,"",100];
        for(b=c.length-2;b>=0;b=b-2){
            if(c[b]&&new RegExp(c[b],"i").test(a)){
                d.OS=c[b+1];
                break
            }
        }
        }
},
library:function(c){
    var e=this,d=document,b,a;
    c.init.objProperties(c,c,["$",c]);
    for(a in c.Plugins){
        c.init.plugin(c.Plugins[a],a)
        }
        e.publicMethods(c.PUBLIC,c);
    c.win.init();
    c.head=d.getElementsByTagName("head")[0]||d.getElementsByTagName("body")[0]||d.body||null;
    e.detectPlatform();
    e.detectIE();
    e.detectNonIE();
    c.init.hasRun=1
    }
},
handler:function(c,b,a){
    return function(){
        c(b,a)
        }
    },
fPush:function(b,a){
    var c=this;
    if(c.isArray(a)&&(c.isFunc(b)||(c.isArray(b)&&b.length>0&&c.isFunc(b[0])))){
        a.push(b)
        }
    },
callArray:function(b){
    var c=this,a,d;
    if(c.isArray(b)){
        d=[].concat(b);
        for(a=0;a<d.length;a++){
            c.call(d[a]);
            b.splice(0,1)
            }
        }
    },
call:function(c){
    var b=this,a=b.isArray(c)?c.length:-1;
    if(a>0&&b.isFunc(c[0])){
        c[0](b,a>1?c[1]:0,a>2?c[2]:0,a>3?c[3]:0)
        }else{
        if(b.isFunc(c)){
            c(b)
            }
        }
},
PUBLIC:{
    isMinVersion:function(a){
        return function(h,g,d,c){
            var e=a.findPlugin(h),f,b=-1;
            if(e.status<0){
                return e.status
                }
                f=e.plugin;
            g=a.formatNum(a.isNum(g)?g.toString():(a.isStrNum(g)?a.getNum(g):"0"));
            if(f.getVersionDone!=1){
                f.getVersion(g,d,c);
                if(f.getVersionDone===null){
                    f.getVersionDone=1
                    }
                }
            if(f.installed!==null){
            b=f.installed<=0.5?f.installed:(f.installed==0.7?1:(f.version===null?0:(a.compareNums(f.version,g,f)>=0?1:-0.1)))
            };
            
        return b
        }
    },
getVersion:function(a){
    return function(g,d,c){
        var e=a.findPlugin(g),f,b;
        if(e.status<0){
            return null
            };
            
        f=e.plugin;
        if(f.getVersionDone!=1){
            f.getVersion(null,d,c);
            if(f.getVersionDone===null){
                f.getVersionDone=1
                }
            }
        b=(f.version||f.version0);
    b=b?b.replace(a.splitNumRegx,a.getVersionDelimiter):b;
    return b
    }
},
onDetectionDone:function(a){
    return function(h,g,c,b){
        var d=a.findPlugin(h),j,e;
        if(d.status==-3){
            return -1
            }
            e=d.plugin;
        if(!a.isArray(e.funcs)){
            e.funcs=[]
            };
            
        if(e.getVersionDone!=1){
            j=a.getVersion?a.getVersion(h,c,b):a.isMinVersion(h,"0",c,b)
            }
            if(e.installed!=-0.5&&e.installed!=0.5){
            a.call(g);
            return 1
            }
            if(e.NOTF){
            a.fPush(g,e.funcs);
            return 0
            }
            return 1
        }
    },
onWindowLoaded:function(a){
    return function(b){
        if(a.win.loaded){
            a.call(b)
            }else{
            a.fPush(b,a.win.funcs)
            }
        }
},
hasMimeType:function(a){
    return function(c){
        if(!a.isIE&&c&&navigator&&navigator.mimeTypes){
            var f,e,b,d=a.isArray(c)?c:(a.isString(c)?[c]:[]);
            for(b=0;b<d.length;b++){
                if(a.isString(d[b])&&/[^\s]/.test(d[b])){
                    f=navigator.mimeTypes[d[b]];
                    e=f?f.enabledPlugin:0;
                    if(e&&(e.name||e.description)){
                        return f
                        }
                    }
            }
        }
    return null
}
},
z:0
},
codebase:{
    $:1,
    isDisabled:function(){
        var a=this,b=a.$;
        return b.ActiveXEnabled&&b.isIE&&b.verIE>=7?0:1
        },
    checkGarbage:function(d){
        var b=this,c=b.$,a;
        if(c.isIE&&d&&c.getPROP(d.firstChild,"object")){
            a=c.getPROP(d.firstChild,"readyState");
            if(c.isNum(a)&&a!=4){
                b.garbage=1;
                return 1
                }
            }
        return 0
    },
emptyGarbage:function(){
    var a=this,b=a.$,c;
    if(b.isIE&&a.garbage){
        try{
            window.CollectGarbage()
            }catch(c){}
        a.garbage=0
        }
    },
init:function(d){
    if(!d.init){
        var b=this,c=b.$,a;
        d.init=1;
        d.min=0;
        d.max=0;
        d.hasRun=0;
        d.version=null;
        d.L=0;
        d.altHTML="";
        d.span=document.createElement("span");
        d.tagA='<object width="1" height="1" style="display:none;" codebase="#version=';
        d.tagB='" '+((/clsid\s*:/i).test(d.$$.classID)?'classid="':'type="')+d.$$.classID+'">'+d.ParamTags+d.altHTML+c.openTag+"/object>";
        for(a=0;a<d.Lower.length;a++){
            d.Lower[a]=c.formatNum(d.Lower[a]);
            d.Upper[a]=c.formatNum(d.Upper[a])
            }
        }
    },
isActiveXObject:function(i,b){
    var f=this,g=f.$,a=0,h,d=i.$$,c=i.span;
    if(i.min&&g.compareNums(b,i.min)<=0){
        return 1
        }
        if(i.max&&g.compareNums(b,i.max)>=0){
        return 0
        }
        if(d.BIfuncs&&d.BIfuncs.length){
        g.callArray(d.BIfuncs)
        }
        c.innerHTML=i.tagA+b+i.tagB;
    if(g.getPROP(c.firstChild,"object")){
        a=1
        };
        
    f.checkGarbage(c);
    c.innerHTML="";
    if(a){
        i.min=b
        }else{
        i.max=b
        }
        return a
    },
convert_:function(f,a,b,e){
    var d=f.convert[a],c=f.$;
    return d?(c.isFunc(d)?c.formatNum(d(b.split(c.splitNumRegx),e).join(",")):b):d
    },
convert:function(h,c,g){
    var e=this,f=h.$,b,a,d;
    c=f.formatNum(c);
    a={
        v:c,
        x:-1
    };
    
    if(c){
        for(b=0;b<h.Lower.length;b++){
            d=e.convert_(h,b,h.Lower[b]);
            if(d&&f.compareNums(c,g?d:h.Lower[b])>=0&&(!b||f.compareNums(c,g?e.convert_(h,b,h.Upper[b]):h.Upper[b])<0)){
                a.v=e.convert_(h,b,c,g);
                a.x=b;
                break
            }
        }
        }
    return a
},
isMin:function(g,f){
    var d=this,e=g.$,c,b,a=0;
    d.init(g);
    if(!e.isStrNum(f)||d.isDisabled()){
        return a
        };
        
    if(!g.L){
        g.L={};
        
        for(c=0;c<g.Lower.length;c++){
            if(d.isActiveXObject(g,g.Lower[c])){
                g.L=d.convert(g,g.Lower[c]);
                break
            }
        }
        }
    if(g.L.v){
    b=d.convert(g,f,1);
    if(b.x>=0){
        a=(g.L.x==b.x?d.isActiveXObject(g,b.v):e.compareNums(f,g.L.v)<=0)?1:-1
        }
    };

return a
},
search:function(g){
    var k=this,h=k.$,i=g.$$,b=0,c;
    k.init(g);
    c=(g.hasRun||k.isDisabled())?1:0;
    g.hasRun=1;
    if(c){
        return g.version
        };
        
    var o,n,m,j=function(q,t){
        var r=[].concat(f),s;
        r[q]=t;
        s=k.isActiveXObject(g,r.join(","));
        if(s){
            b=1;
            f[q]=t
            }else{
            p[q]=t
            }
            return s
        },d=g.DIGITMAX,e,a,l=9999999,f=[0,0,0,0],p=[0,0,0,0];
    for(o=0;o<p.length;o++){
        f[o]=g.DIGITMIN[o]||0;
        e=f.join(",");
        a=f.slice(0,o).concat([l,l,l,l]).slice(0,f.length).join(",");
        for(m=0;m<d.length;m++){
            if(h.isArray(d[m])){
                d[m].push(0);
                if(d[m][o]>p[o]&&h.compareNums(a,g.Lower[m])>=0&&h.compareNums(e,g.Upper[m])<0){
                    p[o]=d[m][o]
                    }
                }
        }
        for(n=0;n<20;n++){
        if(p[o]-f[o]<=16){
            for(m=p[o];m>=f[o]+(o?1:0);m--){
                if(j(o,m)){
                    break
                }
            }
            break
    }
    j(o,Math.round((p[o]+f[o])/2))
        }
        if(!b){
    break
}
p[o]=f[o]
}
if(b){
    g.version=k.convert(g,f.join(",")).v
    };
    
return g.version
}
},
win:{
    $:1,
    loaded:false,
    hasRun:0,
    init:function(){
        var b=this,a=b.$;
        if(!b.hasRun){
            b.hasRun=1;
            b.addEvent("load",a.handler(b.runFuncs,a));
            b.addEvent("unload",a.handler(b.cleanup,a))
            }
        },
addEvent:function(c,b){
    var e=this,d=e.$,a=window;
    if(d.isFunc(b)){
        if(a.addEventListener){
            a.addEventListener(c,b,false)
            }else{
            if(a.attachEvent){
                a.attachEvent("on"+c,b)
                }else{
                a["on"+c]=e.concatFn(b,a["on"+c])
                }
            }
    }
},
concatFn:function(d,c){
    return function(){
        d();
        if(typeof c=="function"){
            c()
            }
        }
},
funcs0:[],
funcs:[],
cleanup:function(b){
    for(var a in b){
        b[a]=0
        }
        b=0
    },
runFuncs:function(a){
    a.win.loaded=true;
    a.callArray(a.win.funcs0);
    a.callArray(a.win.funcs);
    if(a.DOM){
        a.DOM.onDoneEmptyDiv()
        }
    },
z:0
},
DOM:{
    $:1,
    isEnabled:{
        $:1,
        objectTag:function(){
            var a=this.$;
            return a.isIE?a.ActiveXEnabled:1
            },
        objectProperty:function(){
            var a=this.$;
            return a.isIE&&a.verIE>=7?1:0
            }
        },
div:null,
divID:"plugindetect",
divWidth:50,
pluginSize:1,
altHTML:"&nbsp;&nbsp;&nbsp;&nbsp;",
emptyNode:function(c){
    var b=this,d=b.$,a,f;
    if(c&&c.childNodes){
        for(a=c.childNodes.length-1;a>=0;a--){
            if(d.isIE){
                b.setStyle(c.childNodes[a],["display","none"])
                }
                c.removeChild(c.childNodes[a])
            }
        }
    },
LASTfuncs:[],
onDoneEmptyDiv:function(){
    var f=this,g=f.$,b,d,c,a,h;
    if(!g.win.loaded||g.win.funcs0.length||g.win.funcs.length){
        return
    }
    for(b in g.Plugins){
        d=g.Plugins[b];
        if(d){
            if(d.OTF==3||(d.funcs&&d.funcs.length)){
                return
            }
        }
    }
    g.callArray(f.LASTfuncs);
if(f.div&&f.div.childNodes){
    for(b=f.div.childNodes.length-1;b>=0;b--){
        c=f.div.childNodes[b];
        f.emptyNode(c)
        }
        try{
        f.div.innerHTML=""
        }catch(h){}
}
if(!f.div){
    a=document.getElementById(f.divID);
    if(a){
        f.div=a
        }
    }
if(f.div&&f.div.parentNode){
    try{
        f.div.parentNode.removeChild(f.div)
        }catch(h){}
    f.div=null
    }
},
width:function(){
    var g=this,e=g.DOM,f=e.$,d=g.span,b,c,a=-1;
    b=d&&f.isNum(d.scrollWidth)?d.scrollWidth:a;
    c=d&&f.isNum(d.offsetWidth)?d.offsetWidth:a;
    return c>0?c:(b>0?b:Math.max(c,b))
    },
obj:function(b){
    var g=this,d=g.DOM,c=g.span,f,a=c&&c.firstChild?c.firstChild:null;
    try{
        if(a&&b){
            d.div.focus()
            }
        }catch(f){}
return a
},
rs:function(){
    var b=this,a=b.DOM.$;
    return a.isIE?a.getPROP(b.obj(),"readyState"):b.undefined
    },
getTagStatus:function(a,m,r,p,d,g){
    var f=/clsid\s*\:/i,o=r&&f.test(r.outerHTML||"")?r:(p&&f.test(p.outerHTML||"")?p:0),h=r&&!f.test(r.outerHTML||"")?r:(p&&!f.test(p.outerHTML||"")?p:0),l=a&&f.test(a.outerHTML||"")?o:h;
    if(!a||!a.span||!m||!m.span||!l||!l.span){
        return -2
        }
        var s=this,c=s.$,q,k=a.width(),j=l.width(),n=m.width(),b=a.readyState(),t=l.readyState();
    if(k<0||j<0||n<=s.pluginSize){
        return 0
        }
        if(s.isEnabled.objectProperty()){
        var i=c.getPROP(a.obj(),"object");
        if(i){
            return 1.5
            }
            if(g&&!a.pi&&c.isDefined(i)&&c.isIE&&a.tagName==l.tagName&&a.time<=l.time){
            if(k===j&&b===0&&t!==0){
                a.pi=1
                }
            }
    }
if(j<n){
    return a.pi?-0.1:0
    }
    if(k>=n){
    if(!a.winLoaded&&c.win.loaded){
        return a.pi?-0.5:-1
        }
        if(c.isNum(d)){
        if(!c.isNum(a.count2)){
            a.count2=d
            }
            if(d-a.count2>0){
            return a.pi?-0.5:-1
            }
        }
}
try{
    if(k==s.pluginSize&&(!c.isIE||b===4)){
        if(!a.winLoaded&&c.win.loaded){
            return 1
            }
            if(a.winLoaded&&c.isNum(d)){
            if(!c.isNum(a.count)){
                a.count=d
                }
                if(d-a.count>=5){
                return 1
                }
            }
    }
}catch(q){}
return a.pi?-0.1:0
},
setStyle:function(b,h){
    var c=this,d=c.$,g=b.style,a,f;
    if(g&&h){
        for(a=0;a<h.length;a=a+2){
            try{
                g[h[a]]=h[a+1]
                }catch(f){}
        }
        }
},
insertDivInBody:function(a,h){
    var j=this,d=j.$,g,b="pd33993399",c=null,i=h?window.top.document:window.document,f=i.getElementsByTagName("body")[0]||i.body;
    if(!f){
        try{
            i.write('<div id="'+b+'">.'+d.openTag+"/div>");
            c=i.getElementById(b)
            }catch(g){}
    }
    f=i.getElementsByTagName("body")[0]||i.body;
if(f){
    f.insertBefore(a,f.firstChild);
    if(c){
        f.removeChild(c)
        }
    }
},
insert:function(f,b,g,a,l,k){
    var q=this,i=q.$,m,n=document,s,r,p=n.createElement("span"),o,h,c=["outlineStyle","none","borderStyle","none","padding","0px","margin","0px","visibility","visible"],j="outline-style:none;border-style:none;padding:0px;margin:0px;visibility:"+(k?"hidden;":"visible;")+"display:inline;";
    if(!i.isDefined(a)){
        a=""
        }
        if(i.isString(f)&&(/[^\s]/).test(f)){
        f=f.toLowerCase().replace(/\s/g,"");
        s=i.openTag+f+' width="'+q.pluginSize+'" height="'+q.pluginSize+'" ';
        s+='style="'+j+'" ';
        for(o=0;o<b.length;o=o+2){
            if(/[^\s]/.test(b[o+1])){
                s+=b[o]+'="'+b[o+1]+'" '
                }
            }
        s+=">";
    for(o=0;o<g.length;o=o+2){
        if(/[^\s]/.test(g[o+1])){
            s+=i.openTag+'param name="'+g[o]+'" value="'+g[o+1]+'" />'
            }
        }
    s+=a+i.openTag+"/"+f+">"
}else{
    f="";
    s=a
    }
    if(!q.div){
    h=n.getElementById(q.divID);
    if(h){
        q.div=h
        }else{
        q.div=n.createElement("div");
        q.div.id=q.divID
        }
        q.setStyle(q.div,c.concat(["width",q.divWidth+"px","height",(q.pluginSize+3)+"px","fontSize",(q.pluginSize+3)+"px","lineHeight",(q.pluginSize+3)+"px","verticalAlign","baseline","display","block"]));
    if(!h){
        q.setStyle(q.div,["position","absolute","right","0px","top","0px"]);
        q.insertDivInBody(q.div)
        }
    }
r={
    span:null,
    winLoaded:i.win.loaded,
    tagName:f,
    outerHTML:s,
    DOM:q,
    time:new Date().getTime(),
    width:q.width,
    obj:q.obj,
    readyState:q.rs
    };
    
if(q.div&&q.div.parentNode){
    q.setStyle(p,c.concat(["fontSize",(q.pluginSize+3)+"px","lineHeight",(q.pluginSize+3)+"px","verticalAlign","baseline","display","inline"]));
    q.div.appendChild(p);
    try{
        p.innerHTML=s
        }catch(m){};
    
    r.span=p;
    r.winLoaded=i.win.loaded
    }
    return r
}
},
file:{
    $:1,
    any:"fileStorageAny999",
    valid:"fileStorageValid999",
    save:function(d,f,c){
        var b=this,e=b.$,a;
        if(d&&e.isDefined(c)){
            if(!d[b.any]){
                d[b.any]=[]
                }
                if(!d[b.valid]){
                d[b.valid]=[]
                }
                d[b.any].push(c);
            a=b.split(f,c);
            if(a){
                d[b.valid].push(a)
                }
            }
    },
getValidLength:function(a){
    return a&&a[this.valid]?a[this.valid].length:0
    },
getAnyLength:function(a){
    return a&&a[this.any]?a[this.any].length:0
    },
getValid:function(c,a){
    var b=this;
    return c&&c[b.valid]?b.get(c[b.valid],a):null
    },
getAny:function(c,a){
    var b=this;
    return c&&c[b.any]?b.get(c[b.any],a):null
    },
get:function(d,a){
    var c=d.length-1,b=this.$.isNum(a)?a:c;
    return(b<0||b>c)?null:d[b]
    },
split:function(g,c){
    var b=this,e=b.$,f=null,a,d;
    g=g?g.replace(".","\\."):"";
    d=new RegExp("^(.*[^\\/])("+g+"\\s*)$");
    if(e.isString(c)&&d.test(c)){
        a=(RegExp.$1).split("/");
        f={
            name:a[a.length-1],
            ext:RegExp.$2,
            full:c
        };
        
        a[a.length-1]="";
        f.path=a.join("/")
        }
        return f
    },
z:0
},
Plugins:{
    quicktime:{
        $:1,
        mimeType:["video/quicktime","application/x-quicktimeplayer","image/x-macpaint","image/x-quicktime"],
        progID:"QuickTimeCheckObject.QuickTimeCheck.1",
        progID0:"QuickTime.QuickTime",
        classID:"clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B",
        codebase:{
            $:1,
            isMin:function(a){
                return this.$.codebase.isMin(this,a)
                },
            search:function(){
                return this.$.codebase.search(this)
                },
            ParamTags:'<param name="src" value="" /><param name="controller" value="false" />',
            DIGITMAX:[[12,11,11],[7,60],[7,11,11],0,[7,11,11]],
            DIGITMIN:[5,0,0,0],
            Upper:["999","7,60","7,50","7,6","7,5"],
            Lower:["7,60","7,50","7,6","7,5","0"],
            convert:[1,function(b,a){
                return a?[b[0],b[1]+b[2],b[3],"0"]:[b[0],b[1].charAt(0),b[1].charAt(1),b[2]]
                },1,0,1]
            },
        setPluginStatus:function(d,a,f){
            var e=this,c=e.$,b=e.installed;
            e.installed=a?1:(f?(f>0?0.7:-0.1):(d?0:-1));
            if(a){
                e.version=c.formatNum(a,3)
                }
                e.getVersionDone=e.installed==0.7||e.installed==-0.1?0:1;
            c.codebase.emptyGarbage()
            },
        getVersion:function(c){
            var h=this,d=h.$,a=null,g=null,b,f;
            if(!d.isIE){
                if(d.hasMimeType(h.mimeType)){
                    g=d.OS!=3?d.findNavPlugin("QuickTime.*Plug-?in",0):null;
                    if(g&&g.name){
                        a=d.getNum(g.name)
                        }
                    }
            }else{
        if(d.isStrNum(c)){
            b=c.split(d.splitNumRegx);
            if(b.length>3&&parseInt(b[3],10)>0){
                b[3]="9999"
                }
                c=b.join(",")
            }
            b=h.codebase.isMin(c);
        if(b){
            h.setPluginStatus(0,0,b);
            return
        }
        if(!a||d.dbug){
            a=h.codebase.search()
            }
            if(!a||d.dbug){
            g=d.getAXO(h.progID);
            b=d.getPROP(g,"QuickTimeVersion");
            if(b&&b.toString){
                a=b.toString(16);
                a=parseInt(a.charAt(0)||"0",16)+"."+parseInt(a.charAt(1)||"0",16)+"."+parseInt(a.charAt(2)||"0",16)
                }
            }
    }
h.setPluginStatus(g,a)
}
},
java:{
    $:1,
    mimeType:["application/x-java-applet","application/x-java-vm","application/x-java-bean"],
    mimeType_dummy:"application/dummymimejavaapplet",
    classID:"clsid:8AD9C840-044E-11D1-B3E9-00805F499D93",
    classID_dummy:"clsid:8AD9C840-044E-11D1-B3E9-BA9876543210",
    navigator:{
        $:1,
        a:(function(){
            var b,a=!0;
            try{
                a=window.navigator.javaEnabled()
                }catch(b){}
            return a
            })(),
        javaEnabled:function(){
            return this.a
            },
        mimeObj:0,
        pluginObj:0
    },
    OTF:null,
    getVerifyTagsDefault:function(){
        return[1,this.applet.isDisabled.VerifyTagsDefault_1()?0:1,1]
        },
    getVersion:function(j,g,i){
        var b=this,d=b.$,e,a=b.applet,h=b.verify,k=b.navigator,f=null,l=null,c=null;
        if(b.getVersionDone===null){
            b.OTF=0;
            k.mimeObj=d.hasMimeType(b.mimeType);
            if(k.mimeObj){
                k.pluginObj=k.mimeObj.enabledPlugin
                }
                if(h){
                h.begin()
                }
            }
        a.setVerifyTagsArray(i);
    d.file.save(b,".jar",g);
    if(b.getVersionDone===0){
        if(a.should_Insert_Query_Any()){
            e=a.insert_Query_Any(j);
            b.setPluginStatus(e[0],e[1],f,j)
            }
            return
    }
    if((!f||d.dbug)&&b.DTK.query().version){
        f=b.DTK.version
        }
        if((!f||d.dbug)&&b.navMime.query().version){
        f=b.navMime.version
        }
        if((!f||d.dbug)&&b.navPlugin.query().version){
        f=b.navPlugin.version
        }
        if(b.nonAppletDetectionOk(f)){
        c=f
        }
        if(!c||d.dbug||a.VerifyTagsHas(2.2)||a.VerifyTagsHas(2.5)){
        e=b.lang.System.getProperty();
        if(e[0]){
            f=e[0];
            c=e[0];
            l=e[1]
            }
        }
    b.setPluginStatus(c,l,f,j);
if(a.should_Insert_Query_Any()){
    e=a.insert_Query_Any(j);
    if(e[0]){
        c=e[0];
        l=e[1]
        }
    }
b.setPluginStatus(c,l,f,j)
},
nonAppletDetectionOk:function(b){
    var d=this,e=d.$,a=d.navigator,c=1;
    if(!b||(!a.javaEnabled()&&!d.lang.System.getPropertyHas(b))||(!e.isIE&&!a.mimeObj&&!d.lang.System.getPropertyHas(b))||(e.isIE&&!e.ActiveXEnabled)){
        c=0
        }else{
        if(e.OS>=20){}else{
            if(d.info&&d.info.getPlugin2Status()<0&&d.info.BrowserRequiresPlugin2()){
                c=0
                }
            }
    }
return c
},
setPluginStatus:function(d,i,g,h){
    var b=this,e=b.$,f,c=0,a=b.applet;
    g=g||b.version0;
    if(b.OTF>0){
        d=d||b.lang.System.getProperty()[0]
        }
        f=a.isRange(d);
    if(f){
        if(a.setRange(f,h)==d){
            c=f
            }
            d=0
        }
        if(b.OTF<3){
        b.installed=c?(c>0?0.7:-0.1):(d?1:(g?-0.2:-1))
        }
        if(b.OTF==2&&b.NOTF&&!b.applet.getResult()[0]&&!b.lang.System.getProperty()[0]){
        b.installed=g?-0.2:-1
        }
        if(b.OTF==3&&b.installed!=-0.5&&b.installed!=0.5){
        b.installed=(b.NOTF.isJavaActive(1)==1||b.lang.System.getProperty()[0])?0.5:-0.5
        }
        if(b.OTF==4&&(b.installed==-0.5||b.installed==0.5)){
        if(d){
            b.installed=1
            }else{
            if(c){
                b.installed=c>0?0.7:-0.1
                }else{
                if(b.NOTF.isJavaActive(1)==1){
                    if(g){
                        b.installed=1;
                        d=g
                        }else{
                        b.installed=0
                        }
                    }else{
                if(g){
                    b.installed=-0.2
                    }else{
                    b.installed=-1
                    }
                }
        }
}
}
if(g){
    b.version0=e.formatNum(e.getNum(g))
    }
    if(d&&!c){
    b.version=e.formatNum(e.getNum(d))
    }
    if(i&&e.isString(i)){
    b.vendor=i
    }
    if(!b.vendor){
    b.vendor=""
    }
    if(b.verify&&b.verify.isEnabled()){
    b.getVersionDone=0
    }else{
    if(b.getVersionDone!=1){
        if(b.OTF<2){
            b.getVersionDone=0
            }else{
            b.getVersionDone=b.applet.can_Insert_Query_Any()?0:1
            }
        }
};

e.codebase.emptyGarbage()
},
DTK:{
    $:1,
    hasRun:0,
    status:null,
    VERSIONS:[],
    version:"",
    HTML:null,
    Plugin2Status:null,
    classID:["clsid:CAFEEFAC-DEC7-0000-0001-ABCDEFFEDCBA","clsid:CAFEEFAC-DEC7-0000-0000-ABCDEFFEDCBA"],
    mimeType:["application/java-deployment-toolkit","application/npruntime-scriptable-plugin;DeploymentToolkit"],
    isDisabled:function(){
        var a=this,b=a.$;
        if(!b.DOM.isEnabled.objectTag()||(b.isIE&&b.verIE<6)||(b.isGecko&&b.compareNums(b.verGecko,b.formatNum("1.6"))<=0)||(b.isSafari&&b.OS==1&&(!b.verSafari||b.compareNums(b.verSafari,"5,1,0,0")<0))||b.isChrome){
            return 1
            }
            return 0
        },
    query:function(){
        var l=this,h=l.$,f=l.$$,k,m,i,a=h.DOM.altHTML,g={},b,d=null,j=null,c=(l.hasRun||l.isDisabled());
        l.hasRun=1;
        if(c){
            return l
            }
            l.status=0;
        if(h.isIE){
            for(m=0;m<l.classID.length;m++){
                l.HTML=h.DOM.insert("object",["classid",l.classID[m]],[],a);
                d=l.HTML.obj();
                if(h.getPROP(d,"jvms")){
                    break
                }
            }
            }else{
    i=h.hasMimeType(l.mimeType);
    if(i&&i.type){
        l.HTML=h.DOM.insert("object",["type",i.type],[],a);
        d=l.HTML.obj()
        }
    }
if(d){
    try{
        b=h.getPROP(d,"jvms");
        if(b){
            j=b.getLength();
            if(h.isNum(j)){
                l.status=j>0?1:-1;
                for(m=0;m<j;m++){
                    i=h.getNum(b.get(j-1-m).version);
                    if(i){
                        l.VERSIONS.push(i);
                        g["a"+h.formatNum(i)]=1
                        }
                    }
                }
        }
}catch(k){}
}
i=0;
for(m in g){
    i++
}
if(i&&i!==l.VERSIONS.length){
    l.VERSIONS=[]
    }
    if(l.VERSIONS.length){
    l.version=h.formatNum(l.VERSIONS[0])
    };
    
return l
}
},
navMime:{
    $:1,
    hasRun:0,
    mimetype:"",
    version:"",
    length:0,
    mimeObj:0,
    pluginObj:0,
    isDisabled:function(){
        var b=this,d=b.$,c=b.$$,a=c.navigator;
        if(d.isIE||!a.mimeObj||!a.pluginObj){
            return 1
            }
            return 0
        },
    query:function(){
        var i=this,f=i.$,a=i.$$,b=(i.hasRun||i.isDisabled());
        i.hasRun=1;
        if(b){
            return i
            };
            
        var n=/^\s*application\/x-java-applet;jpi-version\s*=\s*(\d.*)$/i,g,l,j,d="",h="a",o,m,k={},c=f.formatNum("0");
        for(l=0;l<navigator.mimeTypes.length;l++){
            o=navigator.mimeTypes[l];
            m=o?o.enabledPlugin:0;
            g=o&&n.test(o.type||d)?f.formatNum(f.getNum(RegExp.$1)):0;
            if(g&&m&&(m.description||m.name)){
                if(!k[h+g]){
                    i.length++
                }
                k[h+g]=o.type;
                if(f.compareNums(g,c)>0){
                    c=g
                    }
                }
        }
        g=k[h+c];
if(g){
    o=f.hasMimeType(g);
    i.mimeObj=o;
    i.pluginObj=o?o.enabledPlugin:0;
    i.mimetype=g;
    i.version=c
    };
    
return i
}
},
navPlugin:{
    $:1,
    hasRun:0,
    version:"",
    isDisabled:function(){
        var d=this,c=d.$,b=d.$$,a=b.navigator;
        if(c.isIE||!a.mimeObj||!a.pluginObj){
            return 1
            }
            return 0
        },
    query:function(){
        var m=this,e=m.$,c=m.$$,h=c.navigator,j,l,k,g,d,a,i,f=0,b=(m.hasRun||m.isDisabled());
        m.hasRun=1;
        if(b){
            return m
            };
            
        a=h.pluginObj.name||"";
        i=h.pluginObj.description||"";
        if(!f||e.dbug){
            g=/Java.*TM.*Platform[^\d]*(\d+)(?:[\.,_](\d*))?(?:\s*[Update]+\s*(\d*))?/i;
            if((g.test(a)||g.test(i))&&parseInt(RegExp.$1,10)>=5){
                f="1,"+RegExp.$1+","+(RegExp.$2?RegExp.$2:"0")+","+(RegExp.$3?RegExp.$3:"0")
                }
            }
        if(!f||e.dbug){
        g=/Java[^\d]*Plug-in/i;
        l=g.test(i)?e.formatNum(e.getNum(i)):0;
        k=g.test(a)?e.formatNum(e.getNum(a)):0;
        if(l&&(e.compareNums(l,e.formatNum("1,3"))<0||e.compareNums(l,e.formatNum("2"))>=0)){
            l=0
            }
            if(k&&(e.compareNums(k,e.formatNum("1,3"))<0||e.compareNums(k,e.formatNum("2"))>=0)){
            k=0
            }
            d=l&&k?(e.compareNums(l,k)>0?l:k):(l||k);
        if(d){
            f=d
            }
        }
    if(!f&&e.isSafari&&e.OS==2){
    j=e.findNavPlugin("Java.*\\d.*Plug-in.*Cocoa",0);
    if(j){
        l=e.getNum(j.description);
        if(l){
            f=l
            }
        }
};

if(f){
    m.version=e.formatNum(f)
    };
    
return m
}
},
lang:{
    $:1,
    System:{
        $:1,
        hasRun:0,
        result:[null,null],
        isDisabled:function(){
            var b=this,c=b.$,a=b.$$;
            if(!window.java||c.isIE){
                return 1
                }
                if(c.OS==2&&c.verOpera&&c.verOpera<9.2&&c.verOpera>=9){
                return 1
                }
                return 0
            },
        getPropertyHas:function(a){
            var b=this,d=b.$,c=b.getProperty()[0];
            return(a&&c&&d.compareNums(d.formatNum(a),d.formatNum(c))===0)?1:0
            },
        getProperty:function(){
            var f=this,g=f.$,d=f.$$,h,a="java_qqq990",c,i="window.java.lang.System.getProperty",b=f.hasRun||f.isDisabled();
            f.hasRun=1;
            if(!b){
                g[a]=0;
                try{
                    c=document.createElement("script");
                    c.type="text/javascript";
                    c.appendChild(document.createTextNode("(function(){var e;try{"+g.name+"."+a+"=["+i+"('java.version')+'',"+i+"('java.vendor')+'']}catch(e){}})();"));
                    g.head.insertBefore(c,g.head.firstChild);
                    g.head.removeChild(c)
                    }catch(h){}
                if(g.isArray(g[a])){
                    f.result=[].concat(g[a])
                    }
                }
            return f.result
        }
    }
},
applet:{
    $:1,
    codebase:{
        $:1,
        isMin:function(a){
            return this.$.codebase.isMin(this,a)
            },
        search:function(){
            return this.$.codebase.search(this)
            },
        ParamTags:'<param name="code" value="A19999.class" /><param name="codebase_lookup" value="false" />',
        DIGITMAX:[[16,64],[6,0,512],0,[1,5,2,256],0,[1,4,1,1],[1,4,0,64],[1,3,2,32]],
        DIGITMIN:[1,0,0,0],
        Upper:["999","10","5,0,20","1,5,0,20","1,4,1,20","1,4,1,2","1,4,1","1,4"],
        Lower:["10","5,0,20","1,5,0,20","1,4,1,20","1,4,1,2","1,4,1","1,4","0"],
        convert:[function(b,a){
            return a?[parseInt(b[0],10)>1?"99":parseInt(b[1],10)+3+"",b[3],"0","0"]:["1",parseInt(b[0],10)-3+"","0",b[1]]
            },function(b,a){
            return a?[b[1],b[2],b[3]+"0","0"]:["1",b[0],b[1],b[2].substring(0,b[2].length-1||1)]
            },0,function(b,a){
            return a?[b[0],b[1],b[2],b[3]+"0"]:[b[0],b[1],b[2],b[3].substring(0,b[3].length-1||1)]
            },0,1,function(b,a){
            return a?[b[0],b[1],b[2],b[3]+"0"]:[b[0],b[1],b[2],b[3].substring(0,b[3].length-1||1)]
            },1]
        },
    results:[[null,null],[null,null],[null,null],[null,null]],
    getResult:function(){
        var b=this,d=b.results,a,c=[];
        for(a=d.length-1;a>=0;a--){
            c=d[a];
            if(c[0]){
                break
            }
        }
        c=[].concat(c);
    return c
    },
DummySpanTagHTML:0,
HTML:[0,0,0,0],
active:[0,0,0,0],
DummyObjTagHTML:0,
DummyObjTagHTML2:0,
allowed:[1,1,1,1],
VerifyTagsHas:function(c){
    var d=this,b;
    for(b=0;b<d.allowed.length;b++){
        if(d.allowed[b]===c){
            return 1
            }
        }
    return 0
},
saveAsVerifyTagsArray:function(c){
    var b=this,d=b.$,a;
    if(d.isArray(c)){
        for(a=1;a<b.allowed.length;a++){
            if(c.length>a-1&&d.isNum(c[a-1])){
                if(c[a-1]<0){
                    c[a-1]=0
                    }
                    if(c[a-1]>3){
                    c[a-1]=3
                    }
                    b.allowed[a]=c[a-1]
                }
            }
        b.allowed[0]=b.allowed[3]
    }
},
setVerifyTagsArray:function(d){
    var b=this,c=b.$,a=b.$$;
    if(a.getVersionDone===null){
        b.saveAsVerifyTagsArray(a.getVerifyTagsDefault())
        }
        if(c.dbug||(a.verify&&a.verify.isEnabled())){
        b.saveAsVerifyTagsArray([3,3,3])
        }else{
        if(d){
            b.saveAsVerifyTagsArray(d)
            }
        }
},
isDisabled:{
    $:1,
    single:function(d){
        var a=this,c=a.$,b=a.$$;
        if(d==0){
            return c.codebase.isDisabled()
            }
            if((d==3&&!c.isIE)||a.all()){
            return 1
            }
            if(d==1||d==3){
            return !c.DOM.isEnabled.objectTag()
            }
            if(d==2){
            return a.AppletTag()
            }
        },
aA_:null,
all:function(){
    var c=this,e=c.$,d=c.$$,b=d.navigator,a=0;
    if(c.aA_===null){
        if(e.OS>=20){
            a=0
            }else{
            if(e.verOpera&&e.verOpera<11&&!b.javaEnabled()&&!d.lang.System.getProperty()[0]){
                a=1
                }else{
                if((e.verGecko&&e.compareNums(e.verGecko,e.formatNum("2"))<0)&&!b.mimeObj&&!d.lang.System.getProperty()[0]){
                    a=1
                    }else{
                    if(c.AppletTag()&&!e.DOM.isEnabled.objectTag()){
                        a=1
                        }
                    }
            }
    };

c.aA_=a
}
return c.aA_
},
AppletTag:function(){
    var b=this,d=b.$,c=b.$$,a=c.navigator;
    return d.isIE?!a.javaEnabled():0
    },
VerifyTagsDefault_1:function(){
    var a=this.$;
    if(a.OS>=20){
        return 1
        }
        if((a.isIE&&(a.verIE<9||!a.ActiveXEnabled))||(a.verGecko&&a.compareNums(a.verGecko,a.formatNum("2"))<0)||(a.isSafari&&(!a.verSafari||a.compareNums(a.verSafari,a.formatNum("4"))<0))||(a.verOpera&&a.verOpera<10)){
        return 0
        }
        return 1
    },
z:0
},
can_Insert_Query:function(d){
    var b=this,c=b.results[0][0],a=b.getResult()[0];
    if(b.HTML[d]||(d==0&&c!==null&&!b.isRange(c))||(d==0&&a&&!b.isRange(a))){
        return 0
        }
        return !b.isDisabled.single(d)
    },
can_Insert_Query_Any:function(){
    var b=this,a;
    for(a=0;a<b.results.length;a++){
        if(b.can_Insert_Query(a)){
            return 1
            }
        }
    return 0
},
should_Insert_Query:function(e){
    var c=this,f=c.allowed,d=c.$,b=c.$$,a=c.getResult()[0];
    a=a&&(e>0||!c.isRange(a));
    if(!c.can_Insert_Query(e)||f[e]===0){
        return 0
        }
        if(f[e]==3||(f[e]==2.8&&!a)||(f[e]==2.5&&!b.lang.System.getProperty()[0])||(f[e]==2.2&&!b.lang.System.getProperty()[0]&&!a)){
        return 1
        }
        if(!b.nonAppletDetectionOk(b.version0)){
        if(f[e]==2||(f[e]==1&&!a)){
            return 1
            }
        }
    return 0
},
should_Insert_Query_Any:function(){
    var b=this,a;
    for(a=0;a<b.allowed.length;a++){
        if(b.should_Insert_Query(a)){
            return 1
            }
        }
    return 0
},
query:function(f){
    var j,a=this,i=a.$,d=a.$$,k=null,l=null,b=a.results,c,h,g=a.HTML[f];
    if(!g||!g.obj()||b[f][0]||d.bridgeDisabled||(i.dbug&&d.OTF<3)){
        return
    }
    c=g.obj(true);
    h=g.readyState();
    if(!i.isIE||h===4){
        try{
            k=i.getNum(c.getVersion()+"");
            l=c.getVendor()+"";
            c.statusbar(i.win.loaded?" ":" ")
            }catch(j){};
        
        if(k&&i.isStrNum(k)){
            b[f]=[k,l];
            a.active[f]=2
            }
        }
},
isRange:function(a){
    return(/^[<>]/).test(a||"")?(a.charAt(0)==">"?1:-1):0
    },
setRange:function(b,a){
    return(b?(b>0?">":"<"):"")+(this.$.isString(a)?a:"")
    },
insert_Query_Any:function(n){
    var e=this,c=e.$,k=e.$$,l=e.results,m=e.HTML,g=c.DOM.altHTML,r="A.class",o,b=c.file.getValid(k);
    if(e.should_Insert_Query(0)){
        if(k.OTF<2){
            k.OTF=2
            };
            
        l[0]=[0,0];
        o=n?e.codebase.isMin(n):e.codebase.search();
        if(o){
            l[0][0]=n?e.setRange(o,n):o
            }
            e.active[0]=o?1.5:-1
        }
        if(!b){
        return e.getResult()
        }
        var f=b.name+b.ext,q=b.path;
    var i=["archive",f,"code",r],j=["mayscript","true"],p=["scriptable","true","codebase_lookup","false"].concat(j),a=k.navigator,d=!c.isIE&&a.mimeObj&&a.mimeObj.type?a.mimeObj.type:k.mimeType[0];
    if(!e.DummySpanTagHTML){
        e.DummySpanTagHTML=c.DOM.insert("",[],[],g)
        }
        if(e.should_Insert_Query(1)){
        if(k.OTF<2){
            k.OTF=2
            };
            
        m[1]=c.isIE?c.DOM.insert("object",["type",d],["codebase",q].concat(i).concat(p),g,k):c.DOM.insert("object",["type",d],["codebase",q].concat(i).concat(p),g,k);
        l[1]=[0,0];
        e.query(1)
        }
        if(e.should_Insert_Query(2)){
        if(k.OTF<2){
            k.OTF=2
            };
            
        m[2]=c.isIE?c.DOM.insert("applet",["alt",g].concat(j).concat(i),["codebase",q].concat(p),g,k):c.DOM.insert("applet",["codebase",q,"alt",g].concat(j).concat(i),[].concat(p),g,k);
        l[2]=[0,0];
        e.query(2)
        }
        if(e.should_Insert_Query(3)){
        if(k.OTF<2){
            k.OTF=2
            };
            
        m[3]=c.isIE?c.DOM.insert("object",["classid",k.classID],["codebase",q].concat(i).concat(p),g,k):c.DOM.insert();
        l[3]=[0,0];
        e.query(3)
        }
        if(c.DOM.isEnabled.objectTag()){
        if(!e.DummyObjTagHTML&&(m[1]||m[2])){
            e.DummyObjTagHTML=c.DOM.insert("object",["type",k.mimeType_dummy],[],g)
            }
            if(!e.DummyObjTagHTML2&&m[3]){
            e.DummyObjTagHTML2=c.DOM.insert("object",["classid",k.classID_dummy],[],g)
            }
        }
    var h=k.NOTF;
if(k.OTF<3&&h.shouldContinueQuery()){
    k.OTF=3;
    h.onIntervalQuery=c.handler(h.$$onIntervalQuery,h);
    if(!c.win.loaded){
        c.win.funcs0.push([h.winOnLoadQuery,h])
        }
        setTimeout(h.onIntervalQuery,h.intervalLength)
    }
    return e.getResult()
}
},
NOTF:{
    $:1,
    count:0,
    countMax:25,
    intervalLength:250,
    shouldContinueQuery:function(){
        var f=this,e=f.$,c=f.$$,b=c.applet,a,d=0;
        if(e.win.loaded&&f.count>f.countMax){
            return 0
            }
            for(a=0;a<b.results.length;a++){
            if(b.HTML[a]){
                if(!e.win.loaded&&f.count>f.countMax&&e.codebase.checkGarbage(b.HTML[a].span)){
                    d=1;
                    b.HTML[a].DELETE=1
                    }
                    if(!d&&!b.results[a][0]&&(b.allowed[a]>=2||(b.allowed[a]==1&&!b.getResult()[0]))&&f.isAppletActive(a)>=0){
                    return 1
                    }
                }
        };
        
return 0
},
isJavaActive:function(d){
    var f=this,c=f.$$,a,b,e=-9;
    for(a=0;a<c.applet.HTML.length;a++){
        b=f.isAppletActive(a,d);
        if(b>e){
            e=b
            }
        }
    return e
},
isAppletActive:function(e,g){
    var h=this,f=h.$,b=h.$$,l=b.navigator,a=b.applet,i=a.HTML[e],d=a.active,k,c=0,j,m=d[e];
    if(g||m>=1.5||!i||!i.span){
        return m
        };
        
    j=f.DOM.getTagStatus(i,a.DummySpanTagHTML,a.DummyObjTagHTML,a.DummyObjTagHTML2,h.count);
    for(k=0;k<d.length;k++){
        if(d[k]>0){
            c=1
            }
        }
    if(j!=1){
    m=j
    }else{
    if(f.isIE||((b.version0&&l.javaEnabled()&&l.mimeObj&&(i.tagName=="object"||c))||b.lang.System.getProperty()[0])){
        m=1
        }else{
        m=0
        }
    }
d[e]=m;
return m
},
winOnLoadQuery:function(c,d){
    var b=d.$$,a;
    if(b.OTF==3){
        a=d.queryAllApplets();
        d.queryCompleted(a)
        }
    },
$$onIntervalQuery:function(d){
    var c=d.$,b=d.$$,a;
    if(b.OTF==3){
        a=d.queryAllApplets();
        if(!d.shouldContinueQuery()){
            d.queryCompleted(a)
            }
        }
    d.count++;
if(b.OTF==3){
    setTimeout(d.onIntervalQuery,d.intervalLength)
    }
},
queryAllApplets:function(){
    var f=this,e=f.$,d=f.$$,c=d.applet,b,a;
    for(b=0;b<c.results.length;b++){
        c.query(b)
        }
        a=c.getResult();
    return a
    },
queryCompleted:function(c){
    var g=this,f=g.$,e=g.$$,d=e.applet,b;
    if(e.OTF>=4){
        return
    }
    e.OTF=4;
    var a=g.isJavaActive();
    for(b=0;b<d.HTML.length;b++){
        if(d.HTML[b]&&d.HTML[b].DELETE){
            f.DOM.emptyNode(d.HTML[b].span);
            d.HTML[b].span=null
            }
        }
    e.setPluginStatus(c[0],c[1],0);
if(e.funcs){
    f.callArray(e.funcs)
    }
    if(f.DOM){
    f.DOM.onDoneEmptyDiv()
    }
}
},
zz:0
},
flash:{
    $:1,
    mimeType:"application/x-shockwave-flash",
    progID:"ShockwaveFlash.ShockwaveFlash",
    classID:"clsid:D27CDB6E-AE6D-11CF-96B8-444553540000",
    getVersion:function(){
        var b=function(i){
            if(!i){
                return null
                }
                var e=/[\d][\d\,\.\s]*[rRdD]{0,1}[\d\,]*/.exec(i);
            return e?e[0].replace(/[rRdD\.]/g,",").replace(/\s/g,""):null
            };
            
        var j=this,g=j.$,k,h,l=null,c=null,a=null,f,m,d;
        if(!g.isIE){
            m=g.hasMimeType(j.mimeType);
            if(m&&g.DOM.isEnabled.objectTag()){
                f=g.DOM.insert("object",["type",j.mimeType],[],"",j).obj();
                try{
                    l=g.getNum(f.GetVariable("$version"))
                    }catch(k){}
            }
            if(!l){
            d=m?m.enabledPlugin:null;
            if(d&&d.description){
                l=b(d.description)
                }
                if(l){
                l=g.getPluginFileVersion(d,l)
                }
            }
    }else{
    for(h=15;h>2;h--){
        c=g.getAXO(j.progID+"."+h);
        if(c){
            a=h.toString();
            break
        }
    }
    if(!c){
    c=g.getAXO(j.progID)
    }
    if(a=="6"){
    try{
        c.AllowScriptAccess="always"
        }catch(k){
        return"6,0,21,0"
        }
    }
try{
    l=b(c.GetVariable("$version"))
    }catch(k){}
if(!l&&a){
    l=a
    }
}
j.installed=l?1:-1;
j.version=g.formatNum(l);
return true
}
},
shockwave:{
    $:1,
    mimeType:"application/x-director",
    progID:"SWCtl.SWCtl",
    classID:"clsid:166B1BCA-3F9C-11CF-8075-444553540000",
    getVersion:function(){
        var a=null,b=null,g,f,d=this,c=d.$;
        if(!c.isIE){
            f=c.findNavPlugin("Shockwave\\s*for\\s*Director");
            if(f&&f.description&&c.hasMimeType(d.mimeType)){
                a=c.getNum(f.description)
                }
                if(a){
                a=c.getPluginFileVersion(f,a)
                }
            }else{
        try{
            b=c.getAXO(d.progID).ShockwaveVersion("")
            }catch(g){}
        if(c.isString(b)&&b.length>0){
            a=c.getNum(b)
            }else{
            if(c.getAXO(d.progID+".8")){
                a="8"
                }else{
                if(c.getAXO(d.progID+".7")){
                    a="7"
                    }else{
                    if(c.getAXO(d.progID+".1")){
                        a="6"
                        }
                    }
            }
    }
}
d.installed=a?1:-1;
d.version=c.formatNum(a)
}
},
windowsmediaplayer:{
    $:1,
    mimeType:["application/x-mplayer2","application/asx","application/x-ms-wmp"],
    navPluginObj:null,
    progID:"WMPlayer.OCX",
    classID:"clsid:6BF52A52-394A-11D3-B153-00C04F79FAA6",
    INSTALLED:{
        dfault:null,
        inputMime:{}
},
getVersion:function(i,g){
    var c=this,f=c.$,l,e=null,h=null,j=c.mimeType,k="Totem|VLC",b,d,a;
    c.installed=-1;
    if(f.isString(g)){
        g=g.replace(/\s/g,"");
        if(g){
            j=g
            }
        }else{
    g=null
    }
    if(g){
    d=c.INSTALLED.inputMime[g];
    if(f.isDefined(d)){
        c.installed=d;
        return
    }
}else{
    d=c.INSTALLED.dfault;
    if(d!==null){
        c.installed=d;
        return
    }
}
if(!f.isIE){
    if(f.OS<20&&f.OS>=3){
        c.installed=-1;
        return
    }
    a={
        wmp:"Windows\\s*Media\\s*Player.*Plug-?in|Flip4Mac.*Windows\\s*Media.*Plug-?in",
        wmpFirefox:"Windows\\s*Media\\s*Player.*Firefox.*Plug-?in",
        avoidPlayers:"Totem|VLC|RealPlayer"
    };
    
    if(c.getVersionDone===null){
        c.getVersionDone=0;
        e=f.getMimeEnabledPlugin(c.mimeType,a.wmp,a.avoidPlayers);
        if(!g){
            l=e
            }
            if(!e&&f.hasMimeType(c.mimeType)){
            e=f.findNavPlugin(a.wmp,0,a.avoidPlayers)
            }
            if(e){
            c.navPluginObj=e;
            b=(f.isGecko&&f.compareNums(f.verGecko,f.formatNum("1.8"))<0);
            b=b||(f.isOpera&&f.verOpera<10);
            b=b||f.isChrome;
            if(f.DOM.isEnabled.objectTag()&&!b&&f.getMimeEnabledPlugin(c.mimeType[2],a.wmpFirefox,a.avoidPlayers)){
                h=f.getPROP(f.DOM.insert("object",["type",c.mimeType[2],"data",""],["src",""],"",c).obj(),"versionInfo")||h
                }
            }
    }else{
    h=c.version
    }
    if(!f.isDefined(l)){
    l=f.getMimeEnabledPlugin(j,a.wmp,a.avoidPlayers)
    }
    c.installed=l&&h?1:(l?0:(c.navPluginObj?-0.2:-1))
}else{
    e=f.getAXO(c.progID);
    h=f.getPROP(e,"versionInfo")||h;
    c.installed=e&&h?1:(e?0:-1)
    }
    if(!c.version){
    c.version=f.formatNum(h)
    }
    if(g){
    c.INSTALLED.inputMime[g]=c.installed
    }else{
    c.INSTALLED.dfault=c.installed
    }
}
},
silverlight:{
    $:1,
    mimeType:"application/x-silverlight",
    progID:"AgControl.AgControl",
    digits:[20,20,9,12,31],
    getVersion:function(){
        var e=this,c=e.$,k=document,i=null,b=null,f=null,h=true,a=[1,0,1,1,1],r=[1,0,1,1,1],j=function(d){
            return(d<10?"0":"")+d.toString()
            },n=function(s,d,u,v,t){
            return(s+"."+d+"."+u+j(v)+j(t)+".0")
            },o=function(s,d,t){
            return q(s,(d==0?t:r[0]),(d==1?t:r[1]),(d==2?t:r[2]),(d==3?t:r[3]),(d==4?t:r[4]))
            },q=function(v,t,s,x,w,u){
            var u;
            try{
                return v.IsVersionSupported(n(t,s,x,w,u))
                }catch(u){}
            return false
            };
            
        if(!c.isIE){
            var g;
            if(c.hasMimeType(e.mimeType)){
                g=c.isGecko&&c.compareNums(c.verGecko,c.formatNum("1.6"))<=0;
                if(c.isGecko&&g){
                    h=false
                    }
                    f=c.findNavPlugin("Silverlight.*Plug-?in",0);
                if(f&&f.description){
                    i=c.formatNum(f.description)
                    }
                    if(i){
                    r=i.split(c.splitNumRegx);
                    if(parseInt(r[2],10)>=30226&&parseInt(r[0],10)<2){
                        r[0]="2"
                        }
                        i=r.join(",")
                    }
                }
            e.installed=f&&h&&i?1:(f&&h?0:(f?-0.2:-1))
        }else{
        b=c.getAXO(e.progID);
        var m,l,p;
        if(b&&q(b,a[0],a[1],a[2],a[3],a[4])){
            for(m=0;m<e.digits.length;m++){
                p=r[m];
                for(l=p+(m==0?0:1);l<=e.digits[m];l++){
                    if(o(b,m,l)){
                        h=true;
                        r[m]=l
                        }else{
                        break
                    }
                }
                if(!h){
                break
            }
            }
            if(h){
        i=n(r[0],r[1],r[2],r[3],r[4])
        }
    }
e.installed=b&&h&&i?1:(b&&h?0:(b?-0.2:-1))
}
e.version=c.formatNum(i)
}
},
zz:0
}
};

PluginDetect.INIT();

function BrowserPlugins() {
    this.plugins = false;
    this.pluginList = {};

    if (navigator.plugins) {
        var numPlugins = navigator.plugins.length;

        for (var i = 0; i < numPlugins; i++) {
            var plugin = navigator.plugins[i];

            this.pluginList[i] = {
                'name': plugin.name,
                'description': plugin.description,
                'filename': plugin.filename
            };
        }

        if (Object.keys(this.pluginList).length > 0) {
            this.plugins = true;
        }
    }
    // Try to detect IE Plugins using PluginDetect
    if (this.plugins === false) {
        var version,
        pp = ["Java", "QuickTime", "DevalVR", "Shockwave", "Flash",
        "WindowsMediaplayer", "Silverlight", "VLC"];
        for (var j = 0; j < pp.length; j++ ) {
            version = PluginDetect.getVersion(pp[j]);
            if (version) {
                this.pluginList[j] = {
                    'name': pp[j],
                    'description': version,
                    'filename': 'N/A'
                };
            }
        }
        if (Object.keys(this.pluginList).length > 0) {
            this.plugins = true;
        }
    // plugins += ieAcrobatVersion();
    }
}
BrowserPlugins.prototype.hasPlugins = function() {
    return this.plugins;
};
BrowserPlugins.prototype.toString = function() {
    var value = '';
    if (this.hasPlugins()) {
        for (var i in this.pluginList) {
            value += '[' + i + ']' + 'name:' + this.pluginList[i].name +
            ';description:' + this.pluginList[i].description +
            ';file:' + this.pluginList[i].filename;
        }
    }

    return value;
};
BrowserPlugins.prototype.getPluginsList = function() {
    return (this.hasPlugins()) ? this.pluginList : false;
};

var _browserData = {},
_fontList = !1;

// Private functions
var _hashMerge = function(hash) {
    var merged = {},
    c;
    for (c in hash) for (var d in hash[c]) merged[d] = hash[c][d];
    merged.theme == "context" && (merged.includeContext = !0);
    return merged;
},
_isIE = function() {
    return navigator.userAgent.indexOf("MSIE") > 0 && !window.opera
},
_setStyles = function(a) {
    if (!this.styles_set) this.styles_set = !0, _addCss(a)
},
_addCss = function(a) {
    var b = document.createElement("style");
    b.type = "text/css";
    b.styleSheet ? navigator.appVersion.indexOf("MSIE 5") != -1 ? document.write("<style type='text/css'>" + a + "</style>") : b.styleSheet.cssText = a : navigator.appVersion.indexOf("MSIE 5") != -1 ? document.write("<style type='text/css'>" + a + "</style>") : (a = document.createTextNode(a), b.appendChild(a));
    _getScriptArea().appendChild(b)
},
_getScriptArea = function() {
    var a = document.getElementsByTagName("head");
    return a = !a || a.length < 1 ? document.body : a[0]
},
_ajax = function(m, u, o) {
    var jx = false;
    if (_isIE() && typeof XDomainRequest != "undefined") {
        jx = new XDomainRequest();
        jx.open(m, u);
        jx.onload = function() {
            (typeof o.success != "undefined") && o.success(jx)
        };
        jx.onerror = function() {
            (typeof o.error != "undefined") && o.error(jx)
        };
    } else {
        jx = new XMLHttpRequest();
        jx.open(m, u, true);
        jx.setRequestHeader("Content-Type","text/plain");
        jx.onreadystatechange = function() {
            if(jx.readyState == 4 && jx.status == 200 && typeof o.success !== "undefined") o.success(jx);
            else if(jx.readyState == 4 && typeof o.error !== "undefined") o.error(jx);
        };
    }

    return jx;
},
_gatherData = function() {
    try {
        _browserData['plugins'] = _getPlugins();
    } catch (ex) {
        _browserData['plugins'] = "N/A";
    }

    _browserData['fonts'] = _getFonts();

    try {
        _browserData['timezone'] = _getTimezone();
    } catch (ex) {
        _browserData['timezone'] = "N/A";
    }

    try {
        _browserData['screen'] = _getScreen()
    } catch (ex) {
        _browserData['screen'] = "N/A";
    }

    try {
        _browserData['storage'] = _getStorage();
    } catch (ex) {
        _browserData['storage'] = "N/A";
    }

    console.log("Browser data gathering complete");

    var params = _serialize(_browserData) +
    '&token=' + RingcaptchaStatus.session;

    // Create XMLHttpRequest
    b = _ajax('POST', RingcaptchaStatus.server + 'rcFp/auth', {
        success: function (jx) {
            var c = JSON.parse(jx.responseText);
            Ringcaptcha.authID = c.rcFpTrack;
        },
        error: function (jx) {
            console.log("Error getting auth info");
        }
    });

    b.send(params);
},
_serialize = function (data) {
    var serialized = "";
    for (d in data) {
        serialized += "&" + d + "=" + encodeURIComponent(data[d]);
    }
    console.log("Serialized data is: " + serialized.substr(1));
    return serialized.substr(1);
},
_getPlugins = function() {
    console.log("Getting Browser Plugins");

    var plugins = new BrowserPlugins();
    var pluginList = '';

    if (plugins.hasPlugins()) {
        pluginList = plugins.toString();
    } else {
        pluginList = 'No Plugins Found';
    }

    return pluginList;
},
_getFonts = function() {
    console.log("Getting System Fonts");
    return _fontList;
},
_getTimezone = function() {
    console.log("Getting Browser Timezone");
    return new Date().getTimezoneOffset();
},
_getScreen = function() {
    console.log("Getting Screen Config");
    return screen.width + "x" + screen.height + "x" + screen.colorDepth;
},
_getStorage = function() {
    console.log('Getting DOM Storage Config');
    var storage = '';
    try {
        if (localStorage.rcFp == "OK") {
            storage += "DOMLocalStorage:YES";
        } else {
            storage += "DOMLocalStorage:NO";
        }
    } catch (ex) {
        storage += "DOMLocalStorage:NO";
    }

    try {
        if (sessionStorage.rcFp == "OK") {
            storage += ",DOMSessionStorage:YES";
        } else {
            storage += ",DOMSessionStorage:NO";
        }
    } catch (ex) {
        storage += ",DOMSessionStorage:NO";
    }

    return storage;
},
_setDOMStorage = function() {
    console.log('Setting DOM Storage');
    try {
        localStorage.rcFp = 'OK';
        sessionStorage.rcFp = 'OK';
    } catch (ex) {}
};

var Ringcaptcha = {
    widget: null,
    styles_set: !1,
    timer_id: -1,
    $: function (a) {
        return typeof a == "string" ? document.getElementById(a) : a
    },
    setFonts: function(fontArr) {
        _fontList = fontArr.join(';');
    },
    setOptions: function (a) {
        RingcaptchaOptions = _hashMerge([RingcaptchaDefaultOptions, a || {}])
    },
    startWidget: function () {
        // Fingerprint
        document.writeln('<object id="fontListSWF" width="1" height="1" data="'+ RingcaptchaStatus.server +'swf/FontList.swf" type="application/x-shockwave-flash" name="fontListSWF">');
        document.writeln('<param value="'+ RingcaptchaStatus.server +'swf/FontList.swf" name="movie"><param name="AllowScriptAccess" value="always"><embed width="1" height="1" src="'+ RingcaptchaStatus.server +'swf/FontList.swf" AllowScriptAccess="always"></object>');

        _setDOMStorage();
        setTimeout(_gatherData, 2500);

        Ringcaptcha._reset_timer();
        RingcaptchaStr = _hashMerge([RingcaptchaStr_en, RingcaptchaLangMap[RingcaptchaStatus.lang] || {},
            RingcaptchaOptions.custom_translations || {}]);
        switch (RingcaptchaStatus.status) {
            case 'PENDING':
                Ringcaptcha._render_pin_slide({
                    phone: RingcaptchaStatus.message, 
                    timeout: 0
                });
                break;
            case 'LAST':
                Ringcaptcha._render_pin_slide({
                    phone: RingcaptchaStatus.message, 
                    timeout: null
                });
                break;
            case 'SESSION_FAILED':
            case 'OUT_OF_CREDIT':
            case 'ERROR_INVALID_DOMAIN':
                Ringcaptcha._render_error_slide({
                    message: RingcaptchaStatus.status
                    }, false);
                break;
            case 'ERROR_INVALID_SESSION':
            case 'ERROR_INVALID_SITE_KEY':
            case 'ERROR_INVALID_SERVICE':
                Ringcaptcha._render_error_slide({
                    message: RingcaptchaStatus.status, 
                    message: RingcaptchaStatus.message
                    }, true);
                break;
            default:
                Ringcaptcha._render_phone_slide();
                if (RingcaptchaStatus.geolocation) {
                    Ringcaptcha.getGeolocation();
                }
        }
    },
    reload: function () {
        var a = RingcaptchaStatus, b, c = Ringcaptcha.$, f;

        if (c('ringcaptcha_reload_button')) {
            c('ringcaptcha_reload_button').onmouseover = null;
            c('ringcaptcha_reload_button').onmouseout = null;
        }

        f = 'sid=' + a.session;
        f +='&auth=' + Ringcaptcha.authID;

        // Create XMLHttpRequest
        b = _ajax('POST', a.server + a.site + '/captcha', {
            success: function (jx) {
                var c = JSON.parse(jx.responseText);
                if (c.result == "ERROR") {
                    Ringcaptcha._render_error_slide(c, true);
                    return false;
                }
                RingcaptchaStatus = c;
                Ringcaptcha.verifyClicked = false;
                Ringcaptcha.startWidget();
            },
            error: function (jx) {
                Ringcaptcha.startWidget();
            }
        });

        b.send(f);
    },
    try_again: function () {
        var a = Ringcaptcha.$;
        Ringcaptcha.timer--;
        if (Ringcaptcha.timer) {
            (typeof window.console !== 'undefined') && console.log('COUNTDOWN: ' + Ringcaptcha.timer);
            a('ringcaptcha_timer').innerHTML = Ringcaptcha.timer;
        } else {
            clearInterval(Ringcaptcha.timer_id);
            a('ringcaptcha_timer').style.display = "none";
            a('ringcaptcha_reload_button').style.display = "block";
        }
    },
    /*
        * Mis functions
        */
    m_searchCountry: function(){
        var a = RingcaptchaStatus,
        b = Ringcaptcha.$,
        c = RingcaptchaCountries,
        d = b('ringcaptcha_country_dropdown'),
        e, f, a = a.country;
        var pais = b("inputSearchCountry");

        if(pais.value == ''){
            console.log(pais.value);
            return false;
        }

        if(pais.value[0] == "+"){
            var pattern = new RegExp("\\+"+pais.value,"ig");
        }else{
            var pattern = new RegExp(pais.value,"ig");
        }

        var bien = [];
        var mal = [];

        if(pais.value != ""){

            for(x=0; x < c.length; x++){

                var bus = c[x]["name"]+c[x]["code"];

                if(bus.match(pattern) != null){
                    bien.push(c[x]);
                }else{
                    mal.push(c[x]);
                }
            }

            Ringcaptcha.m_build_country_dropdown(bien);

        }else{
            for (var i=0; i < c.length; i++) {
                d.appendChild(Ringcaptcha._build_country_element(c[i]));
            }
        }
    },
    m_build_country_dropdown: function (sCountry) {
        var a = RingcaptchaStatus,
        b = Ringcaptcha.$,
        c = RingcaptchaCountries,
        d = b('ringcaptcha_country_dropdown'),
        e, f, a = a.country;

        while(d.childNodes.length > 2){
            d.removeChild(d.lastChild);
        }

        for (var i=0; i < sCountry.length; i++) {
            d.appendChild(Ringcaptcha._build_country_element(sCountry[i]));
        }

        d.style.zIndex = 99999;
    },
    m_isPhoneValid:function(elem){
        /*
            * Control de digitos en el input number
            */

        if(elem.target.value.length > 19 && elem.keyCode != 8 && elem.charCode != 0){
            return false;
        }

        var pat = /^[0-9]/;

        if(pat.test(String.fromCharCode(elem.keyCode))){
            return true;
        }else if(elem.keyCode == 13){
            Ringcaptcha.processPhoneNumber(RingcaptchaOptions);
        }else if(pat.test(String.fromCharCode(elem.charCode)) || elem.charCode == 0){//en firefox se usa charCode
            return true;
        }else{
            return false;
        }

    },
    m_errorShow:function(msj){
        var a = Ringcaptcha.$,
        b = /^\+?([0-9])*$/,
        c = RingcaptchaStatus,
        d = a('ringcaptcha_user_country'), f = a('ringcaptcha_user_phone'),
        z = a('ringcaptcha_example_phone');
        g = f.value.trim();

        z.className = 'helptxt helptxterr';
        f.className = "error";
        f.value = msj;
        f.onclick = (function(){
            f.value = '';
            f.className = '';
            z.className = 'helptxt'
            });
        Ringcaptcha.verifyClicked = false;
        (e) && (!_isIE()) && e.preventDefault();
    },

    /* -------------------------------*/
    _render_phone_slide: function () {
        var a = Ringcaptcha.$,
        b = RingcaptchaStr,
        c = RingcaptchaStatus,
        c = c.server,
        d, e = RingcaptchaOptions;

        c[c.length - 1] == "/" && (c = c.substring(0, c.length - 1));
        var f = c + "/images/widget/";

        c = RingcaptchaTemplates.AllCss + RingcaptchaTemplates.CountryCSS;
        d = RingcaptchaTemplates.PhoneHtml;

        c = c.replace(/IMGROOT\//g, f);
        c = c.replace(/IMGLABEL\//g, f);
        _setStyles(c);

        Ringcaptcha.widget.innerHTML = d;

        a('ringcaptcha_title') && a('ringcaptcha_title').appendChild(document.createTextNode(b.title));
        a('ringcaptcha_instruction') && a('ringcaptcha_instruction').appendChild(document.createTextNode(b.description));
        a('ringcaptcha_verify_button') && a('ringcaptcha_verify_button').appendChild(document.createTextNode(b.verify_button));

        //creo el ? de ayuda y el ex:
        v1 = document.createElement('a');
        v1.id="ringcaptcha_example_phone";
        v1.href = "javascript:Ringcaptcha.showHelp()";
        v1.title = b.help_button;
        v1.className = 'helptxt';
        v1.innerHTML = '(?)';
        a('ringcaptcha_title') && a('ringcaptcha_title').appendChild(v1);


        s1 = document.createElement('a');
        s1.id = 'selectExample';
        s1.className = 'helptxt helptxtex';
        a('ringcaptcha_title') && a('ringcaptcha_title').appendChild(s1);
        //---------------------


        c = document.createElement('input');
        c.type = "hidden";
        c.id = "ringcaptcha_session_id";
        c.name = "ringcaptcha_session_id";
        c.value = RingcaptchaStatus.session;

        d = document.createElement('input');
        d.type = "hidden";
        d.id = "ringcaptcha_user_country";
        d.name = "ringcaptcha_user_country";

        a('ringcaptcha_phone_container') && a('ringcaptcha_phone_container').appendChild(c);
        a('ringcaptcha_phone_container') && a('ringcaptcha_phone_container').appendChild(d);

        //a('ringcaptcha_user_phone').onfocus = Ringcaptcha.fillWithCountry;
        a('ringcaptcha_verify_button').href = "javascript:void(0)";
        a('ringcaptcha_verify_button').onclick = function () {
            Ringcaptcha.processPhoneNumber(e);
        };
        a('ringcaptcha_user_phone').onkeypress = Ringcaptcha._process_key;
        a('ringcaptcha_user_phone').onkeypress = Ringcaptcha.m_isPhoneValid;
        //a('ringcaptcha_user_phone').onkeyup = Ringcaptcha.guessCountry;
        //a('ringcaptcha_user_phone').onblur = Ringcaptcha.searchCountry;
        a('ringcaptcha_country_selector').onclick = function () {
            a('ringcaptcha_country_dropdown').style.display = "block";
            a('inputSearchCountry').focus();
        };

        Ringcaptcha._build_country_dropdown();
        Ringcaptcha.fillWithCountry();

        //if (e.tabindex && (a("ringcaptcha_user_phone").tabIndex = e.tabindex, Ringcaptcha.theme != "custom")) a("ringcaptcha_verify_button").tabIndex = e.tabindex;
        if (Ringcaptcha.widget) Ringcaptcha.widget.style.display = "";
        e.callback && e.callback()
    },
    _render_pin_slide: function (r) {
        var a = Ringcaptcha,
        b = RingcaptchaStr,
        c = RingcaptchaStatus,
        d = RingcaptchaOptions,
        e, a = a.$,
        c = c.server;

        Ringcaptcha.widget.style.display = "none";

        c[c.length - 1] == "/" && (c = c.substring(0, c.length - 1));
        var f = c + "/images/widget/";

        c = RingcaptchaTemplates.CountryCSS + RingcaptchaTemplates.AllCss;
        e = RingcaptchaTemplates.PinHtml;

        c = c.replace(/IMGROOT\//g, f);
        c = c.replace(/IMGLABEL\//g, f);
        _setStyles(c);
        Ringcaptcha.widget.innerHTML = e;

        a('ringcaptcha_pin_code').autocomplete = 'off';
        a('ringcaptcha_pin_code').autocapitalize = 'off';
        a('ringcaptcha_pin_code').autocorrect = 'off';
        a('ringcaptcha_pin_code').onkeypress = Ringcaptcha.m_isPhoneValid;

        a('ringcaptcha_title') && a('ringcaptcha_title').appendChild(document.createTextNode(b.description2));
        a('ringcaptcha_title') && a('ringcaptcha_title').appendChild(document.createTextNode(r.phone));
        a('ringcaptcha_help_text') && a('ringcaptcha_help_text').appendChild(document.createTextNode(b.help_text));

        c = document.createElement('input');
        c.type = "hidden";
        c.id = "ringcaptcha_session_id";
        c.name = "ringcaptcha_session_id";
        c.value = RingcaptchaStatus.session;

        a('ringcaptcha_pin_container') && a('ringcaptcha_pin_container').appendChild(c);

        c = document.createElement('div');
        c.id = "ringcaptcha_reload_bubble";
        c.style.zIndex = 9999;

        a('ringcaptcha_toolbar').appendChild(c);

        c = document.createElement("span");
        c.appendChild(document.createTextNode(b.try_again_button));

        a('ringcaptcha_reload_bubble') && a('ringcaptcha_reload_bubble').appendChild(c);

        a('ringcaptcha_reload_button').onmouseover = function() {
            Ringcaptcha.$('ringcaptcha_reload_bubble').style.display = "block";
        };

        a('ringcaptcha_reload_button').onmouseout = function() {
            Ringcaptcha.$('ringcaptcha_reload_bubble').style.display = "none";
        };

        a('ringcaptcha_reload_button').href = "javascript:Ringcaptcha.reload()";
        //a('ringcaptcha_reload_button').title = b.try_again_button;
        a('ringcaptcha_help_button').href = "javascript:Ringcaptcha.showHelp()";
        a('ringcaptcha_help_button').title = b.help_button;

        document.onclick = null;

        a('ringcaptcha_enterpin').innerHTML = b.pin_instruction;

        if (d.tabindex && (a("ringcaptcha_pin_code").tabIndex = d.tabindex, Ringcaptcha.theme != "custom")) a("ringcaptcha_try_again_button").tabIndex = d.tabindex;
        if (Ringcaptcha.widget) Ringcaptcha.widget.style.display = "";
        if (r.timeout == 0) {
            clearInterval(Ringcaptcha.timer_id);
            a('ringcaptcha_timer').style.display = "none";
            a('ringcaptcha_reload_button').style.display = "block";
        } else if (r.timeout == null) {
            clearInterval(Ringcaptcha.timer_id);
            a('ringcaptcha_timer').style.display = "none";
            a('ringcaptcha_reload_button').style.display = "block";
            a('ringcaptcha_reload_button').removeAttribute('href');
            a('ringcaptcha_reload_button').className = 'ringcaptcha_reload_disabled';
            a('ringcaptcha_reload_button').onmouseover = null;
            a('ringcaptcha_reload_button').onmouseout = null;
            a('ringcaptcha_help_text').innerHTML = '';
        } else
            Ringcaptcha._set_timer(r.timeout);

        a('ringcaptcha_pin_code').focus();
    },
    _render_error_slide: function(r, t) {
        var a = Ringcaptcha.$,
        b = RingcaptchaStr,
        c = RingcaptchaStatus,
        c = c.server,
        d, e = RingcaptchaOptions;

        c[c.length - 1] == "/" && (c = c.substring(0, c.length - 1));
        var f = c + "/images/widget/";

        c = RingcaptchaTemplates.CountryCSS + RingcaptchaTemplates.AllCss;
        d = RingcaptchaTemplates.ErrorHtml;

        c = c.replace(/IMGROOT\//g, f);

        _setStyles(c);

        Ringcaptcha.widget.innerHTML = d;

        a('ringcaptcha_err_icon').className = 'ringcaptcha-err-' + r.message.toLowerCase();

        a('ringcaptcha_err_message').appendChild(document.createTextNode(b[r.message.toLowerCase()]));

        if (t) {
            c = document.createElement('a');
            c.id = "ringcaptcha_err_try_again";
            c.href = "javascript:Ringcaptcha.reload()"
            c.appendChild(document.createTextNode(b.try_again_button));

            a('ringcaptcha_err_icon').appendChild(c);
        }

        c = document.createElement('input');
        c.type = "hidden";
        c.id = "ringcaptcha_session_id";
        c.name = "ringcaptcha_session_id";
        c.value = RingcaptchaStatus.session;

        a('ringcaptcha') && a('ringcaptcha').appendChild(c);

        c = document.createElement('input');
        c.type = "hidden";
        c.id = "ringcaptcha_pin_code";
        c.name = "ringcaptcha_pin_code";
        c.value = RingcaptchaStatus.session;

        a('ringcaptcha') && a('ringcaptcha').appendChild(c);

        if (Ringcaptcha.widget) Ringcaptcha.widget.style.display = "";
    },
    _reset_timer: function () {
        var a = RingcaptchaStatus;
        clearInterval(Ringcaptcha.timer_id);
    },
    _set_timer: function (t) {
        (typeof window.console !== 'undefined') && console.log('START COUNTDOWN en: ' + t);
        clearInterval(Ringcaptcha.timer_id);
        Ringcaptcha.timer = t;
        Ringcaptcha.timer_id = setInterval("Ringcaptcha.try_again();", 1000);
    },
    processPhoneNumber: function (e) {
        document.getElementById("ringcaptcha_verify_button").focus();
        (typeof window.console !== 'undefined') && console.log('Verify clicked!');
        if (Ringcaptcha.verifyClicked) {
            //(e) && (!_isIE()) && e.preventDefault();
            return !1;
        }
        Ringcaptcha.verifyClicked = true;

        var a = Ringcaptcha.$,
        b = /^\+?([0-9])*$/,
        c = RingcaptchaStatus,
        d = a('ringcaptcha_user_country'), f = a('ringcaptcha_user_phone'),
        y = a('ringcaptcha_country_code_o').value,
        z = a('ringcaptcha_example_phone'),
        g = y + f.value.trim();

        if (!Ringcaptcha.isPhoneValid(f.value) || (f.value.length <=4)) {
            z.className = 'helptxt helptxterr';
            f.className = "error";
            f.value = RingcaptchaStr.invalid_phone;
            f.onclick = (function(){
                if(z.className != 'helptxt'){
                    f.value = '';
                    f.className = '';
                    z.className = 'helptxt'
                    }
                });
        f.onfocus = (function(){
            if(z.className != 'helptxt'){
                f.value = '';
                f.className = '';
                z.className = 'helptxt'
                }
            });
    Ringcaptcha.verifyClicked = false;
    (e) && (!_isIE()) && e.preventDefault();
    return !1
} //Invalid characters

// Building URL
f  = 'token=' + c.session + '&phone=' + encodeURIComponent(g) + '&country=' + encodeURIComponent(d.value);
f += '&auth=' + encodeURIComponent(Ringcaptcha.authID);
if (c.geolocation) {
    f += '&geo_lat=' + encodeURIComponent(c.geoLat) + '&geo_lng=' + encodeURIComponent(c.geoLng);
    f += '&geo_accuracy=' + encodeURIComponent(c.geoAccuracy) + '&geo_alt=' + encodeURIComponent(c.geoAlt);
    f += '&geo_alt_accuracy=' + encodeURIComponent(c.geoAltAccuracy);
}

// Create XMLHttpRequest
b = _ajax('POST', c.server + c.site + '/code', {
    success: function (jx) {
        var r = JSON.parse(jx.responseText);
        switch (r.status) {
            case "SUCCESS":
                Ringcaptcha._render_pin_slide(r);
                break;
            case "ERROR":
                var g = Ringcaptcha.$('ringcaptcha_user_phone');
                Ringcaptcha.verifyClicked = false;
                g.className = "error";
                switch(r.message) {
                    case "ERROR_INVALID_NUMBER":
                        g = RingcaptchaStr.invalid_phone;

                        Ringcaptcha.m_errorShow(g);
                        break;
                    case "ERROR_COUNTRY_NOT_SUPPORTED":
                        g = RingcaptchaStr.invalid_country;

                        Ringcaptcha.m_errorShow(g);
                        break;
                    case "ERROR_INVALID_NUMBER_LENGTH":
                        g = RingcaptchaStr.invalid_phone_length;

                        Ringcaptcha.m_errorShow(g);
                        break;
                    default:
                        Ringcaptcha._render_error_slide(r, true);
                }
                break;
        }
    },
    error: function (jx) {
        Ringcaptcha.verifyClicked = false;
    }
});

b.send(f);

return !1
},
isPhoneValid: function (p) {
    var a = /^\+?([0-9])*$/;
    p = p.trim();
    return (p.length && p.match(a));
},
_build_country_dropdown: function () {
    var a = RingcaptchaStatus,
    b = Ringcaptcha.$,
    c = RingcaptchaCountries,
    d = b('ringcaptcha_country_dropdown'),
    e, f, a = a.country;

    d.style.display = "none";
    //f = Ringcaptcha._get_country_by_iso(a);
    /*creo el input*/
    h = document.createElement("input");
    h.placeholder = RingcaptchaStr.search_text;
    h.id="inputSearchCountry";
    h.type="text";
    h.setAttribute("autocapitalize","off");
    h.setAttribute("autocorrect","off");
    h.setAttribute("autocomplete","off");

    d.appendChild(h);
    b('inputSearchCountry').onkeyup = Ringcaptcha.m_searchCountry;

    e = document.createElement('div');
    e.className = "ringcaptcha_country_separator";
    d.appendChild(e);

    //d.appendChild(Ringcaptcha._build_country_element(f));

    for (var i=0; i < c.length; i++) {
        //if (a == c[i].iso) continue;
        d.appendChild(Ringcaptcha._build_country_element(c[i]));
    }

    // ringcaptcha_country_dropdown onBlur event Simulation
    document.onclick = function (e) {
        e = e || window.event;
        var element = e.target || e.srcElement,
        d = Ringcaptcha.$('ringcaptcha_country_dropdown');

        if (d.style.display != "none" && element.id != "ringcaptcha_country_dropdown" &&
            element.id != "ringcaptcha_country_selector" &&
            element.parentNode.id != "ringcaptcha_country_selector" &&
            element.parentNode.id != "ringcaptcha_country_dropdown" &&
            element.parentNode.className != "ringcaptcha_country") {
            d.style.display = "none";
            (!_isIE()) && e.preventDefault();
            return false;
        }
    }


    document.onkeyup = function (e) {

        if(e.charCode == 13 || e.which == 13 || e.keyCode == 13)
        {
            if(document.activeElement.id == "inputSearchCountry"){
                var ele = document.getElementById('ringcaptcha_country_dropdown');
                var span = ele.childNodes[2].childNodes[2].innerHTML;

                Ringcaptcha.selectCountry(span);
            }else{
                //Que seleccione el país donde esta el focus
                var span = document.activeElement;

                Ringcaptcha.selectCountry(span);
            }
        }
        else if(e.charCode == 40 || e.which == 40 || e.keyCode == 40)
        {
            if(e.target.id == "inputSearchCountry"){
                //Método que al tocar cursor hacia abajo, baje al primer país
                var ele = document.getElementById("ringcaptcha_country_dropdown");
                ele.childNodes[2].focus();
            }else{
                if(navigator.userAgent.search(/firefox/i) != -1){
                    Ringcaptcha.elementFocus.nextSibling.focus();
                }else{
                    document.activeElement.nextSibling.focus();
                }
            }

        }
        else if(e.which == 38 || e.keyCode == 38 || e.charCode == 38)
        {
            if(navigator.userAgent.search(/firefox/i) != -1){
                Ringcaptcha.elementFocus.previousSibling.focus();
            }else{
                document.activeElement.previousSibling.focus();
            }
        }
        else if(e.which == 27 || e.keyCode == 27 || e.charCode == 27 && document.getElementById('ringcaptcha_country_dropdown'))
        {
            document.getElementById('ringcaptcha_country_dropdown').style.display = "none";
            document.getElementById('ringcaptcha_user_phone').focus();
        }
    }

    d.style.zIndex = 99999;
},
_get_country_by_iso: function (i) {
    var c = RingcaptchaCountries;
    for (var j=0; j < c.length; j++) {
        if (i == c[j].iso) return c[j];
    }
    return false;
},
_get_country_by_code: function (i) {
    var c = RingcaptchaCountries;
    for (var j=(c.length -1); j >= 0; j--) {
        if (i == c[j].code) return c[j];
    }
    return false;
},
_build_country_element: function(g) {
    var e, f;

    e = document.createElement('a');
    e.href = "javascript:Ringcaptcha.selectCountry('"+g.iso+"')";
    e.className = "ringcaptcha_country";
    e.setAttribute("onblur","Ringcaptcha._getFocus(this)");

    f = document.createElement('span');
    f.className = "ringcaptcha_country_name ringcaptcha-country-flag-" + g.iso.toLowerCase();
    f.appendChild(document.createTextNode(g.name));

    e.appendChild(f);

    f = document.createElement('span');
    f.className = "ringcaptcha_country_code";
    f.appendChild(document.createTextNode(g.code));

    e.appendChild(f);

    f = document.createElement('span');
    f.className = "ringcaptcha_iso_code";
    f.appendChild(document.createTextNode(g.iso));

    e.appendChild(f);

    return e;
},
_getFocus: function(e){

    if(Ringcaptcha.elementFocus != e){
        Ringcaptcha.elementFocus = e;
    }
},
selectCountry: function (i) {
    var a = Ringcaptcha.$,
    b = Ringcaptcha._get_country_by_iso(i),
    c = a('ringcaptcha_user_phone'),
    d = a('ringcaptcha_user_country'),
    e = a('ringcaptcha_country_code'),
    f = a('selectExample'),
    g = a('ringcaptcha_country_code_o');

    if(b.code.length > 4){
        e.innerHTML = b.code[0]+b.code[2]+b.code[3]+b.code[4];
    }else{
        e.innerHTML = b.code;
    }
    c.className = "";
    g.value = b.code;
    f.innerHTML = "ex: "+exampleArray[b.iso];
    d.value = b.iso;
    a('ringcaptcha_country_flag').className = "ringcaptcha-country-flag-" + b.iso.toLowerCase();
    a('ringcaptcha_country_selector').title = b.name;
    a('ringcaptcha_country_dropdown').style.display = "none";
    c.focus();
},
_process_key: function (e) {
    e = e || window.event;
    if (e.keyCode == 13) {
        Ringcaptcha.processPhoneNumber(e);
        (!_isIE()) && e.preventDefault();
        return !1
    }
},
getGeolocation: function () {
    console.log("Getting Browser Location");
    if (navigator.geolocation) {
        var geolocationConfig = {
            enableHighAccuracy: true,
            maximumAge: 600000,
            timeout: 3000
        };
        navigator.geolocation.getCurrentPosition(Ringcaptcha.handleLocation, Ringcaptcha.handleError, geolocationConfig);
        return true;
    } else {
        return false;
    }
},
handleLocation: function (pos) {
    var a = RingcaptchaStatus,
    b = pos.coords,
    c = b.latitude,
    d = b.longitude,
    e = b.accuracy,
    f = b.altitude,
    g = b.altitudeAccuracy;

    console.log("Browser location. Lat: " + c + " Long: " + d + ". Accuracy: " + e);

    a.geoLat = (c != null) ? c : false;
    a.geoLng = (d != null) ? d : false;
    a.geoAccuracy = (e != null) ? e : false;
    a.geoAlt = (f != null) ? f : false;
    a.geoAltAccuracy = (g != null) ? g : false;
},
handleError: function (error) {
    var a = RingcaptchaStatus;

    a.geoLat = false;
    a.geoLng = false;
    a.geoAccuracy = false;
    a.geoAlt = false;
    a.geoAltAccuracy = false;

    console.log("Error: " + error.code);
},
guessCountry: function (e) {
    var a = Ringcaptcha.$,
    b, c = RingcaptchaStatus,
    d = a('ringcaptcha_user_phone'),
    f = a('ringcaptcha_user_country'),
    g = a('ringcaptcha_country_flag');

    if (Ringcaptcha.isPhoneValid(d.value)) {
        b = Ringcaptcha._get_country_by_iso(c.country);
        if (b.code.indexOf(d.value) != -1) {
            g.className = "ringcaptcha-country-flag-" + b.iso.toLowerCase();

            f.value = b.iso;
        } else {
            a = Ringcaptcha._get_country_by_code(d.value);
            if (a) {
                g.className = "ringcaptcha-country-flag-" + a.iso.toLowerCase();
                f.value = a.iso;
            }
        }
    }
    (!_isIE()) && e.preventDefault();
    return false;
},
searchCountry: function () {
    var a = Ringcaptcha,
    b = a.$,
    c = RingcaptchaCountries,
    d = b('ringcaptcha_user_phone'),
    f = false,
    g = b('ringcaptcha_country_flag'),
    h = b('ringcaptcha_user_country');

    if (a.isPhoneValid(d.value)) {
        for (var i = d.value.length;i > 0;i--) {
            for (var j=(c.length -1); j >= 0; j--) {
                if (d.value.substr(0, i) == c[j].code) {
                    f = j;
                    break;
                }
            }
            if (f!== false) {
                a = c[f];
                g.className = "ringcaptcha-country-flag-" + a.iso.toLowerCase();
                h.value = a.iso;
            }
        }
    }
},
fillWithCountry: function () {
    var a = Ringcaptcha.$,
    b, c = a('ringcaptcha_user_phone'),
    d = a('ringcaptcha_user_country'),
    e = RingcaptchaStatus;

    if (!Ringcaptcha.isPhoneValid(c.value)) {
        (typeof window.console !== 'undefined') && console.log('Phone invalid');
        c.className = "";
        b = Ringcaptcha._get_country_by_iso(e.country);
        //c.value = b.code;
        d.value = b.iso;
        a('ringcaptcha_country_flag').className = "ringcaptcha-country-flag-" + b.iso.toLowerCase();

        if(b.code.length > 4){
            a('ringcaptcha_country_code').innerHTML = b.code[0]+b.code[2]+b.code[3]+b.code[4];
        }else{
            a('ringcaptcha_country_code').innerHTML = b.code;
        }

        a('ringcaptcha_country_code_o').value = b.code;
        a('selectExample').innerHTML = "ex:"+exampleArray[b.iso];
    }
},
showHelp: function () {
    var w = 530, h = 640;
    var left = (screen.width/2)-(w/2);
    var top = (screen.height/2)-(h/2);
    var help = window.open(Ringcaptcha._get_help_link(),"ringcaptcha_popup","width="+w+",height="+h+",location=no,menubar=no,status=no,toolbar=no,scrollbars=no,resizable=no,dependant=yes,dialog=yes,modal=yes,unadorned=yes,top="+top+",left="+left);
    help.onresize = function() {
        help.resizeTo(w,h);
    }
},
_get_help_link: function () {
    var a=RingcaptchaStatus,
    a=a.server + a.lang + '/help?token=' + a.session;
    a = a.replace('api.', '');
    return a;
}
};
    
if(!String.prototype.trim) {
    String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/g,'');
    };
}

if(!window.console) {
    window.console = {
        log : function(str) {
            return true;
        }
    };
}

Ringcaptcha.setOptions(RingcaptchaOptions);
// Ringcaptcha.widget = Ringcaptcha.$('ringcaptcha_widget');
// Ringcaptcha.startWidget();



return Ringcaptcha;
}(RingcaptchaStatus));

document.write('<div id="ringcaptcha_widget" style="display:none"></div>');
document.write('<script>Ringcaptcha.widget = Ringcaptcha.$("ringcaptcha_widget"); Ringcaptcha.startWidget();<\/script>');
//</script>