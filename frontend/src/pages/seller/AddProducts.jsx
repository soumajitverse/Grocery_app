import React, { useState } from 'react'
import { assets, categories } from '../../assets/assets'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

// sort the categories array by item.path
categories.sort((a, b) => {
  let pathA = a.path;
  let pathB = b.path;

  if (pathA < pathB) {
    return -1
  } else if (pathA > pathB) {
    return 1
  } else {
    return 0
  }
})


const AddProduct = () => {

  const [files, setFiles] = useState([])
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [offerPrice, setOfferPrice] = useState('')

  const [isOpen, setIsOpen] = useState(false);

  const { axios } = useAppContext()

  const handleSelect = (e) => {
    setCategory(e)
    setIsOpen(false);
  };


  // function to handle submit
  const onSubmitHandler = async (event) => {
    try {
      event.preventDefault()
      const productData = {
        name,
        category,
        price,
        offerPrice,
        description: description.split('\n')
      }

      if (category === '') {
        toast.error("Please select category to add prodct")
        return
      }

      const formData = new FormData()

      formData.append("productData", JSON.stringify(productData)) // convert productData from json to string

      for (let i = 0; i < files.length; i++) {
        formData.append('images', files[i])

      }

      const { data } = await axios.post('/api/product/add', formData)

      if (data.success) {
        toast.success(data.message)
        setName('')
        setFiles([])
        setDescription('')
        setCategory('')
        setPrice('')
        setOfferPrice('')
      }

    } catch (error) {
      console.log(error.response.data.message)
      console.log("Add product --->  ", error)
    }
  }



  return (

    <div className="no-scrollbar flex-1 h-[95vh] overflow-y-scroll flex flex-col justify-between">
      <form onSubmit={onSubmitHandler} className="md:p-10 p-4 space-y-5 max-w-lg">

        {/* upload images  */}
        <div>
          <p className="text-base font-medium">Product Image</p>

          <div className="flex flex-wrap items-center gap-3 mt-2">
            {Array(4).fill('').map((_, index) => (
              <label key={index} htmlFor={`image${index}`}>

                <input
                  onChange={(e) => {
                    const updatedFiles = [...files];
                    updatedFiles[index] = e.target.files[0]
                    setFiles(updatedFiles)
                  }}
                  accept="image/*" type="file" id={`image${index}`} hidden />

                <img className="max-w-24 cursor-pointer rounded-sm" src={files[index] ? URL.createObjectURL(files[index]) : assets.upload_area} alt="uploadArea" width={100} height={100} />

              </label>
            ))}
          </div>
        </div>

        {/* product name */}
        <div className="flex flex-col gap-1 max-w-md">

          <label className="text-base font-medium" htmlFor="product-name">Product Name</label>

          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            id="product-name" type="text" placeholder="Type here" className="outline-none md:py-2.5 py-2 px-3 rounded-xl border border-gray-500/40" required />
        </div>

        {/* product description */}
        <div className="flex flex-col gap-1 max-w-md">
          <label className="text-base font-medium" htmlFor="product-description">Product Description</label>

          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            id="product-description" rows={4} className="outline-none md:py-2.5 py-2 px-3 rounded-xl border border-gray-500/40 resize-none" placeholder="Type here"></textarea>
        </div>

        {/* product category */}
        <div className="w-full flex flex-col gap-1">
          <label className="text-base font-medium" htmlFor="category">Category</label>

          {/* category drop down menu */}
          <div className="flex flex-col w-full text-sm relative ">
            <button type="button" onClick={() => setIsOpen(!isOpen)}
              className="w-full text-left px-4 pr-2 py-2 border rounded-xl bg-white text-gray-800 text-base border-gray-300   focus:outline-none cursor-pointer flex justify-between"
            >
              {
                category ? <span>{category}</span> : <span>--Select Category--</span>
              }
              <img src={assets.chevron} alt="chevron" className={` w-3 opacity-50 ${isOpen ? "rotate-90" : "rotate-0"} `} />

            </button>

            {isOpen && (
              <ul className="absolute z-10 top-full left-0  w-full bg-white border border-gray-300 rounded shadow-sm mt-1 py-2">

                <li value="" className="px-4 py-2 hover:bg-primary hover:text-white cursor-pointer"
                  onClick={() => { handleSelect("") }}
                >
                  --Select Category--
                </li>
                {categories.map((item, index) => (
                  <li key={index} value={item.path} className="px-4 py-2 hover:bg-primary hover:text-white cursor-pointer" onClick={() => { handleSelect(item.path) }} >
                    {item.path}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>


        <div className="flex items-center gap-5 flex-wrap">

          {/* product price */}
          <div className="flex-1 flex flex-col gap-1 w-32">
            <label className="text-base font-medium" htmlFor="product-price">Product Price</label>
            <input
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              id="product-price" type="number" placeholder="0" className="outline-none md:py-2.5 py-2 px-3 rounded-xl border border-gray-500/40" required />
          </div>

          {/* offer price */}
          <div className="flex-1 flex flex-col gap-1 w-32">
            <label className="text-base font-medium" htmlFor="offer-price">Offer Price</label>
            <input
              onChange={(e) => setOfferPrice(e.target.value)}
              value={offerPrice}
              id="offer-price" type="number" placeholder="0" className="outline-none md:py-2.5 py-2 px-3 rounded-xl border border-gray-500/40" required />
          </div>
        </div>

        {/* add button */}
        <button className="px-8 py-2.5 bg-primary hover:bg-primary-dull rounded-xl text-white font-medium cursor-pointer">ADD</button>
      </form>
    </div>
  )
}

export default AddProduct