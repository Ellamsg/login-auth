const Nav = () => {
    return ( 
        
        <div className="flex justify-between px-[20px] lg:px-[30px] ">


<div className="flex items-end">
        <img src="Sigflow.png" alt="sign-flow-logo" />
      </div>

      <div className="flex gap-[6px]">

        <p className="pagination text-[17px] lg:text-[24px] font-bold text-white !bg-[#32D583]">S</p>
        <div className="lg:text-[14px] text-[10px] font-semibold flex flex-col gap-[4px]">
        <p className="text-[#101828]">Sigflow</p>
        <p className="text-[#828282] !font-normal">Adeoluwa Siyanbade</p>
        </div>
     
      </div>

    </div>);
}
 
export default Nav;