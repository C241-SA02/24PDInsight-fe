<<<<<<< HEAD
=======
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import {
    getOrders as getOrdersApi,
    addOrders as addOrdersApi,
    updateOrders as updateOrdersApi,
    deleteOrders as deleteOrdersApi,
} from "../helpers/fakebackend_helper";
>>>>>>> e82bc1eb7bde4f7d090a524c6e230b9fad16e0af

export {
    changeLayout,
    changeLayoutSemiDark,
    changeSkin,
    changeLayoutMode,
    changeDirection,
    changeLayoutContentWidth,
    changeLeftsidebarSizeType,
    changeNavigation,
    changeLeftSidebarColorType,
    changeLayoutTopbarColor
} from "./layouts/thunk";

<<<<<<< HEAD
=======

export const getOrders = createAsyncThunk("ecommerce/getOrders", async () => {
    try {
        const response = getOrdersApi();
        return response;
    } catch (error) {
        return error;
    }
});
export const addOrders = createAsyncThunk("ecommerce/addOrders", async (event: any) => {
    try {
        const response = addOrdersApi(event);
        const data = await response;
        toast.success("Order Added Successfully", { autoClose: 2000 });
        return data;
    } catch (error) {
        toast.error("Order Added Failed", { autoClose: 2000 });
        return error;
    }
});
export const updateOrders = createAsyncThunk("ecommerce/updateOrders", async (event: any) => {
    try {
        const response = updateOrdersApi(event);
        const data = await response;
        toast.success("Order updated Successfully", { autoClose: 2000 });
        return data;
    } catch (error) {
        toast.error("Order updated Failed", { autoClose: 2000 });
        return error;
    }
});
export const deleteOrders = createAsyncThunk("ecommerce/deleteOrders", async (event: any) => {
    try {
        const response = deleteOrdersApi(event);
        toast.success("Order deleted Successfully", { autoClose: 2000 });
        return response;
    } catch (error) {
        toast.error("Order deleted Failed", { autoClose: 2000 });
        return error;
    }
});


>>>>>>> e82bc1eb7bde4f7d090a524c6e230b9fad16e0af
export * from "./auth/login/thunk";

export * from "./auth/register/thunk";

<<<<<<< HEAD
export * from "./auth/profile/thunk";
export * from "./chat/thunk";

export * from "./mailbox/thunk";

export * from "./calendar/thunk";

export * from "./ecommerce/thunk";

export * from "./hrManagement/thunk";

export * from "./notes/thunk";

export * from "./social/thunk";

export * from "./invoice/thunk";

export * from "./users/thunk";
=======
export * from "./auth/profile/thunk";
>>>>>>> e82bc1eb7bde4f7d090a524c6e230b9fad16e0af
