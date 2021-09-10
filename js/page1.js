$(document).ready(function() {

        // 監控滾輪
        $(window).scroll( function(){
        
            $('.hide').each( function(i){
                
                var bottom_of_object = $(this).offset().top + $(this).outerHeight(); //物件高度
                var bottom_of_window = $(window).scrollTop() + $(window).height();  //網頁高度
                
                // 響應式
                /* 網頁滑到，顯示*/
                if($(window).width() > 768){
                    if( bottom_of_window> bottom_of_object-300 ){
                        
                        $(this).animate({'opacity':'1'},1000);
                            
                    }
                }else{
                    if( bottom_of_window> bottom_of_object-1100 ){
                        
                        $(this).animate({'opacity':'1'},1000);
                            
                    }
                }

                
            }); 
        
        });

    
});