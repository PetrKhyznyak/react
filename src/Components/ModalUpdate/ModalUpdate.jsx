import {useState} from "react";
import "./ModalUpdate.css";
const ModalUpdate = ({children, onUpdate}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleUpdate = () => {
        onUpdate();
        setIsOpen(false);
    }


    return (
        <>
            <button className={"update-button"} onClick={() => setIsOpen(true)}>Edit</button>

            {isOpen ?
                <div className="modal-overlay">
                    <div className="modal">
                        {children}
                        <div className="modal-button__wrapper">
                            <button onClick={handleUpdate}>Update</button>
                            <button onClick={() => setIsOpen(false)}>Close</button>
                        </div>
                    </div>
                </div> : null}


        </>
    )
}

export default ModalUpdate;