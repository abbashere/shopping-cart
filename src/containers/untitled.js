<div className="content-section default-border-bottom">
              <div className="left-section" >
                <img src="./images/T1.jpg" alt=""/>
              </div>
              <div className="right-top">
                <div className="section product-description margin-right200">
                  <h4>{item.get('p_name')}</h4>
                  <p>Style #: {item.get('p_style')}</p>
                  <p>Color: {item.get('p_variation')}</p>
                </div>
                <div className="section margin-right30">
                  $
                </div>
                <div className="section margin-right30">
                  <label className="label-qty">Qty: {item.get('p_quantity')}</label>
                  <input type="text" value="1" />
                </div>
                <div className="section">
                  {item.get('p_price')}
                </div>
              </div>
              <div className="right-bottom">
                <p className="action"><a href="#">Edit</a><span className="pipe">|</span><a href="#">X Remove</a><span className="pipe">|</span><a href="#">Save for later Use</a></p>
              </div>
            </div>
