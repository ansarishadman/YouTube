import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';


const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  }
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex col-span-1'>
        <img
          onClick={() => toggleMenuHandler()}
          className='h-8 cursor-pointer' alt="hamburger-logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAAD7+/vl5eV0dHQ6Ojr19fUzMzPq6uqnp6cwMDC2trbX19dra2t9fX3w8PBWVlagoKA/Pz/Kysrd3d2Li4tNTU0SEhI4ODhoaGh3d3cjIyOtra0hISGmpqZubm6FR3G1AAAB0ElEQVR4nO3daW7bMBAGUDV1vERO4uxrm/vfsk4aIL8aEaTRocbvnWA+UOJiWJxhAAAAAAAAAAAAAPjPlj/7tDxMvO3iR7+et835lufRISa8NQ7kehWdYNJq3ZSw/4D7iCcNAS+iqy9yUR/wMrr2QpfVCX9Hl15oU51wF116oV11wjnMM+9W1QnPoksvdFad8Dq69ELX1QnnsVi0LBc30aUXuqlOOLxE117kpT7gTAaxYQiH4Sq6+gJXLQGHYRNd/6T6Dc2n2743Nrvb1oB76/Fu0ae7se1sCAAAAAAAAAB06aRPB0q3HBf3p326X4wH+Khk8xD9l5lvPby2BnyKjjDpqS1g71/MvDtvCfgaXX2Rlgc1uvZC9QHH6NILjdUJ+59m/qp/Ex+jSy90Wp0w//cW+ccw/3uYfy7Nvx4ewZ4m/750DpNN49li/6BmPx8ewRn/Q/QPMv9woHQAAAAAAAAAQEey332Z/v7S9HfQpr9HOP9d0L+iiy/ScJ/3PIawZRDz36ufvzdC/u8t8vco6Xs786W+z0z+XkH5+z3NZLlo6Nk1j7nmsSXgEfTOG5Zv0QkmtPY/3Ns+R4f4xgF6WH5I3ocUAAAAAAAAAAAAoNwfMzE7moZPeKEAAAAASUVORK5CYII=" />
        <a href="/">
          <img className='h-8 mx-2' alt="youtube-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png" />
        </a>
      </div>
      <div className='col-span-10 px-10'>
        <input className='w-1/2 border border-gray-400 p-2 rounded-l-full' placeholder='Search' type="text" />
        <button className='border border-gray-400 p-2 rounded-r-full bg-gray-100'>Search</button>
      </div>
      <div className='col-span-1'>
        <img className='h-8' alt="user-icon" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
      </div>
    </div>
  )
}

export default Header