import jwt from 'jsonwebtoken'

export const protect = (req,res,next) => {
    const authHeader = req.headers['authorization']

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    const token = authHeader && authHeader.split(" ")[1]

    jwt.verify(token,"good_for_you", (err, user) => {
        if(err){
            return res.status(403).json( {error: "Invalid Token."} )
        }
        req.user = user
        next()
    })
}