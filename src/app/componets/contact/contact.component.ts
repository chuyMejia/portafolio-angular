import { Component,OnInit } from '@angular/core';


//import * as $ from 'jquery';

declare var  $:any;

// Ahora puedes usar jQuery en tus métodos y funciones


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

	ngOnInit(){
		$( document ).ready(function() {
			  // Handler for .ready() called.
			  console.log('ffffff');
			});


		$(function(){
    		$('.bxslider').bxSlider({
	      mode: 'fade',
	      captions: false,
	      slideWidth: 400
	    });
	  });
		
	}

}
