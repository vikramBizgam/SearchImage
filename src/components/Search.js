import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {getAllPhotos,removeAllPhotos} from '../Redux/Photos'
import axios from 'axios'
import Image from "./Image"



function Search(){
    let dispatch = useDispatch()
    const { allPhotos } = useSelector((state) => state.photos);
    let [search,setSearch] = useState('')
    let [page,setPage] = useState(1)
    let [totalSearch, setTotalSearch] = useState(0)

    let InputChange = (e) => {
        setSearch(e.target.value)
    }

    let searchButton = () => {
        dispatch(removeAllPhotos())
        setPage(val => val+1)
        axios.get(`${process.env.REACT_APP_BASE_URL}`,{
            params:{
                query : search,
                page : page,
                per_page : 12
            },
            headers:{
                Authorization : `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`
            }
        }).then((res) => {
            setTotalSearch(res.data.total)
            dispatch(getAllPhotos(res.data.results))
        })
    }

    let searchResult = () => {
        setPage(val => val+1)
        axios.get(`${process.env.REACT_APP_BASE_URL}`,{
            params:{
                query : search,
                page : page,
                per_page : 12
            },
            headers:{
                Authorization : `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`
            }
        }).then((res) => {
            dispatch(getAllPhotos(res.data.results))
        })
    }

    let nextPage = () => {
        searchResult()
    }

    return (
        <div className='container'>
            <div className='d-flex justify-content-center'>
                <div className='input_div'>
                    <input className='form-control' type="text" placeholder="Search any photo..." onChange={InputChange}/>
                </div>
                <div className='margin-10px' style={{"marginLeft":"10px"}}>
                    <button className='btn btn-dark' onClick={searchButton}>Search</button>
                </div>
            </div>
            
            {allPhotos.length > 0 && 
            <div>
                <div style={{"fontSize":"30px","textAlign":"center"}}>
                    {search}
                </div>
                <div style={{"fontSize":"15px","textAlign":"center","color":"#ccc"}}>
                    Found {totalSearch} results...
                </div>
                <div>
                    
                </div>
                <div className='images_list_div'>
                    {allPhotos.map((item)=>{
                        return(
                            <div key={item.id} className="image_main_div">
                                <Image data={item.urls.regular}/>
                            </div>
                        )
                    })}
                </div>
                
                <div style={{"textAlign":"center"}}>
                    <button className='btn btn-dark' onClick={nextPage}>Load more</button>
                </div>
            </div>}
        </div>
    )
}

export default Search