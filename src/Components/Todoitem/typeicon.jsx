import { MdOutlineSportsBasketball } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { GiHealthNormal } from "react-icons/gi";
import { MdFamilyRestroom } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { MdWork } from "react-icons/md";

function TypeIcon ( {type} ) {
		switch (type){
			case 'Health':
    		return <GiHealthNormal />;
			case 'Sports':
				return <MdOutlineSportsBasketball />;
			case 'Family':
				return <MdFamilyRestroom />;
			case 'Study':
				return <FaBookReader />;
			case 'Social':
				return <IoShareSocial />;
			case 'Home':
				return <FaHome />;
			case 'Money':
				return <FaMoneyBillTrendUp />
			case 'Work':
				return <MdWork />;
			default:
				return ('');
		}		
}

export { TypeIcon };