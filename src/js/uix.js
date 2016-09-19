/* 
================================================================================
 ////////        ///////                                                        
    /////          /////                                                        
    ////           ////                                                         
   /////           ////                                                         
   /////           ////                                                         
   /////          /////                                                         
   ////           /////                                                         
  /////           ////                                                          
  /////           ////                             ///                          
  ///// ////     /////     ///// ////     //////   //////////    ////     ///// 
  //// /   ///   /////   ////  / ////    ///   //// //  ////    /////   //   ///
 //////    ///   ////   ////    ////    ////   ////     ////    ////   ///   ///
 /////     ////  ////   ////    ////   /////   ////    /////    ////   ////  ///
 ////      //// /////  ////     ////   ////    ////    /////    ////   //////   
 ////     ///// ///// /////     ////   ////   /////    ////    /////   ///////  
/////     ///// ////  /////     ///    ////   ////     ////    ////     /////// 
/////     ////  ////  /////    ////    ////   ///      ////    ////       ///// 
////      //// /////  ////     ////  //   /////       /////   /////  ////  //// 
////     ////  /////  ////    /////  //               ////    /////  ////   /// 
////     ///   /////  ////    ////  /////////////     ////   ////// /////   /// 
 ///    ///    ////  / ///   / /// / /////////////    ////  /  /// /  //   ///  
  ///////       /////   /////   ///   ////////////     /////   ////    /////    
                                      ////////////                              
                                     //         //                              
                                    //          //                              
                                    //          /                               
                                    //         /                                
                                     //      //                                 
                                      ///////                                   
================================================================================
                              Lex Blagus, web systems architect <http://blag.us>
================================================================================
*/

(function(){
	// =============================================================================
	UIX = function(){
		// Setup user interface
		domOlWrapper = document.querySelectorAll('main section.slider ol.slide-wrapper');
		_model.sliderHome.sliderElements = 
			domOlWrapper &&
			domOlWrapper[0] &&
			domOlWrapper[0].querySelectorAll('li.slide')
		;
		// Setup actions
		document.getElementById('btt-slider-nav-previous').addEventListener('click', this.navigateSlide);
		document.getElementById('btt-slider-nav-next').addEventListener('click', this.navigateSlide);
	};
	// =============================================================================
	UIX.prototype.navigateSlide = function(){
		offset = parseInt(this.getAttribute("data-navigation-offset"));
		_model.sliderHome.currentIndex+=offset;

		// Around the world
		if( _model.sliderHome.currentIndex >= _model.sliderHome.sliderElements.length){
			_model.sliderHome.currentIndex = 0;
		} else if( _model.sliderHome.currentIndex < 0 ){
			_model.sliderHome.currentIndex = _model.sliderHome.sliderElements.length-1;
		} else {
		}

		for(var i=0; i<_model.sliderHome.sliderElements.length; i++){
			if(_model.sliderHome.currentIndex == i){
				_model.sliderHome.sliderElements[i].classList.add('active');
				_model.sliderHome.sliderElements[i].classList.remove('inactive');
			}else{
				_model.sliderHome.sliderElements[i].classList.remove('active');
				_model.sliderHome.sliderElements[i].classList.add('inactive');
			}
		}
	};
	// =============================================================================
	var _model = {
		sliderHome : {
			currentIndex : 0,
			sliderElements : {}
		}
	};
	// =============================================================================
}());
