import { GroceryItem } from "../../../../models/GroceryItemModel.js"

export const updateItemByIdController = async (req, res) => {
    try {
        const { id } = req.params
        const { title, description, quantity, price, discount } = req.body
        const updatedItem = await GroceryItem.findByIdAndUpdate(
            id,
            { title, description, quantity, price, discount },
            { new: true } // 👈 This ensures the response contains the updated document
        );
        // in response we are getting the older data
        return res.json({
            success: true,
            date: updatedItem
        })
    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            error: error
        })
    }
}