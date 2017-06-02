import React, { Component } from 'react';

//MarkAll Compnent
class MarkAll extends Component {
  constructor(){
    super()
  }
  toggleAll = ()=>{return}
  render() {
    return (
      <div>
						<input
							className="toggle-all"
							type="checkbox"
              id="markall"
						/>
            <label></label>
        </div>
    );
  }
}

export default MarkAll;