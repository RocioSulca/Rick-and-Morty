import React from 'react';
import styles from './Card.module.scss'

export default function Card({ results }) {
    let display;

    if (results) {
        display = results.map((item) => {
            let { id, image, name, status, location } = item;

            return (
                <div
                    key={id} className={`${styles.card} d-flex flex-column justify-content-center col-4`}
                    >
                      <img className={`${styles.img} img-fluid`} src={image} alt="" />
                      <div className={`${styles.content}`}>
                        <div className="fs-5 fw-bold mb-4">{name}</div>
                        <div className="">
                          <div className="fs-6 fw-normal">Last Location</div>
                          <div className="fs-5">{location.name}</div>
                        </div>
                      </div>
                    </div>
                // {
                //     (() => {
                //       if (status === "Dead") {
                //         return (
                //           <div className={`${styles.badge} position-absolute badge bg-danger`}>
                //             {status}
                //           </div>
                //         );
                //       } else if (status === "Alive") {
                //         return (
                //           <div className={`${styles.badge} position-absolute badge bg-success`}>
                //             {status}
                //           </div>
                //         );
                //       } else {
                //         return (
                //           <div
                //             className={`${styles.badge} position-absolute badge bg-secondary`}
                //           >
                //             {status}
                //           </div>
                //         );
                //       }
                //     })()}
            );
        });
    } else {
        display = 'No se encontraron personajes :('
    }

    return (
        <div>{display}</div>
    )
}
