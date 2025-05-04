// testController.js
const testPostController = (req, res) => {
    const { name } = req.body;
    
    if (!name) {
        return res.status(400).json({ error: 'Name is required' });
    }
    
    res.status(200).json({ message: `Your name is ${name}` });
};

export {testPostController};