export const addGroceryItemController = (req, res) => {
    console.log(req.body)
    return res.json({
        suceess: true,
        data: `dummy-grocery-item`
    })
}