function payment() {
  return (
    <div className="payment-section">
      <p>Additional Monthly Payment</p>
      <div className="slider-parent">
        <div className="slider-child">
            <span><i className="fa fa-inr" aria-hidden="true"></i></span><span>0</span>
            <span id="manage-slide">
            <span className="first-amount"></span>
            <span className="first-amount"></span>
            </span>
            <div className="number">
                <span className="minus">-</span>
                <span><i className="fa fa-inr" aria-hidden="true">1,42,650</i></span>
                <span className="plus">+</span>
            </div>
            <div className="tooltip-section">
              <div className="amount-tool">
              <i className="fa fa-inr" aria-hidden="true">1,42,650</i>
              <span className="arrow">
              <i className="fa-solid fa-caret-down fa-down"></i>
              </span>
              </div>
              <div className="grade-section">
              <div className="light-grade"></div>
                <div className="grade1"></div>
                <div className="grade2"></div>
                <div className="grade3"></div>
              </div>
            </div>
        </div>
        <div className="main-amount">
        <div className="amount-bottom">
         <div className="amount-interest">
         <div>
         <span>Interest Saved</span>
         <br></br>
         <i className="fa fa-inr" aria-hidden="true"></i>
         <span className="save-inr">1,42,650</span>
         </div>
         <div className="common-payment">
         <div className="month-payment">
         <span>Additional monthly payment</span>
         <br></br>
         <i className="fa fa-inr" aria-hidden="true"></i>
         <span className="month-add">
                <p>5,094</p>
              </span>
         </div>
         <div className="total-payment">
         <span>Total monthly payment</span>
         <br></br>
         <i className="fa fa-inr" aria-hidden="true"></i>
         <span className="month-add">
                <p>5,094</p>
              </span>
         </div>
         </div>
         </div>

            </div>
            </div>
      </div>
    </div>
  );
}
export default payment;
