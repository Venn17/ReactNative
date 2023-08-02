import React from "react";
// cần import React khi khai báo component
import { Text } from "react-native";
// inport Text component core có sẵn ở thư viện để hiển thị text
const Hello = ()=>{
    return (
        <Text style={{fontSize:50}}>Xin chào quí zị</Text> 
    )
}
export default Hello;
// export default để có thể sử dụng component Hello của bạn 