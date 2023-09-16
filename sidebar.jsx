

export function SideBar() {
    return (
      <>
      <div className="side-cntr" id="side-bar">

        <div className="sub-1-div">
        <h2>Filter</h2>
        <input type="text" className="search" id="int-srch" />
        <button className="btn-srch" id="add-btn">Search</button>
        </div>

<div className="sub-2-div">
  <h3>Prize</h3>
  <div className="inner-sub-div">
  <input type="radio" name="radio" className="radio" />
  <p className="para-1"> 100</p>
  </div>

  <div className="inner-sub-div">
  <input type="radio" name="radio" className="radio" />
  <p className="para-1"> 200</p>
  </div>

  <div className="inner-sub-div">
  <input type="radio" name="radio" className="radio" />
  <p className="para-1"> 300</p>
  </div>

  <div className="inner-sub-div">
  <input type="radio" name="radio" className="radio" />
  <p className="para-1"> 400</p>
  </div>

</div>

      </div>

      <div className="center-line"></div>
      </>
    );
  }