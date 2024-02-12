import { View } from "react-native"

const Bar= ({size, color, trans, w, marginT, marginL}) => {
return(
<View
style={{
    borderBottomWidth: size,
    opacity: trans,
    borderColor:color,
    marginBottom:5,
    borderRadius:10,
    width:w,
    marginTop:marginT,
    position:"absolute",
    marginLeft:marginL,
    zIndex:1
    }}>
    </View>)
};

export default Bar;