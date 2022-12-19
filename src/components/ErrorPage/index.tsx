import React from 'react'

import './styles.css'

export default () => {
    return (
        <div>

            <section className="page_404">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 ">
                            <div className="col-sm-10 col-sm-offset-1  text-center">
                                <div className="four_zero_four_bg">
                                    <h1 className="text-center ">404</h1>


                                </div>

                                <div className="contant_box_404">
                                    <h3 className="h2">
                                        Parece que te has perdido
                                    </h3>

                                    <p>la página que está buscando no existe o no tiene acceso!</p>

                                    <a href="/" className="link_404">Volver al inicio</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}