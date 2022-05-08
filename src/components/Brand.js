import React, {useContext} from "react";
import MainContext from "../contexts/MainContext";
import ClipboardButton from "react-clipboard.js";

const Brand = ({brand}) => {
    const {setSelectedBrands,selectedBrands}=useContext(MainContext)
    const toggleSelected = () => {

        if(selectedBrands.includes(brand.slug)){
            setSelectedBrands(selectedBrands.filter(slug=>slug !== brand.slug))
        }
        else {
            setSelectedBrands([...selectedBrands,brand.slug])
        }

    }
    return(
        <div className={`brand ${selectedBrands.includes(brand.slug)?"selected":""}`}>
            <h5 onClick={toggleSelected}>{brand.title}</h5>
            <div className="brand-color">
                {brand.colors.map(color=>(
                    <ClipboardButton data-clipboard-text={color} component="span" style={{"--bgColor":`#${color}`}}>
                        <span>{color}</span>
                    </ClipboardButton>

                ))}
            </div>
        </div>
    )

}
export default Brand;