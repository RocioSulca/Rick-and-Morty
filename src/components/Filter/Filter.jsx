import React from 'react'
import Gender from './Category/Gender'
import Species from './Category/Species'
import Status from './Category/Status'

export default function Filter({ setStatus, setGender, setSpecies, setPageNumber }) {

    let clear = () => {
        setStatus("");
        setGender("");
        setSpecies("");
        setPageNumber(1);
        window.location.reload(false);
    };

    return (
        <div className="col-lg-3 col-12 mb-5">
            <div className="text-center fw-bold fs-4 mb-2">Filters</div>
            <div
                style={{ cursor: "pointer" }} onClick={clear}
                className="text-primary text-decoration-underline text-center mb-3"
            > Clear Filters </div>
            <div className="accordion" id="accordionExample">
                {/* Category components will be placed here */}
                <Status
                    updatePageNumber={setPageNumber}
                    updateStatus={setStatus}
                />
                <Species
                    updatePageNumber={setPageNumber}
                    updateSpecies={setStatus}
                />
            </div>
        </div>
    );

}
