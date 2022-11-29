import "./Footer.css"
function Footer(){
    return(
        <div className='main-footer'>
              <div className='container'>
                <div className='row'>
                  {/* Column1 */}
                  <div className='col'>
                    <ul className=' unordered-list list-unstyled'>
                    <h4>Thic Memes INC</h4>
                        <li>383-442-4545</li>
                        <li>Swizerland</li>
                        <li>3232 North Street</li>

                    </ul>
                  </div>
                  {/* Column2 */}
                  <div className='col'>
                    <ul className=' unordered-list list-unstyled'>
                    <h4>STUFF</h4>
                        <li>Some Stuff</li>
                        <li>Swizerland</li>
                        <li> North Street</li>

                    </ul>
                  </div>
                  {/* Column3 */}
                  <div className='col'>
                    <ul className=' unordered-list list-unstyled'>
                    <h4>STUFF</h4>
                        <li>Some Stuff</li>
                        <li>Swizerland</li>
                        <li> North Street</li>

                    </ul>
                  </div>
                </div>
                <hr/>
                <div className=' footer-bottom row'>
                  <p className='col-sm'>
                    &copy;{new Date().getFullYear() }  Thick MEMES INC | All rights reserved | Terms Of Service | Privacy                  </p>
                </div>
              </div>
        </div>
    )
}
export default Footer