// import jwt from 'jsonwebtoken'

// const adminAuth = async (req,res,next)=>{
//     try {

//         const {token} = req.headers
//         if (!token) {
//             return res.json({success:false,message:"Not Authorized Login Again"})
//         }
//         const token_decode = jwt.verify(token,process.env.JWT_SECRET);
//         if(token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
//             return res.json({success:false,message:"Not Authorized Login Again"})
//         }
//         next()
//     } catch (error) {
//         console.log(error);
//         res.json({success:false,message:error.message})
//     }
// }

// export default adminAuth;


import jwt from 'jsonwebtoken';

const adminAuth = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.status(401).json({ success: false, message: "Not Authorized. Login again." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.email === process.env.ADMIN_EMAIL && decoded.role === 'admin') {
      next();
    } else {
      return res.status(403).json({ success: false, message: "Access denied. Not admin." });
    }

  } catch (error) {
    console.error("AdminAuth Error:", error.message);
    res.status(401).json({ success: false, message: "Invalid or expired token." });
  }
};

export default adminAuth;
