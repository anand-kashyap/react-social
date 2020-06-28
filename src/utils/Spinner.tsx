import React from 'react'

export enum Size {
  small = 'small', normal = '', big = 'big'
}

const defCols = ['blue', 'red', 'yellow'];

const Spinner = ({ active = true, colors = defCols, size = Size.small }) => {

  return (
    <>
      {active && <div className={`preloader-wrapper ${size} active`}>
        {colors.map((c, i) =>
          <div key={i} className={`spinner-layer spinner-${c}`}>
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div><div className="gap-patch">
              <div className="circle"></div>
            </div><div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        )}
      </div>}
    </>
  )
}

export default Spinner
