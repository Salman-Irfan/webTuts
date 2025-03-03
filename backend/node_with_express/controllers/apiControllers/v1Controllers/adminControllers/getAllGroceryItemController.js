import { GroceryItem } from "../../../../models/GroceryItemModel.js"

export const getAllGroceryItemController = async (req, res) => {
    try {
        const allGroceryItems = await GroceryItem.find()

        return res.json({
            success: true,
            data: allGroceryItems
        })

    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            error: error
        })
    }
    
}