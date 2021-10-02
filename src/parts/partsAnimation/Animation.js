import React, {useEffect, useState} from 'react';
import project from 'Constant/Api/project';
import ReactPlayer from 'react-player';
import ReactPaginate from 'react-paginate';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';


export default function Animation() {
    const [fetch, setFetch] = useState([])
    useEffect(() => {
        project.animasi()
        .then((res) => {
            setFetch(res)
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])
    console.log(fetch)

    const users = fetch.slice(0, 7)
    console.log(users)
    const [pageNumber, setPageNumber] = useState(0)
    const usersPerPage = 1;
    const pagesVisited = pageNumber * usersPerPage;
    const displayUsers = users.slice(pagesVisited, pagesVisited + usersPerPage)
    .map((item) => {
        return (
            <>
            <Bounce bottom>
                <div className="flex mb-5 justify-center aspect-w-16 aspect-h-9" key={item?.id}>
                    <ReactPlayer
                        url={item?.project_link}
                        height="full"
                        width="full"
                        controls
                    />
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
        <div className="md:my-36 my-24">
            <div className="container mx-auto w-4/5 h-screen">
                    {displayUsers}
                <div className="flex my-20 justify-center">
                    <Fade left delay={1000}>
                        <ReactPaginate
                            previousLabel={"<<"}
                            nextLabel={">>"}
                            pageCount={pageCount}
                            onPageChange={changePage}
                            containerClassName={"pagination px-24"}
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
