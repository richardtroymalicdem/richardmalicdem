let process = {
	menu:function(){
		// let source_vid = 'https://www.youtube.com/watch?v=d-P7YUSKbpQ';
		    // <iframe src={source_vid} width="100%" height='300px'/>
		let content = <div>
		
		
			<ul>
		       <p><b>Philippine National Symbols</b></p>
				<center><li><a href='#' onClick={process.page1}><center><img src='img/image1.jpg' width='100px' /></center><center> Kalabaw (Carabao / Water buffalo)</center></a></li></center>
				<li><a href='#' onClick={process.page2}><center><img src='img/image2.jpg' width='100px' /></center><center>Litsong Baboy (Roasted pig)</center> </a></li>
				<center><li><a href='#' onClick={process.page3}><center><img src='img/image3.jpg' width='100px' /></center><center> Sampaguita (Sampaguita)</center></a></li></center>
				<li><a href='#' onClick={process.page4}><center><img src='img/image4.jpg' width='100px' /></center><center>Anahaw (Fan Palm)</center></a></li>
				<center><li><a href='#' onClick={process.page5}><center><img src='img/image5.jpg' width='100px' /></center><center> Bangus (Milkfish)</center></a></li></center>
				<li><a href='#' onClick={process.page6}><center><img src='img/image6.jpg' width='100px' /></center><center> Manga (Mango)</center></a></li>
				<center><li><a href='#' onClick={process.page7}><center><img src='img/image7.jpg' width='100px' /></center><center> Bahay Kubo (Nipa Hut)</center></a></li></center>
				<li><a href='#' onClick={process.page8}><center><img src='img/image8.jpg' width='100px' /></center><center> Agila (Philippine eagle)</center></a></li>
				<center><li><a href='#' onClick={process.page9}><center><img src='img/image9.jpg' width='100px' /></center><center> Narra (Narra)</center></a></li></center>
				<li><a href='#' onClick={process.page10}><center><img src='img/image10.jpg' width='100px' /></center><center> Wikang Filipino (Filipino)</center></a></li>
				<center><li><a href='#' onClick={process.page11}><center><img src='img/image11.jpg' width='100px' /></center><center> Barong Tagalog</center></a></li></center>
				<li><a href='#' onClick={process.page12}><center><img src='img/image12.jpg' width='100px' /></center><center> Baro at Saya</center></a></li>
				<center><li><a href='#' onClick={process.page13}><center><img src='img/image13.jpg' width='100px' /></center><center> Bakya</center></a></li></center>
				<li><a href='#' onClick={process.page14}><center><img src='img/image14.jpg' width='100px100' /></center><center> Sipa</center></a></li>
				<center><li><a href='#' onClick={process.page15}><center><img src='img/image15.jpg' width='100px' /></center><center> Cariñosa</center></a></li></center>
				<li><a href='#' onClick={process.page16}><center><img src='img/image16.jpg' width='100px' /></center><center> Dr. Jose Rizal</center></a></li>
				<center><li><a href='#' onClick={process.page17}><center><img src='img/image17.jpg' width='100px' /></center><center> Watawat ng Pilipinas (Philippine flag)</center></a></li></center>
				<li><a href='#' onClick={process.page18}><center><img src='img/image18.jpg' width='100px' /></center><center> Rizal Park</center></a></li>
				<center><li><a href='#' onClick={process.page19}><center><img src='img/image19.jpg' width='100px' /></center><center> Lupang Hinirang</center></a></li></center>
			
			</ul>
		</div>;
		ReactDOM.render(content,document.getElementById('root'));
	},
	page1:function(){
		let content = <div>
				<img src='img/image1.jpg' width='100%' />
				Pambansang Hayop (National Animal)<br/><a href='#' className='btn-back' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));

			},
	page2:function(){
		let content = <div>
				<img src='img/image2.jpg' width='100%' />
				Pambansang Pagkain (National Food)<br/><a href='#' className='btn-back' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));

			},
	page3:function(){
		let content = <div>
				<img src='img/image3.jpg' width='100%' />
				Pambansang Bulaklak (National Flower)<br/><a href='#' className='btn-back' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));

			},
	page4:function(){
		let content = <div>
				<img src='img/image4.jpg' width='100%' />
				Pambansang Dahon (National Leaf)<br/><a href='#' className='btn-back' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));

			},
	page5:function(){
		let content = <div>
				<img src='img/image5.jpg' width='100%' />
				Pambansang Isda (National Fish)<br/><a href='#' className='btn-back' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));

			},
	page6:function(){
		let content = <div>
				<img src='img/image6.jpg' width='100%' />
				Pambansang Prutas/bungangkahoy (National Fruit)<br/><a href='#' className='btn-back' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));

			},
	page7:function(){
		let content = <div>
				<img src='img/image7.jpg' width='100%' />
				Pambansang Tirahan (National House)<br/><a href='#' className='btn-back' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));

			},
	page8:function(){
		let content = <div>
				<img src='img/image8.jpg' width='100%' />
				Pambansang Ibon (National Bird)<br/><a href='#' className='btn-back' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));

			},
	page9:function(){
		let content = <div>
				<img src='img/image9.jpg' width='100%' />
				Pambansang Punungkahoy (National Tree)<br/><a href='#' className='btn-back' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));

			},
	page10:function(){
		let content = <div>
				<img src='img/image10.jpg' width='100%' />
				Pambansang Wika (National Language)<br/><a href='#' className='btn-back' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));

			},
	page11:function(){
		let content = <div>
				<img src='img/image11.jpg' width='100%' />
				Pambansang Kasuotan ng Lalaki (National Dress for Male)<br/><a href='#' className='btn-back' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
			},
	page12:function(){
		let content = <div>
				<img src='img/image12.jpg' width='100%' />
			Pambansang Kasuotan ng Babae (National Dress for Female)<br/><a href='#' className='btn-back' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));

			},
	page13:function(){
		let content = <div>
				<img src='img/image13.jpg' width='100%' />
				Pambansang Sapin sa Paa (National Footwear)<br/><a href='#' className='btn-back' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));

			},
	page14:function(){
		let content = <div>
				<img src='img/image14.jpg' width='100%' />
			Pambansang Laro (National Sport)<br/><a href='#' className='btn-back' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));

			},
	page15:function(){
		let content = <div>
				<img src='img/image15.jpg' width='100%' />
				Pambansang Sayaw (National Dance)<br/><a href='#' className='btn-back' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));

			},
	page16:function(){
		let content = <div>
				<img src='img/image16.jpg' width='100%' />
				Pambansang Bayani (National Hero)<br/><a href='#' className='btn-back' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));

			},
	page17:function(){
		let content = <div>
				<img src='img/image17.jpg' width='100%' />
				Pambansang Watawat (National Flag)<br/><a href='#' className='btn-back' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));

			},
	page18:function(){
		let content = <div>
				<img src='img/image18.jpg' width='100%' />
				Pambansang parke (National Park)<br/><a href='#' className='btn-back' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));

			},
	page19:function(){
		let content = <div>
				<img src='img/image.jpg' width='300px' />
				Pambansang Awit (National Anthem)<br/><a href='#' className='btn-back' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));

	
	},
	
	loading:function(){
		let content = <div>
					<div className="progressbar-infinite"></div>
					
					<div align='center'>
						<img src='img/logo.png' width='100%' />
						Loading...
					</div>
				</div>;
		ReactDOM.render(content,document.getElementById('root'));
		
	},
	

	
}

let counting = 0;
process.loading();
setTimeout(function(){
	process.menu();
},1000);