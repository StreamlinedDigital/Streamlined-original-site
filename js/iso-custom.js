$(window).load(function(){ 
  
    var $container = $('.portfolio'); 
    $container.isotope({ 
        filter: '*', 
        animationOptions: { 
            duration: 750, 
            easing: 'linear', 
            queue: false, 
        } 
    }); 
  
   $('#portfolio-isotope ul a').click(function(){ 
        var selector = $(this).attr('data-filter'); 
        $container.isotope({ 
            filter: selector, 
            animationOptions: { 
                duration: 750, 
                easing: 'linear', 
                queue: false, 
            } 
        }); 
      return false; 
    }); 

    var $optionSets = $('#portfolio-isotope ul'),
       $optionLinks = $optionSets.find('a'); 
   
       $optionLinks.click(function(){ 
          var $this = $(this); 
      // don't proceed if already selected 
      if ( $this.hasClass('selected') ) { 
          return false; 
      } 
      var $optionSet = $this.parents('#portfolio-isotope ul');
   $optionSet.find('.selected').removeClass('selected'); 
   $this.addClass('selected');  
}); 
}); 