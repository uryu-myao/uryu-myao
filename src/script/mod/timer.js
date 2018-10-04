/*
    *** timer ***

    - count down timer
    @ about.html

*/

(function () {

    const countup = document.querySelector('.countup')

    if ( countup )
    {
        countup.addEventListener('load', upTime ( 'nov,03,1988,00:00:00' ));

        function upTime ( countTo )
        {
            now     = new Date ();
            countTo = new Date ( countTo );

            difference = ( now - countTo );
            days  = Math.floor ( difference / ( 60*60*1000*24 ) * 1 );
            years = Math.floor ( days / 365 );

            if ( years > 1 )
            {
                days = days - ( years * 365 )
            }
            hours  = Math.floor (( difference % ( 60*60*1000*24 )) / ( 60*60*1000 ) *1 );
            mins   = Math.floor ((( difference % ( 60*60*1000*24 )) % ( 60*60*1000 )) / ( 60*1000 ) *1 );
            secs   = Math.floor (((( difference % ( 60*60*1000*24 )) % ( 60*60*1000 )) % ( 60*1000 )) / 1000*1 );

            document.getElementById('years').firstChild.nodeValue   = years;
            document.getElementById('days').firstChild.nodeValue    = days;
            document.getElementById('hours').firstChild.nodeValue   = hours;
            document.getElementById('minutes').firstChild.nodeValue = mins;
            document.getElementById('seconds').firstChild.nodeValue = secs;

            clearTimeout ( upTime.to );
            upTime.to = setTimeout ( function ()
            {
                upTime ( countTo )
            }, 1000 )
        }
    }

})(window);
