import React, {useState} from 'react'
import AvatarPatrick from '../images/avataPatrick.jpg'
import AvatarTrump from '../images/avatarTrump.jpg'
import Food from "../images/food.jpg";

const FriendRequest = (props) => {
    //state for whether the friend request is handled
    const [isAdded, setIsAdded] = useState(props.item.isAdded)

    //state for pop up window
    const [popUp, setPopUp] = useState(false)

    //state for pop up window message
    const [popUpMsg, setPopUpMsg] = useState('')


    const changeIsAdded = (newIsAdded) => {
        setIsAdded(newIsAdded)
        //change data in database
    }

    //get variables from the props
    const item = props.item
    const itemType = item.type
    const itemDate = item.date
    const itemFrd = item.friends
    const itemStatus = item.status

    return (
        <div className="content-item-wrap">

            {/*if message is read, hide the status dot*/}
            <div className="content-item-left">
                {itemStatus === 'read' &&
                <div className="msg-status-read"></div>
                }
                {itemStatus === 'unread' &&
                <div className="msg-status-unread"></div>
                }
                {itemFrd.length === 1 &&
                <img className='img-avatar img-avatar-normal' src={AvatarTrump} alt=""/>
                }
                {itemFrd.length >= 2 &&
                    <>
                        <img className='img-avatar img-avatar-top' src={AvatarTrump} alt=""/>
                        <img className='img-avatar img-avatar-bot' src={AvatarPatrick} alt=""/>
                    </>
                }
            </div>

            {/*render different text depending on the message type*/}
            <div className="content-item-mid">
                {itemType === 'likePost' &&
                <div>
                    <b>{itemFrd[0]}</b>
                    {itemFrd.length >= 2 && <b>, {itemFrd[1]}</b>}
                    {itemFrd.length > 2 && <>&nbsp;and {itemFrd.length - 2} others people</>}
                    liked your post
                </div>
                }
                {itemType === 'tryPost' &&
                <div>
                    <b>{itemFrd[0]}</b>
                    {itemFrd.length >= 2 && <b>, {itemFrd[1]}</b>}
                    {itemFrd.length > 2 && <>&nbsp;and {itemFrd.length - 2} others people</>}
                    &nbsp; wanna try a dish you posted
                </div>
                }
                {itemType === 'tryDish' &&
                <div>
                    <b>{itemFrd[0]}</b>
                    &nbsp;and you both wanna try a dish from RAISU
                </div>
                }
                {itemType === 'addFrd' &&
                <div>
                    <b>{itemFrd[0]}</b>
                    &nbsp;just sent you a friend request.
                </div>
                }
                <div className='content-item-date'>
                    {itemDate}
                </div>
            </div>

            <div className="content-item-right">

                {/*display buttons if message type is addFrn*/}
                {(itemType === 'addFrd' && isAdded === false) &&
                <>
                    <button className="btn-frd fa fa-check" onClick={() => {
                        changeIsAdded(true)
                        setPopUpMsg('Accepted!')
                        setPopUp(true)
                    }}></button>
                    <button className="btn-frd fa fa-times" onClick={() => {
                        changeIsAdded(false)
                        setPopUpMsg('Rejected!')
                        setPopUp(true)
                    }}></button>
                </>
                }

                {/*display images if message type is others*/}
                {itemType !== 'addFrd' &&
                <div className="img-food-frame">
                    <img className='img-food' src={Food} alt=""/>
                </div>
                }
            </div>

            {/*pop up the window if friend request is accepted or rejected*/}
            {popUp === true &&
            <div className="pop-up-canvas">
                <div className="pop-up-wrap">
                    <div className='pop-up-text'>{popUpMsg}</div>
                    <button className='btn-ok' onClick={() => setPopUp(false)}>OK</button>
                </div>
            </div>
            }
        </div>
    )
}

export default FriendRequest
