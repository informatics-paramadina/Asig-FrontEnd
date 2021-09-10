import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProject} from 'Store/action/project';
import project from 'Constant/Api/project';
import ReactPlayer from 'react-player';
import ReactPaginate from 'react-paginate';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';


export default function Animation() {
    const dispatch = useDispatch();
    const PROJECT = useSelector(state => state.project)
    useEffect(() => {
        project.animasi()
        .then((res) => {
            dispatch(fetchProject(res))
        })
        .catch((err) => {
            console.log(err);
        })
    }, [dispatch])

    console.log(Object.values(PROJECT.data));
    const [users] = useState(Object.values(PROJECT.data).slice(0, 7));
    console.log(users)
    const [pageNumber, setPageNumber] = useState(0)
    const usersPerPage = 1;
    const pagesVisited = pageNumber * usersPerPage;
    const displayUsers = users.slice(pagesVisited, pagesVisited + usersPerPage)
    .map((item) => {
        return (
            <>
            <Bounce bottom>
                <div className="flex justify-center">
                    <div className="mb-5">
                        <ReactPlayer 
                            url={item?.project_link}
                            width='700px'
                            height='400px'
                            controls
                        />
                    </div>
                </div>
                <div className="mb-10 text-gray-400">
                <h2 className="text-3xl font-bold flex justify-center">{item?.nama_project ?? "name Project"}</h2>
                <p className="text-lg my-10">{item?.description ?? "Description"}</p>
                    <h4 className=""> 
                        <span className=" font-medium pr-2">Made by :</span> 
                            {item?.creator ?? "creator"} 
                    </h4>
                </div>
            </Bounce>
            </>
        )
    })

    const pageCount = Math.ceil(users.length / usersPerPage);
    const changePage = ({selected}) => {
        setPageNumber(selected)
    }
    
    return (
        <div className="mt-28">
            <div className="container mx-auto w-4/5 h-screen">
                    {displayUsers}
                <div className="my-20">
                    <Fade left delay={1000}>
                        <ReactPaginate 
                            previousLabel={"<<"}
                            nextLabel={">>"}
                            pageCount={pageCount}
                            onPageChange={changePage}
                            containerClassName={"pagination"}
                            previousLinkClassName={"previousBttn"}
                            nextLinkClassName={"nextBttn"}
                            disabledClassName={"paginationDisabled"}
                            activeClassName={"paginationActive"}
                            />
                    </Fade>
                </div>
            </div>
        </div>
    )
}
