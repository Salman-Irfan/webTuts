import { GroceryItem } from "../../../../models/GroceryItemModel.js"

export const getItemByIdController = async (req, res) => {
    try {
        const { id } = req.params
        const specificItem = await GroceryItem.findById(id)

        return res.json({
            success: true,
            data: specificItem
        })
    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            error: error
        })
    }
    
}