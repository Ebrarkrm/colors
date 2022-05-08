import React, {useState} from "react";
import Modal from "react-modal"
import {GrClose} from "react-icons/gr"

const SideBar = () => {
    const [modalIsOpen,setModalIsOpen]=useState(false)

   const toggleModal = () => {
        setModalIsOpen(!modalIsOpen)

   }
    return (
        <>
          <aside className="sidebar">
              <div className="logo">
                  <a>Brand<b>Colors</b></a>
              </div>
              <div className="description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, vero!
              </div>
              <nav className="menu">
                  <ul>
                      <li>
                          <a onClick={toggleModal}>Abouth brand colors</a>
                      </li>
                  </ul>
              </nav>
          </aside>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={toggleModal}
                className="about-modal"
                overlayClassName="about-modal-overlay">
                <button className="modal-close-button" onClick={toggleModal}><GrClose/></button>
                <h3>About BrandColors</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusantium corporis deserunt dolorem earum eligendi ex explicabo iusto minima nulla pariatur quasi, repellat, saepe tempore.</p>


                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dicta dolores enim facere iure quae quisquam repellendus sequi tempora unde!</p>

            </Modal>
        </>
    )

}
export default SideBar;