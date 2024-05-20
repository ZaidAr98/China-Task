
import SelectComponent from "../SelectComponent"

interface Props {
  children: React.ReactNode;
}


const LayoutPurchases = ({ children }: Props) => {
  return (
   <div className="mt-10">
    <div className="grid grid-cols-4 gap-x-10">
    <div className="col-span-1"><SelectComponent/></div>
    <div className="col-span-3">{children}</div>

    </div>
    </div>
         )
}

export default LayoutPurchases