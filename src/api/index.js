import ajax from './ajax'


//查询可分配房间
export const getfreeRoom = (type) =>ajax(BASE_URL + '/api/get_free_room',{type});
export const changRoomState = (roomid,roomstate) =>ajax(BASE_URL + '/api/chang_room_state',{roomid,roomstate});

//上传订单数据
export const postOrder = (type, start, end, userId, price, number, total,others) =>ajax(BASE_URL + '/api/add_order',{type,start,end,userId,price,number,total,others},'POST');
export const getSelfOrder = (userId) =>ajax(BASE_URL + '/api/get_self_order',{userId});
export const getAllOrder = () =>ajax(BASE_URL + '/api/get_all_order');
export const getOrderUser = (userId) =>ajax(BASE_URL + '/api/get_order_user',{userId});
export const updataRoomState = (roomStr,orderId,roomState) =>ajax(BASE_URL + '/api/updata_room',{roomStr,orderId,roomState});
export const upOrderState = (orderId,orderState,roomIdStr) =>ajax(BASE_URL + '/api/updata_order',{orderId,orderState,roomIdStr});
export const getAllRoom = () =>ajax(BASE_URL + '/api/get_all_room');