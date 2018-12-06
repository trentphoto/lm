import React, { Component } from 'react'
import Btn from './Btn'
import $ from 'jquery'

class myModal extends Component {
  render() {
    return (
      <>
        <Btn classes="mb-5" text="read now" onClick={this.show} />
        <div className="modal" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <div className="row">
                  <div className="col-sm-6">
                    <h2 className="font-weight-bold">What is the actual impact of your life on other people?</h2>
                    <p>What is the actual impact of your life on other people? Do people find you encouraging or exhausting?</p>
                    <p>In this short PDF (you can read it in one sitting), E. Stanley Ott shares how to grow a heart that longs to invest in others and give yourself away.</p>

                    <form onSubmit={() => {console.log(2)}}>
                      <div className="form-group">
                        <input type="text" className="form-control text-center" placeholder="your name" />
                      </div>
                      <div className="form-group">
                        <input type="email" className="form-control text-center" placeholder="your email" />
                      </div>
                      <Btn color="danger" classes="btn-block mb-3" text="submit" />
                    </form>
                  </div>
                  <div className="col-sm-6">
                    <img src="https://brightsaltmedialabs.com/buildingoneanotheradmin/wp-content/uploads/2018/11/cover.jpg" className="img-fluid d-none d-sm-block" alt="Grow a Heart to Impart" />
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }

}

export default myModal
