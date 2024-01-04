let count = 0;
let btn = document.getElementById('btn');
let mobile = document.querySelector('.mobile');

btn.addEventListener('click', ()=>{

		if((count % 2) == 0){
			mobile.style.transform = 'translateX(0%)';			
			mobile.style.transition = 'transform 0.5s';		
		}else{
			mobile.style.transform = 'translateX(-100%)';			
		}

		count++;
	
})

mobile.addEventListener('click', ()=>{
	
})