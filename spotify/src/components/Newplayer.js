import React from 'react'
import  Newdata  from './mixes.js'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHome,
	faSearch ,
	faFolderOpen,faPlusSquare,faHeart
	
   
  } from "@fortawesome/free-solid-svg-icons";
import Seacrh  from './Search'
import Search from './Search';




function Spotify(props){
	return (

		<div className="flex relative">
			<div className="w-2/12 h-full bg-black mb-2 text-gray-100 p-6 fixed ">
			 <img
        className="mb-4 w-4/6"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
			<div className="p-2  mt-6 font-bold hover:bg-zinc-800 hover:rounded-md ml-2 text-stone-300 antialiased  hover:text-white flex">
			
			
				<FontAwesomeIcon icon={faHome} size="lg" color="white" />
				<div className = "ml-4">
				Home	
				</div>
				
				
			</div>
			<div  className="p-2  font-bold hover:bg-zinc-800 hover:rounded-md ml-3 text-stone-300 antialiased  hover:text-white flex hover:bg-zinc-800 hover:rounded-md">
			<FontAwesomeIcon icon={faSearch} size="lg" color="white" />
				<div className = "ml-4" >
				<button onClick= {Search()} >Seacrh	</button>
				
				</div>
				
			</div>
			<div className="p-2 font-bold hover:bg-zinc-800 hover:rounded-md ml-2 text-stone-300 antialiased  hover:text-white flex">
			<FontAwesomeIcon icon={faFolderOpen} size="lg" color="white" />
				<div className = "ml-4">
				Your Library	
				</div>
			</div>
			<div className="p-2 font-bold hover:bg-zinc-800 hover:rounded-md ml-2 text-stone-300 antialiased  hover:text-white flex">
			
			<FontAwesomeIcon icon={faPlusSquare} size="lg" color="white" />
			<div className = "ml-4">
			Create Playlist		
				</div>
			
		</div>
		<div className="p-2 font-bold hover:bg-zinc-800 hover:rounded-md ml-2 text-stone-300 antialiased  hover:text-white flex">
		<FontAwesomeIcon icon={faHeart} size="lg" color="white" />
		<div className = "ml-4">
			Liked Songs	
				</div>
		</div>

		<div className="p-2 font-bold hover:bg-zinc-800 hover:rounded-md ml-2 text-stone-300 antialiased  hover:text-white">
			Playlist 1
		</div>
		
			
		</div>


		<div className="bg-gradient-to-b from-red-900 to-black w-full ml-64  ">

			
			<div className ="text-2xl font-bold hover:bg-zinc-800 hover:rounded-md text-white antialiased m-6 mt-20 ">
				Your Top Mixes
			</div>


      

		

		



                  <Newdata />
				  <Newdata />
				  <Newdata />
				  <Newdata />
				  <Newdata />
				  <Newdata />
				  





		</div>




		</div>





	
		
	)
}

export default Spotify