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
	// Public methods
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
		console.info('navigateSlide');
		offset = parseInt(this.getAttribute("data-navigation-offset"));
		// sliders = _model.sliderHome.sliderElements;
		_model.sliderHome.currentIndex+=offset;
		// console.log('offset',offset);
		// console.log('sliders',sliders);
		// console.log('sliders.length',sliders.length);
		// console.log('_model.sliderHome.currentIndex',_model.sliderHome.currentIndex);

		// Around the world
		if( _model.sliderHome.currentIndex >= _model.sliderHome.sliderElements.length){
			console.log('Go to begin');
			_model.sliderHome.currentIndex = 0;
		} else if( _model.sliderHome.currentIndex < 0 ){
			console.log('Go to end');
			_model.sliderHome.currentIndex = _model.sliderHome.sliderElements.length-1;
		} else {
			console.log('Ok');
		}
		console.log('_model.sliderHome.currentIndex',_model.sliderHome.currentIndex);

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
	// Public properties
	// =============================================================================
	UIX.prototype.utils = {
		//...
	};
	// =============================================================================
	// Private methods
	// =============================================================================
	var somethingPrivate = function(){
		//...
	};
	// =============================================================================
	// Private properties
	// =============================================================================
	var _model = {
		sliderHome : {
			currentIndex : 0,
			sliderElements : {}
		}
	};
	// =============================================================================
}());
