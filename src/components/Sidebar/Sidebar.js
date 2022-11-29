function Sidebar(props){
  console.log(props)
  const Women = () => {
    let women = props.filter((item) =>{
        if (item.ForWhom == 'Women'){
            return true
        }
    })
    Sidebar(women)
}
  return(
    <div className="sidebar-wrap ">
    <h5 className="h5_category">Categories</h5>
          <ul className="list-unstyled components mb-5"/>
            <li>
              <a href="#pageSubmenu1" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle "  >Holiday Cakes</a>
              <ul className="collapse list-unstyled" id="pageSubmenu1">
                <li><a href="#" onclick="Women()"><span className="fa fa-chevron-right mr-2"></span> All</a></li>
                <li><a href="#" onclick="wBracelet()"><span className="fa fa-chevron-right mr-2"></span> Birthday Cake</a></li>
                <li><a href="#"><span className="fa fa-chevron-right mr-2"></span> Angel Cake</a></li>
  
              </ul>
            </li>
            <li>
              <a href="#pageSubmenu2" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle" onclick="Men()">Special Cakes</a>
              <ul className="collapse list-unstyled" id="pageSubmenu2">
                <li><a href="#" onclick="Men()"><span className="fa fa-chevron-right mr-2"></span>All </a></li>
                <li><a href="#" onclick="mRings()"><span className="fa fa-chevron-right mr-2"></span> Bridal Cake</a></li>
                <li><a href="#" onclick="mNeclaces()"><span className="fa fa-chevron-right mr-2"></span> Congratulation Cake</a></li>
                <li><a href="#" onclick="mBracelet()"><span className="fa fa-chevron-right mr-2"></span> Wedding Cake</a></li>
              </ul>
            </li>
            <li>
              <a href="#pageSubmenu3" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Fruit and Other types of Cakes</a>
              <ul className="collapse list-unstyled" id="pageSubmenu3">
              <li><a href="#" onclick="Men()"><span className="fa fa-chevron-right mr-2"></span>All </a></li>
                <li><a href="#"><span className="fa fa-chevron-right mr-2"></span> Pound Cake</a></li>
                <li><a href="#"><span className="fa fa-chevron-right mr-2"></span> Strawberry Cake</a></li>
                <li><a href="#"><span className="fa fa-chevron-right mr-2"></span> Roll Cake</a></li>
                <li><a href="#"><span className="fa fa-chevron-right mr-2"></span> Fruit Cake</a></li>
                <li><a href="#"><span className="fa fa-chevron-right mr-2"></span> Fudge Cake</a></li>
                <li><a href="#"><span className="fa fa-chevron-right mr-2"></span> Biscuit Cake</a></li>
                <li><a href="#"><span className="fa fa-chevron-right mr-2"></span> Butter Cake</a></li>

                
              </ul>
            </li>
            <li>
              <input type="text" name="" id="priceOne" placeholder="      from.." className="border border-danger rounded mb-2 mt-2"/>
              <input type="text" name="" id="priceTwo" placeholder="      to..." className="border border-danger rounded mb-2 " />
              <button className="btn btn-primary" onclick="Price()">Filter</button>
              {/* <!-- <a href="#pageSubmenu4" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Clothes</a> */}
              <ul className="collapse list-unstyled" id="pageSubmenu4">
                <li><a href="#"><span className="fa fa-chevron-right mr-2"></span> Jeans</a></li>
                <li><a href="#"><span className="fa fa-chevron-right mr-2"></span> T-shirt</a></li>
                <li><a href="#"><span className="fa fa-chevron-right mr-2"></span> Jacket</a></li>
                <li><a href="#"><span className="fa fa-chevron-right mr-2"></span> Shoes</a></li>
                <li><a href="#"><span className="fa fa-chevron-right mr-2"></span> Sweater</a></li> 
              </ul>
              </li>
          <div className="mb-5">
            <h5 > Used Metal</h5>
            <div className="tagcloud">
              <a href="#" className="tag-cloud-link">all</a>
              <a href="#" className="tag-cloud-link">palladium</a>
              <a href="#" className="tag-cloud-link">aluminum</a>
              <a href="#" className="tag-cloud-link" onclick="Silver()">silver</a>
              <a href="#" className="tag-cloud-link" onclick="Gold()">gold</a>
              <a href="#" className="tag-cloud-link">stainless steel</a>
              <a href="#" className="tag-cloud-link" onclick="WhiteGold()">platinum</a>
              <a href="#" className="tag-cloud-link">contact</a>
            </div>
          </div>
          <div className="mb-5">
            <h5>Newsletter</h5>
            <form action="#" className="subscribe-form">
              <div className="form-group d-flex">
                <div className="icon"><span className="icon-paper-plane"></span></div>
                <input type="text" className="form-control" placeholder="Enter Email Address"/>
              </div>
            </form>
          </div>
    </div>
  )
}
export default Sidebar