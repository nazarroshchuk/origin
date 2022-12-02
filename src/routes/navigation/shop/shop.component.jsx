import './shop.styles.scss'
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../../categories-preview/categories-preview.component";
import Category from "../../category/category.component";
import { getCategoriesAndDocuments } from "../../../utils/firebase/firebase.utils";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCategoriesMap } from "../../../store/category/category.actions";

const Shop = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      dispatch(setCategoriesMap(categoryMap))
    }

    getCategoriesMap();
  }, [dispatch]);

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    )
}

export default Shop;