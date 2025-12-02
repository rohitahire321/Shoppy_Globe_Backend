import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../Model/user.js'

const JWT_secret = "good_for_you"

//post Register
export const register = (req,res) => {
    const {name, email, password} = req.body

    //validate user
    if(!name || !email || !password){
        return res.status(400).json( {message: "All fields are required."} )
    }

    User.findOne({email})
        .then((existingUser) => {
            if(existingUser){
                return res.status(400).json( {message: "Email Already Exists."} )
            }

            //generate password
            return bcrypt.hash(password,10)
        })
        .then((hashedPassword) => {
            const user = new User({name,email,password: hashedPassword})
            return user.save()
        })
        .then(() => {
            return res.status(201).json( {message: "user created successfully😍."} )
        })
        .catch((error) => {
            return res.status(500).json( {error: error.message} )
        })
}

//post LOGIN
export const login = (req,res) => {
    const {email, password} = req.body

    if(!email || !password){
        return res.status(400).json( {error: "All fields are Required."} )
    }

    User.findOne({email})
        .then((user) => {
            if(!user){
                return res.status(400).json( {error: "Invalid Credentials!"} )
            }
            return bcrypt.compare(password, user.password).then(isMatch => {
                if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

                const token = jwt.sign({ userId: user._id }, JWT_secret, { expiresIn: "1h" });
                res.json({ message: "Login successful", token });
            });
        })
        .catch(error => {
            res.status(500).json({ error: error.message });
        });
}