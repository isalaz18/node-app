export const fetch =  async(requestAnimationFrame, res) => {
    try {
        res.json("Hello World")
    } catch (error) {
        res.status(500).json({error: "Internal Server Error"})
    }
}