import { GroceryItem } from "../../../../models/GroceryItemModel.js"

export const deleteItemByIdController = async(req, res) => {
    try {
        const { id } = req.params
        const deletedItem = await GroceryItem.findByIdAndDelete(id)

        return res.json({
            success: true,
            deletedItem: deletedItem,
            message: `item deleted successfully`
        })
    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            error: error
        })
    }
    
}