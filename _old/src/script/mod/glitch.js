/*
 *    *** glitch ***
 *
 *    - video and picture glitch effect
 *    @ top.html
 *
 */


$(function(){
    let $glitchPic = $(".pic_glitch")

    if ($glitchPic) {
        $glitchPic.mgGlitch({
            // set 'true' to stop the plugin
    		destroy : false,
            // set 'false' to stop glitching
            glitch: true,
            // set 'false' to stop scaling
            scale: true,
            // set 'false' to stop glitch blending
            blend : true,
            // select blend mode type
            blendModeType : 'hue',
            // set min time for glitch 1 elem
            glitch1TimeMin : 20,
            // set max time for glitch 1 elem
            glitch1TimeMax : 600,
            // set min time for glitch 2 elem
            glitch2TimeMin : 800,
            // set max time for glitch 2 elem
            glitch2TimeMax : 1000,
    	})
    }
});
