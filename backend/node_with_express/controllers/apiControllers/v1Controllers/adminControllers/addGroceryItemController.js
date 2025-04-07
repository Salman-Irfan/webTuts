import { GroceryItem } from "../../../../models/GroceryItemModel.js";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

// For __dirname compatibility in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const addGroceryItemController = async (req, res) => {
    try {
        const { title, description, quantity, price, discount } = req.body;

        // Get uploaded file
        const { images } = req.files; // field name must be 'images' in Postman or frontend

        if (!images) {
            return res.status(400).json({ success: false, message: "Product image is required" });
        }

        // Create public/ directory if not exists
        const uploadPath = path.join(__dirname, "../../../../public");
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }

        // Build file name
        const currentDate = new Date().toISOString().replace(/[-:]/g, "").split(".")[0];
        const uniqueFileName = `${images.fieldName}_${currentDate}_${images.originalFilename}`;
        const savedFilePath = path.join(uploadPath, uniqueFileName);

        // Rename/move file
        fs.renameSync(images.path, savedFilePath);

        // Build image URL
        const baseUrl = `${req.protocol}://${req.get("host")}`;
        const imageUrl = `${baseUrl}/${uniqueFileName}`;

        // Save grocery item with image URL
        const groceryItem = new GroceryItem({
            title,
            description,
            quantity,
            price,
            discount,
            image: imageUrl,
        });

        const groceryAdded = await groceryItem.save();

        return res.json({
            success: true,
            data: groceryAdded,
        });

    } catch (error) {
        console.error("Error uploading grocery item:", error);
        return res.status(500).json({
            success: false,
            error: error.message || error,
        });
    }
};
