import userModel from "../models/userModel.js";

export const registerController = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        if (!name) return next("Name is required");
        if (!email) return next("Email is required");
        if (!password) return next("Password is required");

        const existingUser = await userModel.findOne({ email });
        if (existingUser) return next("Email is already registered");

        const user = await userModel.create({ name, email, password });

        // Generate JWT token
        const token = user.createJWT();

        res.status(200).send({
            message: "User created successfully",
            user: {
                name: user.name,
                lastname: user.lastname,
                email: user.email,
                location: user.location,
            },
            token,
        });

    } catch (error) {
        next(error);
    }
};
