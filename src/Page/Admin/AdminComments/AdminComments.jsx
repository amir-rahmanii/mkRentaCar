import React, { useEffect, useState, useContext } from 'react'
import AuthContext from '../../../Context/AuthContext'
import { MdDelete } from "react-icons/md";
import { BiShow } from "react-icons/bi";
import Modal from '../../../Component/Admins/Modal/Modal';
import SearchBar from '../../../Component/Admins/SearchBar/SearchBar';
import { GiCancel } from "react-icons/gi";
import { TiTick } from "react-icons/ti";

export default function AdminComments() {
    const authContext = useContext(AuthContext)

    const [allComments, setAllComments] = useState([])
    const [allCommentsFilters, setAllCommentsFilters] = useState([])
    //show body
    const [showBody, setShowBody] = useState(false)
    const [infoComment, setInfoComment] = useState([])
    const [DeleteCommentShow, setDeleteCommentShow] = useState(false)
    const [idComment, setIdComment] = useState('')

    // is registered
    const [showIsRegestr, setShowIsRegestr] = useState(false)
    const [showIsRegestrNo, setShowIsRegestrNo] = useState(false)


    const getAllComments = () => {
        fetch(`http://localhost:5000/comments`)
            .then(res => res.json())
            .then(result => {
                setAllComments(result)
                setAllCommentsFilters(result)
            })
    }



    useEffect(() => {
        getAllComments();
    }, [])


    //search Handler
    const searchValueHandler = (e , value) => {
        e.preventDefault()
        let filterArray = [...allCommentsFilters]
        if (value.trim()) {
            let commentsFilterValue = filterArray.filter(data => data.name.toLowerCase().includes(value.toLowerCase()) || data.carName.toLowerCase().includes(value.toLowerCase()))
            setAllComments(commentsFilterValue)
        } else {
            getAllComments();
        }
    }







    //Delete user
    const deleteComment = () => {
        fetch(`http://localhost:5000/comments/${idComment}`, {
            method: "DELETE",
        })
            .then((res) => {
                setDeleteCommentShow(false)
                getAllComments();
            })
    }

    //  For register
    const registeredComment = () => {
        fetch(`http://localhost:5000/comments/${idComment}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                isRegister: 1
            })
        })
            .then((res) => {
                setShowIsRegestr(false)
                getAllComments()
            })
    }


    //  For register No
    const registeredCommentNo = () => {
        fetch(`http://localhost:5000/comments/${idComment}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                isRegister: 0
            })
        })
            .then((res) => {
                setShowIsRegestrNo(false)
                getAllComments()
            })
    }


    return (
        <>
            <div className='container font-medium'>
                <div className='flex justify-between shadow-lg px-4 items-center w-[300px] sm:w-auto bg-black/80 mt-4 rounded-lg'>
                    <p className='text-[25px] mt-4 mb-6 font-bold text-center rounded-md text-orangeCus2 hidden md:block'>List Users</p>
                    <p className='text-[16px] mt-4 mb-6 font-bold text-center rounded-md text-orangeCus2 block md:hidden'>Users</p>
                    <SearchBar searchValueHandler={searchValueHandler} />
                </div>
                {allComments.length > 0 ? (
                    <div className='shadow-lg mt-4 rounded-lg overflow-auto  h-[500px] sm:h-[480px] w-[300px] sm:w-auto  mb-5'>
                        <table className='w-full text-center border-collapse border border-slate-500 '>
                            <thead className='font-bold'>
                                <tr className='child:p-4 sticky top-0 child:text-orangeCus2 child:bg-[#454545]'>
                                    <th>Row</th>
                                    <th>Name</th>
                                    <th>CarName</th>
                                    <th>Score</th>
                                    <th>Date</th>
                                    <th>ShowBody</th>
                                    <th>Status</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allComments.map((comment, index) => (
                                    <tr key={comment.id} className='child:p-2'>
                                        <td className={`border border-slate-600 ${comment.isRegister ? "bg-green-400" : "bg-red-400"}`} >{index + 1}</td>
                                        <td>{comment.name}</td>
                                        <td>{comment.carName}</td>
                                        <td>{comment.score}</td>
                                        <td>{comment.date.slice(0, 10)}</td>
                                        <td>
                                            <button className='bg-teal-500 text-white p-3 rounded-md cursor-pointer' onClick={() => {
                                                setInfoComment(comment)
                                                setShowBody(true)
                                            }
                                            }>
                                                <BiShow />
                                            </button>
                                        </td>
                                        <td>
                                            {comment.isRegister ? (
                                                <button className='bg-red-500 text-white p-3 rounded-md cursor-pointer' onClick={() => {
                                                    setInfoComment(comment)
                                                    setShowIsRegestrNo(true)
                                                    setIdComment(comment.id)
                                                }}>
                                                    <GiCancel />
                                                </button>
                                            ) : (
                                                <button className='bg-green-500 text-white p-3 rounded-md cursor-pointer' onClick={() => {
                                                    setInfoComment(comment)
                                                    setShowIsRegestr(true)
                                                    setIdComment(comment.id)
                                                }}>
                                                    <TiTick />
                                                </button>
                                            )}
                                        </td>

                                        <td>
                                            <button className='bg-red-500 text-white p-3 rounded-md cursor-pointer' onClick={() => {
                                                setInfoComment(comment)
                                                setDeleteCommentShow(true)
                                                setIdComment(comment.id)
                                            }}>
                                                <MdDelete />
                                            </button>
                                        </td>
                                    </tr>

                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <h2 className='bg-black/80 mx-4 text-orangeCus2 text-[30px] text-center p-5 font-bold rounded-lg mt-5'>This filter was not found 😩</h2>
                )}

            </div>

            {/* info Comment Body */}
            <Modal width="w-[500px]" height="h-auto" closedBox={showBody} setClosedBox={setShowBody} title={`Comment Body `}>
                <div className=' my-4 overflow-auto'>
                    <p>{infoComment.body}</p>
                </div>
            </Modal>


            {/* is Deleted */}
            <Modal width="w-[400px]" height="h-auto" closedBox={DeleteCommentShow} setClosedBox={setDeleteCommentShow} title={`Delete ${infoComment.name}`}>
                <p className='text-[20px] mt-5'>Do you intend to Delete the Comment?</p>
                <div className='flex gap-4 mt-5'>
                    <button onClick={deleteComment} className='bg-green-600 mx-6 w-full p-2 rounded-lg'>
                        Yes
                    </button>
                </div>
            </Modal>

            {/* is regestired */}
            <Modal width="w-[400px]" height="h-auto" closedBox={showIsRegestr} setClosedBox={setShowIsRegestr} title={`${infoComment.name} registration`}>
                <p className='text-[20px] mt-5'>Do you intend to register the Comment?</p>
                <div className='flex gap-4 mt-5'>
                    <button onClick={registeredComment} className='bg-green-600 mx-6 w-full p-2 rounded-lg'>
                        Yes
                    </button>
                </div>
            </Modal>

            {/* is regestired No */}
            <Modal width="w-[400px]" height="h-auto" closedBox={showIsRegestrNo} setClosedBox={setShowIsRegestrNo} title={`${infoComment.name} registration`}>
                <p className='text-[20px] mt-5'>Do you intend to cancel register the Comment?</p>
                <div className='flex gap-4 mt-5'>
                    <button onClick={registeredCommentNo} className='bg-green-600 mx-6 w-full p-2 rounded-lg'>
                        Yes
                    </button>
                </div>
            </Modal>


        </>
    )
}
