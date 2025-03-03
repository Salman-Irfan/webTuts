export const getDailySalesController = (req, res) => {
    return res.json({
        success: true,
        data: [
            {
                id: 1,
                name: `laptop`
            }
        ]
    })
}