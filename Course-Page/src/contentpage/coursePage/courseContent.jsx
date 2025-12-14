import { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "../../component/course/productList.jsx";
import ProductCard from "../../component/course/productCard.jsx";
import FilterSide from "../../component/filterSide.jsx";
import SortingBox from "../../component/sortingBox.jsx";
import View1 from "../../assets/icon/view1.png";
import View1v1 from "../../assets/icon/view1.v1.png";
import View2 from "../../assets/icon/view2.png";
import View2v2 from "../../assets/icon/view2.v2.png";
import FilterIco from "../../assets/icon/filter.png";

const courseContent = () => {
  const [view, setview] = useState("view1");

  const ViewBt = {
    border: "0",
    borderRadius: "5px",
    height: "25px",
    cursor: "pointer",
    boxShadow: "0 0 10px #9B0EE140",
  };

  ////////////////////////////////////////////////////////
  //api
  const [Product, setProduct] = useState([]);

  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          "https://sepehracademy.liara.run/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=1000&SortingCol=active&SortType=desc&TechCount=0",
          {
            header: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.data.courseFilterDtos;
        setProduct(data);
      } catch (error) {
        console.error("خطا در دریافت داده:", error);
      }
    };

    fetchProduct();
  }, []);

  ////////////////////////////////////////////////
  ////filter data
  const [range, setRange] = useState([0, 100000000]);
  const [filterNull, setFilterNull] = useState(true);
  const [activeFilters, setActiveFilters] = useState(0);

  const [filters, setFilters] = useState({
    category: "",
    priceRange: range,
    courseLevel: "",
    teacher: "",
    sortBy: "",
  });

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      priceRange: range,
    }));
  }, [range]);

  /////////////////////////////////////////////
  //////////////////////////////////////////////////////////////
  // filter update
  const updateActiveFilters = (currentFilters) => {
    let count = 0;
    if (currentFilters.category) count++, setFilterNull(false);
    if (currentFilters.courseLevel) count++, setFilterNull(false);
    if (currentFilters.sortBy) count++, setFilterNull(false);
    if (currentFilters.teacher) count++, setFilterNull(false);
    if (
      currentFilters.priceRange[0] > 0 ||
      currentFilters.priceRange[1] < 100000000
    )
      count++, setFilterNull(false);
    if (count === 0) setFilterNull(true);
    setActiveFilters(count);
  };


  const [filterBt, setFilterBt] = useState(false);

  ///////////////////////////////////////
  const [courseData, setCourseData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

 
  const currentItems =
    Array.isArray(courseData) && courseData.length > 0
      ? courseData.slice(indexOfFirstItem, indexOfLastItem)
      : [];

  
  const totalPages =
    Array.isArray(courseData) && courseData.length > 0
      ? Math.ceil(courseData.length / itemsPerPage)
      : 0;


  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 100, behavior: "smooth" });
  };


  const renderPageButtons = () => {
    const buttons = [];
    const maxVisible = 5; 

    if (totalPages <= maxVisible) {
      
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`w-8 h-8 text-center rounded ${
              currentPage === i
                ? "bg-purple-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {i}
          </button>
        );
      }
    } else {
      
      buttons.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          className={`w-8 h-8 text-center rounded ${
            currentPage === 1
              ? "bg-purple-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          1
        </button>
      );

   
      if (currentPage > 3) {
        buttons.push(
          <span
            key="dots1"
            className="w-8 h-8 flex items-center justify-center"
          >
            ...
          </span>
        );
      }

      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        buttons.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`w-8 h-8 text-center rounded ${
              currentPage === i
                ? "bg-purple-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {i}
          </button>
        );
      }

    
      if (currentPage < totalPages - 2) {
        buttons.push(
          <span
            key="dots2"
            className="w-8 h-8 flex items-center justify-center"
          >
            ...
          </span>
        );
      }

  
      buttons.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className={`w-8 h-8 text-center rounded ${
            currentPage === totalPages
              ? "bg-purple-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {totalPages}
        </button>
      );
    }

    return buttons;
  };

  ///////////////////////////////////////////

  return (
    <div className="   flex  justify-center pb-50 gap-[20px]">
      <FilterSide
        setFilters={setFilters}
        filters={filters}
        setRange={setRange}
        range={range}
        setFilterNull={setFilterNull}
        filterNull={filterNull}
        Product={Product}
        setCourseData={setCourseData}
        updateActiveFilters={updateActiveFilters}
        setActiveFilters={setActiveFilters}
        activeFilters={activeFilters}
        filterBt={filterBt}
      />

      <div className=" lg:w-[960px] md:w-[clamp(700px,60%,1200px)]  min-h-[1200px]">
        <div className=" shadow-md shadow-purple-200 h-[50px] bg-white rounded-[5px] mb-[10px] flex justify-between items-center gap-5">
          <div className="group  rounded-[5px] p-[3px] leading-[25px] relative text-sm text-[#444] mr-[10px]">
            {!filterBt && (
              <SortingBox
                filters={filters}
                setFilters={setFilters}
                updateActiveFilters={updateActiveFilters}
                filterBt={filterBt}
              />
            )}

            <button
              type="submit"
              className=" relative block  lg:hidden
              border border-gray-300 rounded-lg p-2 text-sm text-white
              cursor-pointer flex align-items-center bg-[#9B0EE1]"
              onClick={() => setFilterBt(!filterBt)}
            >
              <img src={FilterIco} alt="Filter" />
              فیلتر ها
            </button>
          </div>

          <div className=" flex flex-row gap-[10px] ml-[10px]">
            <div
              style={ViewBt}
              className={view === "view2" ? "bg-[#9B0EE1]" : " "}
              onClick={() => setview("view2")}
            >
              <img src={view === "view2" ? View2v2 : View2} alt="View 2" />
            </div>
            <div
              style={ViewBt}
              className={view === "view1" ? "bg-[#9B0EE1]" : " "}
              onClick={() => setview("view1")}
            >
              <img src={view === "view1" ? View1 : View1v1} alt="View 1" />
            </div>
          </div>
        </div>

        <div id="grid" className={view}>
          {currentItems.map((card) => (
            <ProductCard
              key={card.courseId}
              price={card.cost}
              id={card.courseId}
              name={card.title}
              like={Math.round(
                card.courseRate.avg / card.courseRate.count
                  ? card.courseRate.avg / card.courseRate.count
                  : 0
              )}
              category={card.levelName}
              teacher={card.teacherName}
              Img={card.imageAddress || card.tumbImageAddress || "/cover3.png"}
              date={card.startTime}
            />
          ))}

          <div className=" w-full p-5 flex justify-center mt-6 space-x-2">
            <button
              type="submit"
              onClick={() =>
                currentPage != 1 && setCurrentPage(currentPage - 1)
              }
              disabled={currentPage === 1}
              className={`w-8 h-8 text-center rounded ${
                currentPage === 1
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {"<"}
            </button>

            {renderPageButtons()}

            <button
              type="submit"
              onClick={() =>
                totalPages != currentPage && setCurrentPage(currentPage + 1)
              }
              disabled={currentPage === totalPages}
              className={`w-8 h-8 text-center rounded ${
                currentPage === totalPages
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default courseContent;
