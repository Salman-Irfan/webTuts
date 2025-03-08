import { GroceryItem } from "../../../../models/GroceryItemModel.js"

export const addGroceryItemController = async (req, res) => {
    try {
        const { title, description, quantity, price, discount } = req.body
        
        const groceryItem = new GroceryItem({
            title,
            description,
            quantity,
            price,
            discount
        })
        const groceryAdded = await groceryItem.save()

        return res.json({
            suceess: true,
            data: groceryAdded
        })
    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            error: error
        })
    }
}