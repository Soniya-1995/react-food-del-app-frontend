const express = require("express")
const app = express();
const cors = require("cors");
const upload = require("./Uploads/uploads.js");
app.use(express.json());
app.use(cors({
  origin: "*" 
}));



// Serve static files
app.use("/uploads", express.static("uploads"));

app.use("/api",require("./Routes/Createuser"));
app.use("/api",require("./Routes/Orderdata"));
app.use("/api",require("./Routes/orderlist"))




const mongoose = require("mongoose")
const MONGO_URL = ("mongodb+srv://khana_123:khana_123@cluster0.r2kzzl1.mongodb.net/KhanaKhazana")
mongoose.connect(MONGO_URL)
.then(()=>{
  console.log("connected");
  
  })

.catch(()=>{
    console.log("not connected")
})

let data_schema = new mongoose.Schema({
  CategoryName: String,
  name: String,
  img: String,
  options: Object, 
  description: String,
  price: String     
});

let category_schema = new mongoose.Schema({
  CategoryName: String
});


 let MyModel = new mongoose.model("productdata",data_schema);
 let MyModel1 = mongoose.model("categorydata",category_schema);
 
/* MyModel.create([
    {
        "CategoryName": "Lunch/Dinner",
        "name": "Dal Tadka",
        "img": "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347425/india-food-dal-tadka/india-food-dal-tadka-1120x732.jpg",
        "options": [
            {
                "half": "130",
                "full": "220"
            }
        ],
        "description": "This classic lentil-based dish originates from the northern parts of India."
    },
    {
        "CategoryName": "Breakfast",
        "name": "Idli",
        "img": "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347416/india-food-idli/india-food-idli-1120x732.jpg",
        "options": [
            {
                "half": "100",
                "full": "150"
            }
        ],
        "description": "dli is a traditional, savory Indian cake that is a popular breakfast item in many South Indian households."
    },
    {
        "CategoryName": "Lunch/Dinner",
        "name": "Kitchiri",
        "img": "https://skinnyms.com/wp-content/uploads/2020/09/Easy-One-Pot-Indian-Kitchiri-Dinner-Recipe-7-e1600786193299.jpg",
        "options": [
            {
                "half": "200",
                "full": "320"
            }
        ],
        "description": "This one-pot dish is easy to make, cleansing, and absolutely comforting."
    },
    {
        "CategoryName": "Starter",
        "name": "Chaat",
        "img": "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347465/india-food-aloo-chaat/india-food-aloo-chaat-1120x732.jpg",
        "options": [
            {
                "half": "100",
                "full": "150"
            }
        ],
        "description": "The name chaat encompasses a wide variety of Indian street foods, snacks, or small meals which usually combine salty, spicy, sweet, and sour flavors."
    },
    {
        "CategoryName": "Breakfast",
        "name": " Paratha",
        "img": "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347392/india-food-paratha/india-food-paratha-1120x732.jpg",
        "options": [
            {
                "half": "150",
                "full": "260"
            }
        ],
        "description": "Paratha is a flaky, layered, golden-brown Indian bread, which is typically consumed for breakfast."
    },
    {
        "CategoryName": "Breakfast",
        "name": "Sambar",
        "img": "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347374/india-food-sambar/india-food-sambar-1120x732.jpg",
        "options": [
            {
                "half": "120",
                "full": "220"
            }
        ],
        "description": "Sambar is a tamarind-based broth, prepared with lentils and vegetables."
    },
    {
        "CategoryName": "Starter",
        "name": "Chilli Paneer",
        "img": "https://media.istockphoto.com/photos/spicy-paneer-or-chilli-paneer-or-paneer-tikka-or-cottage-cheese-in-picture-id697316634?b=1&k=20&m=697316634&s=170667a&w=0&h=bctfHdYTz9q2dJUnuxGRDUUwC9UBWjL_oQo5ECVVDAs=",
        "options": [
            {
                "half": "120",
                "full": "200"
            }
        ],
        "description": "A delicious Indo-Chinese vegetarian dish, this fast Chilli Paneer has golden fried paneer cubes in a ..."
    },
    {
        "CategoryName": "Starter",
        "name": "Paneer 65",
        "img": "https://media.istockphoto.com/photos/paneer-tikka-kabab-in-red-sauce-is-an-indian-dish-made-from-chunks-of-picture-id1257507446?b=1&k=20&m=1257507446&s=170667a&w=0&h=Nd7QsslbvPqOcvwu1bY0rEPZXJqwoKTYCal3nty4X-Y=",
        "options": [
            {
                "half": "150",
                "full": "260"
            }
        ],
        "description": "Crisp fried paneer chunks sauted and seasoned in 65 masala. Paneer 65 fry is a delicious starter ..."
    },
    {
        "CategoryName": "Breakfast",
        "name": "Dhokla",
        "img": "https://rajdhanithali.wordpress.com/wp-content/uploads/2014/01/gujarati.jpg?w=640",
        "options": [
            {
                "half": "100",
                "full": "200"
            }
        ],
        "description": "Dhokla is a savoury sponge dish that is native to the Indian state of Gujarat and parts of adjacent states"
    },
    {
        "CategoryName": "Starter",
        "name": "Paneer Tikka",
        "img": "https://media.istockphoto.com/photos/paneer-tikka-at-skewers-in-black-bowl-at-dark-slate-background-paneer-picture-id1186759790?k=20&m=1186759790&s=612x612&w=0&h=e9MlX_7cZtq9_-ORGLPNU27VNP6SvDz7s-iwTxrf7wU=",
        "options": [
            {
                "half": "170",
                "full": "250"
            }
        ],
        "description": "Paneer tikka are skewers of mild Indian cheese marinated in spiced yogurt and grilled."
    },
    {
        "CategoryName": "Pizza",
        "name": "Vegetable Pizza ",
        "img": "https://static.toiimg.com/thumb/53351352.cms?width=1200&height=900",
        "options": [
            {
                "regular": "120",
                "medium": "230",
                "large": "350"
            }
        ],
        "description": "Bursting with rich aroma of herbs & spices and flavours, pizza is one of the most loved dishes of ..."
    },
    {
        "CategoryName": "Pizza",
        "name": "Cheese Pizza",
        "img": "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2025-06/8%20Types%20of%20Vegetarian%20Pizza%20to%20Try%20This%20Weekend.jpg",
        "options": [
            {
                "regular": "100",
                "medium": "200",
                "large": "300"
            }
        ],
        "description": "Pizza is one of the most loved comfort foods worldwide."
    },
     {
        "CategoryName": "Lunch/Dinner",
        "name": "Dal Bati",
        "img": "https://media.istockphoto.com/id/1401165547/photo/rajasthani-dish-cusine-meal-called-dal-baati-churma.jpg?s=612x612&w=0&k=20&c=RsA_SlkeDOz2KAa-ywkqVWCOA7cUbHjjAP4oTN2PN4A=",
        "options": [
            {
                "half": "300",
                "full": "500" 
            }
        ],
        "description": "Dal Baati is a traditional Indian dish, popular in Rajasthan, Madhya Pradesh, and other parts of central India"
    },
      {
        "CategoryName": "Lunch/Dinner",
        "name": "Dal Bati",
        "img": "https://media.istockphoto.com/id/1401165547/photo/rajasthani-dish-cusine-meal-called-dal-baati-churma.jpg?s=612x612&w=0&k=20&c=RsA_SlkeDOz2KAa-ywkqVWCOA7cUbHjjAP4oTN2PN4A=",
        "options": [
            {
                "half": "300",
                "full": "500" 
            }
        ],
        "description": "Dal Baati is a traditional Indian dish, popular in Rajasthan, Madhya Pradesh, and other parts of central India"
    }
]);*/
 
/*MyModel1.create([
  {
    "CategoryName":"Lunch/Dinner"
  },
  {
    "CategoryName":"Breakfast"
  },
  {
    "CategoryName":"Starter"
  },
  {
    "CategoryName":"Pizza"
  }

]);*/

app.get("/allfooditem",async(req,res)=>{
    data = await MyModel.find({});
    console.log(data);
    res.send(data)
})

app.get("/allcategory",async(req,res)=>{
    data1 = await MyModel1.find({});
    console.log(data1);
    res.send(data1)
})

app.post("/allfooditem", upload.single("image"), async (req, res) => {
  try {
     console.log("req.body:", req.body);  
     console.log("req.file:", req.file);

    let parsedOptions = {};
    if (req.body.options) {
      try {
        parsedOptions = JSON.parse(req.body.options);
      } catch (err) {
        console.error("Failed to parse options:", err.message);
      }
    }

    const postdata = await MyModel.create({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      CategoryName: req.body.CategoryName,
      img: req.file ? `http://localhost:3001/uploads/${req.file.filename}` : null,
      options: parsedOptions || { default: req.body.price }
    });

    res.json({ success: true, data: postdata });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
});



app.post("/delete", async (req, res) => {
  try {
    const { id } = req.body;
    if (!id) return res.status(400).json({ message: "Food ID is required" });

    const deletedFood = await MyModel.findByIdAndDelete(id);
    if (!deletedFood) return res.status(404).json({ message: "Food not found" });

    res.json({ message: "Food deleted successfully", deletedFood });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

app.listen(3001,()=>{
    console.log("server is running")
})

